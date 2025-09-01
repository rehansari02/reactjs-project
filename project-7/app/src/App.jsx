import React, { useState } from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col w-full h-[100vh]">
        <TopNav toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-5 md:p-7 overflow-auto bg-[#EEEEF4]  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
