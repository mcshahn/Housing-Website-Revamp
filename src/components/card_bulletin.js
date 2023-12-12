// import logo from './logo.svg';
import './card_bulletin.css';
import StatusLabel from './status_label';

function CardBulletin({title, description, status, numEchoes}){
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
    <div class="echo-div">
      <div class="label-shape">
        
          <div class="echo-button">
            <svg
              class="arrow-up"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                stroke="#2E90FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
  
            <div class="echo-text">Echo</div>
          </div>
        </div>
        <div class="echo-text">{numEchoes}</div>
      </div>
      
    </div>
  

  );
}

export default CardBulletin;


