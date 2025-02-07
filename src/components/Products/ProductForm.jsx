// "use client";
// import React, { useEffect, useState } from "react";
// import { addProduct, getCategories } from "@/firebase/firebaseServices"; // Asegúrate de importar correctamente la función

// function ProductForm() {
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     productName: "",
//     category: "",
//     categoryId: "",
//     productDetails: "",
//     productPresentations: "",
//     stock: "", // 🔥 Nuevo campo de stock
//     productImage: null,
//     technicalSheetPdf: null,
//     safetySheetPdf: null,
//   });

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await getCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error al obtener categorías:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 🔥 Agregando validación de `stock`
//     if (
//       !formData.productName ||
//       !formData.category ||
//       !formData.productDetails ||
//       !formData.productPresentations ||
//       !formData.stock || // ⚠️ Se agregó aquí
//       !formData.productImage ||
//       !formData.technicalSheetPdf ||
//       !formData.safetySheetPdf
//     ) {
//       alert("Todos los campos son obligatorios, incluyendo imagen, PDFs y stock.");
//       return;
//     }

//     try {
//       console.log("imprimiendo format data ",formData)
//       await addProduct(formData);
//       alert("✅ Producto agregado correctamente");

//       // 🔥 Limpiar el formulario
//       setFormData({
//         productName: "",
//         category: "",
//         categoryId: "", // �� Asegurar que se resetee
//         productDetails: "",
//         productPresentations: "",
//         stock: "", // 🔥 Asegurar que se resetee
//         productImage: null,
//         technicalSheetPdf: null,
//         safetySheetPdf: null,
//       });

//       // Resetear los inputs de tipo file manualmente
//       document.getElementById("productImage").value = "";
//       document.getElementById("technicalSheetPdf").value = "";
//       document.getElementById("safetySheetPdf").value = "";

//     } catch (error) {
//       console.error("Error al agregar producto:", error);
//       alert("❌ Hubo un error al agregar el producto.");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Crear Producto</h2>

//       <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
//         {/* Columna 1: Información General */}
//         <div>
//           {/* Nombre del Producto */}
//           <div className="mb-4">
//             <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
//               Nombre del producto *
//             </label>
//             <input
//               type="text"
//               id="productName"
//               name="productName"
//               value={formData.productName}
//               onChange={handleInputChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Categoría */}
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//               Seleccione una categoría *
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.categoryId}
//               onChange={(e) => {
//                 const selectedCategory = categories.find(cat => cat.id === e.target.value);
//                 if (!selectedCategory) {
//                   console.warn("Selected category not found");
//                   return;
//                 }
//                 setFormData({
//                   ...formData,
//                   category: selectedCategory.category ,
//                   categoryId: selectedCategory.id
//                 });
//               }}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Seleccione una categoría</option>
//               {categories.map((category) => (
//                 <option  key={category.id} value={category.id}>
//                   {category.category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Detalles del Producto */}
//           <div className="mb-4">
//             <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700">
//               Detalles del producto *
//             </label>
//             <textarea
//               id="productDetails"
//               name="productDetails"
//               value={formData.productDetails}
//               onChange={handleInputChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* 🔥 Campo de Presentaciones */}
//           <div className="mb-4">
//             <label htmlFor="productPresentations" className="block text-sm font-medium text-gray-700">
//               Presentaciones del producto *
//             </label>
//             <input
//               type="text"
//               id="productPresentations"
//               name="productPresentations"
//               value={formData.productPresentations}
//               onChange={handleInputChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* 🔥 Campo de Stock */}
//           <div className="mb-4">
//             <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//               Stock disponible *
//             </label>
//             <input
//               type="number"
//               id="stock"
//               name="stock"
//               value={formData.stock}
//               onChange={handleInputChange}
//               min="0"
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         {/* Columna 2: Archivos Adjuntos */}
//         <div>
//           {/* Subir Imagen */}
//           <div className="mb-4">
//             <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
//               Subir imagen *
//             </label>
//             <input
//               type="file"
//               id="productImage"
//               name="productImage"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Subir Ficha Técnica PDF */}
//           <div className="mb-4">
//             <label htmlFor="technicalSheetPdf" className="block text-sm font-medium text-gray-700">
//               Subir Ficha Técnica (PDF) *
//             </label>
//             <input
//               type="file"
//               id="technicalSheetPdf"
//               name="technicalSheetPdf"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="technicalSheetPdf" className="block text-sm font-medium text-gray-700">
//               Subir Hoja de seguridad (PDF) *
//             </label>
//             <input
//               type="file"
//               id="safetySheetPdf"
//               name="safetySheetPdf"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         {/* Botón de Envío */}
//         <div className="md:col-span-2">
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Crear producto
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ProductForm;
"use client";
import React, { useEffect, useState } from "react";
import { addProduct, getCategories } from "@/firebase/firebaseServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    categoryId: "",
    productDetails: "",
    productPresentations: "",
    stock: "",
    productImage: null,
    technicalSheetPdf: null,
    safetySheetPdf: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.values(formData).some((field) => field === "" || field === null)
    ) {
      toast.error("⚠️ Todos los campos son obligatorios.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await addProduct(formData);
      toast.success("Producto agregado correctamente", {
        position: "top-right",
        autoClose: 3000,
      });
      setFormData({
        productName: "",
        category: "",
        categoryId: "",
        productDetails: "",
        productPresentations: "",
        stock: "",
        productImage: null,
        technicalSheetPdf: null,
        safetySheetPdf: null,
      });
      document.getElementById("productImage").value = "";
      document.getElementById("technicalSheetPdf").value = "";
      document.getElementById("safetySheetPdf").value = "";
    } catch (error) {
      console.error("Error al agregar producto:", error);
      toast.error("❌ Hubo un error al agregar el producto.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg ">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Crear Producto
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex  flex-col lg:flex-row gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Nombre del producto *
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Categoría *
            </label>
            <select
              name="category"
              value={formData.categoryId}
              onChange={(e) => {
                const selectedCategory = categories.find(
                  (cat) => cat.id === e.target.value
                );
                if (!selectedCategory) return;
                setFormData({
                  ...formData,
                  category: selectedCategory.category,
                  categoryId: selectedCategory.id,
                });
              }}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Seleccione una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
            </select>

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Detalles *
            </label>
            <textarea
              id="productDetails"
              name="productDetails"
              value={formData.productDetails}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Presentaciones del producto *
            </label>
            <input
              type="text"
              name="productPresentations"
              value={formData.productPresentations}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Stock disponible *
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              min="0"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Imagen *
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Ficha técnica (PDF) *
            </label>
            <input
              type="file"
              id="technicalSheetPdf"
              name="technicalSheetPdf"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Hoja de seguridad (PDF) *
            </label>
            <input
              type="file"
              id="safetySheetPdf"
              name="safetySheetPdf"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 w-[80%] "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subiendo..." : "Crear Producto"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default ProductForm;
