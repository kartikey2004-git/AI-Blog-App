/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/blog/${_id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Blog Image */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wider">
          {category}
        </span>
        <h5 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h5>
        <p
          className="mt-2 text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        />
      </div>
    </motion.div>
  );
};

export default BlogCard;
