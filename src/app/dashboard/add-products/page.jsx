import ProductForm from '@/components/Products/ProductForm'
import ProtectDynamicRouteClient from '@/components/ProtectDynamicRouteClient/ProtectDynamicRouteClient'
import ProtectedRoute, { ProtectedRouteDynamic } from '@/components/ProtectedRoute/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <ProtectDynamicRouteClient>
      <ProductForm />
    </ProtectDynamicRouteClient>
  )
}

export default page
