import React, { useState, useEffect } from "react";
import SubmitPaymentForm from "../components/SubmitPaymentForm";
import PaymentHistoryTable from "../components/PaymentHistoryTable";
import ReviewPaymentsTable from "../components/ReviewPaymentsTable";

function RentCollectionPage() {
  const [payments, setPayments] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/payments");
        if (res.ok) {
          const data = await res.json();
          setPayments(data);
        }
      } catch {}
    };
    fetchPayments();
  }, [refresh]);

  const handlePaymentSubmit = () => {
    setRefresh(r => !r);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Submit Payment */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Submit Payment</h2>
        <SubmitPaymentForm onSubmit={handlePaymentSubmit} />
      </div>

      {/* Two-column layout for tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Payment History */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Payment History</h2>
          <PaymentHistoryTable payments={payments} />
        </div>

        {/* Review Payments */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Review Payments</h2>
          <ReviewPaymentsTable />
        </div>
      </div>
    </div>
  );
}

export default RentCollectionPage;
