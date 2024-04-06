import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen -mt-24">
      <div
        class="inline-block h-[300px] w-[300px] animate-spin rounded-full border-8  border-current border-e-transparent align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
