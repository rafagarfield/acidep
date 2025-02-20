import CarouselForm from '@/components/CarouselForm/CarouselForm'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

export default function page() {
  return (
    <ProtectedRoute>
      <CarouselForm/>
    </ProtectedRoute>
  )
}
