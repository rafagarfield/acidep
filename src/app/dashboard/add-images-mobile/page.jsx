import CarouselFormMobile from '@/components/CarouselFormMobile/CarouselFormMobile'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
      <CarouselFormMobile/>
    </ProtectedRoute>
  )
}

export default page
