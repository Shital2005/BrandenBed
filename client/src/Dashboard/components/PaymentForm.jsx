import React, { useState } from "react";

const PaymentForm = () => {
  const [form, setForm] = useState({ tenant: "", amount: "", date: "", method: "Cash" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess("Payment submitted!");
        setForm({ tenant: "", amount: "", date: "", method: "Cash" });
      } else {
        setError("Failed to submit payment.");
      }
    } catch {
      setError("Network error.");
    }
    setLoading(false);
  };

  return (
    <form className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-2 text-blue-700">Submit Payment</h3>
      <input name="tenant" value={form.tenant} onChange={handleChange} placeholder="Tenant Name" required className="px-4 py-2 rounded border" />
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" required className="px-4 py-2 rounded border" />
      <input name="date" value={form.date} onChange={handleChange} type="date" required className="px-4 py-2 rounded border" />
      <select name="method" value={form.method} onChange={handleChange} className="px-4 py-2 rounded border">
        <option>Cash</option>
        <option>Bank Transfer</option>
        <option>Card</option>
      </select>
      <button type="submit" className="bg-blue-700 text-white font-bold py-2 rounded mt-2" disabled={loading}>{loading ? "Submitting..." : "Submit Payment"}</button>
      {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    </form>
  );
};

export default PaymentForm;
