

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/firebase/firebaseServices";

export default function ProductDetails({ productId }) {
  const router = useRouter();
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [product, setProduct] = useState(null);
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      const productById = await getProductById(productId);
      setProduct(productById);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="animate-pulse">
          {/* Botón Volver Skeleton */}
          <div className="flex items-center gap-2 mb-4 w-32 h-6 bg-gray-300 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-white rounded-lg">
            {/* Imagen Skeleton */}
            <div className="flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-gray-300 rounded-lg"></div>
            </div>

            {/* Detalles del Producto Skeleton */}
            <div className="space-y-6">
              <div>
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-6 w-1/4 bg-gray-300 rounded"></div>
              </div>

              <div className="h-24 bg-gray-300 rounded"></div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-2/3"></div>
              </div>

              {/* Botones Skeleton */}
              <div className="flex flex-wrap gap-4">
                <div className="h-10 w-36 bg-gray-300 rounded"></div>
                <div className="h-10 w-36 bg-gray-300 rounded"></div>
              </div>

              {/* Botón Comprar Ahora Skeleton */}
              <div className="h-12 w-3/4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-white rounded-lg">
        <div className="flex items-center justify-center">
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-md group"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setPosition({ x: 50, y: 50 })}
          >
            <Image
              src={product[0].imageUrl}
              alt={product[0].productName}
              width={500}
              height={500}
              className="object-contain w-[400px] h-[400px] transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{
                transformOrigin: `${position.x}% ${position.y}%`,
              }}
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-[24px] lg:text-4xl font-bold text-gray-800">
              {product[0].productName}
            </h1>
            <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
              {product[0].category}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product[0].productDetails}
          </p>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-700">Presentación</h3>
            <p className="text-gray-500">{product[0].productPresentations}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 border-gray-300"
              onClick={() => window.open(product[0].technicalSheetUrl, "_blank")}
            >
              <FileText className="w-5 h-5" />
              Ficha Técnica
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 border-gray-300"
              onClick={() => window.open(product[0].safetySheetUrl, "_blank")}
            >
              <FileText className="w-5 h-5" />
              Hoja de Seguridad
            </Button>
          </div>

          <div className="flex justify-start">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold w-3/4 text-[16px]"
              onClick={() => {
                const phone = "51929497479";
                const productName = encodeURIComponent(product[0].productName);
                const productLink = encodeURIComponent(window.location.href);
                const message = `Hola, estoy interesado en el producto: *${productName}*.\nAquí está el enlace: ${productLink}`;

                const whatsappWeb = `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
                const whatsappMobile = `https://wa.me/${phone}?text=${message}`;

                const isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );

                window.open(isMobile ? whatsappMobile : whatsappWeb, "_blank");
              }}
            >
              Cotizar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
