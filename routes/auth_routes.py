# backend/routes/auth_routes.py

from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import check_password_hash
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from utils.validate_json import validate_json  # Importar el decorador
from datetime import datetime  # Importar datetime
import os

auth_bp = Blueprint('auth_bp', __name__)

# Inicialización de MongoDB y Bcrypt
client = MongoClient(os.getenv('MONGO_URI'))
db = client['thesaurus_db']
bcrypt = Bcrypt()

# Ruta de inicio de sesión
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = db.usuarios.find_one({'usuario': username})
    if user and bcrypt.check_password_hash(user['clave'], password):
        access_token = create_access_token(identity=str(user['_id']), additional_claims={"rol": user["rol"]})
        # Actualizar la fecha del último ingreso
        db.usuarios.update_one({'_id': user['_id']}, {'$set': {'ultimo_ingreso': datetime.utcnow()}})
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Credenciales incorrectas"}), 401
    
# Ruta para verificar el token (opcional, útil para debugging)
@auth_bp.route('/verify_token', methods=['GET'])
@jwt_required()  # Importante: jwt_required ahora está importado correctamente
def verify_token():
    return jsonify({"msg": "Token válido"}), 200
