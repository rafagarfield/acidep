import FeaturesBanner from '@/components/FeaturesBanner/FeaturesBanner'
import ProductDetails from '@/components/Products/ProductDetails/ProductDetails'
import React from 'react'

function page({params}) {
    if(!params?.productId){
        return 
    }
  return (
    <div>
      <ProductDetails productId={params?.productId}/>
      <FeaturesBanner />
    </div>
  )
}

export default page
