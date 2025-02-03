
// "use client";

// import { getCategories, updateCategory, deleteCategory, categoriesProducts } from "@/firebase/firebaseServices";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function CategoriesList({ categories, setCategories }) {
//   const [products,setProducts] = useState([])
//   const [editingId, setEditingId] = useState(null);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [originalCategoryName, setOriginalCategoryName] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await getCategories();
//       setCategories(data);
//     };
//     fetchCategories();
//   }, [setCategories]);

//   const handleEditClick = (category) => {
//     setEditingId(category.id);
//     setNewCategoryName(category.category);
//     setOriginalCategoryName(category.category); // Guardamos el nombre original
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//     setNewCategoryName("");
//   };

//   const handleUpdate = async (categoryId) => {
//     if (!newCategoryName.trim() || newCategoryName === originalCategoryName) {
//       handleCancel(); // Si no hay cambios, simplemente cancelamos
//       return;
//     }

//     try {
//       await updateCategory(categoryId, { category: newCategoryName });

//       // Actualizar en el estado global
//       setCategories((prevCategories) =>
//         prevCategories.map((cat) =>
//           cat.id === categoryId ? { ...cat, category: newCategoryName } : cat
//         )
//       );

//       setEditingId(null);
//       toast.success("Categoría actualizada con éxito!");
//     } catch (error) {
//       console.error("Error al actualizar la categoría:", error);
//       toast.error("Hubo un error al actualizar la categoría.");
//     }
//   };

//   const handleDelete = (categoryId) => {
//     const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta categoría?");
//     if (confirmDelete) {
//       try {
//         deleteCategory(categoryId); // Suponiendo que tienes una función para eliminar
//         setCategories((prevCategories) => prevCategories.filter((cat) => cat.id !== categoryId));
//         toast.success("Categoría eliminada con éxito!");
//       } catch (error) {
//         console.error("Error al eliminar la categoría:", error);
//         toast.error("Hubo un error al eliminar la categoría.");
//       }
//     }
//   };

//   const handleClick =async (categoryId) => {
  
//     const products=await categoriesProducts(categoryId)
//     console.log(products)
    

//   }

//   return (
//     <div className="p-4 w-full lg:w-1/2">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Categorías</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {categories?.map((category) => (
//           <div
//             key={category.id}
//             className="flex flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md bg-white transition hover:shadow-lg"
//           >
//             {editingId === category.id ? (
//               <input
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//                 className="border border-gray-300 rounded-md p-2 w-full"
//               />
//             ) : (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700">{category.category}</h3>
//                 <h3 className="text-lg font-semibold text-gray-700">{category.id}</h3>
                
//               </div>
              
//             )}

//             <div className="flex gap-2">
//               {editingId === category.id ? (
//                 <>
//                   <button
//                     className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition"
//                     onClick={() => handleUpdate(category.id)}
//                   >
//                     Guardar
//                   </button>
//                   <button
//                     className="px-3 py-1 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600 transition"
//                     onClick={handleCancel}
//                   >
//                     Cancelar
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
//                     onClick={() => handleEditClick(category)}
//                   >
//                     Editar
//                   </button>
//                   <button
//                     className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition"
//                     onClick={() => handleDelete(category.id)}
//                   >
//                     Eliminar
//                   </button>
//                   <button 
//                   className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition"
//                   onClick={() => handleClick(category.id)}
//                   >

//                     Ver productos 
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoriesList;


"use client";

import { getCategories, updateCategory, deleteCategory, categoriesProducts } from "@/firebase/firebaseServices";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoriesList({ categories, setCategories }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [originalCategoryName, setOriginalCategoryName] = useState("");

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
    setOriginalCategoryName(category.category);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewCategoryName("");
  };

  const handleUpdate = async (categoryId) => {
    if (!newCategoryName.trim() || newCategoryName === originalCategoryName) {
      handleCancel();
      return;
    }

    try {
      await updateCategory(categoryId, { category: newCategoryName });
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === categoryId ? { ...cat, category: newCategoryName } : cat
        )
      );
      setEditingId(null);
      toast.success("Categoría actualizada con éxito!");
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
      toast.error("Hubo un error al actualizar la categoría.");
    }
  };

  const handleDelete = (categoryId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta categoría?");
    if (confirmDelete) {
      try {
        deleteCategory(categoryId);
        setCategories((prevCategories) => prevCategories.filter((cat) => cat.id !== categoryId));
        toast.success("Categoría eliminada con éxito!");
      } catch (error) {
        console.error("Error al eliminar la categoría:", error);
        toast.error("Hubo un error al eliminar la categoría.");
      }
    }
  };

  const handleClick = async (categoryId) => {
    try {
      const productsData = await categoriesProducts(categoryId);
      setProducts(productsData);
      setSelectedCategory(categoryId);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      toast.error("Hubo un error al obtener los productos.");
    }
  };

  console.log(products)

  return (
    <div className="p-4 w-full lg:w-1/2">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories?.map((category) => (
          <div key={category.id} className="flex flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md bg-white transition hover:shadow-lg">
            {editingId === category.id ? (
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <h3 className="text-lg font-semibold text-gray-700">{category.category}</h3>
            )}

            <div className="flex gap-2">
              {editingId === category.id ? (
                <>
                  <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition" onClick={() => handleUpdate(category.id)}>
                    Guardar
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600 transition" onClick={handleCancel}>
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition" onClick={() => handleEditClick(category)}>
                    Editar
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition" onClick={() => handleDelete(category.id)}>
                    Eliminar
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition" onClick={() => handleClick(category.id)}>
                    Ver productos
                  </button>
                </>
              )}
            </div>

            {/* Mostrar productos si la categoría seleccionada coincide */}
            {selectedCategory === category.id && (
              <div className="mt-4 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="text-md font-semibold text-gray-700">Productos:</h4>
                {products.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {products.map((product) => (
                      <div key={product.id} className="text-gray-600">
                        <img src={product.imageUrl} width={50} height={50} alt="1" />
                        <p>{product.productName}</p>
                        
                      </div>
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
