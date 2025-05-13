import Image from 'next/image';
import { useCartContext } from '@/context/CartContext';
import ProductModal from './ProductModal';

const shakesItems = [
  {
    id: 'lotus-shake',
    name: 'Lotus',
    description: 'A thick, creamy Lotus shake blended with caramelized Biscoff and topped with crushed biscuit. Deep flavor, smooth texture.',
    price: 550,
    image: '/images/shakes/lotus-shake.jpg',
  },
  {
    id: 'vanilla-shake',
    name: 'Vanilla',
    description: 'A thick, silky vanilla shake with a smooth finish and a hint of vanilla flake topping. Clean, classic, and crafted for comfort.',
    price: 450,
    image: '/images/shakes/vanilla-shake.jpg',
  },
  {
    id: 'oreo-shake',
    name: 'Oreo',
    description: 'A thick, creamy blend of crushed Oreo cookies, topped with rich cookie crumble. Deep, chocolatey, and built for bold cravings.',
    price: 450,
    image: '/images/shakes/oreo-shake.jpg',
  },
];

const safeToLowerCase = (value) => 
  typeof value === 'string' ? value.toLowerCase() : '';

export default function Shakes({ searchQuery }) {
  const { openModal, addToCart } = useCartContext();

  // Filter items based on search query
  const query = safeToLowerCase(searchQuery);
  const filtered = shakesItems.filter(item =>
    safeToLowerCase(item.name).includes(query) ||
    safeToLowerCase(item.description).includes(query)
  );

  return (
    <section id="shakes" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Shakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => openModal(item)}
            onKeyPress={e => e.key === 'Enter' && openModal(item)}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-xl mb-1 text-black">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-black">Rs {item.price}</span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="bg-[#f2aa21] text-black px-4 py-2 rounded-full font-semibold text-sm hover:brightness-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductModal />
    </section>
  );
}
