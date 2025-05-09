// File: components/ThemeDays.js

import React from 'react'

const days = [
  { name: 'Monday',         description: '',                                         open: false },
  { name: 'Tuesday',        description: '',                                         open: false },
  { name: 'Wing Wednesday', description: 'Free wings with 3 burgers',               open: true  },
  { name: 'Thursday',       description: '',                                         open: false },
  { name: 'Friday',         description: '',                                         open: false },
  { name: 'Saturday',       description: '',                                         open: false },
  { name: 'Shake Sunday',   description: 'Pay extra ₹200 to convert your meal drink to shake', open: true  },
]

export default function ThemeDays() {
  return (
    <section id="theme-days" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Theme Days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {days.map(day => (
          <div
            key={day.name}
            className={`
              p-6 rounded-xl shadow flex flex-col justify-between
              ${day.open ? 'bg-white' : 'bg-gray-100 text-gray-500'}
            `}
          >
            <h3 className="text-lg font-semibold mb-2">{day.name}</h3>
            <p className="text-sm flex-grow">
              {day.open ? day.description : 'Coming Soon'}
            </p>
            {day.open ? (
              <span className="mt-4 inline-block px-3 py-1 rounded-full text-sm bg-accent text-black">
                Open
              </span>
            ) : (
              <span className="mt-4 inline-block px-3 py-1 rounded-full text-sm bg-gray-300 text-gray-700">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
