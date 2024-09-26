from flask import request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from pymongo import MongoClient
from datetime import timedelta, datetime
from bson.objectid import ObjectId

bcrypt = Bcrypt()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    user = db.usuarios.find_one({'usuario': username})
    if user and bcrypt.check_password_hash(user['clave'], password):
        # Actualizar fecha de último ingreso
        db.usuarios.update_one({'_id': user['_id']}, {'$set': {'ultimo_ingreso': datetime.utcnow()}})
        access_token = create_access_token(identity=str(user['_id']), additional_claims={"rol": user["rol"]})
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Credenciales incorrectas"}), 401

# Conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['thesaurus_db']
usuarios_collection = db['usuarios']

def login():
    data = request.get_json()
    usuario = data.get('usuario')
    clave = data.get('clave')

    if not usuario or not clave:
        return jsonify({'error': 'Usuario y contraseña requeridos'}), 400

    # Buscar usuario en la base de datos
    user = usuarios_collection.find_one({'usuario': usuario})
    if not user:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    # Verificar contraseña
    if not bcrypt.check_password_hash(user['clave'], clave):
        return jsonify({'error': 'Contraseña incorrecta'}), 401

    # Crear token JWT
    access_token = create_access_token(identity=str(user['_id']), additional_claims={'rol': user['rol']}, expires_delta=timedelta(hours=1))

    return jsonify({'access_token': access_token}), 200
