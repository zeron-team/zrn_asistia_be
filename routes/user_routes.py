from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import User

user_bp = Blueprint('users', __name__)

@user_bp.route('/all', methods=['GET'])
@jwt_required()
def get_all_users():
    identity = get_jwt_identity()
    if identity['role'] != 'Admin':
        return jsonify({'msg': 'Access denied'}), 403

    users = list(User.collection.find({}, {'password': 0}))
    return jsonify(users)
