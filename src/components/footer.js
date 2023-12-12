// import logo from './logo.svg';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {useNavigate} from 'react-router-dom'
function Footer(){
    let navigate = useNavigate(); 
    const myRequestsRouteChange = () =>{ 
        let path = `/my_requests`; 
        navigate(path);
    }
    const requestBulletinRouteChange = () =>{ 
        let path = `/requests_bulletin`; 
        navigate(path);
    }
  return (
    
        <div id="footer">
            <span class="footer-item" onClick={requestBulletinRouteChange}><FontAwesomeIcon icon={faList} /><div>Request Bulletin</div></span>
            <span class="footer-item" onClick={myRequestsRouteChange}><FontAwesomeIcon icon={faUser} /><div class="fa fa-user-o" aria-hidden="true"></div><div>My Requests</div></span>
        </div>
        
  );
}

export default Footer;


