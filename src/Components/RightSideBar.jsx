import React from "react";
import assets from "../assets/assets";
// import { logout } from "../Config/Firebase";
// import {logout} from "../../Config/Firebase"
import { logout } from "../Config/Firebase"

const RightSideBar = () => {
  return (
    <div className="text-white bg-[#001030] relative h-[75vh] overflow-y-scroll">
      <div className="pt-10 text-center m-auto max-w-[70%]">
        <img
          src={assets.profile_img}
          className="w-[110px]  aspect-square rounded-[50%] ml-12 "
        />
        <h3 className="text-xl font-[400] flex items-center justify-center gap-1.5 my-1">
          Ravi <img src={assets.green_dot} className="dot" />
        </h3>
        <p className="text-md opacity-[80%]">
          Hey, There i am Ravi using Chat app
        </p>
      </div>
      <hr className="border-[#ffffff50] my-3" />
      <div className="py-0 px-5 text-sm">
        <p>Media</p>
        <div className="max-h-[180px] overflow-x-scroll grid grid-cols-3 gap-[5px] mt-[8px]">
          <img
            src={assets.pic1}
            className="w-[80px] rounded-lg cursor-pointer"
          />
          <img
            src={assets.pic2}
            className="w-[80px] rounded-lg cursor-pointer"
          />
          <img
            src={assets.pic3}
            className="w-[80px] rounded-lg cursor-pointer"
          />
          <img 
            src={assets.pic4}
            className="w-[80px] rounded-lg cursor-pointer"
          />
          <img 
            src={assets.pic1}
            className="w-[80px] rounded-lg cursor-pointer"
          />
          <img
            src={assets.pic2}
            className="w-[80px] rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <button className="absolute left-[20%] bottom-[20px] translate-x[-50%] bg-[#077eff] text-white border-none text-[12px] font-[300] py-[10px] px-[65px] rounded-[20px] cursor-pointer " onClick={()=>logout()}>
        Logout
      </button>
      {/* <button onClick={()=>logout}></button> */}
    </div>
  );
};

export default RightSideBar;
