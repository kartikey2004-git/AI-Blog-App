import { asyncHandler } from "../utils/asyncHandler.js";
import { generateBlogDraft } from "../services/ai.services.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const generate = asyncHandler(async (req, res) => {

  // Extract topic and outline from frontend and postman from req.body

  const { topic, outline } = req.body;

  // Generate blog draft with help of AI response with groq-ai sdk
  
  const text = await generateBlogDraft({ topic, outline });

  return res
    .status(200)
    .json(new ApiResponse(200, { content: text }, "Draft generated"));
});
