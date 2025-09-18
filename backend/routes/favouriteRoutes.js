import express from "express";
import {
  addFavourite,
  deleteFavourite,
  getFavourites,
} from "../controllers/favouriteController.js";

const router = express.Router();

router.get("/:userId", getFavourites);
router.post("/", addFavourite);
router.delete("/:id", deleteFavourite);

export default router;
