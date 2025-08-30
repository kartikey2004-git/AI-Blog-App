import AppSidebar from "@/components/admin/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 border-b bg-white shadow-sm z-50">
          <div className="flex items-center gap-4">
            {/* Show toggle only on tablet/mobile */}
            <div className="lg:hidden">
              <SidebarTrigger />
            </div>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </div>
          <Button variant="destructive" onClick={() => navigate("/")}>
            Logout
          </Button>
        </header>

        {/* Layout wrapper */}
        <div className="flex flex-1 pt-16">
          <div className="hidden lg:block">
            <AppSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>

        {/* Mobile Sidebar (overlay) - separate, not pushing content */}
        <div className="lg:hidden">
          <AppSidebar isMobile />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
