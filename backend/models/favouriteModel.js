import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  songId: { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String, default: null },
  mood: { type: String, default: null },
  addedAt: { type: Date, default: Date.now },
});

export const Favourite = mongoose.model("Favourite", favouriteSchema);
