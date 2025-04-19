import React from "react";

const Header = ({ onToggle, isSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <button className="md:hidden text-3xl" onClick={onToggle}>
        <i className={`bi ${isSidebarOpen ? "bi-x" : "bi-list"}`}></i>
      </button>
      <h1 className="text-2xl md:text-3xl font-bold">Welcome, Nirmal 👋</h1>
      <input
        type="text"
        placeholder="Search..."
        className="hidden sm:block w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </header>
  );
};

export default Header;
