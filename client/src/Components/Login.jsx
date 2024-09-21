import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const data = await res.data;
      toast.success(data.message);

      setTimeout(() => {
        navigate("/");
      },1000)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen w-full flex justify-center items-center">
        <form
          className="min-w-[30%]  px-4 pb-8 shadow-2xl rounded-lg"
          onSubmit={handleLogin}
        >
          <h1 className="font-bold text-3xl mb-4 py-6 text-center">LogIn</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-slate-100 h-10 rounded-lg outline-none px-2 shadow-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-slate-100 h-10 rounded-lg outline-none px-2 shadow-md"
            />
          </div>
          <div className="mb-4 text-end">
            <Link to="/forgot" className="text-blue-500 ">
              Forget Password
            </Link>
          </div>
          <button className="w-full h-10 rounded-lg bg-black text-white">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
