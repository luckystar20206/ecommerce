import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { logIn, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    logIn(userData.email, userData.password)
      .then((result) => {
        setError(null);
        setSuccess("Login Successfully Done!");
        // e.target.reset()
        navigate(from, {replace: true})
      })
      .catch((err) => {
        const errorMessage = err.message;
        setSuccess(null);
        setError(errorMessage);
      });
  };

  const handleForgetPassword = () => {
    if (!userData.email) {
      toast.error("Please put your Email!!!");
      return;
    }
    resetPassword(userData.email)
      .then(() => {
        toast.success("Please check email and reset the password!");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <Toaster />
      <h1 className="wrapper text-center mb-6">Login</h1>
      <form className="max-w-sm mx-auto w-[500px]">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-orange40"
          >
            Your email
          </label>
          <div className="flex items-center justify-center border px-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm  text-sm outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="Put your email."
              value={userData.email}
              onChange={handleInput}
              required=""
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-orange40"
          >
            Your password
          </label>
          {showPassword ? (
            <div className="flex items-center justify-center border px-2">
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </span>
              <input
                show="password"
                id="password"
                name="password"
                className="shadow-sm  text-sm outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Put your password."
                value={userData.password}
                onChange={handleInput}
                required=""
              />
            </div>
          ) : (
            <div className="flex items-center justify-center border px-2">
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm  text-sm outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Put your password."
                value={userData.password}
                onChange={handleInput}
                required=""
              />
            </div>
          )}
        </div>
        <p
          onClick={handleForgetPassword}
          className="hover:underline text-sm mb-3 block cursor-pointer"
        >
          Forget Password
        </p>
        <Link className="underline text-sm mb-3 block" to="/register">
          Don't Have any accouct, , Please create a accouct{" "}
        </Link>
        {success && <p className="mb-3 text-green">{success}</p>}
        {error && <p className="mb-3 text-red">{error}</p>}
        <button
          onClick={handleLogin}
          type="submit"
          className="text-white bg-orange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
