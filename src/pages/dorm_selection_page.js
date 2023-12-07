// import logo from './logo.svg';
import './dorm_selection.css';

function Dorm_Selection_Page() {
  return (
    <div class="container">
            <div id="choose-your-main-residence-hall-label">
                Choose your main residence hall
            </div>
            <div id="can-change-later-label">
                You can change this in the future
            </div>
            <select name="language" id = "dorm-selection-dropdown">
                <option value="none" selected disabled hidden>Select a residence hall</option> 
                <option class="dropdown-content" value="east_campus">East Campus</option>
                <option class="dropdown-content" value="47_claremont">47 Claremont</option>
                <option class="dropdown-content" value="ruggles">Ruggles</option>
                <option class="dropdown-content" value="furnald">Furnald</option>
              </select>
            <button id="to-bulletin-button">
                <span class="button-text">Service Request Bulletin</span><span><i class="fa fa-chevron-right button-text"></i></span></button>
        </div>
  );
}

export default Dorm_Selection_Page;
