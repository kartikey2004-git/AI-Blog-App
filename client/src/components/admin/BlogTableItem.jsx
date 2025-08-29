/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Index */}
      <td className="px-5 py-4 w-16 text-center text-sm">{index}</td>

      {/* Title */}
      <td className="px-6 py-4 font-medium text-gray-800 text-sm">{title}</td>

      {/* Date */}
      <td className="px-6 py-4 text-gray-600 text-sm">
        {BlogDate.toDateString()}
      </td>

      {/* Status */}
      <td className="px-6 py-4 text-center">
        <span
          className={`px-4 py-2 text-sm font-semibold rounded-full ${
            blog.isPublished
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex gap-3 justify-center">
          <Button
            variant={blog.isPublished ? "secondary" : "default"}
            size="sm"
            className={`px-4 py-2 text-sm font-medium ${
              blog.isPublished ? "" : "px-6"
            }`}
          >
            {blog.isPublished ? "Unpublish" : "Publish"}
          </Button>
          <Button variant="destructive" size="sm" className="px-3 py-2">
            <Trash2 size={20} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default BlogTableItem;
