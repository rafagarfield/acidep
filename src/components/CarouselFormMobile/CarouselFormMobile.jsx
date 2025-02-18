"use client";
import React, { useState } from "react";
import { addCarouselImages, addCarouselImagesMobile } from "@/firebase/firebaseServices";

export default function CarouselFormMobile() {
  const [images, setImages] = useState(Array(6).fill(null));
  const [files, setFiles] = useState(Array(6).fill(null));

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);

      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validFiles = files.filter((file) => file !== null);
    
    if (validFiles.length === 0) {
      alert("Por favor, selecciona al menos una imagen.");
      return;
    }

    await addCarouselImagesMobile(validFiles);
    alert("Imágenes subidas correctamente.");
    setImages(Array(6).fill(null));
    setFiles(Array(6).fill(null));
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-3 text-center">Sube tus imágenes</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <label className="text-sm font-medium text-gray-700">Imagen {index + 1}</label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 p-1 border rounded-md w-full"
              onChange={(e) => handleImageChange(e, index)}
            />
            {image && (
              <img
                src={image}
                alt={`Vista previa ${index + 1}`}
                className="mt-1 w-24 h-24 object-cover rounded-md border"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="col-span-2 w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700"
        >
          Enviar imágenes
        </button>
      </form>
    </div>
  );
}
