
"use client"
import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { auth } from "@/firebase/firebaseConfig"
import { useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button";
import { signOut } from "firebase/auth"

// This is sample data.
const data = {
  navMain: [
   
    {
      title: "Categorias",
      url: "#",
      items: [
        {
          title: "Crear Categoria ",
          url: "/dashboard/categories",
        },
       

      ],
    },
    {
      title: "Productos",
      url: "#",
      items: [
        {
          title: "Agregar Productos",
          url: "/dashboard/add-products",
        },
        {
          title: "Lista de Productos",
          url: "/dashboard/list-products",
        }
        
      ],
    },
    {
      title: "Imagenes Para Carrusel",
      url: "#",
      items: [
        // {
        //   title: "Agregar Imagenes",
        //   url: "/dashboard/add-images",
        // },
        {
          title: "Lista IMG Grandes",
          url: "/dashboard/list-image",
        },
        {
          title: "Lista IMG Mobile",
          url: "/dashboard/list-image-mobile",
        }
        
      ],
    },
    {
      title: "Empleos",
      url: "#",
      items: [
        // {
        //   title: "Agregar Imagenes",
        //   url: "/dashboard/add-images",
        // },
        {
          title: "Crear empleos",
          url: "/dashboard/create-job",
        },
        {
          title: "Lista  de empleos",
          url: "/dashboard/list-job",
        }
        
      ],
    }
    
  ],
}

export function AppSidebar({...props}) 
{
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user"); // Elimina el token de autenticación del localStorage
      router.push("/login"); // Redirige a la página de inicio al cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Acidep</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarContent className="mt-20">
        <Button className="m-6" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </SidebarContent>
    </Sidebar>)
  );
}
