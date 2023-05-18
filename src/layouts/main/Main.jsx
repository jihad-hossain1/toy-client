import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="p-2 md:max-w-[1000px] mx-auto">
        <Navbar></Navbar>
      </div>
      <hr className="border-[] border-gray-300 my-2" />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
