// import logo from './logo.svg';
import './card_my_requests.css';
function CardMyRequests({title, description, status, numEchoes}){
  return (
    <div class="card">
    <div class="card-content">
      <div class="card-header">
        <div class="title">{title}</div>
      </div>
      <div class="supporting-text">
        {description}
      </div>
      <div class="status-label">
        <div class="label-shape">
          
            <div class="status-label-content">
              <div class="status-dot-wrapper">
                <div class="status-dot"></div>
              </div>
              <div class="status-label-text">{status}</div>
            </div>
         
        </div>
      </div>
    </div>
    <div class="resolve-div">
      <div class="label-shape">
          <div class="resolve-button">
            <div class="resolve-text">Mark As Resolved</div>
          </div>
        </div>
        
      </div>
      
    </div>
  

  );
}

export default CardMyRequests;


