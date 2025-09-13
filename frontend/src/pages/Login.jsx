import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center items-center px-4 py-4  ">
      <div className="bg-slate-400 rounded-2xl shadow-lg  w-full max-w-sm sm:max-w-md p-6 sm:p-8 ">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-200 mb-6">
          {/* For SignUp form name input will display only */}
          {isLogin ? "Login" : "Create Your Account"}
        </h2>
        <form action="" className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 sm:p-3 border rounded-lg text-black text-sm sm:text-base"
            required
          />

          {/* Submit Button */}
          <input
            type="submit"
            value={isLogin ? "Login" : "Create Account"}
            className="bg-slate-500 rounded-md w-full sm:w-40 mx-auto py-2 sm:py-3 px-2 cursor-pointer hover:bg-slate-600 transition "
          />
        </form>

        {/* Switch Link */}
        <p className="text-center font-medium text-sm sm:text-base text-gray-800 mt-5 mb-3">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-700 font-semibold hover:underline"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-700 font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
