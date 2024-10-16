# backend/routes/user_routes.py

from flask import Blueprint, jsonify, request, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime, timedelta
from bson import ObjectId

user_bp = Blueprint('user_bp', __name__)

# Crear nuevo usuario
@user_bp.route('/add_user', methods=['POST'])
@jwt_required()
def add_user():
    db = current_app.db
    data = request.json
    usuario = data.get('usuario')
    clave = data.get('clave')
    rol = data.get('rol')
    fecha_alta = datetime.utcnow()

    if db.usuarios.find_one({'usuario': usuario}):
        return jsonify({"msg": "El usuario ya existe"}), 400

    hashed_clave = bcrypt.generate_password_hash(clave).decode('utf-8')

    nuevo_usuario = {
        "usuario": usuario,
        "clave": hashed_clave,
        "rol": rol,
        "fecha_alta": fecha_alta,
        "ultimo_ingreso": None
    }
    db.usuarios.insert_one(nuevo_usuario)
    return jsonify({"msg": "Usuario creado exitosamente"}), 201

# KPI - Cantidad de usuarios registrados
@user_bp.route('/kpi/usuarios_registrados', methods=['GET'])
@jwt_required()
def usuarios_registrados():
    db = current_app.db
    total_usuarios = db.usuarios.count_documents({})
    return jsonify({"total_usuarios": total_usuarios}), 200

# KPI - Cantidad de usuarios activos (usuarios que se conectaron en los últimos 7 días)
@user_bp.route('/kpi/usuarios_activos', methods=['GET'])
@jwt_required()
def usuarios_activos():
    db = current_app.db
    siete_dias_atras = datetime.utcnow() - timedelta(days=7)
    usuarios_activos = db.usuarios.count_documents({"ultimo_ingreso": {"$gte": siete_dias_atras}})
    return jsonify({"usuarios_activos": usuarios_activos}), 200

# Gráfico - Cantidad de usuarios conectados por día en la última semana
@user_bp.route('/grafico/usuarios_conectados_por_dia', methods=['GET'])
@jwt_required()
def usuarios_conectados_por_dia():
    db = current_app.db
    noventa_dias_atras = datetime.utcnow() - timedelta(days=90)

    pipeline = [
        {
            "$match": {
                "ultimo_ingreso": {"$gte": noventa_dias_atras}
            }
        },
        {
            "$project": {
                "dia": {
                    "$dateToString": {
                        "format": "%Y-%m-%d", "date": "$ultimo_ingreso"
                    }
                }
            }
        },
        {
            "$group": {
                "_id": "$dia",
                "total": {"$sum": 1}
            }
        },
        {
            "$sort": {"_id": 1}
        }
    ]
    
    resultado = db.usuarios.aggregate(pipeline)
    data = [{"dia": r["_id"], "total": r["total"]} for r in resultado]

    return jsonify(data), 200


# Obtener todos los usuarios con el campo de actividad
@user_bp.route('/all_users', methods=['GET'])
@jwt_required()
def get_all_users():
    db = current_app.db
    users = db.usuarios.find()
    user_list = []
    for user in users:
        # Considerar al usuario como activo si su último ingreso fue en los últimos 5 minutos
        ahora = datetime.utcnow()
        activo = False
        if user.get('ultimo_ingreso'):
            ultimo_ingreso = user['ultimo_ingreso']
            diferencia_tiempo = ahora - ultimo_ingreso
            activo = diferencia_tiempo.total_seconds() < 300  # 300 segundos = 5 minutos

        user_data = {
            "_id": str(user["_id"]),
            "usuario": user["usuario"],
            "rol": user["rol"],
            "fecha_alta": user.get("fecha_alta", None),
            "ultimo_ingreso": user.get("ultimo_ingreso", None),
            "isActive": activo  # Añadir el campo isActive
        }
        user_list.append(user_data)
    return jsonify(user_list), 200

# Ruta para registrar la actividad del usuario
@user_bp.route('/log_activity', methods=['POST'])
@jwt_required()
def log_activity():
    db = current_app.db
    user_id = get_jwt_identity()  # Obtener el ID del usuario desde el token JWT
    data = request.json

    # Verifica que todos los datos necesarios estén presentes
    if not data.get('action'):
        return jsonify({"error": "Falta el campo 'action'"}), 400

    log_entry = {
        "user_id": ObjectId(user_id),
        "action": data.get('action'),  # Ejemplo: 'buscar_explicacion', 'generar_cuestionario'
        "nivel": data.get('nivel', None),
        "grado": data.get('grado', None),
        "area": data.get('area', None),
        "disciplina": data.get('disciplina', None),
        "tema": data.get('tema', None),
        "tokens": data.get('tokens', None),  # Registrar los tokens seleccionados si existen
        "timestamp": datetime.utcnow()
    }

    db.logs.insert_one(log_entry)
    return jsonify({"msg": "Actividad registrada correctamente"}), 200

# Gráfico de los temas más consultados
@user_bp.route('/grafico/temas_frecuentes', methods=['GET'])
@jwt_required()
def temas_frecuentes():
    db = current_app.db

    # Asegúrate de contar las actividades relacionadas con "buscar_explicacion"
    pipeline = [
        {
            "$match": {
                "action": "buscar_explicacion"  # Filtrar solo por las acciones de buscar explicaciones
            }
        },
        {
            "$group": {
                "_id": "$tema",
                "total": {"$sum": 1}
            }
        },
        {
            "$sort": {"total": -1}  # Ordenar de mayor a menor
        }
    ]
    
    resultado = db.logs.aggregate(pipeline)
    data = [{"tema": r["_id"], "total": r["total"]} for r in resultado]

    return jsonify(data), 200


# Gráfico de la selección de tokens (explicación concisa, media o larga)
@user_bp.route('/grafico/seleccion_tokens', methods=['GET'])
@jwt_required()
def seleccion_tokens():
    db = current_app.db

    # Contar cuántas veces se seleccionó cada tipo de token en las acciones de buscar explicaciones
    pipeline = [
        {
            "$match": {
                "action": "buscar_explicacion",  # Filtrar solo las explicaciones
                "tokens": {"$exists": True}  # Asegurarse de que los tokens existan
            }
        },
        {
            "$group": {
                "_id": "$tokens",
                "total": {"$sum": 1}
            }
        },
        {
            "$sort": {"_id": 1}  # Ordenar por el tipo de token (500, 2000, 4000)
        }
    ]
    
    resultado = db.logs.aggregate(pipeline)
    data = [{"tokens": r["_id"], "total": r["total"]} for r in resultado]

    return jsonify(data), 200