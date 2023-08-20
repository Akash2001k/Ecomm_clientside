import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { BsCheckLg } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { MdCategory } from 'react-icons/md';
import { TbMoodEmpty } from 'react-icons/tb';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector, Cell, } from "recharts";

export default function Dashboard() {

  const [products, setProducts] = useState("");
  const [expense, setExpense] = useState("");
  const [lineGraph, setLineGraph] = useState([]);

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    let result = await fetch("https://e-comm-app-pearl.vercel.app/product")
    result = await result.json()

    if (result.length) {
      let total = 0;
      result.map((item) => {
        total = total + item.price
      })
      const formattedNumber = total.toLocaleString("en-IN");
      setExpense(formattedNumber)
      setProducts(result.length);
    }
    else {
      setExpense(0)
      setProducts(0);
    }

    setLineGraph(result)
  }

  return (
    <div>
      <Nav />
      <div style={{ padding: "86px 30px 10px" }}>
        <div className='cards_div d-flex justify-content-between mt-2'>
          <div className='cards'>
            <div>
              <h1>{products}</h1>
              <p>Total Product</p>
            </div>
            <BsCheckLg style={{ fontSize: "60px", color: "rgb(207, 66, 41)", background: "rgba(207, 66, 41,0.3)", padding: "5px", borderRadius: "5px" }} />
          </div>
          <div className='cards' style={{ padding: "20px" }}>
            <div>
              <h1>₹ {expense ? expense : 0}</h1>
              <p>Total Expense</p>
            </div>
            <CiMoneyCheck1 style={{ fontSize: "60px", color: "rgb(98, 131, 240)", background: "rgba(98, 131, 240,0.3)", padding: "5px", borderRadius: "5px" }} />
          </div>
          <div className='cards'>
            <div>
              <h1>10</h1>
              <p>Total Categroy</p>
            </div>
            <MdCategory style={{ fontSize: "60px", color: "rgb(92, 163, 85)", background: "rgba(92, 163, 85,0.3)", padding: "5px", borderRadius: "5px" }} />
          </div>
        </div>
        <div style={{ background: "#172b4d", width: "60%", borderRadius: "5px", padding: "20px", height: "50vh", marginTop: "20px" }}>
          <p className='text-light'>Price Values of Product </p>
          {lineGraph.length ?
            <ResponsiveContainer>
              <BarChart data={lineGraph} margin={{ top: 20, right: 45, bottom: 30 }}>Found
                <CartesianGrid vertical={false} />
                <XAxis fontSize={12} dataKey="name" interval={"preserveStartEnd"} />
                <YAxis fontSize={12} type="number" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(10,10,10,0.8)", color: "white" }} />
                {/* <Legend /> */}
                <Bar dataKey="price" fill="white" barSize={8} radius={4} />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer> : <div style={{ display: "flex", justifyContent: "center", marginTop: "85px" }}>
              <p style={{ color: "white", fontSize: "30px" }}>No Data to Display</p><TbMoodEmpty style={{ fontSize: "40px", margin: "5px", color: "white" }} />
            </div>
          }
        </div>
      </div>

    </div>
  )
}
