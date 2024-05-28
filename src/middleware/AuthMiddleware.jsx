import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function StoreMiddleware() {
    const id=localStorage.getItem('id');

  return (
    <div>{id ? <Outlet/>: <Navigate to="/signin"/>}</div>
  )
}

function SignInMiddleware() {

  const id=localStorage.getItem('id');

return (
  <div>{!id ? <Outlet/>: <Navigate to="/"/>}</div>
)
}

export  {StoreMiddleware,SignInMiddleware}