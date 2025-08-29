import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full min-h-[200px] gap-2">
      <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-0"></div>
      <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-150"></div>
      <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-300"></div>
    </div>
  );
};

export default Loader;
