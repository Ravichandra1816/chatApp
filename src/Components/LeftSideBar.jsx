import React from "react";
import assets from "../assets/assets";

const LeftSideBar = () => {
  return (
    <div className="bg-[#001030] h-[75vh] text-white ">
      <div className="p-[20px]">
        <div className="flex justify-between items-center">
          <img src={assets.logo} className="max-w-[140px]" />
          <div className="relative pt-2.5 pb-2.5 menu">
            <img
              src={assets.menu_icon}
              className="max-h-[20px] opacity-[0.6] cursor-pointer "
            />
            <div className="absolute w-[130px] top-full right-0 p-3 rounded-sm bg-white text-black hidden  sub-menu ">
              <div>
                <p className="text-md cursor-pointer">Edit Profile</p>
                <hr className="border-none h-0.5 bg-[#a4a4a4] my-2" />
                <p className="text-md cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center p-[10px] gap-4 mt-6 bg-[#002670]">
          <img src={assets.search_icon} className="w-4" />
          <input
            type="text"
            placeholder="Search here"
            className=" bg-transparent border-none outline-none text-white text-lg"
          />
        </div>
      </div>
      <div className="flex flex-col h-[70%] overflow-y-scroll">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 p-3 cursor-pointer text-lg hover:bg-[#077eff]"
            >
              <img
                src={assets.profile_img}
                className="w-[35px] aspect-1/1 rounded-[50%]"
              />
              <div className="flex flex-col">
                <p>Ravi</p>
                <span className="text-[#9f9f9f] text-sm hover:text-white">
                  Hello, How are you
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
