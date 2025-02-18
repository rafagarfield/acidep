// "use client"

// import React, { useState, useEffect, useCallback } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
// import { getCarouselImages } from "@/firebase/firebaseServices"

// // const desktopImages = [
// //   { id: 1, url: "/images/1.webp" },
// //   { id: 2, url: "/images/2.webp" },
// //   { id: 3, url: "/images/3.webp" },
// //   { id: 4, url: "/images/4.webp" },
// //   { id: 5, url: "/images/5.webp" },
// //   { id: 6, url: "/images/6.webp" }
// // ]

// const mobileImages = [
//   { id: 1, url: "/images/1.1.webp" },
//   { id: 2, url: "/images/2.1.webp" },
//   { id: 3, url: "/images/3.1.webp" },
//   { id: 4, url: "/images/4.1.webp" },
//   { id: 5, url: "/images/5.1.webp" },
//   { id: 6, url: "/images/6.1.webp" }
// ]

// export function Carousel() {
//   const [desktopImages, setDesktopImages] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640) // sm breakpoint in Tailwind
//     }

//     checkMobile()
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   useEffect(() => {
//     const fetchCarouselImages = async () => {
//       const images = await getCarouselImages()
//       const imagesD= images[0].images
//       console.log("imagenes",imagesD)
//       setDesktopImages(imagesD)
//     }
    
//     fetchCarouselImages()
//   }, [])
  
//   console.log("holi",desktopImages)

//   const images = isMobile ? mobileImages : desktopImages

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//   }, [images.length])

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
//   }, [images.length])

//   useEffect(() => {
//     if (isPlaying) {
//       const intervalId = setInterval(nextSlide, 5000)
//       return () => clearInterval(intervalId)
//     }
//   }, [isPlaying, nextSlide])

//   const togglePlayPause = () => {
//     setIsPlaying((prev) => !prev)
//   }

//   return (
//     <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[500px]">
//       {images.map((image, index) => (
//         <div
//           key={image.id}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Image
//             src={image.url || "/placeholder.svg"}
//             alt={`Imagen ${index + 1}`}
//             fill
//             sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 2000px) 80vw, 70vw"}
//             style={{
//               objectFit: "cover",
//               objectPosition: "center",
//             }}
//             priority={index === 0}
//           />
//         </div>
//       ))}

//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
//         aria-label="Imagen anterior"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
//         aria-label="Siguiente imagen"
//       >
//         <ChevronRight size={24} />
//       </button>

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((image, index) => (
//           <button
//             key={`dot-${image.id}`}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//             aria-label={`Ir a la imagen ${index + 1}`}
//           />
//         ))}
//       </div>

//       <button
//         onClick={togglePlayPause}
//         className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
//         aria-label={isPlaying ? "Pausar" : "Reproducir"}
//       >
//         {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//       </button>
//     </div>
//   )
// }


"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { getCarouselImages, getCarouselImagesMobile } from "@/firebase/firebaseServices"

// const desktopImages = [
//   { id: 1, url: "/images/1.webp" },
//   { id: 2, url: "/images/2.webp" },
//   { id: 3, url: "/images/3.webp" },
//   { id: 4, url: "/images/4.webp" },
//   { id: 5, url: "/images/5.webp" },
//   { id: 6, url: "/images/6.webp" }
// ]

const mobileImages = [
  { id: 1, url: "/images/1.1.webp" },
  { id: 2, url: "/images/2.1.webp" },
  { id: 3, url: "/images/3.1.webp" },
  { id: 4, url: "/images/4.1.webp" },
  { id: 5, url: "/images/5.1.webp" },
  { id: 6, url: "/images/6.1.webp" }
]

export function Carousel() {
  const [desktopImages, setDesktopImages] = useState([])
  const [mobileImages, setMobileImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint in Tailwind
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const fetchCarouselImages = async () => {
      const images = await getCarouselImages()
      const imagesD = images[0].images
      console.log("imagenes", imagesD)
      setDesktopImages(imagesD)
    }
    
    fetchCarouselImages()
  }, [])
  
  useEffect(() => {
    const fetchCarouselImagesMobile = async () => {
      const images = await getCarouselImagesMobile()
      const imagesD = images[0].images
      setMobileImages(imagesD)
    }
    
    fetchCarouselImagesMobile()
  }, [])
  

  const images = isMobile ? mobileImages : desktopImages

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(nextSlide, 5000)
      return () => clearInterval(intervalId)
    }
  }, [isPlaying, nextSlide])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[500px] ">
      {images.map((image, index) => (
        <div
          key={image.id || index} // Si image.id no existe, usamos el índice como fallback
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image|| "/placeholder.svg"}
            alt={`Imagen ${index + 1}`}
            fill
            sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 2000px) 80vw, 70vw"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority={index === 0}
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <button
            key={`dot-${image.id || index}`} // Usamos el índice como fallback para la clave
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  )
}
