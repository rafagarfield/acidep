// import React from "react";

// function CardProducts() {
//   return (
//     <div className="flex flex-col gap-2">
//       {/* Contenedor de la imagen */}
//       <div className="p-2 rounded-[30px] flex justify-center items-center">
//         <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]">
//           <img
//             src="/product1.png"
//             alt="product1"
//             className="w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Título */}
//       <h2 className="text-[14px] lg:text-[16px] font-bold text-center">
//         Watermelon
//       </h2>

//       {/* Categoría */}
//       <div className="flex justify-center">
//         <p className="text-[#8B8B8B] font-medium text-sm sm:text-base">
//           Categoria
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CardProducts;
"use client"
import React, { useReducer, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";


function CardProducts() {
  const [hover, setHover] = useState(false);
  const router = useRouter(); // Instancia useRouter

  const handleClick = () => {
    // Redirige a la ruta ficticia
    router.push('/ruta-ficticia');
  };

  return (
    <div 
      className="flex flex-col gap-2 relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Contenedor de la imagen */}
      <div className="p-2 rounded-[30px] flex justify-center items-center relative overflow-hidden">
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] relative">
          {/* Imagen intacta */}
          <img
            src="/product1.png"
            alt="product1"
            className="w-full h-full object-cover rounded-[20px]"
          />

          {/* Icono de lupa sin afectar la imagen */}
          <div 
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
              hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            onClick={handleClick} // Agrega el evento onClick aquí
          >
            <div className="bg-white/70 p-2 rounded-full shadow-md">
              <Search size={30} color="black" />
            </div>
          </div>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-[14px] lg:text-[16px] font-bold text-center text-gray-900">
        Watermelon
      </h2>

      {/* Categoría */}
      <div className="flex justify-center">
        <p className="text-[#8B8B8B] font-medium text-sm sm:text-base">
          Categoría
        </p>
      </div>
    </div>
  );
}

export default CardProducts;
