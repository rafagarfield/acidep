import CarouselManagerMobile from '@/components/ListImageMobile/ListImageMobile'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
      <CarouselManagerMobile/>
    </ProtectedRoute>
  )
}

export default page
