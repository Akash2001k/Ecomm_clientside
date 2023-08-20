import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export default function PrivatePage() {
  const auth=localStorage.getItem("user")
  return auth?<Outlet/>:<Navigate to="signin"/>
}
