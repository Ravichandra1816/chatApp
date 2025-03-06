import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import UpdateUser from "./Pages/UpdateUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
