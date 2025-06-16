from flask import Flask
from bluePrint import app_bluePrint
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/lusabuy"
db = PyMongo(app).db

app.config['db'] = db
app.config['SECRET_KEY'] = 'dc8ce0faf1677dfe9e71c52d5037428d'

app.register_blueprint(app_bluePrint, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)