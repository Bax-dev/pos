import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
      <main className="flex-1 md:ml-64 w-full overflow-y-auto p-6">
        <Header onToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <DashboardCards />
      </main>
    </div>
  );
};

export default Dashboard;
