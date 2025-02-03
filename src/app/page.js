// import CardProducts from "@/components/CardProducts/CardProducts"
// import Categories from "@/components/Categories/Categories"
// import ProductForm from "@/components/Products/ProductForm"
// import ProductList from "@/components/Products/ProductList"


// function page() {
//   return (
//     <div>
//       <Categories/>
//       <ProductForm />
//       <ProductList />
//       <div className=" flex flex-wrap gap-6 lg:gap-10 mt-10 justify-center items-center   lg:px-24 "> 
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//         <CardProducts />
//       </div>
//     </div>
    
//   )
// }

// export default page


import { Carousel } from '@/components/Carousel/Carousel'
import FeaturesBanner from '@/components/FeaturesBanner/FeaturesBanner'
import { Navbar } from '@/components/NavBar/NavBar'
import AllProductUser from '@/components/Products/AllProductUser/AllProductUser'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FeaturesBanner />
      <AllProductUser />
    </div>
  )
}

export default page
