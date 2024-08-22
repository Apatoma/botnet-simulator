from flask import Blueprint, jsonify, request
from .models import db, Bot, Attack
from datetime import datetime

main_routes = Blueprint('main', __name__)

@main_routes.route('/bots', methods=['GET'])
def get_bots():
    bots = Bot.query.all()
    return jsonify([{
        'id': bot.id,
        'ip_address': bot.ip_address,
        'status': bot.status,
        'last_active': bot.last_active.isoformat()
    } for bot in bots])

@main_routes.route('/create_bot', methods=['POST'])
def create_bot():
    data = request.json
    bot = Bot(ip_address=data['ip_address'], status='active', last_active=datetime.now())
    db.session.add(bot)
    db.session.commit()
    return jsonify({'result': 'Bot created'})

@main_routes.route('/mitigate_bot', methods=['POST'])
def mitigate_bot():
    data = request.json
    bot = Bot.query.get(data['bot_id'])
    if bot:
        bot.status = 'mitigated'
        db.session.commit()
        return jsonify({'result': 'Bot mitigated'})
    return jsonify({'result': 'Bot not found'}), 404

@main_routes.route('/start_attack', methods=['POST'])
def start_attack():
    data = request.json
    attack = Attack(bot_id=data['bot_id'], target=data['target'], type=data['type'], start_time=datetime.now())
    db.session.add(attack)
    db.session.commit()
    return jsonify({'result': 'Attack started'})
