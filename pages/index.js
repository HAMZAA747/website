// File: pages/index.js

import GrilledBurgers from '@/components/GrilledBurgers'
import BeefBurgers    from '@/components/BeefBurgers'
import CrispyBurgers  from '@/components/CrispyBurgers'
import Wraps          from '@/components/Wraps'
import LoadedFries    from '@/components/LoadedFries'
import Shakes         from '@/components/Shakes'
import Sides          from '@/components/Sides'
import Drinks         from '@/components/Drinks'
import CartelDeals    from '@/components/CartelDeals'
import ThemeDays      from '@/components/ThemeDays'
import { useState }   from 'react'
import { useCart }    from '@/context/CartContext'

export default function Home() {
  const categories = [
    'Grilled Burgers','Beef Burgers','Crispy Burgers',
    'Wraps','Loaded Fries','Shakes','Sides','Drinks','Cartel Deals','Theme Days'
  ]
  const [search, setSearch] = useState('')
  const { items, openCart } = useCart()

  return (
    <>
      {/* Hero Section: video + subtle overlay */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <main className="pt-20">
        {/* Category Nav */}
        <nav id="menu" className="sticky top-0 bg-white py-2 shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 flex space-x-4 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() =>
                  document
                    .getElementById(cat.toLowerCase().replace(/\s+/g, '-'))
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Search */}
        <div className="max-w-3xl mx-auto my-8 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search for a menu item…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="absolute right-3 top-2.5 text-gray-500">→</button>
          </div>
        </div>

        {/* Menu Sections */}
        <GrilledBurgers search={search} />
        <BeefBurgers    search={search} />
        <CrispyBurgers  search={search} />
        <Wraps          search={search} />
        <LoadedFries    search={search} />
        <Shakes         search={search} />
        <Sides          search={search} />
        <Drinks         search={search} />
        <CartelDeals    search={search} />
        <ThemeDays      search={search} />
      </main>
    </>
  )
}

