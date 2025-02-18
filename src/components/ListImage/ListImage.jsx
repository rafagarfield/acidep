

"use client";
import React, { useEffect, useState } from "react";
import { getCarouselImages, deleteImage, editImage } from "@/firebase/firebaseServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CarouselManager() {
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await getCarouselImages();
      setCarouselData(data);
    } catch (error) {
      toast.error("Error al cargar imágenes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (docId, imageUrl) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta imagen?");
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await deleteImage(docId, imageUrl);
      toast.success("Imagen eliminada correctamente");
      fetchImages();
    } catch (error) {
      toast.error("Error al eliminar imagen");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (docId, oldImageUrl, e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      await editImage(docId, oldImageUrl, file);
      toast.success("Imagen editada con éxito");
      fetchImages();
    } catch (error) {
      toast.error("Error al editar imagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg mt-20">
      <h2 className="text-lg font-bold mb-3 text-center">Gestionar Carrusel Tamaño Grande</h2>

      <ToastContainer position="top-right" autoClose={3000} />

      {loading ? (
        <p className="text-center text-blue-500 font-semibold">Cargando imágenes...</p>
      ) : carouselData.length === 0 ? (
        <p className="text-center text-gray-500">No hay imágenes en el carrusel</p>
      ) : (
        carouselData.map((item) => (
          <div key={item.id} className="mb-4 border p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-700">Carrusel </h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {item.images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Carrusel ${index}`}
                    className="w-full h-24 object-cover rounded-md border transition-transform group-hover:scale-105"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleEdit(item.id, image, e)}
                  />
                  <button
                    onClick={() => handleDelete(item.id, image)}
                    className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
