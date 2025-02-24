"use client"
import { createImageJob } from "@/firebase/firebaseServices";
import React, { useState } from "react";
 // Importamos la función

function JobForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Selecciona una imagen antes de subir.");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await createImageJob(file);
      alert(`✅ Imagen subida correctamente`);
      setFile(null);
    } catch (error) {
      alert("❌ Hubo un error al subir la imagen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Subir Empleo</h2>
      <form className="flex flex-col gap-3">
        <label className="font-semibold">Selecciona una imagen:</label>
        <input type="file" accept="image/*" onChange={handleChangeFile} />
        <button
          type="button"
          onClick={handleUpload}
          disabled={loading}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {loading ? "Subiendo..." : "Subir Imagen"}
        </button>
      </form>
    </div>
  );
}

export default JobForm;
