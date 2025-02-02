import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const addCategory = async (category) => {
  try {
    const categoryRef = collection(db, "categories");
    await addDoc(categoryRef, { category });
  } catch (error) {
    console.error("Error agregando categoría:", error);
  }
};

export const getCategories = async () => {
  try {
    const categoryRef = collection(db, "categories");
    const querySnapshot = await getDocs(categoryRef);
    const categories = querySnapshot.docs.map((doc) => {
      console.log("doc", doc.data);
      return {
        id: doc.id, // ID del documento
        ...doc.data(),
      }; // Datos del documento
    });
    return categories;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    throw new Error("No se pudieron cargar las categorías.");
  }
};

export const updateCategory = async (categoryId, newCategoryData) => {
  try {
    const categoryDocRef = doc(db, "categories", categoryId);
    await updateDoc(categoryDocRef, newCategoryData);
    console.log("Categoría actualizada correctamente");
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const categoryDocRef = doc(db, "categories", categoryId);
    await deleteDoc(categoryDocRef);
    console.log("Categoría eliminada correctamente");
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
  }
};

/**
 * Agrega un producto a Firestore y sube los archivos a Firebase Storage.
 * @param {Object} product - Objeto con los datos del producto.
 */
export const addProduct = async (product) => {
  console.log("Product recibido:", product);

  try {
    const {
      productName,
      category,
      categoryId,
      productDetails,
      productPresentations,
      stock,
      productImage,
      technicalSheetPdf,
      safetySheetPdf,
    } = product;

    // Verificación de archivos antes de subir
    if (!productImage || !technicalSheetPdf || !safetySheetPdf) {
      throw new Error("Faltan archivos obligatorios.");
    }

    // Verificación de stock válido
    if (!stock || isNaN(stock) || stock < 0) {
      throw new Error("El stock debe ser un número válido.");
    }

    // Referencia a la colección de productos en Firestore
    const productRef = collection(db, "products");

    // Subir imagen a Firebase Storage
    const imageRef = ref(
      storage,
      `products/${Date.now()}-${productImage.name}`
    );
    await uploadBytes(imageRef, productImage);
    const imageUrl = await getDownloadURL(imageRef);

    // Subir ficha técnica PDF
    const technicalSheetRef = ref(
      storage,
      `products/${Date.now()}-${technicalSheetPdf.name}`
    );
    await uploadBytes(technicalSheetRef, technicalSheetPdf);
    const technicalSheetUrl = await getDownloadURL(technicalSheetRef);

    // Subir hoja de seguridad PDF
    const safetySheetRef = ref(
      storage,
      `products/${Date.now()}-${safetySheetPdf.name}`
    );
    await uploadBytes(safetySheetRef, safetySheetPdf);
    const safetySheetUrl = await getDownloadURL(safetySheetRef);

    // Guardar datos en Firestore
    const newProduct = {
      productName,
      category,
      categoryId,
      productDetails,
      productPresentations,
      stock, // 🔥 Se agregó stock aquí
      imageUrl,
      technicalSheetUrl,
      safetySheetUrl,
      createdAt: new Date(),
    };

    await addDoc(productRef, newProduct);
    console.log("✅ Producto agregado correctamente");
  } catch (error) {
    console.error("❌ Error agregando producto:", error);
  }
};

/**
 * Obtiene todos los productos de Firestore.
 */
export const getProducts = async () => {
  try {
    const productRef = collection(db, "products");
    const querySnapshot = await getDocs(productRef);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      stock: doc.data().stock || 0, // 🔥 Se asegura que stock se obtenga correctamente
    }));
    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw new Error("No se pudieron cargar los productos.");
  }
};

/**
 * Actualiza un producto en Firestore.
 * @param {string} productId - ID del producto a actualizar.
 * @param {Object} updatedData - Datos actualizados del producto.
 */
export const updateProduct = async (productId, updatedData) => {
  try {
    if (
      updatedData.stock &&
      (isNaN(updatedData.stock) || updatedData.stock < 0)
    ) {
      throw new Error("El stock debe ser un número válido.");
    }

    const productDocRef = doc(db, "products", productId);
    await updateDoc(productDocRef, updatedData);
    console.log("✅ Producto actualizado correctamente");
  } catch (error) {
    console.error("❌ Error al actualizar el producto:", error);
    throw new Error("No se pudo actualizar el producto.");
  }
};
/**
 * Elimina un producto de Firestore y sus archivos de Storage.
 * @param {string} productId - ID del producto a eliminar.
 * @param {Object} productData - Datos del producto con URLs de archivos.
 */
export const deleteProduct = async (productId, productData) => {
  try {
    // Eliminar el documento de Firestore primero
    const productDocRef = doc(db, "products", productId);
    await deleteDoc(productDocRef);
    console.log("✅ Producto eliminado de Firestore");

    // Eliminar archivos de Storage
    const deleteFile = async (fileUrl) => {
      if (fileUrl) {
        try {
          const fileRef = ref(storage, fileUrl);
          await deleteObject(fileRef);
          console.log(`✅ Archivo eliminado: ${fileUrl}`);
        } catch (error) {
          console.warn(`⚠️ No se pudo eliminar el archivo ${fileUrl}:`, error);
        }
      }
    };

    await Promise.all([
      deleteFile(productData.imageUrl),
      deleteFile(productData.technicalSheetUrl),
      deleteFile(productData.safetySheetUrl),
    ]);

    console.log("✅ Producto y archivos eliminados correctamente");
  } catch (error) {
    console.error("❌ Error al eliminar el producto:", error);
    throw new Error("No se pudo eliminar el producto.");
  }
};

export const categoriesProducts = async (categoryId) => {
  const citiesRef = collection(db, "products");
  const q = query(citiesRef, where("categoryId", "==", categoryId));
  const productsCategory = await getDocs(q);
  const product= productsCategory.docs.map((doc) => doc.data())
  return product;
};
