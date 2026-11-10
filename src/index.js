// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(() => {
      app.listen(process.env.PORT || 5173, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!");
  });

// import express from "express";
// const app = express();

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("Not connecting");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})(); */
