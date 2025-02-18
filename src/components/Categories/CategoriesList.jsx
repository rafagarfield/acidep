

"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCategories,
  updateCategory,
  deleteCategory,
  categoriesProducts,
} from "@/firebase/firebaseServices";

function CategoriesList({ categories, setCategories }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, [setCategories]);

  const handleEditClick = (category) => {
    setEditingId(category.id);
    setNewCategoryName(category.category);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewCategoryName("");
  };

  const handleUpdate = async (categoryId) => {
    if (!newCategoryName.trim()) return;
    try {
      await updateCategory(categoryId, { category: newCategoryName });
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId ? { ...cat, category: newCategoryName } : cat
        )
      );
      setEditingId(null);
      toast.success("Categoría actualizada con éxito!");
    } catch (error) {
      toast.error("Error al actualizar la categoría.");
    }
  };

  const handleDelete = async (categoryId) => {
    if (!window.confirm("¿Eliminar esta categoría?")) return;
    try {
      await deleteCategory(categoryId);
      setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
      toast.success("Categoría eliminada con éxito!");
    } catch (error) {
      toast.error("Error al eliminar la categoría.");
    }
  };

  const handleClick = async (categoryId) => {
    try {
      const productsData = await categoriesProducts(categoryId);
      setProducts(productsData);
      setSelectedCategory(categoryId);
    } catch (error) {
      toast.error("Error al obtener productos.");
    }
  };

  return (
    <div className="p-4 w-full ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white transition hover:shadow-lg"
          >
            {editingId === category.id ? (
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="border p-2 w-full rounded-md"
              />
            ) : (
              <h3 className="text-lg font-semibold text-gray-700">
                {category.category}
              </h3>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {editingId === category.id ? (
                <>
                  <button
                    className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                    onClick={() => handleUpdate(category.id)}
                  >
                    Guardar
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={() => handleEditClick(category)}
                  >
                    Editar
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(category.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                    onClick={() => handleClick(category.id)}
                  >
                    Ver productos
                  </button>
                </>
              )}
            </div>

            {selectedCategory === category.id && (
              <div className="mt-4 p-3 border rounded-lg bg-gray-50">
                <h4 className="text-md font-semibold text-gray-700">Productos:</h4>
                {products.length > 0 ? (
                  <ul className="list-disc pl-5">
                  {products.map((product) => (
                    <li key={product.id} className="text-gray-600 flex gap-2 items-center mb-2">
                      <img src={product.imageUrl} width={50} height={50} alt={product.productName} />
                      <p>{product.productName}</p>
                    </li>
                  ))}
                </ul>
                ) : (
                  <p className="text-gray-500 text-sm">No hay productos en esta categoría.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
