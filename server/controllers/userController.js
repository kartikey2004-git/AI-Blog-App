import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const getUserData = asyncHandler(async (req, res) => {
  // Get userId from req.user which is integrated by userAUth middleware

  const userId = req.user?._id;

  // Find existing user in the database with given userId

  const user = await User.findById(userId).select("+isAccountVerified");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const userData = {
    name: user.name,
    isAccountVerified: user.isAccountVerified,
    email: user.email,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User data fetched successfully"));
});
