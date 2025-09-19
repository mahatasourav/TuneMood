import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfileData,
  updateUserProfile,
} from "../controllers/userController.js"; // adjust path as needed
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";
import { addFavourite, getFavourites } from "../controllers/favouriteController.js";

const userRouter = express.Router();

// Register a new user
userRouter.post("/register", registerUser);

// login
userRouter.post("/login", loginUser);

// get user profile
userRouter.get("/get-profile", authUser, getUserProfileData);

// Update user profile
userRouter.patch(
  "/update-profile",
  upload.single("imageFile"),
  authUser,
  updateUserProfile
);

// // ======================
// // Favourites
// // ======================

// // Add to favourites
userRouter.post("/add-favourites", authUser, addFavourite);

userRouter.get("/get-favourites", authUser, getFavourites);

// // Remove from favourites
// userRouter.delete("/:id/favourites/remove/:playlistId", removeFromFavourites);

// // ======================
// // Mood Chart
// // ======================

// // Get mood chart for a user
// userRouter.get("/:id/mood/chart", getMoodChart);

export default userRouter;
