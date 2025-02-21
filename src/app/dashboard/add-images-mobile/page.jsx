import CarouselFormMobile from '@/components/CarouselFormMobile/CarouselFormMobile'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectDynamicRouteClient>
      <CarouselFormMobile/>
    </ProtectDynamicRouteClient>
  )
}

export default page
