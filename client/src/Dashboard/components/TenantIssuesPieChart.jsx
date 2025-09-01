import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Pending", value: 6 },
  { name: "In Progress", value: 3 },
  { name: "Resolved", value: 12 }
];

const COLORS = ["#F7B500", "#0D1B2A", "#2EC4B6"];

const TenantIssuesPieChart = () => (
  <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-100 h-[340px] flex flex-col justify-center">
    <h3 className="text-lg font-bold mb-4 text-blue-700">Tenant Issues Distribution</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default TenantIssuesPieChart;
