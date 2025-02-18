// import Link from "next/link"
// import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white">
//       <div className="container mx-auto px-4 py-12">
//         {/* Contenido Principal del Footer */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
              
//               <h3 className="text-xl font-bold">ACIDEP</h3>
//             </div>
//             <p className="text-gray-400">
//               Soluciones innovadoras para el cultivo. Comprometidos con el desarrollo agrícola sostenible.
//             </p>
//             {/* Redes Sociales */}
//             <div className="flex gap-4 pt-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-500">Productos</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/productos/bioestimulantes"
//                   className="text-gray-400 hover:text-green-500 transition-colors"
//                 >
//                   Bioestimulantes
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/productos/fertilizantes" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Fertilizantes
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/productos/proteccion" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Protección de Cultivos
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-500">Enlaces</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/inicio" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Inicio
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/tienda" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Tienda
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sobre-nosotros" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Sobre Nosotros
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contacto" className="text-gray-400 hover:text-green-500 transition-colors">
//                   Contacto
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-500">Contacto</h3>
//             <div className="space-y-2 text-gray-400">
//               <p>Teléfono: (123) 456-7890</p>
//               <p>Email: info@acidep.com</p>
//               <p>Dirección: Av. Agricultura 123</p>
//               <p>Ciudad Agrícola, CP 12345</p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center pt-8 border-t border-gray-800">
//           <p className="text-gray-400">&copy; {new Date().getFullYear()} ACIDEP. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }


// import Link from "next/link"
// import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-[#004225] text-white">
//       <div className="container mx-auto px-8 py-12">
//         {/* Contenido Principal del Footer */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
              
//               <h3 className="text-xl font-bold">ACIDEP</h3>
//             </div>
//             <p className="text-green-100">
//               Soluciones innovadoras para el cultivo.
//             </p>
//             {/* Redes Sociales */}
//             <div className="flex gap-4 pt-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-200 hover:text-white transition-colors"
//               >
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-200 hover:text-white transition-colors"
//               >
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-200 hover:text-white transition-colors"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-300">Productos</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/productos/bioestimulantes" className="text-green-100 hover:text-white transition-colors">
//                   Bioestimulantes
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/productos/fertilizantes" className="text-green-100 hover:text-white transition-colors">
//                   Fertilizantes
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/productos/proteccion" className="text-green-100 hover:text-white transition-colors">
//                   Protección de Cultivos
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-300">Enlaces</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/inicio" className="text-green-100 hover:text-white transition-colors">
//                   Inicio
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/tienda" className="text-green-100 hover:text-white transition-colors">
//                   Tienda
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sobre-nosotros" className="text-green-100 hover:text-white transition-colors">
//                   Sobre Nosotros
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contacto" className="text-green-100 hover:text-white transition-colors">
//                   Contacto
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-green-300">Contacto</h3>
//             <div className="space-y-2 text-green-100">
//               <p>Teléfono: (123) 456-7890</p>
//               <p>Email: info@acidep.com</p>
//               <p>Dirección: Av. Agricultura 123</p>
//               <p>Ciudad Agrícola, CP 12345</p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center pt-8 border-t border-green-700">
//           <p className="text-green-200">&copy; {new Date().getFullYear()} ACIDEP. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }



"use client";
import Link from "next/link";
import { Facebook,Linkedin} from "lucide-react";
import { useEffect, useState } from "react";
import { getCategories } from "@/firebase/firebaseServices";

export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response);
    };
    fetchCategories();
  }, []);

  return (
    <footer className="bg-[#004225] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Contenido Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">ACIDEP</h3>
            </div>
            <p className="text-green-100">Soluciones innovadoras para el cultivo.</p>

            {/* Redes Sociales */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.facebook.com/Acidep.pe/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              
              <a href="https://www.linkedin.com/in/acidep-sac-386b92351/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Productos</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/shops`} className="text-green-100 hover:text-white transition-colors">
                    {category.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/shops" className="text-green-100 hover:text-white transition-colors">Tienda</Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Contacto</h3>
            <div className="space-y-2 text-green-100">
              <p>Teléfono:+51 929497479  </p>
              <p>Email: acidepsac@gmail.com</p>
              <p>Dirección: Jr. Sucre 374, Imperial, Cañete - Lima</p>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-green-700 ">
          <p className="text-green-200">&copy; {new Date().getFullYear()} ACIDEP. Todos los derechos reservados.</p>
          {/* <p className="font-thin mt-4">Página desarrollada por 
          <a className="text-white font-normal  hover:text-blue-600 transition-colors" href="https://rafaelgarcia.vercel.app/" target="_blank" rel="noopener noreferrer" > Rafael Garcia </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
