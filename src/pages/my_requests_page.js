// import logo from './logo.svg';
import './my_requests.css';
import Footer from '../components/footer'
import CardMyRequests from '../components/card_my_requests'
import { useNavigate } from "react-router-dom";

function MyRequestsPage(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/dorm_selection`; 
        navigate(path);
    }
  return (
    <div class="container">
        <div id="my-requests-label">
            My Requests
        </div>
            
            <button id="new-service-button" onClick={routeChange}>
                <span class="button-text">New Service Request</span><span><i class="fa fa-solid fa-plus button-text"></i></span>
            </button>
            <div id="scrollable-container">
            <CardMyRequests title="Broken Pipes" description="Broken pipes in the lounge area causing flooding" status="In Progress" numEchoes={5}/>
            <CardMyRequests title="Drain Blockage" description="Shower drain is not draining" status="Received" numEchoes={3}/>
            </div> 
            <Footer/>
        </div>
  );
}

export default MyRequestsPage;


