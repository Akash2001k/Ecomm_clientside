import React from 'react'
import { Link } from 'react-router-dom';
import ecomm from '../img/ecomm.png'


export default function Nav() {


  return (
    <div style={{position:"absolute"}}>
      <nav style={{position:"fixed",width:"100%"}} className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='d-flex'>
            <img src={ecomm} style={{ width: "52px",height:"50px" }} /><p className='mt-2 mx-2' style={{ color: "gray",fontSize:"22px" }}>E-Commerce</p>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginTop:"-10px"}}>
              <li>
                <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="/add">Add Product</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="/products">Products List</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
