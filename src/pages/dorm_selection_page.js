// import logo from './logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import './dorm_selection.css';
import { useState } from 'react';
function DormSelectionPage() {
  

  const navigate = useNavigate();

  const toRequestsBulletin=()=>{
    // navigate('/requests_bulletin',{state:{dorm:value}});
    localStorage.setItem('dorm_name', dorm);
    
    navigate('/requests_bulletin');
    

  }
  const getInitialState = () => {
      const value = "none";
      return value;
    };
  
    const [dorm, setDorm] = useState(getInitialState);
  
    const handleChange = (e) => {
      setDorm(e.target.value);
      console.log("dorm", dorm)
      
    };

    console.log(dorm)
  return (
    <div class="container">
            <div id="choose-your-main-residence-hall-label">
                Choose your main residence hall
            </div>
            <div id="can-change-later-label">
                You can change this in the future
            </div>
            <select name="language" id = "dorm-selection-dropdown" onChange={handleChange} >
                <option value="none" selected disabled hidden>Select a residence hall</option> 
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
              
            <button id="to-bulletin-button" onClick={toRequestsBulletin}>
                <span class="button-text">Service Request Bulletin</span><span><i class="fa fa-chevron-right button-text"></i></span></button>
                
        </div>
        
  );
}

export default DormSelectionPage;


