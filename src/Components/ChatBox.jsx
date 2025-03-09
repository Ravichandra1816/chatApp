import React from "react";
import assets from "../assets/assets";

const ChatBox = () => {
  return (
    <div className="h-[75vh] relative bg-[#f1f5ff]">
      <div className="flex items-center gap-[10px] border-b-1 border-b-[#c6c6c6] py-[15px] px-[10px]">
        <img
          src={assets.profile_img}
          className="w-[38px] rounded-2xl aspect-1/1"
        />
        <p className="flex text-xl text-[#393939] item-center">
          Ravi <img src={assets.green_dot} className="w-[25px]" />
        </p>
        <img src={assets.help_icon} className="w-[25px]" />
      </div>

      <div className="height flex flex-col-reverse overflow-y-scroll pb-[50px] px-1 py-1">
        {/* // sender massge */}
        <div className="flex items-end justify-end gap-1.5 py-3 px-3">
          <p className="text-white bg-[#077eff] p-2 max-w-[200px] text-lg rounded-t-[8px] rounded-b-[8px] rounded-br-none  mb-[30px]">
            gb ghiahkbt ihgiqetqh;hqhrg{" "}
          </p>
          <div className="items-center text-lg">
            <img
              src={assets.profile_img}
              className="w-[27px] aspect-1/1 rounded-2xl"
            />
            <p>4:50PM</p>
          </div>
        </div>
        <div className="flex items-end justify-end gap-1.5 py-3 px-3">
          <img
            src={assets.pic1}
            className="max-w-[230px] mb-[30px] rounded-lg "
          />
          <img
            src={assets.profile_img}
            className="w-[27px] aspect-1/1 rounded-2xl"
          />
          <p>4:50PM</p>
        </div>
        {/* reciver massge */}
        <div className="flex items-end justify-end gap-1.5 py-3  px-3 flex-row-reverse">
          <p className="text-white bg-[#077eff] p-2 max-w-[200px] text-lg rounded-t-[8px] rounded-bl-none rounded-l-[8px] rounded-r-[8px] mb-[30px]">
            gb ghiahkbt ihgiqetqh;hqhrg{" "}
          </p>
          <div className="items-center text-lg">
            <img
              src={assets.profile_img}
              className="w-[27px] aspect-square rounded-2xl"
            />
            <p>4:50PM</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 py-[10px] px-[15px] bg-white absolute bottom-0 left-0 right-0">
        <input
          type="text"
          placeholder="Send a message"
          className="flex-1 border-none outline-none"
        />
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          hidden
          className="flex-1 border-none"
        />
        <label htmlFor="image" className="flex">
          <img src={assets.gallery_icon} className="w-[22px] cursor-pointer" />
        </label>
        <img src={assets.send_button} className="w-[30px] cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatBox;
