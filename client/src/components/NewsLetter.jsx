/* eslint-disable no-unused-vars */
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 px-6 text-center rounded-2xl shadow-lg overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-60 blur-3xl -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        Never Miss a Blog!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-3 text-gray-600 max-w-xl mx-auto"
      >
        Subscribe to get the latest blogs, new tech, and exclusive news.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Button
          type="submit"
          className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Subscribe
        </Button>
      </motion.form>
    </div>
  );
};

export default NewsLetter;
