import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { RiEditFill } from 'react-icons/ri';
import { IoMdListBox } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { TbMoodEmpty } from 'react-icons/tb';
import '../App.css'



export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    let result = await fetch("https://e-comm-app-pearl.vercel.app/product")
    result = await result.json()
    setProducts(result)
  }

  const deleteProduct = async (id) => {
    alert("Prdouct is Deleted")
    getProduct()
    let result = await fetch(`https://e-comm-app-pearl.vercel.app/product/${id}`, {
      method: "Delete"
    })
    result = await result.json() 
    console.log(result)
    if (result) {
      getProduct()
    }

  }
  const searchHaandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`https://e-comm-app-pearl.vercel.app/search/${key}`)
      result = await result.json()
      if (result) {
        setProducts(result)
      }
    } else {
      getProduct()
    }
  }

  console.log(products.length)

  return (
    <div>
      <Nav />
      <div style={{ padding: "86px 30px 10px" }}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex mb-2'>
            <h4 style={{ color: "#5c5c5c" }}>All Products</h4>
            <IoMdListBox style={{ fontSize: "34px", margin: "0 6px", color: "#5c5c5c" }} />
          </div>
          <div style={{ border: "1px solid #8c8c8c", borderRadius: "4px", padding: "4px 5px 0", height: "36px" }}>
            <AiOutlineSearch style={{ fontSize: "25px", marginTop: "-4px" }} />
            <input onChange={searchHaandle} className='searchbar' placeholder="Name, Category, Brand, User..." style={{ minWidth: "240px", border: "none" }} />
          </div>
        </div>
        {
          products.length ?
            <table className="table table-striped">
              <thead style={{ background: "#172b4d", color: "white" }}>
                <tr>
                  <th scope="col">SR No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Added by</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody >
                {products.map((item, index) =>
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.company}</td>
                    <td style={{ textTransform: "capitalize" }}>{item.userId}</td>
                    <td>
                      <div className='d-flex'>
                        <div className='edit_del_link'>
                          <a className='mx-1' onClick={() => deleteProduct(item._id)}><MdDelete style={{ color: "#a6210f", fontSize: "24px", cursor: "pointer" }} /></a>
                          <span style={{ margin: "-12px -39px 0" }} className="tooltiptext">Delete</span>
                        </div>

                        <div className='edit_del_link'>
                          <a href={"/update/" + item._id}><RiEditFill style={{ color: "gray", fontSize: "24px", cursor: "pointer" }} /></a>
                          <span style={{ margin: "-12px 16px 0" }} className="tooltiptext">Edit</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>

            </table> :
            <div style={{ background: "#f2f2f2", height: "70vh",display:"flex",justifyContent:"center",padding:"180px 0" }}>
              <p style={{color:"#172b4d",fontSize:"30px"}}>No Data to Display</p><TbMoodEmpty style={{fontSize:"40px",margin:"5px"}}/>
            </div>}
      </div>
    </div>
  )
}
