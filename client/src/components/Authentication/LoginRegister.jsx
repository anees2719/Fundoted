
import React, { useState } from "react"
import './loginRegister.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from 'react-redux';
import {signin,signup} from '../../actions/index'
import {useNavigate} from 'react-router-dom'

const LoginRegister= (props)=> {
  
  const [user,setUser]=useState({fullname:'', email:'', password:''})
  const [confirmPass,setConfirmPass]=useState('');
  let [authMode, setAuthMode] = useState("signin")

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleSubmit=(e)=>{
       e.preventDefault();

    if (authMode=='signin') {
      dispatch(signin(user,navigate));
      navigate('/')
    } else {
      dispatch(signup(user,navigate));
      navigate('/')
    }
 

  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h2 className="Auth-form-title">Welcome to Fundoted</h2>
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up </h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g anees ur rehman"
              value={user.fullname}
              onChange={(e)=>{setUser({...user, fullname:e.target.value})}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={user.email}
              onChange={(e)=>setUser({...user,email:e.target.value})}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            />
          </div>
            <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={confirmPass}
              onChange={(e)=>setConfirmPass(e.target.value)}

            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}



export default LoginRegister;