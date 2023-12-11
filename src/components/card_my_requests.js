import './card_my_requests.css';
import StatusLabel from './status_label'
function CardMyRequests({title, description, status}){
  return (
    <div class="card">
    <div class="card-content">
      <div class="card-header">
        <div class="title">{title}</div>
      </div>
      <div class="supporting-text">
        {description}
      </div>
      <StatusLabel iconName={status} status={status}/>
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


