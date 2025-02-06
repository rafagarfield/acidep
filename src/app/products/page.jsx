import Categories from '@/components/Categories/Categories'
import ProductForm from '@/components/Products/ProductForm'
import ProductList from '@/components/Products/ProductList'
import React from 'react'

function page() {
  return (
    <div>
      <ProductForm />
      <ProductList />
      <Categories />
    </div>
  )
}

export default page
