import React from "react";
import ExportButton from "../Pages/Transaction/components/ExportButton";
import HeadTransaction from "../Pages/Transaction/components/HeadTransaction";

function TransactionLayout() {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: { name: "INR Deposit", tag: "E-Transfer" },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: { name: "INR Withdraw", tag: "Wire Transfer" },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: { name: "Buy", tag: "BTC" },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: { name: "Sell", tag: "BTC" },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: { name: "BTC Deposit" },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: { name: "BTC Withdraw" },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "bg-gray-500",
    processing: "bg-yellow-500",
    completed: "bg-green-600",
    cancelled: "bg-red-600",
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Export Button */}
      <div className="flex justify-end">
        <ExportButton />
      </div>

      {/* Data Section */}
      <div className="w-full bg-white rounded-2xl shadow">
        {/* Header + Filters */}
        <div className="headTransac flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 h-auto sm:h-[70px] border-b border-gray-200 px-4 py-3">
          <HeadTransaction />
        </div>

        {/* Table */}
        <div className="table overflow-y-auto max-h-[530px] w-full overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                {["Transaction ID", "Date", "Type", "Amount", "Status"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100 text-sm">
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3 whitespace-nowrap">{row.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.date}
                    <br />
                    <span className="text-gray-500">{row.time}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium">{row.type.name}</div>
                    {row.type.tag && (
                      <div className="text-gray-500 text-xs">
                        {row.type.tag}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.amount}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full text-white ${
                        statusColor[row.status]
                      }`}
                    >
                      {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionLayout;
