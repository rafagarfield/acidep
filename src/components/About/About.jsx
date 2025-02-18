import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Shield } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen ">
      {/* Sección Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-[#333333]">
            Sobre <span className="text-[#4a9d5c]">Nosotros</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Impulsando el futuro de la agricultura peruana con soluciones innovadoras y sostenibles.
          </p>
        </div>

        {/* Sección de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Misión */}
          <div className="group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
              <Image
                src="/about1.webp"
                alt="Agricultores trabajando en campo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 text-white">
                  <Target className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Misión</h2>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  Brindar al agricultor Peruano productos de excelente calidad y precio contribuyendo al crecimiento de
                  la productividad agrícola peruana, a través de colaboradores altamente capacitados. Sirviendo a todos
                  nuestros socios comerciales, con atención esmerada, responsable y oportuna, para cumplir con el
                  compromiso de servicio a la comunidad con responsabilidad social y sembrando confianza.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visión */}
          <div className="group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
              <Image
                src="/about2.webp"
                alt="Tecnología agrícola moderna"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a9d5c]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 text-white">
                  <Shield className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Visión</h2>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  Acidep pretende ser una empresa de renombre en la importación y comercialización de insumos agrícolas
                  y veterinarios; apalancándose en una sólida estructura organizacional y tecnológica con un continuo
                  crecimiento y diversificación. Con gran presencia a nivel nacional y regional enfocada en el buen
                  servicio, calidad, precio y excelentes relaciones con nuestros socios comerciales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#333333] text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Calidad Superior",
              "Innovación Constante",
              "Compromiso Social",
              "Excelencia en Servicio",
              "Sostenibilidad",
              "Integridad",
            ].map((valor, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-white border-2 border-transparent hover:border-[#4a9d5c]"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#333333] group-hover:text-[#4a9d5c] transition-colors duration-300">
                    {valor}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Años de Experiencia" },
            { number: "1000+", label: "Clientes Satisfechos" },
            { number: "50+", label: "Productos Especializados" },
            { number: "24/7", label: "Soporte Técnico" },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="text-4xl font-bold text-[#4a9d5c] mb-2">{stat.number}</div>
                <div className="text-[#333333]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

