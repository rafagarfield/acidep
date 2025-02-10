"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/firebase/firebaseServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(formData.email, formData.password);

      if (user) {
        toast.success("¡Inicio de sesión exitoso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });

        setFormData({ email: "", password: "" });

        // Redirigir después de un breve retraso para que el toast sea visible
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        throw new Error("Credenciales incorrectas");
      }
    } catch (error) {
      toast.error("Error al iniciar sesión. Verifica tus credenciales.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex flex-col bg-green-700 justify-center items-center h-screen gap-6">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-2xl w-full bg-green-300 rounded-lg shadow-lg p-20"
      >
        <label htmlFor="email">Correo</label>
        <input
          className="rounded-lg h-[50px] p-2 text-gray-600"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <div className="relative w-full">
          <input
            className="rounded-lg h-[50px] p-2 text-gray-600 w-full pr-12"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 rounded-lg text-white font-medium hover:bg-green-500 h-[50px]"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
