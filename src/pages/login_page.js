import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();

  const toDormSelection=()=>{
    navigate('/dorm_selection');
  }
  // const getInitialState = () => {
  //     const value = "none";
  //     return value;
  //   };
  
  //   const [value, setValue] = useState(getInitialState);
  
  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   console.log(value)


  const imageUrl = process.env.PUBLIC_URL + '/images/columbia-university-logo.png';

  return (
    <div className="container_login">
      <div id="title_login"> Columbia Service Requests </div>
      <br/>
      <div class="text-box-login">
          <div id="uni_login">Uni</div>
          <div>
          <input type="text" name="uni" placeholder="eg1234" />
          </div>
      </div>
      <div>
        <div>
          <button id="button" type="button" onClick={toDormSelection}>Login</button>
        </div>
      </div>
      
      <div id="cu-logo">
        <img src={imageUrl} alt="Columbia University Logo" />
      </div>

    </div>
  );
}

export default LoginPage;


