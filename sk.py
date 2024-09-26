import secrets
import os

# Generar una clave secreta de 32 bytes para SECRET_KEY
secret_key = secrets.token_hex(32)
print(f'SECRET_KEY={secret_key}')

# Generar una clave secreta de 32 bytes para JWT_SECRET_KEY
jwt_secret_key = secrets.token_hex(32)
print(f'JWT_SECRET_KEY={jwt_secret_key}')
