import { Favourite } from "../models/favouriteModel.js";
import { Song } from "../models/songModel.js";


// Add song to favourites
export const addFavourite = async (req, res) => {
  try {
    const { songId } = req.body;
    const { userId } = req; // assuming middleware adds userId

    if (!songId) {
      return res.status(400).json({ message: "songId is required" });
    }

    // 1️⃣ Check if song exists in database
    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    // 2️⃣ Check if already favourited
    const exists = await Favourite.findOne({ userId, songId });
    if (exists) {
      return res.status(400).json({ message: "Song already in favourites" });
    }

    // 3️⃣ Create favourite with song details
    const favourite = await Favourite.create({
      userId,
      songId,
      title: song.title,
      artist: song.artist,
      album: song.album,
      mood: song.mood,
      duration: song.duration,
      image: song.image,
      date: new Date(),
    });

    res.status(201).json(favourite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all favourites for a user
export const getFavourites = async (req, res) => {
  try {
    const { userId } = req;
    const favourites = await Favourite.find({ userId });

    res.status(200).json(favourites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete favourite song
export const deleteFavourite = async (req, res) => {
  try {
    const { id } = req.params;
    const favourite = await Favourite.findByIdAndDelete(id);

    if (!favourite) {
      return res.status(404).json({ message: "Favourite not found" });
    }

    res.status(200).json({ message: "Removed from favourites", favourite });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
