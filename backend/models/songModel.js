import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: String,
  duration: String,
  mood: String,
  image: String,
  date: Date,
});

export const Song = mongoose.model("Song", songSchema);
