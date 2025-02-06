"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "../NavBar/NavBar"
import Footer from "../Footer/Footer"


function WrapperLayout({children}) {
    const pathname = usePathname() 
    const hideAdmin = pathname.startsWith("/dashboard")
  return (
    <>
      {!hideAdmin && <Navbar/> }
      {children}
      {!hideAdmin && <Footer/> }

    </>
  )
}

export default WrapperLayout
