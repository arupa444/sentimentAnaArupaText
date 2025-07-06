from flask import Flask
from bluePrint import app_bluePrint
from flask_pymongo import PyMongo

app = Flask(__name__)

# **Important:** Match the database name to what you see in MongoDB Compass!
app.config["MONGO_URI"] = "mongodb://localhost:27017/lusabuyBD"  # <--- CHANGED
app.config['SECRET_KEY'] = 'dc8ce0faf1677dfe9e71c52d5037428d'

db = PyMongo(app).db
app.config['db'] = db

app.register_blueprint(app_bluePrint, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)