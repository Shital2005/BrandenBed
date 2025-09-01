import React, { useEffect, useState } from "react";

const PaymentHistoryTable = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/payments");
        if (res.ok) {
          const data = await res.json();
          setPayments(data);
        } else {
          setError("Failed to fetch payments.");
        }
      } catch {
        setError("Network error.");
      }
      setLoading(false);
    };
    fetchPayments();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Payment History</h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-2 px-4">Tenant</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Method</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 px-4">{p.tenant}</td>
                <td className="py-2 px-4">{p.amount}</td>
                <td className="py-2 px-4">{p.date}</td>
                <td className="py-2 px-4">{p.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistoryTable;
