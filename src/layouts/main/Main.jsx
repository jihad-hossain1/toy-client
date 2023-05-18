import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="shadow-md p-2">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
