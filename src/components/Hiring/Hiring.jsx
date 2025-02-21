import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, Mail, Phone, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-green-50 py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-green-600">Trabaja Con Nosotros</h2>
            <p className="text-xl mb-8 text-gray-700">
              Únete a nuestro equipo y sé parte del cambio en la agricultura peruana
            </p>
            <Link href="https://www.linkedin.com/in/acidep-sac-386b92351/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                <Users className="mr-2 h-5 w-5" />
                Ver Oportunidades
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-green-600">Buscamos Talentos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Nuestra Empresa</h3>
                <p className="text-gray-700 mb-4">
                  Somos una empresa con más de 3 años en el mercado peruano, comprometida con el desarrollo de la
                  agricultura en nuestro país.
                </p>
                <p className="text-gray-700 mb-4">
                  Buscamos profesionales apasionados que quieran crecer con nosotros y contribuir al futuro de la
                  agricultura peruana.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">¿Por qué trabajar con nosotros?</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Oportunidades de crecimiento profesional</li>
                  <li>Ambiente de trabajo colaborativo</li>
                  <li>Proyectos innovadores en el sector agrícola</li>
                  <li>Compromiso con el desarrollo sostenible</li>
                  <li>Capacitación continua</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-green-600">Únete a Nuestro Equipo</h2>
            <p className="text-xl mb-8 text-gray-700">
              Revisa nuestras convocatorias vigentes y sé parte de una empresa que está transformando la agricultura
              peruana.
            </p>
            <Link href="https://www.linkedin.com/in/acidep-sac-386b92351/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-green-600 hover:bg-green-100 font-bold py-3 px-6 rounded-full transition duration-300 border-2 border-green-600">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Convocatorias
              </Button>
            </Link>
          </div>
        </section>
      </main>

    </div>
  )
}

