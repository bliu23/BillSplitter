from flask import render_template, flash, redirect
from app import app
from .forms import LoginForm

@app.route('/')
def hello():
    return "Welcome to the main screen"
@app.route('/index')
def index():
    return "Hi earth!"

@app.route('/login', methods=['GET', 'POST'])
def login():
	form = LoginForm()
	if form.validate_on_submit():
		flash('Login requested for OpenId="%s", remember_me=%s' %
			(form.openid.data, str(form.remember_me.data)))
		return redirect('/index')

	return render_template('login.html', title='Sign In', form=form)

@app.route('/testhtml')
def display():
	return render_template('test.html', title = 'Test')
