import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {type: String, ref: "User", required: true},
  songId: {type: String, required: true},
  name: String,
  artist: String,
  image: String,
  addedAt: {type: Date, default: Date.now}
}
);

export const Favourite = mongoose.model("Favourite", favouriteSchema);