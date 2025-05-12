// pages/index.js

import Head from 'next/head'
import { useState } from 'react'
import Layout from '@/components/Layout'
import GrilledBurgers from '@/components/GrilledBurgers'
import BeefBurgers from '@/components/BeefBurgers'
import CrispyBurgers from '@/components/CrispyBurgers'
import Wraps from '@/components/Wraps'
import LoadedFries from '@/components/LoadedFries'
import Shakes from '@/components/Shakes'
import Sides from '@/components/Sides'
import Drinks from '@/components/Drinks'
import CartelDeals from '@/components/CartelDeals'
import ThemeDays from '@/components/ThemeDays'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  // Lifted search state
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout>
      <Head>
        <title>Burgers Cartel</title>
        <meta
          name="description"
          content="Delicious burgers, fries, shakes & more at Burgers Cartel"
        />
      </Head>

      {/* Optional inline search bar in Home */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Menu Sections with searchQuery prop */}
      <GrilledBurgers searchQuery={searchQuery} />
      <BeefBurgers searchQuery={searchQuery} />
      <CrispyBurgers searchQuery={searchQuery} />
      <Wraps searchQuery={searchQuery} />
      <LoadedFries searchQuery={searchQuery} />
      <Shakes searchQuery={searchQuery} />
      <Sides searchQuery={searchQuery} />
      <Drinks searchQuery={searchQuery} />
      <CartelDeals searchQuery={searchQuery} />
      <ThemeDays />
    </Layout>
  )
}
