import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import spotifyRouter from "./routes/spotifyRoutes.js";
import mlModelRouter from "./routes/mlModelRoutes.js";

// import connectCloudinary from "./config/cloudinary.js";

dotenv.config();

const app = express();
const port = 4000;
connectDB();
// middlewares

app.use(express.json());

// Optional: parse URL-encoded bodies (for forms)
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*", // or restrict to your frontend Render URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// api end points
app.use("/api/user", userRouter);
app.use("/api/spotify", spotifyRouter);
app.use("/api/ml", mlModelRouter);

app.get("/", (req, res) => {
  res.send("api working ");
});

//localhost:4000/api/admin

app.listen(port, () => {
  console.log("server started at", "http://localhost:4000");
});

dotenv.config();
