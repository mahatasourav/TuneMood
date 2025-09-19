import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const userProfileData = async () => {
    try {
      const { data } = await axios.get(backendurl + "/api/user/get-profile", {
        headers: { token: token },
      });
      console.log("user data", data);
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    }
  };

  const addToFavourites = async (songId) => {
    try {
      const { data } = await axios.post(
        backendurl + "/api/user/add-favourites",
        {
          songId,
        },
        {
          headers: { token: token },
        }
      );

      if (data) {
        console.log("Favourite Songs Added:", data);
        toast.success("Song added to favourites!");
      }
    } catch (error) {
      console.log("ML API Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false); // <- here, in the finally block
    }
  };

  const value = {
    backendurl,
    token,
    setToken,
    userData,
    setUserData,
    userProfileData,
    favourites,
    setFavourites,
    addToFavourites,
  };

  useEffect(() => {
    if (token) {
      userProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
