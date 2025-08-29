import CommentTableItem from "@/components/admin/CommentTableItem";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

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

const comments_data = [
  {
    _id: "6811ed9e7836a82ba747cb25",
    blog: demoBlogs[0],
    name: "Michael Scott",
    content: "This is my new comment",
    isApproved: false,
    createdAt: "2025-04-30T09:30:06.918Z",
    updatedAt: "2025-04-30T09:30:06.918Z",
    __v: 0,
  },
  {
    _id: "6810a752fbb942aa7cbf4adb",
    blog: demoBlogs[1],
    name: "John Doe",
    content: "This is a nice blog",
    isApproved: false,
    createdAt: "2025-04-29T10:17:54.832Z",
    updatedAt: "2025-04-29T10:17:54.832Z",
    __v: 0,
  },
  {
    _id: "680779aebef75c08f8b4898f",
    blog: demoBlogs[2],
    name: "Jack London",
    content: "Hi this blog is must to read",
    isApproved: true,
    createdAt: "2025-04-22T11:12:46.547Z",
    updatedAt: "2025-04-22T11:13:10.015Z",
    __v: 0,
  },
  {
    _id: "680770aeb2897e5c28bf9b26",
    blog: demoBlogs[3],
    name: "Sam Smith",
    content: "This is the best blog, everybody should read it",
    isApproved: false,
    createdAt: "2025-04-22T10:34:22.020Z",
    updatedAt: "2025-04-22T10:34:22.020Z",
    __v: 0,
  },
  {
    _id: "68076468e32055c94a696cf5",
    blog: demoBlogs[4],
    name: "Peter Lawrence",
    content:
      "Honestly, I did not expect this to work, but it totally did. Saved my project!",
    isApproved: true,
    createdAt: "2025-04-22T09:42:00.444Z",
    updatedAt: "2025-04-22T10:24:55.626Z",
    __v: 0,
  },
];

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  useEffect(() => {
    setComments(comments_data);
  }, []);

  const filteredComments = comments.filter((c) => {
    if (filter === "Approved") return c.isApproved;
    if (filter === "Not Approved") return !c.isApproved;
    return true; // fallback (in case you add "All" later)
  });

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      {/* Header + Filter Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-3xl mb-4">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Comments</h1>
        <div className="flex gap-2">
          {/* Approved Button */}
          <Button
            onClick={() => setFilter("Approved")}
            variant={filter === "Approved" ? "default" : "secondary"}
            className="px-4 py-1 text-xs rounded-full"
          >
            Approved
          </Button>

          {/* Not Approved Button */}
          <Button
            onClick={() => setFilter("Not Approved")}
            variant={filter === "Not Approved" ? "default" : "secondary"}
            className="px-4 py-1 text-xs rounded-full"
          >
            Not Approved
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg max-w-3xl">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Blog Title & Comment</th>
              <th className="px-6 py-3 max-sm:hidden">Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.map((comment, idx) => (
              <CommentTableItem
                key={comment._id}
                comment={comment}
                index={idx + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
