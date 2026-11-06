import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `MongoDB connected !! DB Host: ${connectionInstant.connection.host}`
    );
  } catch (err) {
    console.log("Connection failed");
    console.error(err);

    process.exit(1);
  }
};

export default connectDB;
