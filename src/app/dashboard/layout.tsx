"use client"

import React from 'react';
import { usePathname } from "next/navigation";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";

const Layout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
      <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
              <div className={"p-4"}>
                  {children}
              </div>
          </SidebarInset>
        </div>
      </SidebarProvider>    §!
    </div>
    );
};

export default Layout;