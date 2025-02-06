import { Package2, Plus, Tags } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
              {/* Contenedor de botones grandes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Agregar Producto */}
                <Link href="/dashboard/add-products">
                  <div className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition-all cursor-pointer">
                    <Plus className="h-8 w-8 text-green-600" />
                    <span className="text-lg font-semibold text-gray-700">Agregar Producto</span>
                  </div>
                </Link>
                {/* Lista de Productos */}
                <Link href="/dashboard/list-products">
                  <div className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition-all cursor-pointer">
                    <Package2 className="h-8 w-8 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-700">Lista de Productos</span>
                  </div>
                </Link>
                {/* Agregar Categoría */}
                <Link href="/dashboard/categories">
                  <div className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition-all cursor-pointer">
                    <Plus className="h-8 w-8 text-green-600" />
                    <span className="text-lg font-semibold text-gray-700">Agregar Categoría</span>
                  </div>
                </Link>
                {/* Lista de Categorías */}
                <Link href="/dashboard/categories">
                  <div className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition-all cursor-pointer">
                    <Tags className="h-8 w-8 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-700">Lista de Categorías</span>
                  </div>
                </Link>
              </div>
    
            </div>
  )
}
