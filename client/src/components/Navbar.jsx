/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-4xl font-semibold cursor-pointer tracking-tight"
      >
        Blog
      </h1>

      {/* Large screen Login button */}
      <div className="hidden lg:block">
        <Button
          onClick={() => navigate("/admin")}
          className="rounded-md px-5 py-2 font-medium flex items-center gap-2 group"
        >
          Login
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden relative">
        <button onClick={() => setOpen(!open)} className="p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute right-0 mt-3 w-44 rounded-lg shadow-lg bg-white border p-2 z-50"
            >
              <Button
                variant="ghost"
                className="w-full justify-between rounded-md px-4 py-2 group"
                onClick={() => {
                  setOpen(false);
                  navigate("/admin");
                }}
              >
                Login
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
