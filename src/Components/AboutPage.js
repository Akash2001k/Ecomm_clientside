import React from 'react'
import ecomm from '../img/ecomm.png'
import { TfiBackLeft } from 'react-icons/tfi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook,FaInstagramSquare,FaTwitter } from 'react-icons/fa';

import img from '../img/aboutimg.png'
import shopp from '../img/shopp.jpg'

export default function AboutPage() {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className='d-flex'>
                                <img src={ecomm} style={{ width: "52px", height: "50px" }} /><p className='mt-2 mx-2' style={{ color: "gray", fontSize: "22px" }}>E-Commerce</p>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginTop: "-10px" }}>
                                    <li>
                                        <a className="nav-link active" aria-current="page" href="/" style={{ fontSize: "20px" }}>Back<TfiBackLeft style={{ margin: "0 2px" }} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div style={{ border: "1px soliid black", height: "50vh", background: "#87c9b3", display: "flex", justifyContent: "space-around" }}>
                <img src={shopp} style={{ width: "320px" }} />
                <div style={{padding:"70px 60px"}}>
                    <h1 style={{fontSize:"60px",color:"#1b3661",fontWeight:"600"}}>How can we help you ?</h1>
                    <p style={{fontSize:"20px",color:"#1b3661",fontWeight:"600"}}>
                        Content marketing for ecommerce is focused on <br/>supporting the customers
                    </p>
                    <button className='btn btn-dark' href="/" style={{}}>Get Start</button>
                </div>
            </div>
            <div style={{ padding: "30px" }}>
                <div className='mt-4   '>
                    <h3 style={{fontSize:"30px"}}>We are working for you</h3>
                    <p style={{fontSize:"20px"}}>
                        Content marketing for ecommerce is focused on supporting the customer through the buyer's journey in order to maximize online sales.
                        An effective strategy integrates valuable content throughout the customer journey, ensuring potential buyers can access the information they need at any time and in the relevant channel.
                        Content for ecommerce websites is differentiated by the value it delivers to its audience. Examples of how ecommerce content can be valuable include:
                    </p>
                    <ul style={{fontSize:"20px"}}>
                        <li>Video guides about how products work</li>
                        <li>High-quality images of a product</li>
                        <li>Online forums for getting answers to questions</li>
                        <li>Search engine-optimized blog posts about issues of interest to buyers</li>
                    </ul>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "60px" }}>
                    <div>
                        <div className='d-flex'>
                            <h1 style={{ color: "#5c5b5a", borderBottom: "4px solid #8196f0" }}>About</h1><h1 style={{ background: "#8196f0", padding: "3px 10px", margin: "0 12px" }}> E-Commerce</h1>
                        </div>

                        <p className='mt-3' style={{fontSize:"20px"}}>
                            Content E Commerce
                            Content marketing for ecommerce is focused on supporting the customer through the buyer's journey in order to maximize online sales. An effective strategy integrates valuable content throughout the customer journey,
                            ensuring potential buyers can access the information they need at any time and in the relevant channel.
                        </p>
                    </div>

                    <img style={{ width: "600px", borderRadius: "10px" }} src={img} />
                </div>
            </div>
             <div className='d-flex justify-content-center my-4' style={{textAlign:"center"}}>
                <FaFacebook style={{fontSize:"30px",margin:"0 10px",cursor:"pointer"}}/>
                <FaInstagramSquare style={{fontSize:"30px",margin:"0 10px",cursor:"pointer"}}/>
                <AiFillLinkedin style={{fontSize:"30px",margin:"0 10px",cursor:"pointer"}}/>
                <FaTwitter style={{fontSize:"30px",margin:"0 10px",cursor:"pointer"}}/>
             </div>
        </div>
    )
}
