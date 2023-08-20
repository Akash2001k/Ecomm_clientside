import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ecomm from '../img/ecomm.png'

export default function SignUp() {

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const navigate = useNavigate( );

    const collectDate = async (e) => {
        try {
            if (!name || !email || !password) {
                alert("Please fill all the fields")
            } else if (password != cpassword) {
                alert("Password is not Matching")
            }
            else {
                alert("Registration Successful")
                e.preventDefault()
                console.log(name, email, password);
                let result = await fetch('https://e-comm-app-pearl.vercel.app/register', {
                    method: 'POST',
                    body: JSON.stringify({ name, email, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                result = await result.json()
                localStorage.setItem("user", JSON.stringify(result.result))
                localStorage.setItem("token", JSON.stringify(result.auth))
                navigate("/signin")
            }

        }
        catch (err) {
            console.log("Error somewhere")
        }
    }

    return (
        <div className='loginpagemaindiv'>
            <div className='d-flex justify-content-end' style={{ background: "#000000b8", color: "white", padding: "17px 0" }}>
                <a className='' href='/signin' style={{ color: "white", textDecoration: "none", borderRight: "1px solid white", padding: "0 12px 0 0" }} >Login</a>
                <a className='mx-3' href='/about' style={{ color: "white", textDecoration: "none" }}>About</a>
            </div>
            <div style={{ width: "65%", margin: "30px auto", background: "#000000b8", color: "white", borderRadius: "7px" }}>
                <form style={{ border: "1px solid silver", marginTop: "20px", padding: "20px" }} >
                    <div className='d-flex'>
                        <img src={ecomm} style={{ width: "80px" }} /><h2 className='mt-3 mx-2'>E-Commerce App</h2>
                    </div>
                    <h4 className='mt-4'>Register Your Account</h4>
                    <div className="form-group my-2">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" value={name} id="Name" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="Email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="Password" placeholder="Enter Password" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="Password">Comfirm Password</label>
                        <input type="password" className="form-control" value={cpassword} onChange={(e) => setCPassword(e.target.value)} id="Password" placeholder="Comfirm Password" />
                    </div>
                    <button onClick={collectDate} type="submit" className="btn btn-success my-2">Sign Up</button><br />
                    <a href="/signin">Already a user</a>
                </form>

            </div>
        </div>
    )
}
