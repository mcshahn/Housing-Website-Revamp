# Import flask and datetime module for showing date and time
from flask import Flask, render_template, jsonify, request, session, redirect, url_for



# Initializing flask app
app = Flask(__name__)

app.secret_key = 'service_request'
 
user_requests={
    "al4130":
    [
        {"uid": 1,
        "title": "Broken Pipes",
        "description":"Broken pipes in the lounge area causing flooding.",
        "status": "not_started"},
        {"uid":2,
        "title": "Drain Blockage",
        "description":"Shower drain is not draining",
        "status": "in_progress"},
        {"uid": 3,
        "title": "Broken Outlet",
        "description":"Outlet in the wall doesn't have any electricity",
        "status": "resolved"}
    ],
    "ma3852":
    [
        {"uid": 4,
        "title": "Mushroom",
        "description":"There's a mushroom growing in the middle of the lounge",
        "status": "not_started"}
        
    ]

}

requests = [
    {"uid": 1, 
    "title": "Broken Pipes",
    "description":"Broken pipes in the lounge area causing flooding.",
    "status": "not_started",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": 1},

    {"uid": 2,
    "title": "Drain Blockage",
    "description":"Shower drain is not draining",
    "status": "in_progress",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": 1},

    {"uid": 3,
     "title": "Broken Outlet",
    "description":"Outlet in the wall doesn't have any electricity",
    "status": "resolved",
    "dorm": "East Campus",
    "floor": "20",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": 0},

    {"uid": 4,
    "title": "Mushroom",
    "description":"There's a mushroom growing in the middle of the lounge",
    "status": "not_started",
    "dorm": "Hartley",
    "floor": "12",
    "roomSpace": "Lounge",
    "specifySpace": "",
    "echo": 1},

    {"uid": 5, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "537 W 121st", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 6, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "548 W 113th St.", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 7, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "600 W 113TH ST (Nuss)", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 8, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "600 W 116TH ST", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 9, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "601 W 110TH ST", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 10, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "616 W 116TH ST", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 11, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "620 W 116TH ST", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 12, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "627 W 115TH ST", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 13, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "Broadway", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 14, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Brooks Hall", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 15, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Carlton Arms", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 16, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Carman", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 17, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Cathedral Gardens", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 18, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "East Campus", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 19, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Elliott", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 20, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Furnald", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 21, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "Harmony", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 22, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Hartley", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 23, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Hewitt", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 24, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Hogan", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 25, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "John Jay", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 26, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "McBain", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 27, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Plimpton", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 28, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Reid Hall", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 29, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "River", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 30, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Ruggles", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 31, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Schapiro", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 32, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "Sulzberger", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 33, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Sulzberger Tower", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 34, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Wallach", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 35, "title": "Lights", "description": "Light bulb is burnt out, we need a new one", "status": "not_started", "dorm": "Watt", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 36, "title": "Ceiling", "description": "The tiles are coming apart and stained", "status": "not_started", "dorm": "Wien", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1},
    {"uid": 37, "title": "Sink", "description": "The sink is leaking", "status": "not_started", "dorm": "Woodbridge", "floor": "12", "roomSpace": "Lounge", "specifySpace": "", "echo": 1}
]
echos_per_user={
    "al4130":[1, 4],
    "ma3852": [2, 4]
}
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
            echos_per_user[uni] = []

        # Redirect to the main page or any other page after successful login
        return redirect(url_for('dorm_selection'))

    return render_template('login.html')

# @app.route('/create_request')
# def create_request():
#     return render_template('create_request.html') 

@app.route('/send_dorm_to_server', methods=['POST'])
def receive_dorm_from_client():
    data = request.get_json()
    selected_dorm = data.get('dorm')
    session['selected_dorm'] = selected_dorm

    # Process the received dorm information as needed
    print(f'Received dorm from client: {selected_dorm}')

    # Your other server logic...

    return jsonify({'success': True})

@app.route('/create', methods=['POST'])
def create():
    data = request.get_json()

    doc_ref = db.collection('requests').add(data)
    return jsonify({"message": "Data added successfully", "document_id": doc_ref.id})

#Test to display card remove in final product
@app.route('/card')
def card():
    return render_template('card.html') 

@app.route('/update_status', methods=['POST'])
def update_status():
    data = request.get_json()
    uid = data.get('uid')
    new_status = data.get('newStatus')

    # Update the status in the user_requests dictionary
    for request_info in user_requests.get(session.get('uni', ''), []):
        if request_info['uid'] == uid:
            request_info['status'] = new_status


    for r in requests:
        if r['uid'] == uid:
            r['status'] = new_status

    return jsonify({'success': True})


@app.route('/user_data')
def get_user_requests():
    uni = session.get('uni')
    return jsonify(user_requests.get(uni, []))

@app.route('/all_requests')
def get_all_requests():
    selected_dorm = session.get('selected_dorm')

    dorm_requests = []
    for r in requests:
        if r['dorm'] == selected_dorm:
            dorm_requests.append(r)
    return jsonify(dorm_requests)

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

            short_description= description
            if len(short_description)>50:
                short_description = description[:40]+"..."
            # Create a new user request
            uid = len(requests)+1
            new_request = {
                    "uid": uid,
                    "title": title, 
                    "description": short_description, 
                    "status": status,
                    "dorm": dorm,
                    "floor": floor,
                    "roomSpace": roomSpace,
                    "specifySpace": specifySpace,
                    "echo": 0}

            new_shortened = {
                "uid": uid,
                "title": title, 
                "description": short_description, 
                "status": status
            }

            # Append the new user request to the global variable
            print(user_requests)
            user_requests[uni].insert(0, new_shortened)
            requests.insert(0, new_request)

            return "New user request added"
        except Exception as e:
            return f"Error processing JSON data: {str(e)}", 400

    return "Invalid request method"
   
@app.route('/get_user_echoes')
def get_user_echoes():
    echoed = echos_per_user.get(session.get('uni', ''),[])
    return jsonify(echoed)

@app.route('/update_echoes', methods=['POST'])
def update_echoes():
    data = request.get_json()
    uid = data.get('uid')
    new_numEchoes = data.get('numEchoes')

    echos_per_user.get(session.get('uni', '')).append(uid)

    for r in requests:
        if r['uid'] == uid:
            r['echo'] = new_numEchoes

    return jsonify({'success': True})

# Running app
if __name__ == '__main__':
    app.run(debug=True)