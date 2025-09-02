import React, { useState } from "react";

const initialPayments = [
  { transactionId: "TXN12345", property: "Green Villa", status: "Pending" },
  { transactionId: "TXN67890", property: "Sunset Apartments", status: "Approved" },
  { transactionId: "TXN54321", property: "Lakeview Homes", status: "Pending" }
];

const ReviewPaymentsTable = () => {
  const [payments, setPayments] = useState(initialPayments);

  const toggleStatus = idx => {
    setPayments(payments =>
      payments.map((p, i) =>
        i === idx
          ? { ...p, status: p.status === "Pending" ? "Approved" : "Pending" }
          : p
      )
    );
  };

    return (
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-50">
            <th className="py-3 px-4">Transaction ID</th>
            <th className="py-3 px-4">Property</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i} className="border-t hover:bg-blue-50 transition">
              <td className="py-3 px-4 font-medium text-blue-900">{p.transactionId}</td>
              <td className="py-3 px-4">{p.property}</td>
              <td className="py-3 px-4">
                <button
                  className={`px-4 py-2 rounded-xl font-bold shadow transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 ${p.status === "Approved" ? "bg-green-500 text-white" : "bg-yellow-400 text-black"}`}
                  onClick={() => toggleStatus(i)}
                >
                  {p.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default ReviewPaymentsTable;
