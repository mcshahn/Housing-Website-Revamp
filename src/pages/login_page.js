// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


function LoginPage() {
  const imageUrl = process.env.PUBLIC_URL + '/images/columbia-university-logo.png';

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Perform login logic
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to match the Flask form data
        },
        body: `uni=${uni}`, // Send the uni value as form data
      });

      if (response.ok) {
        // If the login is successful, navigate to the main page
        navigate('/dorm_selection');
      } else {
        console.error('Failed to login:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const [uni, setUni] = useState('');

  useEffect(() => {
    // Retrieve the uni value from localStorage when the component mounts
    const storedUni = localStorage.getItem('uni');
    if (storedUni) {
      setUni(storedUni);
    }
  }, []);

  const handleUniChange = (event) => {
    // Update the uni state and store it in localStorage
    const value = event.target.value;
    setUni(value);
    localStorage.setItem('uni', value);
  };


  return (
    <div className="container_login">
      <div id="title_login"> Columbia Service Requests </div>
      <br/>
      <div class="text-box-login">
          <div id="uni_login">Uni</div>
          <div>
          <input type="text" name="uni" placeholder="eg1234" value={uni} onChange={handleUniChange} />
          </div>
      </div>
      <div>
        <div>
          <button id="button" type="button" onClick={handleLogin}>Login</button>
        </div>
      </div>
      
      <div id="cu-logo">
        <img src={imageUrl} alt="Columbia University Logo" />
      </div>

    </div>
  );
}

export default LoginPage;


