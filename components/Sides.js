import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

const items = [
  {
    name: 'Tender Strips',
    price: 410,
    description: 'Golden, crispy chicken tenders — juicy inside, perfect crunch. Served with your choice of dip.',
    image: '/images/sides/tender-strips.jpg',
  },
  {
    name: 'Chicken Nuggets',
    price: 345,
    description: 'Bite-sized crispy nuggets with golden crunch and tender core — served with your favorite dip.',
    image: '/images/sides/nuggets.jpg',
  },
  {
    name: 'Sweet Chili Wings',
    price: 450,
    description: 'Crispy wings glazed in glossy Sweet Chili sauce — clash of heat and sweetness.',
    image: '/images/sides/sweet-chili-wings.jpg',
  },
  {
    name: 'Garlic Mayo Wings',
    price: 450,
    description: 'Golden-fried wings tossed in rich garlic mayo — creamy, garlicky, dangerously addictive.',
    image: '/images/sides/garlic-mayo-wings.jpg',
  },
  {
    name: 'Fiery Peri Wings',
    price: 450,
    description: 'Crispy bone-in wings coated in bold Fiery Peri sauce — spicy, vibrant, packed with heat.',
    image: '/images/sides/fiery-peri-wings.jpg',
  },
]

// Helper for safe lowercase comparisons
const safeToLowerCase = (value) => (typeof value === 'string' ? value.toLowerCase() : '')

export default function Sides({ searchQuery = '' }) {
  const { openModal } = useCartContext()

  const q = safeToLowerCase(searchQuery)
  const filtered = items.filter(item =>
    safeToLowerCase(item.name).includes(q) ||
    safeToLowerCase(item.description).includes(q)
  )

  return (
    <section id="sides" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Sides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.name}
            onClick={() => openModal({ ...item, category: 'Sides' })}
            className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow cursor-pointer"
          >
            <div className="relative h-48 w-full">
              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg text-black">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium text-black">Rs {item.price}</span>
                <button
                  onClick={e => { e.stopPropagation(); openModal({ ...item, category: 'Sides' }) }}
                  className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition"
                >
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
