import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/layout/Header";
import useTitle from "../hooks/useTitle";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: "$500",
    stock: 120,
    status: "In Stock",
    color: "blue",
    image: "https://via.placeholder.com/50x50?text=Product+1", // Example image URL
  },
  {
    id: 2,
    name: "Product 2",
    category: "Clothing",
    price: "$30",
    stock: 40,
    status: "Out of Stock",
    color: "red",
    image: "https://via.placeholder.com/50x50?text=Product+2", // Example image URL
  },
  {
    id: 3,
    name: "Product 3",
    category: "Furniture",
    price: "$200",
    stock: 80,
    status: "In Stock",
    color: "green",
    image: "https://via.placeholder.com/50x50?text=Product+3", // Example image URL
  },
  {
    id: 4,
    name: "Product 4",
    category: "Groceries",
    price: "$10",
    stock: 150,
    status: "In Stock",
    color: "indigo",
    image: "https://via.placeholder.com/50x50?text=Product+4", // Example image URL
  },
];

const ProductPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useTitle("Dashboard - Paystock");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
      <main className="flex-1 md:ml-64 w-full overflow-y-auto p-6">
        <Header onToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <section className="p-6">
          <h1 className="text-3xl font-bold mb-6">Product Inventory</h1>
          <table className="min-w-full table-auto bg-white border-collapse shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left text-gray-600">Image</th>
                <th className="p-3 text-left text-gray-600">Product</th>
                <th className="p-3 text-left text-gray-600">Category</th>
                <th className="p-3 text-left text-gray-600">Price</th>
                <th className="p-3 text-left text-gray-600">Stock</th>
                <th className="p-3 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(({ id, name, category, price, stock, status, color, image }) => (
                <tr key={id} className="border-b hover:bg-gray-100">
                  <td className="p-3">
                    <img src={image} alt={name} className="w-12 h-12 object-cover rounded-full" />
                  </td>
                  <td className="p-3">
                    <i className={`bi bi-box text-${color}-500 mr-2`} />
                    {name}
                  </td>
                  <td className="p-3">{category}</td>
                  <td className="p-3">{price}</td>
                  <td className="p-3">{stock}</td>
                  <td className="p-3">
                    <span
                      className={`text-${color}-500 font-semibold ${
                        status === "Out of Stock" ? "text-red-600" : ""
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
