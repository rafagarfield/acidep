

"use client";
import CardProducts from "@/components/CardProducts/CardProducts";
import { getProducts } from "@/firebase/firebaseServices";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AllProductUser() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const productsFetch = async () => {
      try {
        const products = await getProducts();
        setProducts(products.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    productsFetch();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <h2 className="text-center text-[30px] font-bold mt-10">
        EXPLORA NUESTROS PRODUCTOS
      </h2>

      <div className="flex flex-wrap gap-6 lg:gap-10 mt-10 justify-center items-center lg:px-24">
        {loading
          ? // 🔹 Skeleton Loader mientras carga
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-[150px] h-[200px] sm:w-[200px] sm:h-[250px] lg:w-[250px] lg:h-[300px] flex flex-col gap-2 animate-pulse"
              >
                <div className="w-full h-full bg-gray-300 rounded-[20px]" />
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto" />
              </div>
            ))
          : // 🔹 Mostrar productos cuando ya cargaron
            products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="flex flex-col gap-2 relative cursor-pointer group">
                  <div className="p-2 rounded-[30px] flex justify-center items-center relative overflow-hidden">
                    <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] relative">
                      <img
                        src={product.imageUrl}
                        alt={product.productName}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                      {/* 🔍 Icono de lupa animado */}
                      <div className="absolute inset-0 flex justify-center items-center opacity-0 scale-75 transition-all group-hover:opacity-100 group-hover:scale-100">
                        <div className="bg-white/70 p-2 rounded-full shadow-md">
                          <Search size={30} color="black" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nombre del producto */}
                  <h2 className="text-[14px] lg:text-[16px] font-bold text-center text-gray-900">
                    {product.productName}
                  </h2>

                  {/* Categoría del producto */}
                  <p className="text-[#8B8B8B] font-medium text-sm sm:text-base text-center">
                    {product.category}
                  </p>
                </div>
              </Link>
            ))}
      </div>

      <Link href={"/shops"}>
        <Button className="text-[18px] font-bold rounded-3xl px-10 py-6">
          Ver todos los productos
        </Button>
      </Link>
    </div>
  );
}

export default AllProductUser;
