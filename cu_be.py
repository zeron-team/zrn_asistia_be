import pymongo
import bcrypt

# Conexión a MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["thesaurus_db"]
collection = db["usuarios"]

# Función para crear un nuevo usuario
def crear_usuario(usuario, clave, rol):
    # Verificar si el usuario ya existe
    if collection.find_one({"usuario": usuario}):
        print(f"El usuario '{usuario}' ya existe.")
        return

    # Encriptar la contraseña
    hashed_password = bcrypt.hashpw(clave.encode('utf-8'), bcrypt.gensalt())

    # Crear el documento del usuario
    nuevo_usuario = {
        "usuario": usuario,
        "clave": hashed_password.decode('utf-8'),  # Almacenarla como string en MongoDB
        "rol": rol
    }

    # Insertar en la colección
    collection.insert_one(nuevo_usuario)
    print(f"Usuario '{usuario}' creado con éxito.")

# Solicitar información del nuevo usuario
usuario = input("Nombre de usuario: ")
clave = input("Contraseña: ")
rol = input("Rol (admin/docente/alumno): ")

# Validar que los campos no estén vacíos
if not usuario or not clave or not rol:
    print("Todos los campos son obligatorios.")
else:
    # Crear el nuevo usuario
    crear_usuario(usuario, clave, rol)
