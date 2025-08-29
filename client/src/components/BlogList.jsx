/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const blogCategories = [
  "All",
  "Technology",
  "Health & Wellness",
  "Travel",
  "Business",
  "Lifestyle",
  "Gaming",
];

const demoBlogs = [
  {
    _id: "1",
    title: "The Future of Artificial Intelligence",
    subTitle: "How AI is reshaping industries",
    description:
      "Artificial Intelligence is no longer science fiction. From healthcare to finance, AI is driving transformation across industries. This blog explores the latest trends, opportunities, and challenges of adopting AI in business.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    createdAt: "2025-08-01T10:00:00Z",
    updatedAt: "2025-08-05T12:30:00Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "2",
    title: "Top 10 Travel Destinations in 2025",
    subTitle: "Where to go for your next adventure",
    description:
      "Planning your next trip? From exotic beaches to bustling cities, here are the top 10 travel destinations for 2025 that should be on every traveler’s bucket list.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    createdAt: "2025-07-20T09:15:00Z",
    updatedAt: "2025-07-22T11:00:00Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "3",
    title: "Healthy Morning Habits",
    subTitle: "Start your day with energy",
    description:
      "Morning routines set the tone for your entire day. Discover science-backed habits that boost productivity, improve mood, and enhance overall wellness.",
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    createdAt: "2025-06-15T08:00:00Z",
    updatedAt: "2025-06-16T14:20:00Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "4",
    title: "Mastering Remote Work",
    subTitle: "Stay productive anywhere",
    description:
      "Remote work is here to stay. This blog dives into the best practices, tools, and strategies for staying productive, maintaining work-life balance, and thriving in a remote environment.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    createdAt: "2025-05-12T07:30:00Z",
    updatedAt: "2025-05-13T09:45:00Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "5",
    title: "Minimalist Living",
    subTitle: "Less is more",
    description:
      "Minimalism isn’t just about owning fewer things; it’s about making room for what truly matters. Learn how to simplify your lifestyle and find happiness in less.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    createdAt: "2025-04-10T10:45:00Z",
    updatedAt: "2025-04-11T15:10:00Z",
    __v: 0,
    isPublished: false,
  },
  {
    _id: "6",
    title: "The Rise of Indie Game Developers",
    subTitle: "Creativity beyond big studios",
    description:
      "Indie game developers are changing the gaming landscape by creating unique and experimental titles that rival big-budget productions. This post explores how indie devs are reshaping the industry.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    createdAt: "2025-03-05T13:00:00Z",
    updatedAt: "2025-03-06T16:20:00Z",
    __v: 0,
    isPublished: true,
  },
];

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative pb-1 text-lg font-medium transition-colors ${
              menu === item
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item}
            {menu === item && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 rounded"
              />
            )}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {demoBlogs
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
