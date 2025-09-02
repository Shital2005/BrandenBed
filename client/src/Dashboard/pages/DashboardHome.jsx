import React from 'react';
import StatsCard from '../components/StatsCard';
import RentChart from '../components/RentChart';
import TenantIssuesPieChart from '../components/TenantIssuesPieChart';

const DashboardHome = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-yellow-400 text-center mt-8">
      <div className="relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 min-h-[220px] items-start absolute left-0 right-0 -top-4">
          <StatsCard title="Pending Tenant Queries" value={12} description="Issues waiting to be resolved" cardColor="bg-yellow-400 text-black" cardSize="h-48" />
          <StatsCard title="Rent Payments Collected (This Month)" value="€18,450" description="Shows incoming revenue" cardColor="bg-yellow-400 text-black" cardSize="h-48" />
          <StatsCard title="New Properties Added (This Week)" value={3} description="Highlights portfolio growth" cardColor="bg-yellow-400 text-black" cardSize="h-48" />
          <StatsCard title="Active Employees Logged In" value={5} description="Team activity at a glance" cardColor="bg-yellow-400 text-black" cardSize="h-48" />
        </div>
        <div className="pt-40" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <RentChart />
        <TenantIssuesPieChart />
      </div>
    </div>
  );
};

export default DashboardHome;
