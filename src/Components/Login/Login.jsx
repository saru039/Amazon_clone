import React, {useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const login = (event) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate("/"); // navigate to homepage after login
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    });
};

  const register = (event) => {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
      alert("User Account Created");
    })
    .catch((err) => {
      console.error(err.message);
      alert("Registration failed: " + err.message);
    });
};

  return (
    <div className='login'>
      <Link to='/login'>
        <img src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png" alt="logo" className='login_logo' />
      </Link>
      <div className="login_container">
        <h1>Sign Up</h1>
        <form action="">
          <h5>E-mail</h5>
            <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <h5>Password</h5>
            <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type='submit' className='login_signInButton' onClick={login}>Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's conditions of use & sale. Please see our privacy Noticy, our Cookies Notices and our Internet-Based Ads Notice.</p>
        <button className='login_registerButton' onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default login