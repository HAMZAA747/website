// File: components/CartelDeals.js

import React from 'react'

export default function CartelDeals() {
  const deals = [
    {
      name: 'Wing Wednesday',
      description: 'Free wings with 3 burgers',
      day: 'Wednesday',
    },
    {
      name: 'Shake Sunday',
      description: 'Pay extra Rs 200 to convert your meal drink to shake',
      day: 'Sunday',
    },
  ]

  const today = [
    'Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday'
  ][new Date().getDay()]

  return (
    <section id="cartel-deals" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Cartel Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {deals.map(deal => {
          const isOpen = deal.day === today
          return (
            <div
              key={deal.name}
              className={`
                p-6 rounded-xl shadow flex flex-col justify-between
                ${isOpen ? 'bg-white' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}
              `}
            >
              <h3 className="text-lg font-semibold">{deal.name}</h3>
              <p className="mt-2 text-sm flex-grow">
                {isOpen ? deal.description : 'Coming Soon'}
              </p>
              <span className={`
                mt-4 inline-block px-3 py-1 rounded-full text-sm 
                ${isOpen 
                  ? 'bg-accent text-black' 
                  : 'bg-gray-300 text-gray-700'}
              `}>
                {isOpen ? 'Open' : 'Coming Soon'}
              </span>
            </div>
          )
        })}
      </div>
    </section>
)
}
