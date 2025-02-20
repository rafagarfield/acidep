import Categories from '@/components/Categories/Categories'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

export default function page() {
  return (
    <ProtectedRoute>
      <Categories />
    </ProtectedRoute>
  )
}
