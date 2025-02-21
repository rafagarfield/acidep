import CarouselForm from '@/components/CarouselForm/CarouselForm'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
// import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

export default function page() {
  
  return (
    <ProtectDynamicRouteClient>
      <CarouselForm/>
    </ProtectDynamicRouteClient>
  )
}
