// Home.jsx
import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        {/* Add your logo image here */}
        <img src="https://www.matter.in/public/assets/images/logo.svg" alt="Logo"  className="w-160 h-20" />
      </div>
    </div>
  );
};

export default Home;
