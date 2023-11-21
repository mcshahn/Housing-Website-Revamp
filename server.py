# Import flask and datetime module for showing date and time
from flask import Flask, render_template 

# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/dorm_selection')
def dorm_selection():
    return render_template('dorm_selection_page.html')

@app.route('/my_requests')
def my_requests():
    return render_template('my_requests_page.html')
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)