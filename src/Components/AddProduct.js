import React, { useState } from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import img from '../img/add.jpg'

export default function AddProduct() {

  const navigate=useNavigate()

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addProduct = async (e) => {
    e.preventDefault()
    try {
      if (!name || !price || !category || !company) {
        alert("Please fill all the fields")
      }
      else {
        alert("Product added")
        navigate("/products")
        const userId = JSON.parse(localStorage.getItem("user")).name
        // console.warn(userId)
        const result = await fetch("https://e-comm-app-pearl.vercel.app/add-product", {
          method: "POST",
          body: JSON.stringify({ name, price, category, company, userId }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        console.log(result)
        
      }
    }
    catch (err) {
      console.log("Error somewhere")
    }

  }
  

  return (
    <div>
      <Nav />
      <div style={{ padding: "86px 30px 10px" }}>
        <div className='d-flex'>
        <h4 style={{ color: "#5c5c5c" }}>Add Product</h4>
        <MdOutlinePlaylistAdd style={{fontSize:"34px",margin:"0 6px",color:"#5c5c5c"}}/>
        </div>
        <hr></hr>
        <div className='border-dark d-flex justify-content-between'>
        <form className='w-50'>

          <div className="form-group my-2">
            <label htmlFor="Name">Product Name</label>
            <input value={name} id="Name" onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Product Name" />
          </div>
          <div className="form-group my-2">
            <label >Price in Rupee</label>
            <input value={price} id="Name" onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" placeholder="Enter Price" />
          </div>
          <div className="form-group my-2">
            <label >Category</label>
            <input value={category} id="Name" onChange={(e) => setCategory(e.target.value)} type="text" className="form-control" placeholder="Enter Category" />
          </div>
          <div className="form-group my-2">
            <label >Brand</label>
            <input value={company} id="Name" onChange={(e) => setCompany(e.target.value)} type="text" className="form-control" placeholder="Enter Brand" />
          </div>
          <button type="submit" onClick={addProduct} className="btn btn-success my-3">Add Product</button><br />
        </form>
        <img style={{width:"350px",marginTop:"60px"}}src={img}/>
      </div>
      </div>
    </div>
  )
}
