import Favourite from "../models/favouriteModel.js";

// Add song to favourites
export const addFavourite = async (req, res) => {
  try {
    const { songId, title, artist, mood, image } = req.body;

    
    const userId = req.body.userId; 

    // Check if already in favourites
    const exists = await Favourite.findOne({ userId, songId });
    if (exists) {
      return res.status(400).json({ message: "Song already in favourites" });
    }

    const favourite = await Favourite.create({
      userId,
      songId,
      title,
      artist,
      mood,
      image, 
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
    const userId = req.params.userId; 
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
