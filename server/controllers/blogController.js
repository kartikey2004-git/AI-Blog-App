import { asyncHandler } from "../utils/asyncHandler.js";
import { Blog } from "../models/blogModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createBlog = asyncHandler(async (req, res) => {
  // Extract all the details from frontend about blog post when creating new blog

  const { title, description, published, category, tags } = req.body;

  const blog = await Blog.create({
    author: req.user?._id,
    title,
    description,

    /* 
    
    Step1. If tags is already an array (like ["react", "node"]), just use it as-is. 
    
    Else, check if tags exists (not null or undefined).

    -------------------------------------------


    Step2. Convert it into a string → String(tags) (so even if you get numbers etc., it won’t break).

    Split it by commas → "react, node , mongo" → ["react", " node ", " mongo"].

    .map((t) => t.trim()) → remove extra spaces → ["react", "node", "mongo"]

    .filter(Boolean) → removes empty values (like "" if someone typed react,,node).

    If tags is missing/empty → default to an empty array.
    
    */

    tags: Array.isArray(tags)
      ? tags
      : tags
      ? String(tags)
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [],
    published: !!published,
    category,
  });

  return res.status(201).json(new ApiResponse(201, blog, "Blog created"));
});

export const updateBlog = asyncHandler(async (req, res) => {
  // Extract all the details from frontend about blog post when updating blog

  const { title, description, published, category, tags } = req.body;

  // Check particular blog with blog id exists where author is current user ( check with help of current user ki id )

  const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });

  if (!blog)
    return res.status(404).json(new ApiResponse(404, null, "Blog Not found"));

  if (title !== undefined) blog.title = title;

  if (description !== undefined) blog.description = description;

  if (tags !== undefined)
    blog.tags = Array.isArray(tags)
      ? tags
      : String(tags)
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

  if (published !== undefined) blog.published = !!published;

  if (category !== undefined) blog.category = category;

  await blog.save();

  return res.status(200).json(new ApiResponse(200, blog, "Blog updated"));
});

export const deleteBlog = asyncHandler(async (req, res) => {
  // Check particular blog with blog id exists where author is current user ( check with help of current user ki id ) and delete it

  const blog = await Blog.findOneAndDelete({
    _id: req.params.id,
    author: req.user._id,
  });

  if (!blog)
    return res.status(404).json(new ApiResponse(404, null, "Blog Not found"));

  return res.status(200).json(new ApiResponse(200, null, "Blog deleted"));
});

// Authed: my blogs
export const listMineBlogs = asyncHandler(async (req, res) => {
  // Find all the blogs where the author is current user and we find by userId from req.user to get this , which is by userAUth middleware

  const blogs = await Blog.find({ author: req.user._id }).sort({
    updatedAt: -1,
  });

  return res.status(200).json(new ApiResponse(200, blogs, "My blogs"));
});

// Public: list published blogs
export const listPublished = asyncHandler(async (req, res) => {
  // It fetches only those blog documents where published: true

  /*

  Mongoose’s populate feature 
      
      - It replaces the author field (which is most likely a reference like ObjectId pointing to a User model)  with the actual user data.

      - "name" means: only bring the name field of the author, not the whole user object (email, password, etc.).

      - Sorts the blogs by createdAt field in the descending order
  
  */

  const blogs = await Blog.find({ published: true })
    .populate("author", "name")
    .sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, blogs, "Published blogs"));
});

// Public: get single blog if published
export const getOneBlog = asyncHandler(async (req, res) => {
  // It fetch only that blog document with given userID in params , fetched if public

  const blog = await Blog.findById(req.params.id).populate("author", "name");

  /*

  Mongoose’s populate feature 
      
      - It replaces the author field (which is most likely a reference like ObjectId pointing to a User model)  with the actual user data.

      - "name" means: only bring the name field of the author, not the whole user object (email, password, etc.).
  
  */

  if (!blog)
    return res.status(404).json(new ApiResponse(404, null, "Blog Not found"));

  if (!blog.published)
    return res
      .status(403)
      .json(new ApiResponse(403, null, "Blog is Not public"));

  return res.status(200).json(new ApiResponse(200, blog, "Blog"));
});
