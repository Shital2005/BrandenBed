import React from "react";  
import PaymentForm from "../components/PaymentForm";
import PaymentHistoryTable from "../components/PaymentHistoryTable";

const RentCollectionPage = () => (
  <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-[#F7B500] mt-8">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0D1B2A] tracking-tight text-center">Rent Collection</h2>
    <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
      <div className="flex-1">
        <PaymentForm />
      </div>
      <div className="flex-1">
        <PaymentHistoryTable />
      </div>
    </div>
  </div>
);

export default RentCollectionPage;
