import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";

const Login = () => {
  const [state, setState] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { backendurl, token, setToken } = useContext(AppContext);

  const onSubmitHandeler = async (event) => {
    event.preventDefault();
    try {
      if (state === "signup") {
        console.log("hiii");
        const { data } = await axios.post(backendurl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log("data", data);

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);

          toast.success("Account created successfully");
          setName("");
          setEmail("");
          setPassword("");
          setState("login");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendurl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/user-profile");
    }
  }, [token]);
  return (
    <form
      onSubmit={onSubmitHandeler}
      className="flex justify-center items-center px-4 py-4  "
    >
      <div className="bg-slate-400 rounded-2xl shadow-lg  w-full max-w-sm sm:max-w-md p-6 sm:p-8 ">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-200 mb-6">
          {/* For SignUp form name input will display only */}
          {state === "signup" ? "Create Your Account " : "Login"}
        </h2>
        <div action="" className="flex flex-col gap-4">
          {state === "signup" && (
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Your Name"
              className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-slate-500 rounded-md w-full sm:w-40 mx-auto py-2 sm:py-3 px-2 cursor-pointer hover:bg-slate-600 transition "
          >
            {state === "signup" ? "Create Account" : "Login"}
          </button>
        </div>

        {/* Switch Link */}
        <p className="text-center font-medium text-sm sm:text-base text-gray-800 mt-5 mb-3">
          {state === "signup" ? (
            <span>
              Already have an account?{" "}
              <p
                onClick={() => setState("login")}
                className="text-blue-700 font-semibold  cursor-pointer"
              >
                Login
              </p>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <p
                onClick={() => setState("signup")}
                className="text-blue-700 font-semibold cursor-pointer"
              >
                SignUp
              </p>
            </span>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
