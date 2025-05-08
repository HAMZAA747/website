// File: website/components/CartelDeals.js

import Image from 'next/image'

export default function CartelDeals() {
  const deals = [
    {
      name: 'Friends & Fun Deal',
      price: 2690,
      description: '3 Grill Burgers, 3 Fries, 3 Dips, 1 × 1.5 L Drink',
      image: '/images/friends-and-fun-deal.jpg',
    },
    {
      name: 'Budget Friendly Deal',
      price: 1180,
      description: '2 Crispy Burgers, 1 Fries, 2 Regular Drinks',
      image: '/images/budget-friendly-deal.jpg',
    },
    {
      name: 'The Butcher Deal',
      price: 2130,
      description: 'Cartel Samsh, Oklahoma, 2 Fries, 2 Drinks',
      image: '/images/the-butcher-deal.jpg',
    },
    {
      name: 'Family Feast Deal',
      price: 3030,
      description: '2 Grill Burgers, 2 Crispy Burgers, Cartel Samsh, Nuggets+Fries, 1 × 1.5 L Drink',
      image: '/images/family-feast-deal.jpg',
    },
    {
      name: 'Wraps & Side Duo',
      price: 1960,
      description: '2 Grill Wraps, Wings, 2 Dips, 2 Drinks',
      image: '/images/wraps-side-duo-deal.jpg',
    },
    {
      name: 'Shakes & Share Deal',
      price: 1450,
      description: '2 Shakes, 5 Chicken Tenders, 2 Dips',
      image: '/images/shakes-share-deal.jpg',
    },
  ]

  return (
    <section id="cartel-deals" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Cartel Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map(deal => (
          <div key={deal.name} className="bg-white rounded-xl overflow-hidden shadow">
            <Image
              src={deal.image}
              alt={deal.name}
              width={360}
              height={260}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{deal.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{deal.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {deal.price}</span>
                <button className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
