import Image from 'next/image';
import { useCartContext } from '@/context/CartContext';

const friesItems = [
  {
    id: 'nashville-hot-crunch',
    name: 'Nashville Hot Crunch',
    description: 'Crispy Nashville fillet, Buffalo sauce, melted cheese with toppings.',
    price: 745,
    image: '/images/fries/nashville-hot-crunch.jpg',
  },
  {
    id: 'sweet-chilli-loaded',
    name: 'Sweet Chilli Loaded',
    description: 'Straight-cut fries dusted with our signature Sweet Chilli spice blend — sweet heat, perfectly crisp.',
    price: 745,
    image: '/images/fries/sweet-chilli-loaded.jpg',
  },
  {
    id: 'fiery-peri-loaded',
    name: 'Fiery Peri Loaded',
    description: 'Loaded fries coated in our bold Fiery Peri sauce — vibrant, spicy, and tough to resist.',
    price: 745,
    image: '/images/fries/fiery-peri-loaded.jpg',
  },
  {
    id: 'malai-boti-loaded',
    name: 'Malai Boti Loaded',
    description: 'Fries topped with creamy Malai Boti sauce and tender chicken bits — rich, smooth, and indulgent.',
    price: 745,
    image: '/images/fries/malai-boti-loaded.jpg',
  },
  {
    id: 'plain-fries',
    name: 'Plain Fries',
    description: 'Crispy, golden straight-cut fries — simple, clean, and freshly fried. Let the flavor come from what you pair them with.',
    price: 245,
    image: '/images/fries/plain-fries.jpg',
  },
  {
    id: 'cartel-crush',
    name: 'Cartel Crush',
    description: 'Straight-cut fries dusted with our signature Cartel spice blend — bold, flavorful, and perfectly crisp.',
    price: 295,
    image: '/images/fries/cartel-crush.jpg',
  },
];

const safeToLowerCase = (value) => 
  typeof value === 'string' ? value.toLowerCase() : '';

export default function LoadedFries({ searchQuery }) {
  const { openModal, addToCart } = useCartContext();

  // Filter items based on search query
  const query = safeToLowerCase(searchQuery);
  const filtered = friesItems.filter(item =>
    safeToLowerCase(item.name).includes(query) ||
    safeToLowerCase(item.description).includes(query)
  );

  return (
    <section id="loaded-fries" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Loaded Fries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => openModal({ ...item, category: 'Loaded Fries' })}
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
                    addToCart({ ...item, category: 'Loaded Fries' });
                  }}
                  className="px-4 py-2 rounded-full text-sm bg-accent hover:bg-[#e29a1e] text-white transition"
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
