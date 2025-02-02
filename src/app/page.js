import Categories from "@/components/Categories/Categories"
import ProductForm from "@/components/Products/ProductForm"
import ProductList from "@/components/Products/ProductList"


function page() {
  return (
    <div>
      <Categories/>
      <ProductForm />
      <ProductList />
    </div>
  )
}

export default page
