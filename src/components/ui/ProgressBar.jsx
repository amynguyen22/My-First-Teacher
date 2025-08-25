import React from 'react'

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-green-500 transition-all" style={{ width: `${Math.round(value * 100)}%` }} />
    </div>
  )
}
