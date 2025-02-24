"use client";
import { deleteImageJob, getJobImages } from "@/firebase/firebaseServices";
import React, { useEffect, useState } from "react";

function JobImageList() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await getJobImages();
      setImages(data);
    } catch (error) {
      console.error("❌ Error al cargar imágenes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (imageUrl) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar esta imagen?")) return;

    setLoading(true);
    try {
      await deleteImageJob(imageUrl);
      setImages((prevImages) => prevImages.filter((image) => image.imageUrl !== imageUrl));
      alert("✅ Imagen eliminada correctamente.");
    } catch (error) {
      alert("❌ Error al eliminar la imagen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Empleos activos</h2>
      {loading && <p>Cargando...</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.imageUrl}
              alt="Job"
              className="w-full h-full object-cover rounded shadow"
            />
            <button
              onClick={() => handleDelete(image.imageUrl)}
              className="absolute top-1 right-1 bg-red-100 text-white px-2 py-1 rounded text-sm"
              disabled={loading}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobImageList;
