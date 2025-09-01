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
          <th className="py-2 px-4">Transaction ID</th>
          <th className="py-2 px-4">Property</th>
          <th className="py-2 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((p, i) => (
          <tr key={i} className="border-t">
            <td className="py-2 px-4">{p.transactionId}</td>
            <td className="py-2 px-4">{p.property}</td>
            <td className="py-2 px-4">
              <button
                className={`px-3 py-1 rounded font-bold ${p.status === "Approved" ? "bg-green-500 text-white" : "bg-yellow-400 text-black"}`}
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
