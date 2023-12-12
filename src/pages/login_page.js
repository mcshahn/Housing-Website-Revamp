// import logo from './logo.svg';
import './login.css';

function LoginPage() {
  const imageUrl = process.env.PUBLIC_URL + '/images/columbia-university-logo.png';

  return (
    <div class="container">
            <div id="title"> Columbia Service Requests </div>
            <br/>
            <div class="text-box">
                <div id="uni">Uni</div>
                <div>
                <input type="text" name="uni" placeholder="eg1234" />
                </div>
            </div>
            <div>
              <div>
                <button type="button" onclick="login()">Login</button>
              </div>
            </div>
            
            <div id="cu-logo">
              <img src={imageUrl} alt="Columbia University Logo" />
            </div>

          </div>
  );
}

export default LoginPage;


