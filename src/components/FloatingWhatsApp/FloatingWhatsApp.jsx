import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "929497479"; // Reemplaza con tu número de WhatsApp
  const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus servicios."); // Mensaje personalizado

  // Detectar si el usuario está en escritorio o móvil
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  const whatsappURL = isMobile
    ? `https://wa.me/${phoneNumber}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center text-3xl"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
