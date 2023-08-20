import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { RiEditFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img from '../img/update.jpg'

export default function UpdateProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`https://e-comm-app-pearl.vercel.app/product/${params.id}`)
        result = await result.json();
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        alert("Product Updated")
        navigate('/products')
        console.log({ name, price, category, company })
        let result = await fetch (`https://e-comm-app-pearl.vercel.app/product/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({ name, price, category, company }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        
    }
    return (
        <>
            <Nav />
            <div style={{ padding: "86px 30px 10px" }}>
                <div>
                    <div className='d-flex'>
                        <h4 style={{ color: "#5c5c5c" }}>Update Product</h4>
                        <RiEditFill style={{ fontSize: "34px", margin: "0 6px", color: "#5c5c5c" }} />
                    </div>
                    <hr></hr>
                    <div className='border-dark d-flex justify-content-between'>
                    <form className='w-50'>

                        <div className="form-group my-2">
                            <label htmlFor="Name">Product Name</label>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group my-2">
                            <label >Price in Rupee</label>
                            <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="number" className="form-control" placeholder="Enter Price" />
                        </div>
                        <div className="form-group my-2">
                            <label >Category</label>
                            <input value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" className="form-control" placeholder="Enter Category" />
                        </div>
                        <div className="form-group my-2">
                            <label >Brand</label>
                            <input value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" className="form-control" placeholder="Enter Brand" />
                        </div>
                        <div className='d-flex my-3'>
                            <button onClick={updateProduct} type="submit" className="btn btn-success">Update Product</button><br />
                            <a href="/products" className="btn btn-secondary mx-3">Cancel</a><br />
                        </div>
                    </form>
                    <img style={{width:"350px",marginTop:"60px"}}src={img}/>
                    </div>
                </div>
            </div>
        </>
    )
}
