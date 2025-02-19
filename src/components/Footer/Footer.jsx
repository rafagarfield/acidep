
"use client";
import Link from "next/link";
import { Facebook,Linkedin} from "lucide-react";
import { useEffect, useState } from "react";
import { getCategories } from "@/firebase/firebaseServices";
import {  FaTiktok } from "react-icons/fa";

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

              <a
                href="https://www.tiktok.com/@acidep.s.a.c" // Reemplaza con el link correcto
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
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
