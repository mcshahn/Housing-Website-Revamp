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
 
@app.route('/requests_bulletin')
def requests_bulletin():
    return render_template('request_bulletin.html')

#Test to display card remove in final product
@app.route('/card')
def card():
    return render_template('card.html') 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)