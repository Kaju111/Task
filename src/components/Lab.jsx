import React, { useState, useEffect } from "react";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Lab = ({ onExit }) => {
  const log = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExit(0);
      log("/");
    }
  }, [timeLeft, onExit]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleExit = () => {
    localStorage.setItem("remainingTime", timeLeft);
    onExit(timeLeft);
    log("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black tex text-[#00FFEC]">
      <p className="border border-[#00FFEC] py-5 px-9 rounded-xl font-bold text-xl">
        Time remaining: {formatTime(timeLeft)}
      </p>
      <button
        className="border border-[#00FFEC] py-5 px-9 rounded-xl font-bold text-xl flex items-center gap-3 mt-4 hover:bg-[#00FFEC] hover:duration-100 hover:scale-105 hover:text-black ease-in-out transition"
        onClick={handleExit}
      >
        Exit <ImExit />
      </button>
    </div>
  );
};

export default Lab;
