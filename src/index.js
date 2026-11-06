// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

connectDB();

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
