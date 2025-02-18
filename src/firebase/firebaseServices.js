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
import { db, storage,auth } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const categoryDocRef = doc(db, "categories", categoryId);
    await deleteDoc(categoryDocRef);
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
  }
};

/**
 * Agrega un producto a Firestore y sube los archivos a Firebase Storage.
 * @param {Object} product - Objeto con los datos del producto.
 */
export const addProduct = async (product) => {
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

    const result= await addDoc(productRef, newProduct);
    const productId = result.id;
    const productsRefId=doc(db,"products",productId)
    await updateDoc(productsRefId,{productId});
    
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


export const getProductById = async (productId) => {
  const citiesRef = collection(db, "products");
  const q = query(citiesRef, where("productId", "==", productId));
  const productsCategory = await getDocs(q);
  const product= productsCategory.docs.map((doc) => doc.data())
  return product;
};


export const loginUser = async (email, password) => {

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    throw error;
  }
};

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Usuario ha cerrado sesión");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};


export const addCarouselImages = async (files) => {
  try {
    const carouselRef = collection(db, "carrousel2");
    const uploadedImages = [];

    for (const file of files) {
      if (!file) continue;

      // Subir imagen a Firebase Storage
      const imageRef = ref(storage, `carrousel2/${Date.now()}-${file.name}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);

      uploadedImages.push(imageUrl);
    }

    if (uploadedImages.length > 0) {
      // Guardar en Firestore
      await addDoc(carouselRef, { images: uploadedImages, createdAt: new Date() });
      console.log("✅ Imágenes agregadas correctamente al carrusel");
    }
  } catch (error) {
    console.error("❌ Error al subir imágenes al carrusel:", error);
  }
};



export const getCarouselImages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "carrousel2"));
    const imagesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      images: doc.data().images,
    }));
    return imagesData;
  } catch (error) {
    console.error("❌ Error obteniendo imágenes del carrusel:", error);
    return [];
  }
};




export const deleteImage = async (docId, imageUrl) => {
  try {
    // Eliminar de Storage
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    // Obtener el documento actual y actualizar la lista de imágenes
    const docRef = doc(db, "carrousel2", docId);
    const newImages = (await getCarouselImages()).find(item => item.id === docId)?.images.filter(img => img !== imageUrl);

    if (newImages.length > 0) {
      await updateDoc(docRef, { images: newImages });
    } else {
      await deleteDoc(docRef);
    }

    console.log("✅ Imagen eliminada correctamente");
  } catch (error) {
    console.error("❌ Error al eliminar imagen:", error);
  }
};




export const editImage = async (docId, oldImageUrl, newFile) => {
  try {
    if (!newFile) return;

    // Subir nueva imagen a Storage
    const newImageRef = ref(storage, `carrousel2/${Date.now()}-${newFile.name}`);
    await uploadBytes(newImageRef, newFile);
    const newImageUrl = await getDownloadURL(newImageRef);

    // Reemplazar URL en Firestore
    const docRef = doc(db, "carrousel2", docId);
    const docData = (await getCarouselImages()).find(item => item.id === docId);
    const updatedImages = docData.images.map(img => (img === oldImageUrl ? newImageUrl : img));

    await updateDoc(docRef, { images: updatedImages });

    // Eliminar la imagen antigua de Storage
    const oldImageRef = ref(storage, oldImageUrl);
    await deleteObject(oldImageRef);

    console.log("✅ Imagen editada correctamente");
  } catch (error) {
    console.error("❌ Error al editar imagen:", error);
  }
};


// logica para caousel mobile 


export const addCarouselImagesMobile = async (files) => {
  try {
    const carouselRef = collection(db, "carrouselMobile");
    const uploadedImages = [];

    for (const file of files) {
      if (!file) continue;

      // Subir imagen a Firebase Storage
      const imageRef = ref(storage, `carrouselMobile/${Date.now()}-${file.name}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);

      uploadedImages.push(imageUrl);
    }

    if (uploadedImages.length > 0) {
      // Guardar en Firestore
      await addDoc(carouselRef, { images: uploadedImages, createdAt: new Date() });
      console.log("✅ Imágenes agregadas correctamente al carrusel");
    }
  } catch (error) {
    console.error("❌ Error al subir imágenes al carrusel:", error);
  }
};



export const getCarouselImagesMobile = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "carrouselMobile"));
    const imagesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      images: doc.data().images,
    }));
    return imagesData;
  } catch (error) {
    console.error("❌ Error obteniendo imágenes del carrusel:", error);
    return [];
  }
};




export const deleteImageMobile = async (docId, imageUrl) => {
  try {
    // Eliminar de Storage
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    // Obtener el documento actual y actualizar la lista de imágenes
    const docRef = doc(db, "carrouselMobile", docId);
    const newImages = (await getCarouselImages()).find(item => item.id === docId)?.images.filter(img => img !== imageUrl);

    if (newImages.length > 0) {
      await updateDoc(docRef, { images: newImages });
    } else {
      await deleteDoc(docRef);
    }

    console.log("✅ Imagen eliminada correctamente");
  } catch (error) {
    console.error("❌ Error al eliminar imagen:", error);
  }
};




export const editImageMobile = async (docId, oldImageUrl, newFile) => {
  try {
    if (!newFile) return;

    // Subir nueva imagen a Storage
    const newImageRef = ref(storage, `carrouselMobile/${Date.now()}-${newFile.name}`);
    await uploadBytes(newImageRef, newFile);
    const newImageUrl = await getDownloadURL(newImageRef);

    // Reemplazar URL en Firestore
    const docRef = doc(db, "carrouselMobile", docId);
    const docData = (await getCarouselImagesMobile()).find(item => item.id === docId);
    const updatedImages = docData.images.map(img => (img === oldImageUrl ? newImageUrl : img));

    await updateDoc(docRef, { images: updatedImages });

    // Eliminar la imagen antigua de Storage
    const oldImageRef = ref(storage, oldImageUrl);
    await deleteObject(oldImageRef);

    console.log("✅ Imagen editada correctamente");
  } catch (error) {
    console.error("❌ Error al editar imagen:", error);
  }
};
