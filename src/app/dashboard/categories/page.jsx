import Categories from '@/components/Categories/Categories'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

export default function page() {
  return (
    <ProtectDynamicRouteClient>
      <Categories />
    </ProtectDynamicRouteClient>
  )
}
