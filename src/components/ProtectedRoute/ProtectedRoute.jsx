"use client"
import { redirect } from 'next/navigation'

function ProtectedRoute({children}) {
  return (
    localStorage.getItem('user') ? children : redirect("/login")
  )
}

export default ProtectedRoute


