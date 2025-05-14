import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import GrilledBurgers from '@/components/GrilledBurgers'
import BeefBurgers from '@/components/BeefBurgers'
import CrispyBurgers from '@/components/CrispyBurgers'
import Wraps from '@/components/Wraps'
import LoadedFries from '@/components/LoadedFries'
import Shakes from '@/components/Shakes'
import Sides from '@/components/Sides'
import Addons from '@/components/Addons'  // Renamed from Drinks
import CartelDeals from '@/components/CartelDeals'
import ThemeDays from '@/components/ThemeDays'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <Head>
        <title>Burgers Cartel</title>
        <meta 
          name="description" 
          content="Delicious burgers, fries, shakes & more at Burgers Cartel" 
        />
      </Head>

      {/* Hero Section with Fullscreen Video */}
      <section className="relative h-screen w-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback text if video tag is not supported */}
          Your browser does not support the video tag.
        </video>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        {/* Top overlay bar with logo and WhatsApp contact */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-green-600">
          <div>
            <img
              src="/logo.png"
              alt="Burgers Cartel Logo"
              className="h-12 object-contain"
            />
          </div>
          <a
            href="https://wa.me/+923375561898"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-green-600 px-3 py-1 rounded-full hover:brightness-95 transition"
          >
            <FaWhatsapp size={20} />
            <span className="font-medium">+92 337 556 1898</span>
          </a>
        </div>
      </section>

      {/* Menu Sections */}
      <GrilledBurgers searchQuery={searchQuery} />
      <BeefBurgers searchQuery={searchQuery} />
      <CrispyBurgers searchQuery={searchQuery} />
      <Wraps searchQuery={searchQuery} />
      <LoadedFries searchQuery={searchQuery} />
      <Shakes searchQuery={searchQuery} />
      <Sides searchQuery={searchQuery} />
      <Addons searchQuery={searchQuery} />      {/* Renamed Drinks section */}
      <CartelDeals searchQuery={searchQuery} />
      <ThemeDays searchQuery={searchQuery} />
    </Layout>
  )
}
