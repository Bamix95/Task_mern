import mongoose from "mongoose";
import { config } from "./app.config.js";

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDb;
