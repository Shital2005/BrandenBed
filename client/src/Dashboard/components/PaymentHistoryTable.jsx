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
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/payments`);
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
      <div className="bg-white rounded-2xl shadow-xl p-4 border border-blue-100">
        <h3 className="text-xl font-bold mb-4 text-blue-700">Payment History</h3>
        {payments.length === 0 ? (
          <div className="text-gray-500">No payments found.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4">Tenant</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Method</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i} className="border-t hover:bg-blue-50 transition">
                  <td className="py-3 px-4 font-medium text-blue-900">{p.tenant}</td>
                  <td className="py-3 px-4">{p.amount}</td>
                  <td className="py-3 px-4">{p.date || <span className="text-gray-400">—</span>}</td>
                  <td className="py-3 px-4">{p.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
  );
};

export default PaymentHistoryTable;
