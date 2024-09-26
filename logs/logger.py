import logging
from logging.handlers import RotatingFileHandler
import os

# Ruta del archivo de logs
log_path = os.path.join(os.path.dirname(__file__), 'app.log')

# Configuración del logger
logger = logging.getLogger('app_logger')
logger.setLevel(logging.DEBUG)

# Creación de manejador de archivos de log con rotación
file_handler = RotatingFileHandler(log_path, maxBytes=5000000, backupCount=5)
file_handler.setLevel(logging.DEBUG)

# Formato del log
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)

# Agregar manejador al logger
logger.addHandler(file_handler)

# Ejemplo de uso
# logger.debug("Este es un mensaje de depuración.")
# logger.info("Información general.")
# logger.warning("Advertencia.")
# logger.error("Error en la aplicación.")
# logger.critical("Fallo crítico en el sistema.")
