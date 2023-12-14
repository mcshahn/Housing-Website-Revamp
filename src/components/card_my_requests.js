import './card_my_requests.css';
import StatusLabel from './status_label'
import {useState} from 'react';
function CardMyRequests({uid, title, description, status}){
  const [curStatus, setCurStatus] = useState(status);
  function handleResolve(){
    setCurStatus("resolved")
    fetch('/update_status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid,
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
    <div className="card">
    <div className="card-content">
      <div className="card-header">
        <div className="title">{title}</div>
      </div>
      <div className="supporting-text">
        {description}
      </div>
      <StatusLabel iconName={curStatus}/>
    </div>
    <div className="resolve-div">
      <div className="label-shape">
          <button onClick={handleResolve} className="resolve-button">
            <div className="resolve-text">Mark As Resolved</div>
          </button>
        </div>
        
      </div>
      
    </div>
  

  );
}

export default CardMyRequests;


