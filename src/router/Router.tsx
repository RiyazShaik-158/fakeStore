import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Layout from "../Layout/Layout";

const Router = () => {
  return (
    <Routes>
      {/* public route */}
      <Route path="/login" element={<Login />} />

      {/* protected route */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
