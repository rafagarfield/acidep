"use client";

import { addCategory } from "@/firebase/firebaseServices";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoriesForm({ categories, setCategories }) {
  const [formData, setFormData] = useState({ nameCategory: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCategory(formData.nameCategory);
      setFormData({ nameCategory: "" });
      toast.success("Categoría añadida con éxito!");
      setCategories([...categories, { category: formData.nameCategory }]);
    } catch (error) {
      toast.error("Error al añadir la categoría");
    }
  };

  return (
    <div className="flex justify-center w-full ">
      <div className=" shadow-xl rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Añadir Categoría
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Nombre de la Categoría</span>
            <input
              type="text"
              id="nameCategory"
              name="nameCategory"
              value={formData.nameCategory}
              onChange={handleInputChange}
              placeholder="Ej: Foliares"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 active:scale-95"
          >
            Añadir Categoría
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default CategoriesForm;
