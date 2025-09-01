import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

function Transaction() {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <div className="transaction">
      <h5 className="text-sm text-gray-500">Recent Transaction</h5>
      <div className="transaction-list mt-3 flex flex-col gap-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon; // Capital letter component
          return (
            <div
              key={transaction.id}
              className="transaction-item flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="icon bg-gray-100 p-2 rounded-lg">
                  <Icon className="text-xl text-gray-700" />
                </div>
                <div className="text">
                  <p className="font-bold">{transaction.text}</p>
                  <p className="text-sm text-gray-500">
                    {transaction.timestamp}
                  </p>
                </div>
              </div>
              <div
                className={`amount font-bold ${
                  transaction.amount.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.amount}
              </div>
            </div>
          );
        })}
        <button className="mt-6 w-full bg-gray-100 py-2 text-md rounded-xl font-bold hover:cursor-pointer hover:bg-gray-200">
          View All
        </button>
      </div>
    </div>
  );
}

export default Transaction;
