/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const BlogCardItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <Card key={blog._id} className="border shadow-md rounded-xl">
      <CardContent className="p-4 space-y-4">
        {/* Top Row: Sno + Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500">#{index}</span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              blog.isPublished
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {blog.isPublished ? "Published" : "Unpublished"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Date */}
        <p className="text-sm text-gray-600">{BlogDate.toDateString()}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant={blog.isPublished ? "secondary" : "default"}
            size="sm"
            className="flex-1 text-sm font-medium"
          >
            {blog.isPublished ? "Unpublish" : "Publish"}
          </Button>
          <Button variant="destructive" size="sm" className="flex-1">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCardItem;
