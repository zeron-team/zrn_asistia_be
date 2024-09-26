from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from pymongo import MongoClient

user_bp = Blueprint('user_routes', __name__)

# Conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['thesaurus_db']
usuarios_collection = db['usuarios']

@user_bp.route('/admin/users', methods=['GET'])
@jwt_required()
def get_users():
    claims = get_jwt()
    if claims['rol'] != 'admin':
        return jsonify({'error': 'Acceso no autorizado'}), 403

    users = list(usuarios_collection.find({}, {'_id': 1, 'usuario': 1, 'rol': 1}))
    return jsonify(users), 200
