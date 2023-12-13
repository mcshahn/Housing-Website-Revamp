import './card_my_requests.css';
import StatusLabel from './status_label'
import {useState} from 'react';

function CardMyRequests({title, description, status}){
  const [curStatus, setCurStatus] = useState(status);
  function handleResolve(){
    setCurStatus("resolved")

    fetch('/update_status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        newStatus: 'resolved',
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update status');
        }
      })
      .catch(error => console.error('Error updating status:', error));
  }
  
  return (
    <div class="card">
    <div class="card-content">
      <div class="card-header">
        <div class="title">{title}</div>
      </div>
      <div class="supporting-text">
        {description}
      </div>
      <StatusLabel iconName={curStatus} status={curStatus}/>
    </div>
    <div class="resolve-div">
      <div class="label-shape">
          <button onClick={handleResolve} class="resolve-button">
            <div class="resolve-text">Mark As Resolved</div>
          </button>
        </div>
        
      </div>
      
    </div>
  

  );
}

export default CardMyRequests;


