// import logo from './logo.svg';
import React from 'react';
import './login.css';


function LoginPage() {
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
          <button id="button" type="button">Login</button>
        </div>
      </div>
      
      <div id="cu-logo">
        <img src={imageUrl} alt="Columbia University Logo" />
      </div>

    </div>
  );
}

export default LoginPage;


