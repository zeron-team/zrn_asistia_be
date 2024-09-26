# routes/user_routes.py

from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from bson import ObjectId
from extensions import bcrypt  # Importa bcrypt desde extensions

user_bp = Blueprint('user_bp', __name__)

# Crear nuevo usuario
@user_bp.route('/add_user', methods=['POST'])
@jwt_required()
def add_user():
    db = current_app.db  # Obtén la instancia de la base de datos desde la aplicación actual
    data = request.json
    usuario = data.get('usuario')
    clave = data.get('clave')
    rol = data.get('rol')
    fecha_alta = datetime.utcnow()

    # Verificar si el usuario ya existe
    if db.usuarios.find_one({'usuario': usuario}):
        return jsonify({"msg": "El usuario ya existe"}), 400

    # Hashear la clave antes de guardar
    hashed_clave = bcrypt.generate_password_hash(clave).decode('utf-8')

    # Crear nuevo usuario
    nuevo_usuario = {
        "usuario": usuario,
        "clave": hashed_clave,  # Guardar la clave hasheada
        "rol": rol,
        "fecha_alta": fecha_alta,
        "ultimo_ingreso": None
    }
    db.usuarios.insert_one(nuevo_usuario)
    return jsonify({"msg": "Usuario creado exitosamente"}), 201

# Modificar usuario existente
@user_bp.route('/update_user/<user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    db = current_app.db  # Obtén la instancia de la base de datos desde la aplicación actual
    data = request.json
    clave = data.get('clave')
    rol = data.get('rol')

    # Buscar y actualizar usuario
    update_data = {}
    if clave:
        # Hashear la nueva clave antes de guardar
        update_data['clave'] = bcrypt.generate_password_hash(clave).decode('utf-8')
    if rol:
        update_data['rol'] = rol

    db.usuarios.update_one({'_id': ObjectId(user_id)}, {'$set': update_data})
    return jsonify({"msg": "Usuario actualizado exitosamente"}), 200

# Eliminar usuario
@user_bp.route('/delete_user/<user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    db = current_app.db  # Obtén la instancia de la base de datos desde la aplicación actual
    db.usuarios.delete_one({'_id': ObjectId(user_id)})
    return jsonify({"msg": "Usuario eliminado exitosamente"}), 200

# Obtener todos los usuarios
@user_bp.route('/all_users', methods=['GET'])
@jwt_required()
def get_all_users():
    db = current_app.db  # Obtén la instancia de la base de datos desde la aplicación actual
    users = db.usuarios.find()
    user_list = []
    for user in users:
        user_data = {
            "_id": str(user["_id"]),
            "usuario": user["usuario"],
            "rol": user["rol"],
            "fecha_alta": user.get("fecha_alta", None),
            "ultimo_ingreso": user.get("ultimo_ingreso", None)
        }
        user_list.append(user_data)
    return jsonify(user_list), 200
