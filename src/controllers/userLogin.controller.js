import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResonse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const loginUser = asyncHandler(async (req, res) => {
  //Input email & userName.toLowerCase()
  //Validate if it's empty
  //Validate if user exists
  //check password
  //return response

  const { email, userName } = req.body;

  if ([email, userName].some((fields) => fields?.trim() === "")) {
    throw new ApiError(400, "Username and Email cannot be empty");
  }
  const username = userName.toLowerCase();
  const createdUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!createdUser) {
    throw new ApiError(400, "No such user found");
  }
  const { password } = req.body;
  if (!password) {
    throw new ApiError(400, "Password cannot be empty");
  }
  const isPasswordValid = await createdUser.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Password does not match");
  }

  res.status(201).json(new ApiResonse(201, "Successfully logged in"));
});

export { loginUser };
