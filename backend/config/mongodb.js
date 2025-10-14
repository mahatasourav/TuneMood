import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env first
mongoose.set("strictQuery", true);

console.log("Mongo URI:", process.env.MONGODB_URI); // ✅ DEBUG: check the value

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1); // optional: exit the app if DB fails
  }
};

export default connectDB;
