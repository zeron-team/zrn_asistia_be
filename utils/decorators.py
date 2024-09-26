from functools import wraps
from flask import jsonify
from flask_jwt_extended import get_jwt

def role_required(required_role):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            claims = get_jwt()
            if claims['rol'] != required_role:
                return jsonify({'error': 'Acceso no autorizado'}), 403
            return func(*args, **kwargs)
        return wrapper
    return decorator
