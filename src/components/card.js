// import logo from './logo.svg';
import './card.css';
function Card({title, description, status, numEchoes}){
  return (
    <div class="card">
    <div class="frame-4">
      <div class="card-header">
        <div class="title">{title}</div>
      </div>
      <div class="supporting-text">
        {description}
      </div>
      <div class="frame-5">
        <div class="badge">
          <div class="badge">
            <div class="badge-base">
              <div class="dot">
                <div class="dot2"></div>
              </div>
              <div class="text">{status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-3">
      <div class="badge">
        <div class="badge">
          <div class="badge-base2">
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
  
            <div class="text2">Echo</div>
          </div>
        </div>
      </div>
      <div class="text2">{numEchoes}</div>
    </div>
  </div>

  );
}

export default Card;


