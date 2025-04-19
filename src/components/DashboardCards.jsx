import React from "react";

const cards = [
  { icon: "bi-box-seam", label: "Total Products", value: "5,483", color: "blue" },
  { icon: "bi-cart-check", label: "Orders", value: "2,859", color: "green" },
  { icon: "bi-boxes", label: "Total Stock", value: "5,483", color: "indigo" },
  {
    icon: "bi-exclamation-circle",
    label: "Out of Stock",
    value: "38",
    color: "red",
    danger: true,
  },
];

const DashboardCards = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {cards.map(({ icon, label, value, color, danger }) => (
      <div
        key={label}
        className="bg-white p-5 rounded-xl shadow-md flex items-center"
      >
        <i className={`bi ${icon} text-${color}-500 text-3xl mr-4`} />
        <div>
          <p className="text-gray-500">{label}</p>
          <h3
            className={`text-2xl font-semibold ${
              danger ? "text-red-600" : ""
            }`}
          >
            {value}
          </h3>
        </div>
      </div>
    ))}
  </section>
);

export default DashboardCards;
