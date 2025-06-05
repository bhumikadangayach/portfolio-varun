import React from "react";

const HeroSplit = () => {
  return (
    <a href="https://x.com/NukelancerS/status/1853368973666255016">
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 bg-[#ececec] flex flex-col justify-center px-24">
        <h1 className="text-5xl font-medium text-gray-800 text-left">NukeLancerS</h1>
        <p className="mt-4 text-xl text-left text-gray-600">
          Web2/3 Creative Design/Production Studio
        </p>
        <a
          href="https://x.com/NukelancerS/status/1853368973666255016"
          className="mt-6 flex text-left text-[#584391] text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Know More
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="w-1/2  overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://framerusercontent.com/images/x4HAbIqMESoV1VRAKMP2sIN7o.png"
          alt="Background Visual"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
    </a>
  );
};

export default HeroSplit;
