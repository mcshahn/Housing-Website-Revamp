// import logo from './logo.svg';
import './my_requests.css';
import Footer from '../components/footer'
import Card from '../components/card'
function MyRequestsPage(){
  return (
    <div class="container">
        <div id="my-requests-label">
            My Requests
        </div>
            <button id="new-service-button">
                <span class="button-text">New Service Request</span><span><i class="fa fa-solid fa-plus button-text"></i></span>
            </button>
            <div id="scrollable-container">
            <Card title="Broken Pipes" description="Broken pipes in the lounge area causing flooding" status="In Progress" numEchoes={5}/>
            </div> 
            <Footer/>
        </div>
  );
}

export default MyRequestsPage;


