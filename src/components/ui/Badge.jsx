import React from 'react'

export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full border ${className}`}>{children}</span>
  )
}
