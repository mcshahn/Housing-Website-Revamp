# Import flask and datetime module for showing date and time
from flask import Flask, render_template 
from flask import jsonify
# Initializing flask app
app = Flask(__name__)
 

#Route for landing page
@app.route('/')
def home():
    return render_template('login.html') 
 
# Route for seeing a data
@app.route('/dorm_selection')
def dorm_selection():
    return render_template('dorm_selection_page.html')

@app.route('/my_requests')
def my_requests():
    return render_template('my_requests_page.html')
 
@app.route('/requests_bulletin')
def requests_bulletin():
    return render_template('request_bulletin.html')

@app.route('/login')
def login():
    return render_template('login.html') 

@app.route('/create_request')
def create_request():
    return render_template('create_request.html') 

#Test to display card remove in final product
@app.route('/card')
def card():
    return render_template('card.html') 


@app.route('/user_data')
def get_user_requests():
    user_requests=[
        {"title": "Broken Pipes",
         "description":"Broken pipes in the lounge area causing flooding.",
         "status": "not_started"},
         {"title": "Drain Blockage",
         "description":"Shower drain is not draining",
         "status": "in_progress"},
         {"title": "Broken Outlet",
         "description":"Outlet in the wall doesn't have any electricity",
         "status": "resolved"}
    ]
    return jsonify(user_requests)
   
@app.route('/ec_data')
def get_ec_requests():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
 
# Running app
if __name__ == '__main__':
    app.run(debug=True)