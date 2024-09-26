import re

def validate_username(username):
    """
    Verifica que el nombre de usuario cumpla con los requisitos.
    Debe tener entre 3 y 20 caracteres, y solo puede contener letras, números y guiones bajos.
    """
    if re.match(r'^\w{3,20}$', username):
        return True
    return False

def validate_password(password):
    """
    Verifica que la contraseña cumpla con los requisitos.
    Debe tener al menos 8 caracteres, incluyendo al menos un número, una letra mayúscula y un carácter especial.
    """
    if len(password) < 8:
        return False
    if not re.search(r'\d', password):
        return False
    if not re.search(r'[A-Z]', password):
        return False
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        return False
    return True
