import React from "react";

const Loader = () => {
  return (
    <div className="bg-black place-items-center grid h-screen w-full">
      <div className="w-[200px] h-[90px] rounded-full border-[#00FFEC] border-4 animate-spin"></div>
    </div>
  );
};

export default Loader;
