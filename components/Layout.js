// File: components/Layout.js

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Burgers Cartel</title>
        <meta name="description" content="Flavors You Can't Refuse" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
        />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + WhatsApp */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo.png"
              alt="Burgers Cartel"
              className="h-10 w-auto"
            />
            <Link href="https://wa.me/923375561898" passHref>
              <a className="flex items-center space-x-1 bg-accent/10 px-3 py-1 rounded-full hover:bg-accent/20 transition">
                <FaWhatsapp className="text-green-500 text-lg" />
                <span className="text-sm font-medium">
                  +92 337 556 1898
                </span>
              </a>
            </Link>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center bg-accent text-black px-4 py-2 rounded-full font-semibold hover:brightness-90 transition"
          >
            <HiOutlineShoppingCart className="mr-2 text-xl" />
            Add to Cart
          </button>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Main content (padded to clear the fixed header) */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Scroll-to-Top buttons */}
      <FloatingActions />
    </>
  )
}
