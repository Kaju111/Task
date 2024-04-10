import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { RiSettings4Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#020027] h-screen px-4 py-2">
      <div className="my-2 mb-4 ">
        <h1 className="text-3xl text-white font-bold mt-4">rampnow</h1>
      </div>
      <hr />
      <ul className="mt-16 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3">
            <TbListDetails className="inline-block w-6 h-6 mr-2 -mt-2" />
            Book Details
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="/dashboard" className="px-3">
            <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-2" />
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 mt-[700px]">
          <a href="" className="px-3">
            <RiSettings4Fill className="inline-block w-6 h-6 mr-2 -mt-2" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
