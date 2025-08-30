/* eslint-disable no-unused-vars */
"use client";

import { Home, List, MessageSquare, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { url: "/admin", title: "Dashboard", icon: Home },
  { url: "/admin/addBlog", title: "Add Blog", icon: PlusCircle },
  { url: "/admin/listBlog", title: "List Blogs", icon: List },
  { url: "/admin/comments", title: "Comments", icon: MessageSquare },
];

const AppSidebar = ({ isMobile }) => {
  return (
    <Sidebar
      className={`h-full w-64 border-r bg-white shadow-lg flex flex-col z-20
        ${isMobile ? "fixed top-16 left-0" : "fixed top-16 left-0"}`}
    >
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-6">
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-2">
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <motion.a
                      href={item.url}
                      whileHover={{ scale: 1.05, x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-4 rounded-lg px-5 py-3 text-base font-medium text-gray-700 relative group overflow-hidden"
                    >
                      <item.icon className="h-6 w-6 text-gray-500 transition-colors" />
                      <span className="text-lg transition-colors">
                        {item.title}
                      </span>
                    </motion.a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4 text-center text-sm text-gray-400"
      >
        © 2025 BlogX
      </motion.div>
    </Sidebar>
  );
};

export default AppSidebar;
