import React, { useState } from "react";

const properties = ["Green Villa", "Sunset Apartments", "Lakeview Homes"];
const tenants = ["John Doe", "Jane Smith", "Alice Brown"];

const SubmitPaymentForm = () => {
  const [form, setForm] = useState({ property: "", tenant: "", amount: "", type: "Cash", transactionId: "" });
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const paymentWithDate = {
        ...form,
        date: new Date().toLocaleDateString()
      };
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentWithDate)
      });
      if (res.ok) {
        setSuccess("Payment submitted!");
        setForm({ property: "", tenant: "", amount: "", type: "Cash", transactionId: "" });
      } else {
        setSuccess("Failed to submit payment.");
      }
    } catch {
      setSuccess("Error submitting payment.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <select name="property" value={form.property} onChange={handleChange} required className="px-4 py-2 rounded border">
        <option value="">Select Property</option>
        {properties.map(p => <option key={p}>{p}</option>)}
      </select>
      <select name="tenant" value={form.tenant} onChange={handleChange} required className="px-4 py-2 rounded border">
        <option value="">Select Tenant</option>
        {tenants.map(t => <option key={t}>{t}</option>)}
      </select>
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" required className="px-4 py-2 rounded border" />
      <select name="type" value={form.type} onChange={handleChange} className="px-4 py-2 rounded border">
        <option>Cash</option>
        <option>Bank Transfer</option>
        <option>Card</option>
      </select>
      <input name="transactionId" value={form.transactionId} onChange={handleChange} placeholder="Transaction ID" className="px-4 py-2 rounded border" />
      <button type="submit" className="bg-blue-700 text-white font-bold py-2 rounded mt-2">Submit Payment</button>
      {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
    </form>
  );
};

export default SubmitPaymentForm;
