// File: website/components/Drinks.js

import Image from 'next/image'

export default function Drinks() {
  const items = [
    {
      name: 'Regular Drink',
      price: 120,
      description: 'Classic carbonated beverage served chilled.',
      image: '/images/regular-drink.jpg',
    },
    {
      name: 'Regular Water',
      price: 80,
      description: 'Pure bottled water to quench your thirst.',
      image: '/images/regular-water.jpg',
    },
    {
      name: '1.5 L Drink',
      price: 200,
      description: 'Shareable 1.5 L soft drink for the table.',
      image: '/images/drink-1-5l.jpg',
    },
    {
      name: '1.5 L Water',
      price: 120,
      description: 'Large pure bottled water, perfect for sharing.',
      image: '/images/water-1-5l.jpg',
    },
  ]

  return (
    <section id="drinks" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Drinks / Water</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow">
            <Image
              src={item.image}
              alt={item.name}
              width={360}
              height={260}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
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
