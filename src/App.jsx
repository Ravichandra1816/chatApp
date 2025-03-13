import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import UpdateUser from "./Pages/UpdateUser";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/Firebase";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/chat");
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
