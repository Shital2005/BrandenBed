import React from 'react';
import StatsCard from '../components/StatsCard';
import RentChart from '../components/RentChart';
import TenantIssuesPieChart from '../components/TenantIssuesPieChart';

const DashboardHome = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-[#F7B500] text-center mt-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0D1B2A] tracking-tight">Team Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 min-h-[250px] md:min-h-[350px] lg:min-h-[400px] items-center">
        <StatsCard title="Pending Tenant Queries" value={12} description="Issues waiting to be resolved" />
        <StatsCard title="Rent Payments Collected (This Month)" value="€18,450" description="Shows incoming revenue" />
        <StatsCard title="New Properties Added (This Week)" value={3} description="Highlights portfolio growth" />
        <StatsCard title="Active Employees Logged In" value={5} description="Team activity at a glance" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <RentChart />
        <TenantIssuesPieChart />
      </div>
    </div>
  );
};

export default DashboardHome;
