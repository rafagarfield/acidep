import CarouselManagerMobile from '@/components/ListImageMobile/ListImageMobile'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectDynamicRouteClient>
      <CarouselManagerMobile/>
    </ProtectDynamicRouteClient>
  )
}

export default page
