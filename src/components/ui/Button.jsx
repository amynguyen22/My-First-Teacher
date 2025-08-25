import React from 'react'

export function Button({ className = "", children, onClick, disabled, type = "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold shadow-sm border border-gray-200 bg-white hover:bg-gray-50 active:scale-[0.99] transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}

export function PrimaryButton({ className = "", children, onClick, disabled, type = "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold shadow-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99] transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}
