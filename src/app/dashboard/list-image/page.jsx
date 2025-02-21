import CarouselManager from '@/components/ListImage/ListImage'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectDynamicRouteClient>
      <CarouselManager/>
    </ProtectDynamicRouteClient>
  )
}

export default page
