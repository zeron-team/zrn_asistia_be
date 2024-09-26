from flask import jsonify, request
from flask_jwt_extended import create_access_token
from models.user_model import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.find_by_username(username)
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity={'username': user['username'], 'role': user['role']})
    User.log_login(username)
    return jsonify(access_token=access_token)
