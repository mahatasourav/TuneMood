import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favourites: [
      {
        playlistId: String,
        title: String,
        artist: String,
        moodTag: String,
      },
    ],
    moodHistory: [
      {
        mood: String,
        songId: String, // spotify track id
        listenedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

// Mood, Favourite, Prediction
