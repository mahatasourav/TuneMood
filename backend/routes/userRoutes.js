import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js"; // adjust path as needed

const userRouter = express.Router();

// ======================
// User Authentication
// ======================

// Register a new user
userRouter.post("/register", registerUser);

// Login a user
userRouter.post("/login", loginUser);

// // ======================
// // User Profile
// // ======================

// // Update user profile
// userRouter.put("/update", updateProfile);

// // ======================
// // Favourites
// // ======================

// // Add to favourites
// userRouter.post("/:id/favourites/add", addToFavourites);

// // Remove from favourites
// userRouter.delete("/:id/favourites/remove/:playlistId", removeFromFavourites);

// // ======================
// // Mood Chart
// // ======================

// // Get mood chart for a user
// userRouter.get("/:id/mood/chart", getMoodChart);

export default userRouter;
