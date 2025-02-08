// import * as React from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Image from "next/image"; // Import Image from Next.js

// const productCategories = [
//   {
//     title: "Acondicionadores de Suelo",
//     icon: "🌱",
//     description: "Mejora las condiciones físicas del suelo",
//   },
//   {
//     title: "Bioestimulantes",
//     icon: "👑",
//     description: "Estimula el crecimiento natural",
//   },
//   {
//     title: "Bionutrientes",
//     icon: "🌿",
//     description: "Nutrición natural para cultivos",
//   },
//   {
//     title: "Biológicos",
//     icon: "🔬",
//     description: "Soluciones biológicas avanzadas",
//   },
//   {
//     title: "Coadyuvantes",
//     icon: "💧",
//     description: "Mejora la eficacia de aplicaciones",
//   },
//   {
//     title: "Formulaciones Especiales",
//     icon: "⚗️",
//     description: "Productos especializados",
//   },
//   { title: "Hormonas", icon: "🌺", description: "Reguladores de crecimiento" },
//   {
//     title: "Inductores de Resistencia",
//     icon: "🛡️",
//     description: "Fortalece las defensas naturales",
//   },
//   {
//     title: "Quelatos Correctores",
//     icon: "⚖️",
//     description: "Corrige deficiencias nutricionales",
//   },
//   {
//     title: "Línea Agroquímicos",
//     icon: "🧪",
//     description: "Protección de cultivos",
//   },
// ];

// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur py-1">
//       <div className="flex h-20 items-center px-4 md:px-4 justify-between">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 lg:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle Menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-full max-w-md">
//             <nav className="flex flex-col space-y-4 px-6">
//               <Link
//                 href="/"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 INICIO
//               </Link>
//               <Link
//                 href="/"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 TIENDA
//               </Link>
//               <Link
//                 href="/fenologias"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 SOBRE NOSOTROS
//               </Link>
//               <Link
//                 href="/noticias"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 CONTACTO
//               </Link>
              
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="lg:flex lg:justify-between lg:w-full">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <Image
//               src="/logo.svg" // Use the path to your SVG
//               alt="Logo"
//               width={200}
//               height={100}
//               className="text-primary  "
//             />
//           </Link>

//           <NavigationMenu className="hidden lg:flex ">
//             <NavigationMenuList>
//               {["INICIO", "TIENDA", "SOBRE NOSOTROS", "CONTACTO"].map(
//                 (item) => (
//                   <NavigationMenuItem key={item}>
//                     <Link
//                       href={`/${item.toLowerCase()}`}
//                       legacyBehavior
//                       passHref
//                     >
//                       <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium hover:text-primary">
//                         {item}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 )
//               )}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>
//     </header>
//   );
// }


// import * as React from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Image from "next/image"; // Import Image from Next.js

// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur py-1">
//       <div className="flex h-20 items-center px-4 md:px-4 justify-between">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 lg:hidden"
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle Menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-full max-w-md">
//             <nav className="flex flex-col space-y-4 px-6">
//               <Link
//                 href="/"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 INICIO
//               </Link>
//               <Link
//                 href="/shops"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 TIENDA
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 SOBRE NOSOTROS
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-base font-medium py-2 hover:text-primary"
//               >
//                 CONTACTO
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="lg:flex lg:justify-between lg:w-full">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <Image
//               src="/logo.svg" // Use the path to your SVG
//               alt="Logo"
//               width={200}
//               height={100}
//               className="text-primary"
//             />
//           </Link>

//           <NavigationMenu className="hidden lg:flex">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <Link href="/" passHref legacyBehavior>
//                   <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium  hover:text-[#004225]">
//                     INICIO
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/shops" passHref legacyBehavior>
//                   <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium hover:text-[#004225]">
//                     TIENDA
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/about" passHref legacyBehavior>
//                   <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium hover:text-[#004225]">
//                     SOBRE NOSOTROS
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/contact" passHref legacyBehavior>
//                   <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium hover:text-[#004225]">
//                     CONTACTO
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>
//     </header>
//   );
// }


import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur py-1">
      <div className="flex h-20 items-center px-4 md:px-4 justify-between">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-md">
            <nav className="flex flex-col space-y-4 px-6">
              {["/", "/shops", "/about", "/contact"].map((path, index) => {
                const labels = ["INICIO", "TIENDA", "SOBRE NOSOTROS", "CONTACTO"];
                return (
                  <Link
                    key={index}
                    href={path}
                    className="text-base font-medium py-2 hover:text-primary"
                    onClick={() => setOpen(false)} // Cierra el menú al hacer clic
                  >
                    {labels[index]}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="lg:flex lg:justify-between lg:w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={100}
              className="text-primary"
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {["/", "/shops", "/about", "/contact"].map((path, index) => {
                const labels = ["INICIO", "TIENDA", "SOBRE NOSOTROS", "CONTACTO"];
                return (
                  <NavigationMenuItem key={index}>
                    <Link href={path} passHref legacyBehavior>
                      <NavigationMenuLink className="inline-flex h-10 px-6 py-2 text-sm font-medium hover:text-[#004225]">
                        {labels[index]}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
