import ProductList from '@/components/Products/ProductList'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
      <ProductList />
    </ProtectedRoute>
  )
}

export default page
