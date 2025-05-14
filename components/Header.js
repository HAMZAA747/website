import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useCartContext } from '@/context/CartContext'

// Safe lowercase conversion
const safeToLowerCase = (value) =>
  typeof value === 'string' ? value.toLowerCase() : ''

const categories = [
  { id: 'grilled-burgers', label: 'Grilled Burgers' },
  { id: 'beef-burgers',   label: 'Beef Burgers' },
  { id: 'crispy-burgers', label: 'Crispy Burgers' },
  { id: 'wraps',          label: 'Wraps' },
  { id: 'loaded-fries',   label: 'Loaded Fries' },
  { id: 'sides',          label: 'Sides' },
  { id: 'shakes',         label: 'Shakes' },
  { id: 'addons',         label: 'Addons' },
  { id: 'cartel-deals',   label: 'Cartel Deals' },
  { id: 'theme-days',     label: 'Theme Days' },
]

export default function Header({ searchQuery, setSearchQuery }) {
  const [activeCat, setActiveCat] = useState(categories[0].id)
  const { openModal } = useCartContext()

  const handleCategoryClick = (id) => {
    setActiveCat(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Burgers Cartel Logo"
              width={40}
              height={40}
            />
          </a>
        </Link>

        {/* Search Input */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(safeToLowerCase(e.target.value))}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Contact + Cart */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/923375561898"
            target="_blank"
            rel="noopener"
            className="flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaWhatsapp className="text-green-500 text-lg mr-2" />
            <span className="text-sm font-medium">+92 337 556 1898</span>
          </a>

          <button
            onClick={() => openModal({})}
            className="flex items-center px-3 py-1 rounded-full bg-accent hover:bg-accent-dark transition text-white text-sm font-medium"
          >
            <HiOutlineShoppingCart className="text-lg mr-2" />
            View Cart
          </button>
        </div>
      </div>

      {/* Category Pill Bar */}
      <nav className="bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-4 overflow-x-auto py-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-1 rounded-full whitespace-nowrap transition ${
                    activeCat === cat.id
                      ? 'bg-accent text-black'
                      : 'bg-gray-200 text-gray-700'
                  }`.trim()}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
