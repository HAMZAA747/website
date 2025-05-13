import Image from 'next/image';
import { useCartContext } from '@/context/CartContext';

const items = [
  {
    id: 'sweet-chili-syndicate',
    name: 'Sweet Chili Syndicate',
    price: 645,
    description: 'Tender grilled chicken thigh, smooth yet spicy Sweet Chili Sauce, fresh lettuce — all stacked in a buttery Brioche Bun.',
    image: '/images/sweet-chili-syndicate.jpg',
  },
  {
    id: 'fiery-peri-hitman',
    name: 'The Fiery Peri Hitman',
    price: 625,
    description: 'Juicy grilled chicken thigh, bold & fiery Peri Peri Sauce, fresh lettuce — all stacked in a buttery Brioche Bun.',
    image: '/images/fiery-peri-hitman.jpg',
  },
  {
    id: 'malai-boti-supreme',
    name: 'Malai Boti Supreme',
    price: 625,
    description: 'Creamy & richly spiced grilled chicken thigh, loaded with Garlic Mayo, fresh lettuce — all stacked in a buttery Brioche Bun.',
    image: '/images/malai-boti-supreme.jpg',
  },
];

const safeToLowerCase = (value) => 
  typeof value === 'string' ? value.toLowerCase() : '';

export default function GrilledBurgers({ searchQuery }) {
  const { openModal } = useCartContext();

  // Filter items based on search query
  const query = safeToLowerCase(searchQuery);
  const filtered = items.filter(item =>
    safeToLowerCase(item.name).includes(query) ||
    safeToLowerCase(item.description).includes(query)
  );

  return (
    <section id="grilled-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6">Grilled Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => openModal({ ...item, category: 'Grilled Burgers' })}
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
                  onClick={e => { e.stopPropagation(); openModal({ ...item, category: 'Grilled Burgers' }); }}
                  className="bg-accent text-black px-4 py-2 rounded-full font-semibold text-sm hover:brightness-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
