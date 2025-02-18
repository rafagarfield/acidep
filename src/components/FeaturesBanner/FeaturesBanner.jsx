import { Truck, Shield, HeadphonesIcon } from "lucide-react"

export default function FeaturesBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center">
      <div className="flex items-center justify-center gap-2 bg-green-950 p-6 text-white">
        <Truck className="h-6 w-6" />
        <span className="text-lg font-medium">PRODUCTOS DE CALIDAD</span>
      </div>

      <div className="flex items-center justify-center gap-2 bg-green-700 p-6 text-white ">
        <Shield className="h-6 w-6" />
        <span className="text-lg font-medium">GARANTÍA ASEGURADA</span>
      </div>

      <div className="flex items-center justify-center gap-2 bg-green-950 p-6 text-white">
        <HeadphonesIcon className="h-6 w-6" />
        <span className="text-lg font-medium">SOPORTE </span>
      </div>
    </div>
  )
}

