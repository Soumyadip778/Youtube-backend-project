import { ApiError } from "./ApiError.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Token generation error:", error);

    throw new ApiError(500, "Unable to generate access and refresh tokens");
  }
};

export { generateAccessAndRefreshToken };
