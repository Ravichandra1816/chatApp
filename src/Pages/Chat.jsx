import React from "react";
import LeftSideBar from "../Components/LeftSideBar";
import ChatBox from "../Components/ChatBox";
import RightSideBar from "../Components/RightSideBar";

const Chat = () => {
  return (
    <div className="min-h-[100vh] grid place-content-center bg-[#596aff]">
      <div className="w-[95%] h-[75vh] max-w-[1000px] bg-amber-50 grid grid-cols-3">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Chat;
