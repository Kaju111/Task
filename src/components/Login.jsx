import React, { useState } from "react";
import { IoFingerPrintOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, remainingTime }) => {
  const nav = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "123456";
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    if (remainingTime <= 0) {
      setError("You have exhausted your allocated time.");
      return;
    }

    if (password === correctPassword) {
      setError("");
      setIsLoggingIn(true);
      nav("/lob");
      setTimeout(() => {
        onLogin();
        nav("/lab");
      }, 1000);
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen bg-black text-[#00FFEC]">
      <div className="border-[#00FFEC] border-2 h-[600px] w-[600px] rounded-full flex flex-col items-center justify-center relative">
        <div className={`circle ${isLoggingIn ? "animate-rotate-fade" : ""}`}>
          <IoFingerPrintOutline className="h-[80px] w-[80px]" />
        </div>
        <input
          className="border-[#00FFEC] w-[400px] border h-16 bg-black outline-none p-[10px] my-20"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <button
          className="border border-[#00FFEC] py-[20px] px-[50px] bg-[#00FFEC] text-black font-bold text-2xl"
          onClick={handleLogin}
        >
          Enter Lab
        </button>
      </div>
    </div>
  );
};

export default Login;
