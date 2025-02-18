import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import WrapperLayout from "@/components/WrapperLayout/WrapperLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Acidep",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body

        className={`${poppins.variable} antialiased`}
      >
        
        <WrapperLayout >
          {children}
        </WrapperLayout>
       
      </body>
    </html>
  );
}
