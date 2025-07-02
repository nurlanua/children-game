import React from 'react'

export default function Controls({ onChange }: { onChange: (num: number) => void }) {
  return (
    <div className="controls">
      {[0, 1, 2, 3, 4].map((num) => (
        <button
          key={num}
          className="control-button"
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  )
}
