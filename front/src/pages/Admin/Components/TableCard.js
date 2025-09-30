import React from "react";

export default function TableCard({ title, value, subtitle }) {
  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <div className="text-sm text-cyan-300 font-semibold">{title}</div>
      <div className="text-3xl font-extrabold text-white">{value}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-2">{subtitle}</div>}
    </div>
  );
}
