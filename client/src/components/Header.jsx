/* eslint-disable no-unused-vars */
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative w-full  py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block mb-6 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm"
        >
          New: AI feature integrated 🚀
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
        >
          Your own blogging platform
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-lg text-gray-600"
        >
          This is your space to think out loud
        </motion.p>

        {/* Search form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full max-w-sm rounded-md border-gray-300 shadow-sm"
          />
          <Button type="submit" className="rounded-md px-6 font-medium">
            Search
          </Button>
        </motion.form>
      </div>

      {/* Background overlay gradient */}
      <div className="absolute inset-0 -z-10" />
    </div>
  );
};

export default Header;
