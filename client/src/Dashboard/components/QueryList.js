import React, { useEffect, useState } from "react";

const statusColors = {
  "Pending": "bg-yellow-400 text-black",
  "In Progress": "bg-blue-400 text-white",
  "Resolved": "bg-green-500 text-white"
};

const QueryList = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQueries = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/queries");
        if (res.ok) {
          const data = await res.json();
          setQueries(data);
        } else {
          setError("Failed to fetch queries.");
        }
      } catch {
        setError("Network error.");
      }
      setLoading(false);
    };
    fetchQueries();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Tenant Issues</h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <ul className="space-y-4">
          {queries.map(q => (
            <li key={q.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-blue-50 hover:bg-blue-100 transition">
              <div>
                <div className="font-semibold text-blue-900">{q.tenant}</div>
                <div className="text-gray-700">{q.issue}</div>
              </div>
              <span className={`px-3 py-1 rounded-xl font-bold text-sm shadow ${statusColors[q.status]}`}>{q.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryList;
