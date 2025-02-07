// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Search } from "lucide-react";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import {
//   categoriesProducts,
//   getCategories,
//   getProducts,
// } from "@/firebase/firebaseServices";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export default function ShopPage() {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [hover, setHover] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   let categoryId = searchParams.get("category");

//   const createQueryString = useCallback(
//     (name, value) => {
//       const params = new URLSearchParams(searchParams);
//       params.set(name, value);
//       return params.toString();
//     },
//     [searchParams]
//   );

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const response = await getCategories();
//       setCategories(response);
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (searchParams.has("category") && categoryId !== "all") {
//         const response = await categoriesProducts(categoryId);
//         setProducts(response);
//       } else {
//         const response = await getProducts();
//         setProducts(response);
//       }
//     };
//     fetchProducts();
//   }, [categoryId]);

//   const handleAllProducts = () => {
//     router.push(pathname + "?" + createQueryString("category", "all"));
//   };

//   const handleClickCategory = (categoryId) => {
//     router.push(pathname + "?" + createQueryString("category", categoryId));
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="container py-8 m-auto">
//         <nav className="mb-6 flex space-x-2 text-sm text-muted-foreground">
//           <Link href="/">Home</Link>
//           <span>/</span>
//           <span className="font-medium text-foreground">Tienda</span>
//         </nav>

//         {/* Categorías - Desktop */}
//         <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
//           <Button
//             onClick={handleAllProducts}
//             variant="outline"
//             className="rounded-full hover:bg-green-900 hover:text-white"
//             size="lg"
//           >
//             All
//           </Button>
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               onClick={() => handleClickCategory(category.id)}
//               variant="outline"
//               className="rounded-full hover:bg-green-900 hover:text-white"
//               size="lg"
//             >
//               {category.category}
//             </Button>
//           ))}
//         </div>

//         {/* Categorías - Mobile */}
//         <div className="md:hidden flex overflow-x-auto space-x-2 mb-6 py-2">
//           <Button
//             onClick={handleAllProducts}
//             variant="outline"
//             className="rounded-full whitespace-nowrap"
//             size="sm"
//           >
//             All
//           </Button>
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               onClick={() => handleClickCategory(category.id)}
//               variant="outline"
//               className="rounded-full whitespace-nowrap"
//               size="sm"
//             >
//               {category.category}
//             </Button>
//           ))}
//         </div>

//         {/* Grid de productos */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Link href={`/products/${product.productId}`} key={product.productId}>
//               <div
//                 className="flex flex-col items-center gap-2 cursor-pointer"
//                 onMouseEnter={() => setHover(true)}
//                 onMouseLeave={() => setHover(false)}
//               >
//                 <div className="relative overflow-hidden rounded-[20px] w-[250px] max-w-[250px] h-[250px] ">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.productName}
//                     className="w-full h-full object-cover rounded-[20px]"
//                   />
//                   <div
//                     className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
//                       hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
//                     }`}
//                   >
//                     <div className="bg-white/70 p-2 rounded-full shadow-md">
//                       <Search size={30} color="black" />
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-sm sm:text-base font-bold text-center text-gray-900">
//                   {product.productName}
//                 </h2>
//                 <p className="text-xs sm:text-sm text-gray-500">
//                   {product.category}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  categoriesProducts,
  getCategories,
  getProducts,
} from "@/firebase/firebaseServices";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ShopPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let categoryId = searchParams.get("category");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      const response = await getCategories();
      setCategories(response);
      setLoadingCategories(false);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      const products = await getProducts();
      setProducts(products);
      setLoadingProducts(false);
    };

    const fetchProductsByCategory = async () => {
      setLoadingProducts(true);
      const response = await categoriesProducts(categoryId);
      setProducts(response);
      setLoadingProducts(false);
    };

    if (searchParams.has("category")) {
      categoryId !== "all" ? fetchProductsByCategory() : fetchProducts();
    } else {
      fetchProducts();
    }
  }, [categoryId]);

  const handleAllProducts = () => {
    router.push(pathname + "?" + createQueryString("category", "all"));
  };

  const handleClickCategory = ({ categoryId }) => {
    router.push(pathname + "?" + createQueryString("category", categoryId));
  };

  return (
    <div className="min-h-screen bg-white m-4">
      <div className=" py-8">
        <div className="mb-8">
          <nav className="flex space-x-2 text-sm text-muted-foreground">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="font-medium text-foreground">Tienda</span>
          </nav>
        </div>

        {/* Category Tags - Top */}
        <div className="mb-8 ">
          <div className="flex flex-wrap justify-center gap-2">
            {loadingCategories ? (
              [...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-10 bg-gray-200 animate-pulse rounded-full"
                />
              ))
            ) : (
              <>
                <Button
                  onClick={handleAllProducts}
                  variant="outline"
                  className="rounded-full hover:bg-green-900 hover:text-white"
                  size="lg"
                >
                  Todos
                </Button>
                {categories?.map((category) => (
                  <Button
                    onClick={() => {
                      if (!category?.id) return;
                      handleClickCategory({ categoryId: category.id });
                    }}
                    key={category.id}
                    variant="outline"
                    className="rounded-full hover:bg-green-900 hover:text-white"
                    size="lg"
                  >
                    {category.category}
                  </Button>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="grid gap-8">
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
              {loadingProducts
                ? [...Array(8)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="p-2 rounded-[30px] flex justify-center items-center relative overflow-hidden">
                        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-gray-200 animate-pulse rounded-[20px]" />
                      </div>
                      <div className="h-4 w-32 bg-gray-200 animate-pulse mx-auto rounded-md" />
                      <div className="h-4 w-24 bg-gray-200 animate-pulse mx-auto rounded-md" />
                    </div>
                  ))
                : products.map((product) => (
                    <Link
                      href={`/products/${product.productId}`}
                      key={product.productId}
                    >
                      <div className="flex flex-col gap-2 relative cursor-pointer">
                        <div className="p-2 rounded-[30px] flex justify-center items-center relative overflow-hidden">
                          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] relative">
                            <img
                              src={product.imageUrl}
                              alt={product.productName}
                              className="w-full h-full object-cover rounded-[20px]"
                            />
                            <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-300 opacity-0 scale-75 hover:opacity-100 hover:scale-100">
                              <div className="bg-white/70 p-2 rounded-full shadow-md">
                                <Search size={30} color="black" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2 className="text-[14px] lg:text-[16px] font-bold text-center text-gray-900">
                          {product.productName}
                        </h2>
                        <p className="text-[#8B8B8B] font-medium text-sm sm:text-base text-center">
                          {product.category}
                        </p>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

