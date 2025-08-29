import BlogCardItem from "@/components/admin/BlogCarditem";
import BlogTableItem from "@/components/admin/BlogTableItem";
import React, { useEffect, useState } from "react";

const demoBlogs = [
  {
    _id: "1",
    title: "The Future of Artificial Intelligence",
    subTitle: "How AI is reshaping industries",
    description:
      "Artificial Intelligence is no longer science fiction. From healthcare to finance, AI is driving transformation across industries.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    createdAt: "2025-08-01T10:00:00Z",
    isPublished: true,
  },
  {
    _id: "2",
    title: "Top 10 Travel Destinations in 2025",
    subTitle: "Where to go for your next adventure",
    description:
      "Planning your next trip? From exotic beaches to bustling cities, here are the top 10 travel destinations for 2025.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    createdAt: "2025-07-20T09:15:00Z",
    isPublished: true,
  },
  {
    _id: "3",
    title: "Healthy Morning Habits",
    subTitle: "Start your day with energy",
    description:
      "Morning routines set the tone for your entire day. Discover science-backed habits that boost productivity.",
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    createdAt: "2025-06-15T08:00:00Z",
    isPublished: true,
  },
  {
    _id: "4",
    title: "Minimalist Living",
    subTitle: "Less is more",
    description:
      "Minimalism isn’t just about owning fewer things; it’s about making room for what truly matters.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    createdAt: "2025-04-10T10:45:00Z",
    isPublished: false,
  },
];

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(demoBlogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">All Blogs</h1>

      <div className="hidden lg:block overflow-x-auto h-4/5">
        <table className="w-full border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm font-semibold">
              <th className="px-4 py-3 text-center">No.</th>
              <th className="px-4 py-3 text-left">Blog Title</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm divide-y divide-gray-200">
            {blogs.map((blog, index) => (
              <BlogTableItem
                blog={blog}
                key={blog._id}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogs.map((blog, index) => {
          return (
            <BlogCardItem
              blog={blog}
              key={blog._id}
              fetchBlogs={fetchBlogs}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBlog;
