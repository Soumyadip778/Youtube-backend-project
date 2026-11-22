import { ApiError } from "./ApiError";
import { User } from "../models/user.model";

const generateAccessAndRefreshToken = async (id) => {
  try {
    const user = await User.findById(id);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Unable to generate Access and Generate token");
  }
};

export { generateAccessAndRefreshToken };
