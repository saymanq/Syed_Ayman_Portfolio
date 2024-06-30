from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:sqwerty@localhost/portfolio"
db = SQLAlchemy(app)
CORS(app)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(100), nullable=False)
    link_url = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Event: {self.name}"
    
    def __init__(self, name, description, img_url, link_url):
        self.name = name
        self.description = description
        self.img_url = img_url
        self.link_url = link_url

def format_data(event):
    return {
        "id": event.id,
        "name": event.name,
        "description": event.description,
        "img_url": event.img_url,
        "link_url": event.link_url,
    }

@app.route('/api/getprojects', methods = ['GET'])
def get_projects():
    events = Event.query.order_by(Event.id.asc()).all()
    event_list = []
    for event in events:
        event_list.append(format_data(event))
    return {"events": event_list}

@app.route('/')
def hello():
    return "Hey!!"


if __name__ == '__main__':
    app.run(debug=True)