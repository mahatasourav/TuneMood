import express from "express";

const userRouter = express.Router();

export default userRouter;

// POST /api/users/register → Register

// POST /api/users/login → Login

// PUT /api/users/update → Update profile

// POST /api/users/:id/favourites/add → Add to favourite

// DELETE /api/users/:id/favourites/remove/:playlistId → Remove from favourite

// GET /api/users/:id/mood/chart → Get mood chart
