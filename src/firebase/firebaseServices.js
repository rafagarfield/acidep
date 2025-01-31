import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "./firebaseConfig";

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
        console.log("doc",doc.data)
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
