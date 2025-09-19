import express from "express";
import axios from "axios";
import  { Song } from "../models/songModel.js";

const mlModelRouter = express.Router();

// Map moods to hidden seed songs
const moodSeeds = {
  happy: "Walking After You",
  sad: "Missing",
  relaxed: "Summer Love",
  excited: "Thriller",
  romantic: "When I Fall In Love",
  energetic: "Song 2",
  chill: "Easy Rider",
  thoughtful: "Imagine",
  sleepy: "Dream On",
  party: "Dance, Dance",
  motivated: "Get Back",
  moody: "Crazier",
  peaceful: "Silent Night",
  emotional: "Hallelujah",
  meditative: "Abide With Me",
  workout: "Suck My Kiss",
  positive: "Let It Be",
  angry: "Decapitated",
  dreamy: "Light Years",
  adventurous: "Route 66",
};

// Use environment variable or fallback hosted Flask API
const ML_API_URL =
  process.env.ML_API_URL ||
  "https://music-recommendar-system.onrender.com/recommend";

// POST /api/ml/predict → Get ML prediction
mlModelRouter.post("/predict", async (req, res) => {
  try {
    const { mood } = req.body || {};
    if (!mood) return res.status(400).json({ error: "Mood is required" });
    console.log("call is in backend");
    const seedSong = moodSeeds[mood.toLowerCase()];
    if (!seedSong) return res.status(400).json({ error: "Invalid mood" });

    // Make GET request with query param
    const response = await axios.get(
      `${ML_API_URL}?song=${encodeURIComponent(seedSong)}`
    );

    console.log("ML API RAW RESPONSE:", response.data);

    const recommendedSongs = response.data.recommendations; 

    const songsWithId = [];
    for (const s of recommendedSongs) {
      let song = await Song.findOne({ title: s.title, artist: s.artist });

      if (!song) {
        song = await Song.create({
          title: s.song,
          artist: s.artist,
          album: s.album || null,
          mood: mood, // we already know the mood
          duration: s.duration || null,
          image: s.image || null,
          date: new Date(),
        });
      }

      songsWithId.push({
        _id: song._id, // ✅ this is our songId
        title: song.title,
        artist: song.artist,
        album: song.album,
        mood: song.mood,
        duration: song.duration,
        image: song.image,
        date: song.date,
      });
    }

    res.json(songsWithId); 
  } catch (err) {
    console.error("ML API Error:", err.message);
    res.status(500).json({ error: "ML service unavailable" });
  }
});

export default mlModelRouter;
