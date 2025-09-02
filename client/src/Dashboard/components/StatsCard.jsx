import React from "react";

const StatsCard = ({ title, value, description, cardColor, cardSize }) => (
  <div className={`rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center border-2 border-yellow-400 transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer ${cardColor || 'bg-white'} ${cardSize || ''}`}>
    <span className={`text-lg font-semibold mb-2 ${cardColor ? 'text-black' : 'text-gray-600'}`}>{title}</span>
    <span className={`text-3xl font-extrabold mb-2 ${cardColor ? 'text-black' : 'text-blue-700'}`}>{value}</span>
    {description && <span className={`text-sm mt-1 ${cardColor ? 'text-black/70' : 'text-gray-400'}`}>{description}</span>}
  </div>
);

export default StatsCard;
