import React, { useState } from "react";
import assets from "../assets/assets";
import { login, Signup } from "../Config/Firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === "Sign up") {
      Signup(username, email, password);
    } else {
      login(email, password);
    }
  };
  return (
    <div className="bglogin cover flex items-center justify-evenly min-h-[100vh] ">
      <img src={assets.logo_big} className="w-[20vh] h-[150px]" />
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-[20px] flex flex-col gap-[20px] rounded-xl"
      >
        <h2 className="text-2xl font-bold flex items-center justify-center">
          {currentState}
        </h2>
        {currentState === "Sign up" ? (
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username "
            required
            className="p-[10px] border-2 border-[#c9c9c9] rounded-xl outline-[#077eff]"
          />
        ) : null}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email address"
          required
          className="p-[10px] border-2 border-[#c9c9c9] rounded-xl outline-[#077eff]"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Passwors"
          required
          className="p-[10px] border-2 border-[#c9c9c9] rounded-xl outline-[#077eff]"
        />
        <button
          type="submit"
          className="p-[10px] bg-[#077eff] text-white text-[16px] border-none rounded-sm cursor-pointer"
        >
          {currentState === "Sign up" ? "Create a account" : "Login Now"}
        </button>
        <div className="flex gap-2 text-sm text-[#808080]">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privecy policy.</p>
        </div>
        <div className="flex flex-col gap-1">
          {currentState === "Sign up" ? (
            <p className="text-lg text-[#5c5c5c]">
              Already have an account{" "}
              <span
                className="font-500 text-[#077eff] cursor-pointer"
                onClick={() => setCurrentState("Log In")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-lg text-[#5c5c5c]">
              Create an account{" "}
              <span
                className="font-500 text-[#077eff] cursor-pointer"
                onClick={() => setCurrentState("Sign up")}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
