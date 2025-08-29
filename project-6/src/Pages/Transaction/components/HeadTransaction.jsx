import React, { useState } from "react";

function HeadTransaction() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 149 },
    { name: "Withdraw", count: 15 },
    { name: "Trade", count: 50 },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4 px-2 sm:px-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-3 sm:px-4 py-1.5 rounded-lg transition font-medium text-sm flex items-center gap-2 
              ${
                activeTab === tab.name
                  ? "bg-purple-100 text-purple-600 border border-purple-300"
                  : "hover:bg-gray-100 text-gray-700 border border-transparent"
              }`}
          >
            {tab.name}
            <span className="text-xs font-bold bg-gray-200 px-2 py-0.5 rounded">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-[220px] px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
    </div>
  );
}

export default HeadTransaction;
