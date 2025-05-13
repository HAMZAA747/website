import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineArrowUp } from 'react-icons/hi'

export default function FloatingActions() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed right-4 bottom-8 flex flex-col space-y-4 z-50">
      {/* WhatsApp Contact */}
      <a
        href="https://wa.me/923375561898"
        target="_blank"
        rel="noopener"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        {/* Arrow icon colored in accent (#f2aa21) */}
        <HiOutlineArrowUp className="text-[#f2aa21] text-xl" />
      </button>
    </div>
  )
}
