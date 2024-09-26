from flask_jwt_extended import create_access_token, get_jwt_identity
from datetime import timedelta

def create_token(username, role):
    """
    Crea un token JWT con el nombre de usuario y rol del usuario.
    El token expira en 24 horas.
    """
    token = create_access_token(identity={'username': username, 'role': role}, expires_delta=timedelta(days=1))
    return token

def get_identity():
    """
    Obtiene la identidad del usuario actual desde el token JWT.
    """
    return get_jwt_identity()
