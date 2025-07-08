// src/components/Loader.jsx
import React from "react";
import "./loader.css";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div className="loader-container">
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
      <div className="box box-4"></div>
      <div className="box box-5"></div>
    </div>
  </div>
);
export default Loader;
