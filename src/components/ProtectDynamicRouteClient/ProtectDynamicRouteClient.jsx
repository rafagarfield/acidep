"use client"
import React from 'react'
import DynamicProtectedRoute from '../DynamicProtectedRoute/DynamicProtectedRoute'

export default function ProtectDynamicRouteClient({children}) {
  return (
    <DynamicProtectedRoute>
      {children}
    </DynamicProtectedRoute>
  )
}
