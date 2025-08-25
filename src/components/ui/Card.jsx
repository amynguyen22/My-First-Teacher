import React from 'react'

export default function Card({ className = "", children, onClick, role }) {
  return (
    <div
      role={role}
      onClick={onClick}
      className={`bg-white/80 backdrop-blur border border-gray-200 shadow-sm rounded-2xl p-4 ${onClick ? "cursor-pointer hover:shadow-md transition" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
