import './create_request.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faListUl, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';

function CreateRequestPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    navigate('/my_requests')
  };

  const [formData, setFormData] = useState({
    dorm: '',
    floor: '',
    roomSpace: '',
    specifySpace: '',
    issue: '',
    additionalDescription: ''
  });

  const issues = [
    "Mold", "Broken Items", "Clogged Drain","AC/Heating Unit", "Outlets", "Electrical", "Windows"
  ]

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    

  };
  


  return (
    <div class="container">
            <div onClick={() => navigate(-1)} id="back">
              <FontAwesomeIcon icon={faChevronLeft} id="arrow" />
              <div id="back-label">Back</div>
            </div>
            <div id="title"> Create new request </div>
            <br></br>
            <br></br>
            
          <form onSubmit={handleSubmit}>
            <div id="location">Location </div>
            <div class="text-box">
                <div id="uni">Main Residence Hall </div>
                <select className='create-request-select' name="dorm" id = "dorm-selection-dropdown" onChange={handleChange} required>
                <option value="" selected disabled hidden>Select a residence hall</option> 
                <option class="dropdown-content" value="537 W 121st">537 W 121st</option>
                <option class="dropdown-content" value="548 W 113th St.">548 W 113th St.</option>
                <option class="dropdown-content" value="600 W 113TH ST (Nuss)">600 W 113TH ST (Nuss)</option>
                <option class="dropdown-content" value="600 W 116TH ST">600 W 116TH ST</option>
                <option class="dropdown-content" value="601 W 110TH ST">601 W 110TH ST</option>
                <option class="dropdown-content" value="616 W 116TH ST">616 W 116TH ST</option>
                <option class="dropdown-content" value="620 W 116TH ST">620 W 116TH ST</option>
                <option class="dropdown-content" value="627 W 115TH ST">627 W 115TH ST</option>
                <option class="dropdown-content" value="Broadway">Broadway</option>
                <option class="dropdown-content" value="Brooks Hall">Brooks Hall</option>
                <option class="dropdown-content" value="Carlton Arms">Carlton Arms</option>
                <option class="dropdown-content" value="Carman">Carman</option>
                <option class="dropdown-content" value="Cathedral Gardens">Cathedral Gardens</option>
                <option class="dropdown-content" value="East Campus">East Campus</option>
                <option class="dropdown-content" value="Elliott">Elliott</option>
                <option class="dropdown-content" value="Furnald">Furnald</option>
                <option class="dropdown-content" value="Harmony">Harmony</option>
                <option class="dropdown-content" value="Hartley">Hartley</option>
                <option class="dropdown-content" value="Hewitt">Hewitt</option>
                <option class="dropdown-content" value="Hogan">Hogan</option>
                <option class="dropdown-content" value="John Jay">John Jay</option>
                <option class="dropdown-content" value="McBain">McBain</option>
                <option class="dropdown-content" value="Plimpton">Plimpton</option>
                <option class="dropdown-content" value="Reid Hall">Reid Hall</option>
                <option class="dropdown-content" value="River">River</option>
                <option class="dropdown-content" value="Ruggles">Ruggles</option>
                <option class="dropdown-content" value="Schapiro">Schapiro</option>
                <option class="dropdown-content" value="Sulzberger">Sulzberger</option>
                <option class="dropdown-content" value="Sulzberger Tower">Sulzberger Tower</option>
                <option class="dropdown-content" value="Wallach">Wallach</option>
                <option class="dropdown-content" value="Watt">Watt</option>
                <option class="dropdown-content" value="Wien">Wien</option>
                <option class="dropdown-content" value="Woodbridge">Woodbridge</option>
                </select>
            </div>
            <div class="text-box">
              <div id="uni">Floor </div>
              <select className= 'create-request-select'name="floor" id = "dorm-selection-dropdown" onChange={handleChange} required>
                <option value="" selected disabled hidden>-</option> 
                
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
                <input list="data" type="text" name="issue" placeholder="Search for an issue" onChange={handleChange} required/>
                <datalist id="data"  >
                  {issues.map((issue) => <option>{issue}</option>)}
                </datalist>
                
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
                <button className='create-request-buttons' type="submit" id="submit">Submit Request</button>

                {isPopupOpen && (
                  <div className="popup" id="popup">
                    <h2>Thank you!</h2>
                    <p>Facilities has received your request. An email confirmation has been sent to your inbox.</p>
                    <button className='create-request-buttons' type="button" id="ok" onClick={closePopup}>OK</button>
                  </div>
                )}
                
              </div>
            </div>
          </form>

            <Footer/>

    </div>
  );
}

export default CreateRequestPage;


