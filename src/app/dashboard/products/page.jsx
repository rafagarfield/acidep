import ProductForm from '@/components/Products/ProductForm'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
        <ProductForm />
    </ProtectedRoute>
  )
}

export default page
