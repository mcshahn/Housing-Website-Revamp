import './card_bulletin.css';
import { useState, useEffect } from 'react';
import StatusLabel from './status_label';
function CardBulletin({uid, title, description, status, numEchoes}){

  const [curEcho, setCurEcho] = useState(numEchoes)
  const [echoed, setEchoed] = useState(false)

  useEffect(() => {
    fetch("/get_user_echoes").then((res) =>
        res.json().then((data) => {
          if (data.includes(uid)){
            setEchoed(true);
          }
        })
    );
}, []);

  function onEchoClick(){

    setCurEcho(curEcho + 1)
    setEchoed(true)
  

    fetch('/update_echoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uid,
        numEchoes: curEcho,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update echoes');
        }
      })
      .catch(error => console.error('Error updating echoes:', error));
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
      <StatusLabel iconName={status}/>
    </div>
    <div class="echo-div">
      <div class="label-shape">
        
          <button disabled={echoed} onClick={onEchoClick} class={echoed?"disabled-button":"echo-button"}>
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
  
            <div class="echo-text" >{echoed?"Already Echoed!":"Echo"}</div>
          </button>
        </div>
        <div class="echo-text">{curEcho}</div>
      </div>
      
    </div>
  

  );
}

export default CardBulletin;


