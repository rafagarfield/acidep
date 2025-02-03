// 

"use client";
import CardProducts from "@/components/CardProducts/CardProducts";
import { getProducts } from "@/firebase/firebaseServices";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

function AllProductUser() {
  const [products, setProducts] = useState([]);
  const [hover, setHover] = useState(false);
  const router = useRouter();

  // Función para manejar el clic en la lupa
  const handleClick = () => {
    // Agregar lógica para manejar el clic (por ejemplo, redirigir a una página de detalles del producto)
    console.log("Icon clicked");
  };

  useEffect(() => {
    const productsFetch = async () => {
      const products = await getProducts();
      console.log(products)
      setProducts(products);
    };
    productsFetch();
  }, []); // Dependencia vacía para que solo se ejecute al montar el componente

  return (
    <div>
      <h2 className="text-center text-[30px] font-bold my-10">EXPLORA NUESTROS PRODUCTOS</h2>
      <div className="flex flex-wrap gap-6 lg:gap-10 mt-10 justify-center items-center lg:px-24">
        {products.map((product) => (
          <div
            key={product.id} // Es importante agregar una clave única para cada elemento
            className="flex flex-col gap-2 relative cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Contenedor de la imagen */}
            <div className="p-2 rounded-[30px] flex justify-center items-center relative overflow-hidden">
              <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] relative">
                {/* Imagen del producto */}
                <img
                  src={product.imageUrl} // Asegúrate de que el objeto `product` tenga la propiedad `image`
                  alt={product.ProductName} // Utiliza el nombre del producto para la alt tag
                  className="w-full h-full object-cover rounded-[20px]"
                />

                {/* Icono de lupa sin afectar la imagen */}
                <div
                  className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
                    hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  onClick={handleClick}
                >
                  <div className="bg-white/70 p-2 rounded-full shadow-md">
                    <Search size={30} color="black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Título del producto */}
            <h2 className="text-[14px] lg:text-[16px] font-bold text-center text-gray-900">
              {product.productName} {/* Usa el nombre del producto */}
            </h2>

            {/* Categoría del producto */}
            <div className="flex justify-center">
              <p className="text-[#8B8B8B] font-medium text-sm sm:text-base">
                {product.category} {/* Muestra la categoría del producto */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProductUser;
