import mongoose from "mongoose";
import { CATEGORIES } from "../constant.js";

const blogSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: Object.values(CATEGORIES),
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);


export const Blog = mongoose.model("Blog", blogSchema)
