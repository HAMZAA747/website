// components/ThemeDays.js

import React from 'react'

const themeDays = [
  {
    name: 'Wing Wednesday',
    description: 'Free wings with 3 burgers',
  },
  {
    name: 'Shake Sunday',
    description: 'Pay extra ₹200 to convert your meal drink to shake',
  },
]

export default function ThemeDays() {
  return (
    <section id="theme-days" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Theme Days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {themeDays.map(day => (
          <div
            key={day.name}
            className="p-6 rounded-xl shadow bg-white flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold mb-2 text-black">
              {day.name}
            </h3>
            <p className="text-sm flex-grow text-black">
              {day.description}
            </p>
            <span className="mt-4 inline-block px-4 py-2 rounded-full text-sm bg-accent text-black font-medium">
              Open
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
