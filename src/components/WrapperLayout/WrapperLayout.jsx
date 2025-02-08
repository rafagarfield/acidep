"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import FloatingWhatsApp from "../FloatingWhatsApp/FloatingWhatsApp"


function WrapperLayout({children}) {
    const pathname = usePathname() 
    const hideAdmin = pathname.startsWith("/dashboard")
  return (
    <>
      {!hideAdmin && <Navbar/> }
      {children}
      {!hideAdmin && <FloatingWhatsApp/>}
      {!hideAdmin && <Footer/> }

    </>
  )
}

export default WrapperLayout
