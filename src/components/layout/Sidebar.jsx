import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import useUser from "../../hooks/useUser";
import useLogout from "../../hooks/useLogout";

const Sidebar = ({ isOpen, onClose }) => {
  const username = useUser();
  const { logout } = useLogout();

  return (
    <aside
      className={`bg-gray-900 text-white w-64 fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out flex flex-col p-6 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
        <div>
          <h2 className="text-lg font-semibold">{username || "Loading..."}</h2>
        </div>
      </div>
      <nav className="mt-10 space-y-3 text-sm">
        {[  
          { icon: "bi-house-door-fill", label: "Dashboard", path: "/dashboard" },
          { icon: "bi-cart", label: "Products", path: "/products" },  
          { icon: "bi-box", label: "Inventory", path: "/inventory" },
          { icon: "bi-cart-check", label: "Orders", path: "/orders" },
          { icon: "bi-basket", label: "Purchase", path: "/purchase" },
          { icon: "bi-gear", label: "Settings", path: "/settings" },
        ].map(({ icon, label, path }) => (
          <Link
            key={label}
            to={path}  // Use `to` prop for navigation
            className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-800 transition"
          >
            <i className={`bi ${icon} text-lg`} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <a
          href="#"
          onClick={logout}
          title="Logout"
          className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-800 transition"
        >
          <i className="bi bi-box-arrow-right text-lg" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
