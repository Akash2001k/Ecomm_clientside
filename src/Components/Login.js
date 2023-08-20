import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ecomm from '../img/ecomm.png'
import '../App.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  })

  const loginHandle = async (e) => {
    e.preventDefault()
    try {
      if (!email || !password) {
        alert("Please fill all the field")
      }
      else {
        let result = await fetch("https://e-comm-app-pearl.vercel.app/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        console.log(result)
        if (result.auth) {
          localStorage.setItem("user", JSON.stringify(result.user))
          localStorage.setItem("token", JSON.stringify(result.auth))
          navigate('/')
        }
        else {
          alert("Invalid Email or Password")
        }
      }
    }
    catch (err) {
      console.log("Error Somewhere")
    }
  }

  return (
    <div className='loginpagemaindiv' >
      <div className='d-flex justify-content-end' style={{background:"#000000b8",color:"white",padding:"17px 0"}}>
        <a className='' href='/signup' style={{color:"white",textDecoration:"none",borderRight:"1px solid white",padding:"0 12px 0 0"}} >Register Account</a>
        <a className='mx-3' href='/about' style={{color:"white",textDecoration:"none"}}>About</a>
      </div>
      <div className='login_div' >
        <form style={{ border: "1px solid silver", marginTop: "15px", padding: "20px", borderRadius: "4px" }} >
          <div className='d-flex'>
            <img src={ecomm} style={{ width: "70px",height:"70px" }} /><h2 className='mt-3 mx-2'>E-Commerce App</h2>
          </div>
          <h4 className='mt-2'>Login here</h4>
          <div className="form-group my-2">
            <label htmlFor="Email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="Email" placeholder="Enter Email" />
          </div>
          <div className="form-group my-2">
            <label htmlFor="Password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="Password" placeholder="Enter Password" />
          </div>
          <button type="submit" className="btn btn-success my-2" onClick={loginHandle}>Login</button><br />
          <a href="/signup">Not a User</a>
        </form>

      </div>
    </div>
  )
}
