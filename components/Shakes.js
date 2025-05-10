// File: components/Shakes.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Shakes() {
  const items = [
    {
      name: 'Lotus Premium Shake',
      price: 550,
      description:
        'A thick, creamy Lotus shake blended with caramelized Biscoff and topped with crushed biscuit. Deep flavor, smooth texture.',
      image: '/images/shakes/lotus-premium-shake.jpg',
    },
    {
      name: 'Oreo Shake',
      price: 450,
      description:
        'A thick, creamy blend of crushed Oreo cookies, topped with rich cookie crumble. Deep, chocolatey, and built for bold cravings.',
      image: '/images/shakes/oreo-shake.jpg',
    },
    {
      name: 'Vanilla Shake',
      price: 450,
      description:
        'A thick, silky vanilla shake with a smooth finish and a hint of vanilla flake topping. Clean, classic, and crafted for comfort.',
      image: '/images/shakes/vanilla-shake.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = item => {
    setSelected({ ...item, category: 'Shakes' })
    setOpen(true)
  }

  return (
    <section id="shakes" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Shakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => openModal(item)}
            onKeyPress={e => e.key === 'Enter' && openModal(item)}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-xl mb-1 text-black">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-black">
                  Rs {item.price}
                </span>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-[#f2aa21] text-black px-4 py-2 rounded-full font-semibold text-sm hover:brightness-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductModal isOpen={open} onClose={() => setOpen(false)} product={selected} />
    </section>
  )
}
