"use client"
import { addCategory } from '@/firebase/firebaseServices'
import React, { useState } from 'react'

function CategoriesForm({categories,setCategories}) {
  const [formData, setFormData] = useState({
    categoryName: '',
  })
  const [errors, setErrors] = useState({})

  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.categoryName) {
      newErrors.categoryName = 'El nombre de la categoría es obligatorio.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0  // Si no hay errores, devuelve true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar antes de enviar el formulario
    if (!validateForm()) {
      return
    }

    try {
      await addCategory(formData.categoryName)
      setFormData({ categoryName: '' })
      alert('Formulario enviado exitosamente')
      setCategories([...categories, { category: formData.categoryName }])  // Actualizar las categorías en el estado global y en la UI, si es que se ha enviado correctamente el formulario.  // Nota: Este ejemplo solo muestra un mensaje de éxito y actualización de la lista de categorías, en un caso real, se podría actualizar la lista de categorías en el estado global y])  // Actualizar las categorías en el estado global y en la UI, si es que se ha enviado correctamente el formulario.  // Nota: Este ejemplo solo muestra un mensaje de éxito y actualización de la lista de categorías, en un caso real, se podría actualizar la lista de categorías en el estado global y

    } catch (error) {
      console.error('Error al agregar la categoría:', error)
      alert('Hubo un error al enviar el formulario.')  // Mostrar el mensaje de error
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label 
            htmlFor="categoryName" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Nombre de la categoría
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Nombre de la categoría"
            value={formData.categoryName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          {errors.categoryName && (
            <p className="text-red-500 text-sm mt-1">{errors.categoryName}</p>
          )}
        </div>

        <div className="mb-6">
          <button 
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Añadir categoría
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoriesForm

