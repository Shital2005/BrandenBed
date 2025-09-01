import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", rent: 12000 },
  { name: "Feb", rent: 14500 },
  { name: "Mar", rent: 16000 },
  { name: "Apr", rent: 15500 },
  { name: "May", rent: 17000 },
  { name: "Jun", rent: 18450 },
];

const RentChart = () => (
  <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-100 h-[340px] flex flex-col justify-center">
    <h3 className="text-lg font-bold mb-4 text-blue-700">Monthly Rent Collection (Example)</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rent" stroke="#0D1B2A" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RentChart;
