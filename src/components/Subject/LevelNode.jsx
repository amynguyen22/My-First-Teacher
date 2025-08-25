import React from 'react'
import { Check } from 'lucide-react'

export default function LevelNode({ idx, status, onOpen }) {
  const colors = {
    locked: "bg-gray-200 text-gray-500 border-gray-300",
    open: "bg-white text-blue-700 border-blue-300",
    done: "bg-green-500 text-white border-green-600",
  }[status];
  return (
    <button
      type="button"
      onClick={status !== "locked" ? onOpen : undefined}
      className={`w-16 h-16 rounded-full border grid place-items-center shadow ${colors}`}
      aria-label={`Level ${idx} ${status}`}
    >
      {status === "done" ? <Check /> : <span className="text-lg font-extrabold">{idx}</span>}
    </button>
  )
}
