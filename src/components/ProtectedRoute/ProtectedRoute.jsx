"use client"
import { redirect } from 'next/navigation'
import React from 'react'

export default function ProtectedRoute({children}) {
  return (
    localStorage.getItem('user') ? children : redirect("/login")
  )
}
