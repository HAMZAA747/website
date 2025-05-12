// components/CartelDeals.js
import { useState } from 'react'
import { useCartContext } from '@/context/CartContext'

const DEALS = [
  {
    key: 'friends-and-fun',
    name: 'Friends and Fun Deal',
    persons: 3,
    items: [
      '3× Grill Burgers (Your Choice)',
      '3× French Fries',
      '3× Dip Sauce (Your Choice)',
      '1× 1.5 L Drink'
    ],
    price: 2690
  },
  {
    key: 'budget-friendly',
    name: 'Budget Friendly Deal',
    persons: 2,
    items: [
      '2× Crispy Fried Chicken Burgers (The Runner, The Crunch Dealer)',
      '1× French Fries',
      '2× Regular Drinks'
    ],
    price: 1180
  },
  {
    key: 'the-butcher',
    name: 'The Butcher Deal',
    persons: 2,
    items: [
      '1× Cartel Smash',
      '1× Oklahoma',
      '2× French Fries',
      '2× Regular Drinks'
    ],
    price: 2130
  },
  {
    key: 'family-feast',
    name: 'Family Feast Deal',
    persons: '4–5',
    items: [
      '2× Grill Burgers (Your Choice)',
      '2× Crispy Fried Chicken Burgers (The Runner, The Crunch Dealer)',
      '1× Cartel Smash',
      'Sides (Nuggets + Fries)',
      '1× 1.5 L Drink'
    ],
    price: 3030
  },
  {
    key: 'wraps-side-duo',
    name: 'Wraps and Side Duo',
    persons: 2,
    items: [
      '2× Grill Wraps (Your Choice)',
      '1× Wings (Your Choice)',
      '2× Dip Sauces',
      '2× Regular Drinks'
    ],
    price: 1960
  },
  {
    key: 'shakes-share',
    name: 'Shakes & Share Deal',
    persons: 2,
    items: [
      '2× Shakes (Your Choice)',
      'Chicken Tender (5 pcs)',
      '2× Dip Sauce (Your Choice)'
    ],
    price: 1450
  }
]

export default function CartelDeals({ searchQuery }) {
  const { addToCart } = useCartContext()
  const [openKey, setOpenKey] = useState(null)

  // Filter deals based on search query
  const filteredDeals = DEALS.filter(deal =>
    deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="cartel-deals" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif text-white mb-8">Cartel Deals</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDeals.map(deal => {
          const isOpen = openKey === deal.key
          return (
            <div
              key={deal.key}
              onClick={() => setOpenKey(isOpen ? null : deal.key)}
              className="cursor-pointer select-none rounded-xl p-6 shadow-lg bg-black bg-opacity-50 hover:bg-black hover:bg-opacity-75 transition"
            >
              <h3 className="text-2xl font-semibold text-white">
                {deal.name}{' '}
                <span className="text-sm font-light text-gray-300">
                  ({deal.persons} persons)
                </span>
              </h3>

              <ul className="mt-4 space-y-1 text-gray-200">
                {deal.items.map((line, i) => (
                  <li key={i} className="text-sm">• {line}</li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-bold text-[#f2aa21]">
                  {deal.price} RS
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(deal)
                  }}
                  className="px-4 py-1 rounded-full text-sm bg-[#f2aa21] text-black"
                >
                  Add to Cart
                </button>
              </div>

              {isOpen && (
                <div className="mt-4 p-4 bg-gray-800 rounded-md text-gray-300 text-sm">
                  <strong>Special instructions:</strong> Let us know any custom preferences when you check out!
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
