import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./pictures/amazon.png"
import tree from "./pictures/tree.png"
import google from "./pictures/google.png"
import facebook from "./pictures/fb.png"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
 
function App() {
  const [error, setError] = useState(false)

  const handleChange = (val) => {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
       setError(false)
    } else {
      setError(true)
      }
   }
  return (
    <div className="App">
      <div className="frame1"> 
        <div className="frame2">
          <div className="frameforamazon">
            <img className="amazon" alt="logo" src={image} />
          </div>
          <div className="login">Login</div>
        </div>
        </div>
      <div className="frame3">
        <img alt="logo" src={tree} />
        <hr className="line1" />

        <div className="textforemail">
          <label>Email</label> 
           <input onChange={(e) => handleChange(e.target.value)}  />
          {error?<p style={{color:"red"}}>Enter valid Email</p> :''} 
          {/* <hr className="line2" /> */}
          
          <div className="text">
            <label>Password</label>
          </div>
          <div className="passwordinput"></div>
          <input  className="line2" />
          <button className="buttonforsignin">
            <p className="signin">Sign in</p>
          </button>
          </div>
           
        <Container>
          <Row className='textforgot'>Forgot password ?</Row>
          <span className='signup'>New User? signup</span>
        </Container>
        <span className="textor">or</span> 
        <br></br>
        <button className="buttonforgoogle">
              <span className="signin">CONTINUE WITH GOOGLE</span>
              <img className="logofgoogle" alt="logo" src={google}/>
        </button> 
         
          <button className="buttonforfacebook">
            <span className="signin">CONTINUE WITH FACEBOOK</span>
              <img className="logoffacebook" alt="logo" src={facebook}/>
        </button>  
          
         
      </div>
       
       
    </div>
  );
}

export default App;
