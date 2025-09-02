import React from "react";
import QueryList from "../components/QueryList";

const TenantQueriesPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 tracking-tight">Tenant Queries</h2>
        <QueryList />
      </div>
    </div>
  );
};

export default TenantQueriesPage;
