// import logo from './logo.svg';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
function Footer(){
  return (
    
        <div id="footer">
            <span class="footer-item"><FontAwesomeIcon icon={faList} /><div>Request Bulletin</div></span>
            <span class="footer-item"><FontAwesomeIcon icon={faUser} /><div class="fa fa-user-o" aria-hidden="true"></div><div>My Requests</div></span>
        </div>
        
  );
}

export default Footer;


