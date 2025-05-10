// components/Header.js
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo.png"           // point to your logo asset
              alt="Burgers Cartel"
              width={40}
              height={40}
            />
          </a>
        </Link>

        {/* Contact + Cart */}
        <div className="flex items-center space-x-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923375561898"
            target="_blank"
            rel="noopener"
            className="flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaWhatsapp className="text-green-500 text-lg mr-2" />
            <span className="text-sm font-medium">+92 337 556 1898</span>
          </a>

          {/* Add to Cart */}
          <Link href="/cart">
            <a className="flex items-center px-3 py-1 rounded-full bg-yellow-500 hover:bg-yellow-600 transition text-white text-sm font-medium">
              <HiOutlineShoppingCart className="text-lg mr-2" />
              Add to Cart
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
