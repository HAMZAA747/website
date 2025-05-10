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
        <meta name="description" content="Flavors You Can’t Refuse" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <a>
                <img src="/images/logo.png" alt="Burgers Cartel" className="h-10 w-auto" />
              </a>
            </Link>
            <Link href="https://wa.me/923375561898" passHref>
              <a className="flex items-center space-x-2 bg-amber-100 px-3 py-1 rounded-full hover:bg-amber-200 transition">
                <FaWhatsapp className="text-amber-500 text-xl" />
                <span className="text-sm font-medium text-amber-600">+92 337 556 1898</span>
              </a>
            </Link>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center bg-amber-400 text-black px-4 py-2 rounded-full font-semibold hover:brightness-90 transition"
          >
            <HiOutlineShoppingCart className="mr-2 text-xl" />
            Add to Cart
          </button>
        </div>
      </header>

      {/* Main content (clear header) */}
      <main className="pt-16">{children}</main>

      {/* Drawer, Footer & Floating buttons */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FloatingActions />
      <Footer />
    </>
  )
}
