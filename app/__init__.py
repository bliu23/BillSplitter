from flask import Flask

app = Flask(__name__)
app.config.from_object('config')    #tells Flask to read/use config file.

from app import views
