from flask import request, jsonify
from utils.helpers import validate_username, validate_password
from models.user_model import User

def create_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')

    if not validate_username(username):
        return jsonify({"msg": "Nombre de usuario no válido"}), 400
    if not validate_password(password):
        return jsonify({"msg": "Contraseña no válida"}), 400

    user_id = User.create_user(username, password, role)
    return jsonify({"msg": f"Usuario {username} creado exitosamente con ID {user_id}."}), 201
