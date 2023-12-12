# Import flask and datetime module for showing date and time
from flask import Flask, render_template, jsonify, request, session, redirect, url_for

# firebase = pyrebase.initialize_app(config)
# auth = firebase.auth() 
# storage = firebase.storage()

# Initializing flask app
app = Flask(__name__)

app.secret_key = 'service_request'
 
user_requests={
    "al4130":
    [
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
}


requests = [
    {"title": "Broken Pipes",
    "description":"Broken pipes in the lounge area causing flooding.",
    "status": "not_started",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": "0"},

    {"title": "Drain Blockage",
    "description":"Shower drain is not draining",
    "status": "in_progress",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": "0"},

    {"title": "Broken Outlet",
    "description":"Outlet in the wall doesn't have any electricity",
    "status": "resolved",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": "0"}
]

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

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        uni = request.form.get('uni')

        # Store the uni value in the session
        session['uni'] = uni

        if uni not in user_requests:
            user_requests[uni] = []

        # Redirect to the main page or any other page after successful login
        return redirect(url_for('dorm_selection'))

    return render_template('login.html')

@app.route('/create_request')
def create_request():
    return render_template('create_request.html') 

@app.route('/create', methods=['POST'])
def create():
    data = request.get_json()

    doc_ref = db.collection('requests').add(data)
    return jsonify({"message": "Data added successfully", "document_id": doc_ref.id})

#Test to display card remove in final product
@app.route('/card')
def card():
    return render_template('card.html') 


@app.route('/user_data')
def get_user_requests():
    uni = session.get('uni')
    return jsonify(user_requests[uni])

@app.route('/all_requests')
def get_all_requests():
    return jsonify(requests)

@app.route('/add_user_request', methods=['POST'])
def add_user_request():
    if request.method == 'POST':
        try:
            # Access JSON data
            data = request.get_json()

            uni = session.get('uni')

            # Extract form data
            title = data.get('issue')
            description = data.get('additionalDescription')
            status = data.get('status', 'not_started')  # Default to 'not_started' if not provided
            dorm = data.get('dorm')
            floor = data.get('floor')
            roomSpace = data.get('roomSpace')
            specifySpace = data.get('specifySpace')

            # Create a new user request
            new_request = {
                    "title": title, 
                    "description": description, 
                    "status": status,
                    "dorm": dorm,
                    "floor": floor,
                    "roomSpace": roomSpace,
                    "specifySpace": specifySpace}

            new_shortened = {
                "title": title, 
                "description": description, 
                "status": status
            }

            # Append the new user request to the global variable
            user_requests[uni].append(new_shortened)
            requests.append(new_request)

            return "New user request added"
        except Exception as e:
            return f"Error processing JSON data: {str(e)}", 400

    return "Invalid request method"
   
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