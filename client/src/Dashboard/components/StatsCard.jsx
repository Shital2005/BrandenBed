import React from "react";

const StatsCard = ({ title, value, description }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center border-2 border-[#F7B500] transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <span className="text-lg font-semibold text-gray-600 mb-2">{title}</span>
    <span className="text-3xl font-extrabold text-blue-700 mb-2">{value}</span>
    {description && <span className="text-sm text-gray-400 mt-1">{description}</span>}
  </div>
);

export default StatsCard;
