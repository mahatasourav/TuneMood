import logo from "./logo.png";
import TuneMood from "./TuneMood.png";
import heroImg from "./heroImg.png";
import topChart1 from "./topChart1.jpg";
import topChart2 from "./topChart2.jpg";
import topChart3 from "./topChart3.jpg";
import music1 from "./music1.png";
import music2 from "./music2.png";
import music3 from "./music3.png";
import music4 from "./music4.png";
import music5 from "./music5.png";
import music6 from "./music6.png";
import vector from "./Vector.png";
import likesBy from "./LikesBy.png";
import user_profile from "./user_profile.png";
import edit_icon from "./edit-icon.png";
import favouriteSongs_icon from "./favouriteSongs_icon.png";
import dot_icons from "./dot_icons.png";

export const assets = {
  logo,
  TuneMood,
  heroImg,
  topChart1,
  topChart2,
  music1,
  music2,
  music3,
  music4,
  music5,
  music6,
  vector,
  likesBy,
  user_profile,
  edit_icon,
  favouriteSongs_icon,
  dot_icons
};

export const topChartDummyData = [
  {
    id: 1,
    title: "Golden Age of 80s",
    artistName: "Sean Swadder",
    time: "1:00:00",
    image: topChart1,
  },
  {
    id: 2,
    title: "Reggage 'n' blues",
    artistName: "Dj YK Mule",
    time: "1:02:42",
    image: topChart2,
  },
  {
    id: 3,
    title: "Tomorrow's tunes",
    artistName: "Obi Datti",
    time: "2:01:25",
    image: topChart3,
  },
];

export const MoodSelectData = [
  { id: 1, emoji: "😊", mood: "Happy" },
  { id: 2, emoji: "😢", mood: "Sad" },
  { id: 3, emoji: "😌", mood: "Relaxed" },
  { id: 4, emoji: "🤩", mood: "Excited" },
  { id: 5, emoji: "❤️", mood: "Romantic" },
  { id: 6, emoji: "🔥", mood: "Energetic" },
  { id: 7, emoji: "😎", mood: "Chill" },
  { id: 8, emoji: "🤔", mood: "Thoughtful" },
  { id: 9, emoji: "😴", mood: "Sleepy" },
  { id: 10, emoji: "🎉", mood: "Party" },
  { id: 11, emoji: "💪", mood: "Motivated" },
  { id: 12, emoji: "🌧️", mood: "Moody" },
  { id: 13, emoji: "😇", mood: "Peaceful" },
  { id: 14, emoji: "🥺", mood: "Emotional" },
  { id: 15, emoji: "🧘", mood: "Meditative" },
  { id: 16, emoji: "🏃", mood: "Workout" },
  { id: 17, emoji: "🌞", mood: "Positive" },
  { id: 18, emoji: "😡", mood: "Angry" },
  { id: 19, emoji: "🌌", mood: "Dreamy" },
  { id: 20, emoji: "🤠", mood: "Adventurous" },
];

export const newReleaseDummyData = [
  { id: 1, title: "Life in a Bubble", artistName: "The Van", image: music1 },
  { id: 2, title: "Mountain", artistName: "Krisx", image: music2 },
  { id: 3, title: "Limits", artistName: "John Dillion", image: music3 },
  { id: 4, title: "Everything's block", artistName: "Ameed", image: music4 },
  { id: 5, title: "Cancelled", artistName: "Enimen", image: music5 },
  { id: 6, title: "Nomad", artistName: "Makrol eli", image: music6 },
  { id: 7, title: "Life in a Bubble", artistName: "The Van", image: music1 },
  { id: 8, title: "Mountain", artistName: "Krisx", image: music2 },
  { id: 9, title: "Limits", artistName: "John Dillion", image: music3 },
  { id: 10, title: "Everything's block", artistName: "Ameed", image: music4 },
  { id: 11, title: "Cancelled", artistName: "Enimen", image: music5 },
  { id: 12, title: "Nomad", artistName: "Makrol eli", image: music6 },
  { id: 13, title: "Life in a Bubble", artistName: "The Van", image: music1 },
  { id: 14, title: "Mountain", artistName: "Krisx", image: music2 },
  { id: 15, title: "Limits", artistName: "John Dillion", image: music3 },
  { id: 16, title: "Everything's block", artistName: "Ameed", image: music4 },
  { id: 17, title: "Cancelled", artistName: "Enimen", image: music5 },
  { id: 18, title: "Nomad", artistName: "Makrol eli", image: music6 },
  { id: 19, title: "Life in a Bubble", artistName: "The Van", image: music1 },
  { id: 20, title: "Mountain", artistName: "Krisx", image: music2 },
  { id: 21, title: "Limits", artistName: "John Dillion", image: music3 },
  { id: 22, title: "Everything's block", artistName: "Ameed", image: music4 },
  { id: 23, title: "Cancelled", artistName: "Enimen", image: music5 },
  { id: 24, title: "Nomad", artistName: "Makrol eli", image: music6 },
];

export const songs = [
  { id: 1, image:topChart1, name: "Shape of You", artist: "Ed Sheeran", album: "Divide", duration: "3:53", mood: "Happy", addedOn: "Today" },
  { id: 2, image:topChart2, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "4:02", mood: "Chill", addedOn: "2d ago" },
  { id: 3, image:topChart1, name: "Someone Like You", artist: "Adele", album: "21", duration: "4:45", mood: "Sad", addedOn: "1w ago" },
  { id: 4, image:topChart2, name: "Believer", artist: "Imagine Dragons", album: "Evolve", duration: "3:37", mood: "Energetic", addedOn: "3w ago" },
  { id: 5, image:topChart1, name: "Perfect", artist: "Ed Sheeran", album: "Divide", duration: "4:23", mood: "Romantic", addedOn: "1m ago" },
  { id: 6, image:topChart2, name: "Rolling in the Deep", artist: "Adele", album: "21", duration: "3:49", mood: "Sad", addedOn: "2m ago" },
  { id: 7,  image:topChart1, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", mood: "Party", addedOn: "Today" },
  { id: 8, image:topChart2, name: "Senorita", artist: "Shawn Mendes, Camila Cabello", album: "Single", duration: "3:11", mood: "Romantic", addedOn: "5d ago" },
];

