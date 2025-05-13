import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* About Us with faint logo background */}
        <div className="relative overflow-hidden p-4">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Image
              src="/images/logo.png"
              alt="Burgers Cartel"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
          <h3 className="relative z-10 text-lg font-semibold mb-4">About Us</h3>
          <p className="relative z-10 text-sm leading-relaxed">
            At Burgers Cartel, every bite is a heist of flavor—luxurious brioche buns cradle 
            handcrafted patties seared to perfection, each layered with rich sauces and 
            premium toppings. Born in Bahria Phase 7, we meld modern “mafia” swagger with 
            gourmet precision. Welcome to the Cartel of Flavor.
          </p>
        </div>

        {/* Contact */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm leading-snug">
            Bahria Phase 7, Business Bay, Islamabad<br/>
            <a href="https://wa.me/923375561898" className="inline-block mt-1 text-accent hover:underline">
              +92 337 556 1898
            </a><br/>
            <a href="mailto:info@burgerscartel.com" className="inline-block mt-1 hover:underline">
              info@burgerscartel.com
            </a>
          </p>
        </div>

        {/* Our Timings */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Our Timings</h3>
          <ul className="text-sm leading-snug space-y-1">
            <li>
              <span className="font-medium">Monday – Thursday:</span> 1:00 PM – 1:00 AM
            </li>
            <li>
              <span className="font-medium">Friday:</span> 1:00 PM – 1:00 AM
            </li>
            <li>
              <span className="font-medium">Saturday – Sunday:</span> 1:00 PM – 1:00 AM
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com/burgerscartel" target="_blank" rel="noopener">
              <FaInstagram className="text-2xl hover:text-accent transition" />
            </a>
            <a href="https://facebook.com/burgerscartel" target="_blank" rel="noopener">
              <FaFacebookF className="text-2xl hover:text-accent transition" />
            </a>
            <a href="https://tiktok.com/@burgerscartel" target="_blank" rel="noopener">
              <FaTiktok className="text-2xl hover:text-accent transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
