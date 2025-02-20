import CarouselManager from '@/components/ListImage/ListImage'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
      <CarouselManager/>
    </ProtectedRoute>
  )
}

export default page
