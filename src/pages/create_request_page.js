import './create_request.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faListUl, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '../components/footer'

function CreateRequestPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      // Make a POST request to the server endpoint with the form data
      const response = await fetch('/add_user_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // If the request is successful, open the popup
        setIsPopupOpen(true);
      } else {
        console.error('Failed to submit request:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting request:', error.message);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [formData, setFormData] = useState({
    dorm: '',
    floor: '',
    roomSpace: '',
    specifySpace: '',
    issue: '',
    additionalDescription: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div class="container">
            <div id="back">
              <FontAwesomeIcon icon={faChevronLeft} id="arrow" />
              <div id="back-label">Back</div>
            </div>
            <div id="title"> Create new request </div>
            <br></br>
            <br></br>
            
          
            <div id="location">Location </div>
            <div class="text-box">
                <div id="uni">Main Residence Hall </div>
                <select className='create-request-select' name="dorm" id = "dorm-selection-dropdown" onChange={handleChange} required>
                  <option value="" disabled selected>47 Claremont</option> 
                  <option class="dropdown-content" value="east_campus">East Campus</option>
                  <option class="dropdown-content" value="47_claremont">47 Claremont</option>
                  <option class="dropdown-content" value="ruggles">Ruggles</option>
                  <option class="dropdown-content" value="furnald">Furnald</option>
                </select>
            </div>
            <div class="text-box">
              <div id="uni">Floor </div>
              <select className= 'create-request-select'name="floor" id = "dorm-selection-dropdown" onChange={handleChange} required>
                <option value="" selected disabled hidden>3</option> 
                
                <option class="dropdown-content" value="1">1</option>
                <option class="dropdown-content" value="2">2</option>
                <option class="dropdown-content" value="3">3</option>
                <option class="dropdown-content" value="4">4</option>
              </select>
            </div>
            <div class="text-box">
              <div id="uni">Room/Space </div>
              <select className='create-request-select' name="roomSpace" id = "dorm-selection-dropdown" onChange={handleChange} required>
                <option value="" selected disabled hidden>Lounge</option> 
                <option class="dropdown-content" value="lounge">Lounge</option>
                <option class="dropdown-content" value="kitchen">Kitchen</option>
              </select>
            </div>
            <div class="text-box">
              <div id="uni">Specify space (optional) </div>
              <div>
                <input type="text" name="specifySpace" placeholder="Help us identify an exact location" onChange={handleChange}></input>
              </div>
            </div>

           
            <div id="issue">Issue </div>
           
            <div class="text-box">
              <div>
                <input type="text" name="issue" placeholder="Search for an issue" onChange={handleChange}></input>
              </div>
            </div>
            
            <div class="text-box" id="additional">
              <div id="uni">Additional Description </div>
              <div>
                <input type="text" name="additionalDescription" placeholder="Type any additional information here" onChange={handleChange}></input>
              </div>
            </div>
            <div>
              <div> 
                <button className='create-request-buttons' type="button" id="submit" onClick={handleSubmit}>Submit Request</button>

                {isPopupOpen && (
                  <div className="popup" id="popup">
                    <h2>Thank you!</h2>
                    <p>Facilities has received your request. An email confirmation has been sent to your inbox.</p>
                    <button className='create-request-buttons' type="button" id="ok" onClick={closePopup}>OK</button>
                  </div>
                )}
                
              </div>
            </div>

            {/* <div id="nav-bar">
              <span className="item"><div id="nav-label"><FontAwesomeIcon icon={faListUl} id="icon" /><br></br><h>Request Bulletin</h></div></span>
              <span className="item"><div id="nav-label"><FontAwesomeIcon icon={faUser} id="icon" aria-hidden="true" /><br></br><h>My Requests</h></div></span>
            </div> */}
            <Footer/>

    </div>
  );
}

export default CreateRequestPage;


