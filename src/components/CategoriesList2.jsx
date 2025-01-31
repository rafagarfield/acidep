"use client"
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/firebase/firebaseServices' // Asegúrate de importar correctamente la función

function CategoriesList( {categories,setCategories} ) {
   
  const [loading, setLoading] = useState(true)  // Estado para manejar la carga
  const [error, setError] = useState(null)  // Estado para manejar errores
  
  useEffect(() => {
    // Función para obtener las categorías al montar el componente
    const fetchCategories = async () => {
      try {
        
        const data = await getCategories()
        console.log(data)  // Llamada a la función que trae las categorías
        setCategories(data)  // Guardar las categorías en el estado
        setLoading(false)  // Finaliza la carga
      } catch (err) {
        setError(err.message)  // Si ocurre un error, guardamos el mensaje
        setLoading(false)  // Finaliza la carga incluso si hay error
      }
    }

    fetchCategories()
  }, [])  // Este efecto se ejecuta solo una vez al montar el componente

  if (loading) {
    return <p>Cargando categorías...</p>  // Mensaje mientras se cargan las categorías
  }

  if (error) {
    return <p>Error: {error}</p>  // Mensaje de error si algo salió mal
  }

  console.log(categories)

  return (
    <div>
      <h2>Categorías Disponibles:</h2>
      <ul>
        {categories?.length === 0 ? (
          <p>No hay categorías disponibles.</p>
        ) : (
          categories?.map((category) => (
            <li className='text-red-500' key={category.id}>{category.category}</li>  // Muestra el nombre de cada categoría
          ))
        )}
      </ul>
    </div>
  )
}

export default CategoriesList
