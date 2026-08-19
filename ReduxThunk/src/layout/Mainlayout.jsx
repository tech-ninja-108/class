import React from "react";
import Navbar from "../shared/ui/components/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
