// "use client";
// import React, { useEffect, useState } from "react";
// import { getProducts, deleteProduct, updateProduct } from "@/firebase/firebaseServices";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null); // Estado para editar

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error al cargar productos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (productId, productData) => {
//     if (confirm("¿Estás seguro de eliminar este producto?")) {
//       await deleteProduct(productId, productData);
//       fetchProducts(); // Recargar la lista después de eliminar
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//   };

//   const handleUpdate = async () => {
//     if (editingProduct) {
//       await updateProduct(editingProduct.id, editingProduct);
//       setEditingProduct(null);
//       fetchProducts();
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-gray-600">Cargando productos...</p>;
//   }

//   return (
//     <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Lista de Productos</h2>

//       {/* Formulario de edición (solo aparece si editingProduct no es null) */}
//       {editingProduct && (
//         <div className="mb-6 p-4 border rounded-lg bg-gray-100">
//           <h3 className="text-lg font-semibold mb-2">Editar Producto</h3>
//           <input 
//             type="text" 
//             value={editingProduct.productName} 
//             onChange={(e) => setEditingProduct({...editingProduct, productName: e.target.value})} 
//             className="w-full p-2 border rounded mb-2"
//           />
//           <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded mr-2">Guardar</button>
//           <button onClick={() => setEditingProduct(null)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
//         </div>
//       )}

//       {products.length === 0 ? (
//         <p className="text-center text-gray-600">No hay productos disponibles.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-4 py-2">Imagen</th>
//                 <th className="border border-gray-300 px-4 py-2">Nombre</th>
//                 <th className="border border-gray-300 px-4 py-2">Categoría</th>
//                 <th className="border border-gray-300 px-4 py-2">Detalles</th>
//                 <th className="border border-gray-300 px-4 py-2">Presentaciones</th>
//                 <th className="border border-gray-300 px-4 py-2">stock</th>
//                 <th className="border border-gray-300 px-4 py-2">Ficha Técnica</th>
//                 <th className="border border-gray-300 px-4 py-2">Hoja Seguridad</th>
//                 <th className="border border-gray-300 px-4 py-2">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img src={product.imageUrl} alt={product.productName} className="w-16 h-16 object-cover rounded" />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.category}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productDetails}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productPresentations}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <a href={product.technicalSheetUrl} target="_blank" className="text-blue-500 underline">Ver PDF</a>
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <a href={product.safetySheetUrl} target="_blank" className="text-blue-500 underline">Ver PDF</a>
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button onClick={() => handleEdit(product)} className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Editar</button>
//                     <button onClick={() => handleDelete(product.id, product)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;


// "use client";
// import React, { useEffect, useState } from "react";
// import { getProducts, deleteProduct, updateProduct } from "@/firebase/firebaseServices";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (error) {
//       console.error("❌ Error al cargar productos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (productId, productData) => {
//     if (confirm("¿Estás seguro de eliminar este producto?")) {
//       try {
//         await deleteProduct(productId, productData);
//         fetchProducts(); // Recargar la lista después de eliminar
//       } catch (error) {
//         console.error("❌ Error al eliminar producto:", error.message);
//       }
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProduct({ ...product });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async () => {
//     if (!editingProduct) return;

//     try {
//       if (editingProduct.stock && (isNaN(editingProduct.stock) || editingProduct.stock < 0)) {
//         alert("El stock debe ser un número válido.");
//         return;
//       }
//       await updateProduct(editingProduct.id, editingProduct);
//       setEditingProduct(null);
//       fetchProducts();
//     } catch (error) {
//       console.error("❌ Error al actualizar el producto:", error.message);
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-gray-600">Cargando productos...</p>;
//   }

//   return (
//     <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Lista de Productos</h2>

//       {editingProduct && (
//         <div className="mb-6 p-4 border rounded-lg bg-gray-100">
//           <h3 className="text-lg font-semibold mb-2">Editar Producto</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Nombre</label>
//               <input 
//                 type="text" 
//                 name="productName"
//                 value={editingProduct.productName} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Categoría</label>
//               <input 
//                 type="text" 
//                 name="category"
//                 value={editingProduct.category} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Detalles</label>
//               <input 
//                 type="text" 
//                 name="productDetails"
//                 value={editingProduct.productDetails} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Presentaciones</label>
//               <input 
//                 type="text" 
//                 name="productPresentations"
//                 value={editingProduct.productPresentations} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Stock</label>
//               <input 
//                 type="number" 
//                 name="stock"
//                 value={editingProduct.stock} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Ficha Técnica</label>
//               <input 
//                 type="text" 
//                 name="technicalSheetUrl"
//                 value={editingProduct.technicalSheetUrl} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Hoja Seguridad</label>
//               <input 
//                 type="text" 
//                 name="safetySheetUrl"
//                 value={editingProduct.safetySheetUrl} 
//                 onChange={handleChange} 
//                 className="w-full p-2 border rounded mb-2"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <p className="text-sm font-medium text-gray-700">Imagen del Producto</p>
//             <img src={editingProduct.imageUrl} alt={editingProduct.productName} className="w-24 h-24 object-cover rounded" />
//           </div>

//           <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded mr-2">Guardar</button>
//           <button onClick={() => setEditingProduct(null)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
//         </div>
//       )}

//       {products.length === 0 ? (
//         <p className="text-center text-gray-600">No hay productos disponibles.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-4 py-2">Imagen</th>
//                 <th className="border border-gray-300 px-4 py-2">Nombre</th>
//                 <th className="border border-gray-300 px-4 py-2">Categoría</th>
//                 <th className="border border-gray-300 px-4 py-2">Detalles</th>
//                 <th className="border border-gray-300 px-4 py-2">Presentaciones</th>
//                 <th className="border border-gray-300 px-4 py-2">Stock</th>
//                 <th className="border border-gray-300 px-4 py-2">Ficha Técnica</th>
//                 <th className="border border-gray-300 px-4 py-2">Hoja Seguridad</th>
//                 <th className="border border-gray-300 px-4 py-2">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img src={product.imageUrl} alt={product.productName} className="w-16 h-16 object-cover rounded" />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.category}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productDetails}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.productPresentations}</td>
//                   <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
//                   <td className="border border-gray-300 px-4 py-2"><a href={product.technicalSheetUrl} className="text-blue-500 underline">Ver PDF</a></td>
//                   <td className="border border-gray-300 px-4 py-2"><a href={product.safetySheetUrl} className="text-blue-500 underline">Ver PDF</a></td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button onClick={() => handleEdit(product)} className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Editar</button>
//                     <button onClick={() => handleDelete(product.id, product)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;


"use client";
import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct, updateProduct ,getCategories} from "@/firebase/firebaseServices";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "@/firebase/firebaseConfig";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [fileUploads, setFileUploads] = useState({}); // Estado para los archivos a subir

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("❌ Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("❌ Error al cargar categorías:", error);
    }
  };

  const handleDelete = async (productId, productData) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await deleteProduct(productId, productData);
        fetchProducts(); // Recargar la lista después de eliminar
      } catch (error) {
        console.error("❌ Error al eliminar producto:", error.message);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
    setFileUploads({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFileUploads((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const uploadFile = async (file, path) => {
    if (!file) return null;

    const fileRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  };

  const handleUpdate = async () => {
    if (!editingProduct) return;

    try {
      if (editingProduct.stock && (isNaN(editingProduct.stock) || editingProduct.stock < 0)) {
        alert("El stock debe ser un número válido.");
        return;
      }

      let updatedData = { ...editingProduct };

      if (fileUploads.imageUrl) {
        if (editingProduct.imageUrl) {
          await deleteObject(ref(storage, editingProduct.imageUrl));
        }
        updatedData.imageUrl = await uploadFile(fileUploads.imageUrl, "product_images");
      }

      if (fileUploads.technicalSheetUrl) {
        if (editingProduct.technicalSheetUrl) {
          await deleteObject(ref(storage, editingProduct.technicalSheetUrl));
        }
        updatedData.technicalSheetUrl = await uploadFile(fileUploads.technicalSheetUrl, "product_pdfs");
      }

      if (fileUploads.safetySheetUrl) {
        if (editingProduct.safetySheetUrl) {
          await deleteObject(ref(storage, editingProduct.safetySheetUrl));
        }
        updatedData.safetySheetUrl = await uploadFile(fileUploads.safetySheetUrl, "product_pdfs");
      }

      await updateProduct(editingProduct.id, updatedData);
      setEditingProduct(null);
      alert("producto editado")
      fetchProducts();
    } catch (error) {
      console.error("❌ Error al actualizar el producto:", error.message);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Cargando productos...</p>;
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Lista de Productos</h2>

      {editingProduct && (
        <div className="mb-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Editar Producto</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="productName" value={editingProduct.productName} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Categoría</label>
              <select name="category" value={editingProduct.category} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                <option value="" disabled>Seleccione una categoría</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.category}>{cat.category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Detalles</label>
              <input type="text" name="productDetails" value={editingProduct.productDetails} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Presentacion</label>
              <input type="text" name="productPresentations" value={editingProduct.productPresentations} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Stock</label>
              <input type="number" name="stock" value={editingProduct.stock} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Imagen del Producto</label>
              <input type="file" name="imageUrl" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ficha Técnica (PDF)</label>
              <input type="file" name="technicalSheetUrl" accept="application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Hoja Seguridad (PDF)</label>
              <input type="file" name="safetySheetUrl" accept="application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded mb-2" />
            </div>
          </div>

          <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded mr-2">Guardar</button>
          <button onClick={() => setEditingProduct(null)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
        </div>
      )}

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No hay productos disponibles.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Imagen</th>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Detalles</th>
                <th className="border border-gray-300 px-4 py-2">Categoría</th>
                <th className="border border-gray-300 px-4 py-2">Presentaciones</th>
                <th className="border border-gray-300 px-4 py-2">Stock</th>
                <th className="border border-gray-300 px-4 py-2">Ficha Técnica</th>
                <th className="border border-gray-300 px-4 py-2">Hoja Seguridad</th>
                <th className="border border-gray-300 px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2"><img src={product.imageUrl} alt={product.productName} className="w-16 h-16 object-cover rounded" /></td>
                  <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productDetails}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productPresentations}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                  <td className="border border-gray-300 px-4 py-2"><a href={product.technicalSheetUrl} className="text-blue-500 underline">Ver PDF</a></td>
                  <td className="border border-gray-300 px-4 py-2"><a href={product.safetySheetUrl} className="text-blue-500 underline">Ver PDF</a></td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={() => handleEdit(product)} className="px-2 py-1 bg-blue-500 text-white rounded mr-2 mb-2">Editar</button>
                    <button onClick={() => handleDelete(product.id, product)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductList;
