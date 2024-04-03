import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Lab from "./components/Lab";
import Loader from "./components/Loader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600);

  useEffect(() => {
    const storedTime = localStorage.getItem("remainingTime");
    if (storedTime) {
      setRemainingTime(parseInt(storedTime));
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = (time) => {
    setIsLoggedIn(false);
    setRemainingTime(time);
    localStorage.setItem("remainingTime", time);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login onLogin={handleLogin} remainingTime={remainingTime} />
          }
        />
        <Route path="/lab" element={<Lab onExit={handleLogout} />} />
        <Route path="/lob" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
