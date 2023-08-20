import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import img from '../img/profile.jfif'
import { MdModeEditOutline } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';

export default function Profile() {
  const [name, setName] = useState('')
  const [id, setID] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
      let localData = localStorage.getItem('user')
      localData = JSON.parse(localData)
      setName(localData.name)
      setID(localData._id)
      setEmail(localData.email)
  }, [])

  const logout = () => {
    localStorage.clear()
    window.location.href = '/signin'
  }
  // console.log(name)

  return (
    <div>
      <Nav />
      <div style={{ minHeight: "100vh", padding: "100px 40px" }}>
        <div style={{ height: "37vh", display: "flex" }}>
          <div style={{ border: "3px solid silver", padding: "13px" }}>
            <img src={img} style={{ width: "210px" }} />
          </div>
          <div style={{ width: "80%", padding: "20px" }}>

            <div className='d-flex justify-content-between'>
              <h2 style={{ color: "#3b3b3b", textTransform: "capitalize" }}>{name}</h2>
              <button onClick={logout} style={{height:"40px", border: "none", padding: "5px 10px", color: "white", background: "#383838", borderRadius: "3px" }}>Logout<IoExitOutline style={{margin:"-3px 3px 0",fontSize:"20px"}}/></button>
            </div>

            <hr />

            <div>
              <p>User ID</p>
              <p style={{ marginTop: "-12px", fontSize: "19px", fontWeight: "600", color: "#4287f5" }}>{id}</p>
            </div>
            <div className='mt-4'>
              <p>Email</p>
              <p style={{ marginTop: "-12px", fontSize: "19px", fontWeight: "600", color: "#4287f5" }}>{email}</p>
            </div>

          </div>
        </div>
        <div className='mt-3'>
          <button style={{ border: "none", padding: "5px 10px", color: "white", background: "#243d63", borderRadius: "3px" }}>Edit Profle <MdModeEditOutline /></button>
          <button className='mx-2' style={{ border: "none", padding: "5px 10px", color: "white", background: "#383838", borderRadius: "3px" }}>Action</button>
        </div>
      </div>
    </div>
  )
}
