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
            {/* SidebarTrigger visible on all screens except large (like YouTube) */}
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </div>
          <Button variant="destructive" onClick={() => navigate("/")}>
            Logout
          </Button>
        </header>

        {/* Content layout */}
        <div className="flex flex-1 pt-16">
          {/* Sidebar always rendered */}
          <div className="fixed inset-0 z-40">
            <AppSidebar />
          </div>

          {/* Mobile/Tablet drawer sidebar */}
          <div className="lg:hidden fixed inset-0 z-40">
            <AppSidebar />
          </div>

          {/* Main content */}
          <main className="flex-1 p-6 overflow-y-auto lg:ml-40">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
