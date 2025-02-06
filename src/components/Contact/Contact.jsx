import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
      <header className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Contáctanos</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-green-600" />}
                  title="Correo Electrónico"
                  content="info@tuempresa.com"
                />
                <ContactItem
                  icon={<Phone className="w-6 h-6 text-green-600" />}
                  title="Teléfono"
                  content="+51 1 234-5678"
                />
                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-green-600" />}
                  title="Dirección"
                  content="Av. Principal 123, Lima 15046, Perú"
                />
                <ContactItem
                  icon={<Clock className="w-6 h-6 text-green-600" />}
                  title="Horario de Atención"
                  content="Lunes a Viernes: 9:00 AM - 6:00 PM"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Síguenos</h2>
              <p className="text-gray-600 mb-6">
                Mantente conectado con nosotros a través de nuestras redes sociales para las últimas noticias y
                actualizaciones.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<Facebook className="w-6 h-6" />} name="Facebook" />
                <SocialLink href="#" icon={<Twitter className="w-6 h-6" />} name="Twitter" />
                <SocialLink href="#" icon={<Linkedin className="w-6 h-6" />} name="LinkedIn" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Estamos aquí para ayudarte. No dudes en contactarnos por cualquier consulta o información adicional.
          </p>
        </div>
      </main>

     
    </div>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-green-100 rounded-full p-3">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-green-800 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, name }) {
  return (
    <a
      href={href}
      className="bg-green-100 hover:bg-green-200 text-green-800 rounded-full p-3 transition-colors duration-300"
      aria-label={name}
    >
      {icon}
    </a>
  );
}
