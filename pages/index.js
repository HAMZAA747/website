// pages/index.js

import Head from 'next/head'
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
  return (
    <Layout>
      <Head>
        <title>Burgers Cartel</title>
        <meta name="description" content="Delicious burgers, fries, shakes & more at Burgers Cartel" />
      </Head>

      {/* Hero video */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Semi-transparent overlay, if desired */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Top bar with logo + WhatsApp */}
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
      <GrilledBurgers />
      <BeefBurgers />
      <CrispyBurgers />
      <Wraps />
      <LoadedFries />
      <Shakes />
      <Sides />
      <Drinks />
      <CartelDeals />
      <ThemeDays />

    </Layout>
  )
}
