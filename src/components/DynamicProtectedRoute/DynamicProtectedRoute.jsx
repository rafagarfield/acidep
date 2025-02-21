
"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const DynamicProtected = dynamic(() => import("../ProtectedRoute/ProtectedRoute"),{ssr:false})

export default function DynamicProtectedRoute({children}) {
    
  return (
      <DynamicProtected>
        {children}
      </DynamicProtected>
    
  )
}
