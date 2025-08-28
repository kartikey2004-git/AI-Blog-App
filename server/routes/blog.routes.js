import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  createBlog,
  deleteBlog,
  getOneBlog,
  listMineBlogs,
  listPublished,
  updateBlog,
} from "../controllers/blogController.js";

const blogRouter = express.Router();

// public routes
blogRouter.get("/", listPublished);
blogRouter.get("/:id", getOneBlog);

// authenticated routes

blogRouter.post("/create", userAuth, createBlog);
blogRouter.put("/update/:id", userAuth, updateBlog);
blogRouter.delete("/delete/:id", userAuth, deleteBlog);
blogRouter.get("/me/all", userAuth, listMineBlogs);

export default blogRouter;
