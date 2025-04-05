import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/Auth";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const auth = useAuth();
  const token = localStorage.getItem("token");

  if (!auth.token && !token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full bg-blue-500 h-[98%]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
