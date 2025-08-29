import BlogTableItem from "@/components/admin/BlogTableItem";
import React, { useEffect, useState } from "react";
import { FileText, MessageSquare, FileEdit } from "lucide-react";
import BlogCardItem from "@/components/admin/BlogCardItem";

// Demo Data
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

const dashboard_data = {
  blogs: 10,
  comments: 5,
  drafts: 0,
  recentBlogs: demoBlogs,
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashBoard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashBoard();
  }, []);

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blogs */}
        <div className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 opacity-90" />
          <div>
            <p className="text-xl sm:text-3xl font-semibold">
              {dashboardData.blogs}
            </p>
            <p className="text-xs sm:text-sm">Blogs</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <FileEdit className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 opacity-90" />
          <div>
            <p className="text-xl sm:text-3xl font-semibold">
              {dashboardData.drafts}
            </p>
            <p className="text-xs sm:text-sm">Drafts</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 text-green-500 opacity-90" />
          <div>
            <p className="text-xl sm:text-3xl font-semibold">
              {dashboardData.comments}
            </p>
            <p className="text-xs sm:text-sm">Comments</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>

        {/* Table → Lg+ */}
        <div className="hidden lg:block overflow-x-auto">
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
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  blog={blog}
                  key={blog._id}
                  fetchBlogs={fetchDashBoard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dashboardData.recentBlogs.map((blog, index) => {
            return <BlogCardItem
              blog={blog}
              key={blog._id}
              fetchBlogs={fetchDashBoard}
              index={index + 1}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
