from flask import Blueprint
from controllers.assistant_controller import assistant

assistant_bp = Blueprint('assistant', __name__)

assistant_bp.route('/explain', methods=['POST'])(assistant)
