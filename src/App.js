import React from "react";
import SignUp from "./components/SignUp";
import Buttons from "./components/Buttons";
import PostHome from "./components/PostHome";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <SignUp />
      <br></br>
      <Login />

      <br></br>
      <br></br>
      <PostHome />

      <Buttons />
    </div>
  );
}
