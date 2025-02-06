import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="bg-[url('/verde3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col p-4 text-center ">
      <div className=" flex gap-10 lg:mt-10 justify-center" >
        
        <div className="flex flex-col gap-6">
        <h1 className="text-[#ffffff]  text-[28px] lg:text-[44px] font-bold text-center "><span className="text-yellow-500 shadow-2xl rounded-lg   text-center">Haz crecer tu producción</span>  {" "}con soluciones agrícolas</h1>
        <p className=" text-[18px] lg:text-[20px] text-[#ffffffe3] text-center ">Incrementa tu produccion agrícola y garantiza una cosecha abundante.</p>
        </div>
       
      </div>
      
    </div>
  );
}

export default Hero;
