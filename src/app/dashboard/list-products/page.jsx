import ProductList from '@/components/Products/ProductList'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectDynamicRouteClient>
      <ProductList />
    </ProtectDynamicRouteClient>
  )
}

export default page
