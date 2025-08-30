import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Quill from "quill";

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  ["link", "image"],
  ["clean"],
];

const blogCategories = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize Quill editor
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: { toolbar: toolbarOptions },
      });

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Here you can send data to your backend
    console.log({ title, subTitle, content, category, isPublished, image });
  };

  const generateContent = async () => {
    // AI content generation logic
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="md:w-[900px] w-full mt-12 mx-auto bg-white dark:bg-[#1e1e2f] rounded-3xl border border-gray-200 dark:border-gray-700 p-10 space-y-10 transition-all duration-300"
    >
      {/* Image Upload */}
      <div className="space-y-3">
        <Label
          htmlFor="image"
          className="block text-xl font-bold text-gray-900 dark:text-gray-100"
        >
          Upload Cover Image
        </Label>
        <Label
          htmlFor="image"
          className="flex items-center justify-between gap-5 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer px-6 py-6 bg-gray-50 dark:bg-[#2a2a3f] hover:bg-gray-100 dark:hover:bg-[#3a3a5f] transition-all duration-300 shadow-inner"
        >
          <div className="flex items-center gap-5">
            {!image ? (
              <FiUploadCloud className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            ) : (
              <img
                src={URL.createObjectURL(image)}
                className="h-20 w-28 object-cover rounded-md"
              />
            )}
            <div className="text-left">
              <span className="block text-gray-800 dark:text-gray-200 font-medium">
                Drag & drop file
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">
                or{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Browse
                </span>
              </span>
            </div>
          </div>
          <span className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
            Upload
          </span>
        </Label>
        <Input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          name="image"
          hidden
          required
        />
      </div>

      {/* Blog Title */}
      <div className="space-y-2">
        <Label
          htmlFor="title"
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          Blog Title
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter blog title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
      </div>

      {/* Sub Title */}
      <div className="space-y-2">
        <Label
          htmlFor="subTitle"
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          Sub Title
        </Label>
        <Input
          id="subTitle"
          type="text"
          placeholder="Enter sub title"
          required
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
          className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
      </div>

      {/* Blog Description */}
      <div className="space-y-2 relative">
        <Label className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Blog Description
        </Label>

        {/* Quill Editor Container */}
        <div className="relative w-full border border-gray-300 dark:border-gray-600 rounded-xl min-h-[400px] overflow-hidden shadow-inner bg-white dark:bg-[#2a2a3f]">
          {/* Quill Editor */}
          <div ref={editorRef} className="w-full min-h-[350px] p-4" />

          {/* AI Button in Bottom Right */}
          <Button
            onClick={generateContent}
            type="button"
            className="absolute bottom-4 right-4 text-sm md:text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Generate with AI
          </Button>
        </div>
      </div>

      {/* Blog Category */}
      <div className="w-full max-w-md relative" ref={dropdownRef}>
        <div
          className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-[#1f1f2e] text-gray-800 dark:text-gray-200 cursor-pointer flex justify-between items-center shadow-sm"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{category}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#2a2a3f] border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-60 overflow-auto">
            {blogCategories.map((opt, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-800 flex dark:text-gray-200"
                onClick={() => {
                  setCategory(opt);
                  setDropdownOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Publish Now */}
      <div className="flex items-center gap-4 mt-4">
        <Input
          type="checkbox"
          id="publish"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
          className="w-6 h-6 text-blue-600 border-gray-300 dark:border-gray-500 rounded focus:ring-blue-500"
        />
        <Label
          htmlFor="publish"
          className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer"
        >
          Publish Now
        </Label>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-start mt-6">
        <Button
          type="submit"
          className="px-8 py-3 text-lg  text-white font-semibold rounded-2xl shadow-lg transition-all duration-300"
        >
          Publish Blog
        </Button>
      </div>
    </form>
  );
};

export default AddBlog;
