import React from "react";
import { IoMenu } from "react-icons/io5";

const Toggle = ({ onClick }) => {
  return (
    <div>
      <IoMenu
        className="text-black me-4 cursor-pointer w-9 h-9 m-6"
        onClick={onClick}
      />
    </div>
  );
};

export default Toggle;
