from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Bot(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(15), unique=True, nullable=False)
    status = db.Column(db.String(10), nullable=False)  # 'active' or 'mitigated'
    last_active = db.Column(db.DateTime, nullable=False)

class Attack(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bot.id'), nullable=False)
    target = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(20), nullable=False)  # 'DDoS', 'Spam', etc.
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=True)
