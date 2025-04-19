import React from "react";

const Overlay = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${
        isOpen ? "" : "hidden"
      }`}
    />
  );
};

export default Overlay;
