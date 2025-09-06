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
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/payments`);
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
      <div className="min-h-screen bg-blue-50 p-6 md:p-10 space-y-8">
        {/* Submit Payment */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-200 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 tracking-tight">Submit Payment</h2>
          <SubmitPaymentForm onSubmit={handlePaymentSubmit} />
        </div>

        {/* Two-column layout for tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment History */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 tracking-tight">Payment History</h2>
            <PaymentHistoryTable payments={payments} refresh={refresh} />
          </div>

          {/* Review Payments */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 tracking-tight">Review Payments</h2>
            <ReviewPaymentsTable />
          </div>
        </div>
      </div>
    );
}

export default RentCollectionPage;
