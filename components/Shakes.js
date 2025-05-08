// File: components/Shakes.js

import Image from 'next/image'

export default function Shakes() {
  const items = [
    {
      name: 'Lotus Premium Shake',
      price: 550,
      description: 'A thick, creamy Lotus shake blended with caramelized Biscoff and topped with crushed biscuit. Deep flavor, smooth texture.',
      image: '/images/lotus-premium-shake.jpg',
    },
    {
      name: 'Oreo Shake',
      price: 450,
      description: 'A thick, creamy blend of crushed Oreo cookies, topped with rich cookie crumble. Deep, chocolatey, and built for bold cravings.',
      image: '/images/oreo-shake.jpg',
    },
    {
      name: 'Vanilla Shake',
      price: 450,
      description: 'A thick, silky vanilla shake with a smooth finish and a hint of vanilla flake topping. Clean, classic, and crafted for comfort.',
      image: '/images/vanilla-shake.jpg',
    },
  ]

  return (
    <section id="shakes" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Shakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
