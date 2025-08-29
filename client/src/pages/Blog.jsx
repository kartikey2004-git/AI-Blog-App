/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

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

const Comments = [
  {
    _id: "66dfe0a9c9b10123abcd0001",
    blog: "66dfe0a9c9b10123abcd1001", // Blog post ID
    name: "Aarav Sharma",
    content: "Really loved the insights in this blog! Very helpful 👏",
    isApproved: true,
    createdAt: "2025-08-20T10:15:00.000Z",
    updatedAt: "2025-08-20T10:20:00.000Z",
    __v: 0,
  },
  {
    _id: "66dfe0a9c9b10123abcd0002",
    blog: "66dfe0a9c9b10123abcd1002",
    name: "Meera Kapoor",
    content: "I think more details on implementation would make it perfect.",
    isApproved: true,
    createdAt: "2025-08-21T14:32:00.000Z",
    updatedAt: "2025-08-21T14:40:00.000Z",
    __v: 0,
  },
  {
    _id: "66dfe0a9c9b10123abcd0003",
    blog: "66dfe0a9c9b10123abcd1003",
    name: "Rohan Verma",
    content: "Not sure I agree with all the points, but good read overall.",
    isApproved: false,
    createdAt: "2025-08-22T09:12:00.000Z",
    updatedAt: "2025-08-22T09:15:00.000Z",
    __v: 0,
  },
  {
    _id: "66dfe0a9c9b10123abcd0004",
    blog: "66dfe0a9c9b10123abcd1001",
    name: "Priya Singh",
    content: "Can you share more real-world use cases? 🙌",
    isApproved: true,
    createdAt: "2025-08-23T18:25:00.000Z",
    updatedAt: "2025-08-23T18:30:00.000Z",
    __v: 0,
  },
  {
    _id: "66dfe0a9c9b10123abcd0005",
    blog: "66dfe0a9c9b10123abcd1002",
    name: "Aditya Mehta",
    content: "Subscribed to your blog, excited for more AI content! 🚀",
    isApproved: true,
    createdAt: "2025-08-24T12:45:00.000Z",
    updatedAt: "2025-08-24T12:50:00.000Z",
    __v: 0,
  },
  {
    _id: "66dfe0a9c9b10123abcd0006",
    blog: "66dfe0a9c9b10123abcd1003",
    name: "Sanya Gupta",
    content: "This blog inspired me to start my own AI project 🔥",
    isApproved: false,
    createdAt: "2025-08-25T08:10:00.000Z",
    updatedAt: "2025-08-25T08:12:00.000Z",
    __v: 0,
  },
];

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = demoBlogs.find((item) => item._id == id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(Comments);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Blog header */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-sm text-gray-500">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          {data.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
          {data.subTitle}
        </h2>
        <p className="mt-4 text-gray-700 font-medium">By Michael Brown</p>
      </div>

      {/* Blog content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Comments ({comments.length})
        </h3>

        <div className="space-y-6 mb-12">
          {comments.map((item, index) => (
            <Card key={index} className="p-4 rounded-2xl shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  {/* Left side: Avatar + Name + Comment */}
                  <div className="flex gap-3 items-start">
                    {/* Avatar */}
                    <Avatar className="w-10 h-10 shrink-0">
                      <AvatarFallback>
                        {item.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name + Comment */}
                    <div className="flex flex-col">
                      <p className="font-medium items-start justify-start flex text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-gray-700 mt-1">{item.content}</p>
                    </div>
                  </div>

                  {/* Right side: Time */}
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {Moment(item.createdAt).fromNow()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Comment */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">
            Add your comment
          </h4>
          <form onSubmit={addComment} className="space-y-4">
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
              required
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Write your comment..."
              className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              rows={4}
            ></textarea>
            <Button type="submit" className="w-full md:w-auto flex">
              Submit
            </Button>
          </form>
        </div>

        <div className="mt-6">
          <p className="mb-3 font-medium flex  text-gray-800">
            Share this article on social media
          </p>
          <div className="flex gap-4">
            {/* Facebook */}
            <button className="p-2 rounded-full border-1 border-black/70 transition">
              <FaFacebookF size={20} />
            </button>

            {/* X (Twitter) */}
            <button className="p-2 rounded-full border-1 border-black/70  transition">
              <FaTwitter size={20} />
            </button>

            {/* Google Plus */}
            <button className="p-2 rounded-full border-1 border-black/70  transition">
              <FaGooglePlusG size={20} />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader/>
  );
};

export default Blog;
