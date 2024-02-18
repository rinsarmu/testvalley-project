import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Features/HomePage/Pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;