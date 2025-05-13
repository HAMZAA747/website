import Image from 'next/image';
import { useState } from 'react';
import ProductModal from './ProductModal';

export default function Addons() {
  const items = [
    {
      id: 'regular-drink',
      name: 'Regular Drink',
      price: 120,
      description: 'Chilled 330 ml can of your favorite soft drink — perfect with any meal.',
      image: '/images/drinks/regular-drink.jpg',
    },
    {
      id: 'regular-water',
      name: 'Regular Water',
      price: 80,
      description: 'Pure spring water in a 330 ml bottle — refreshing and crisp.',
      image: '/images/drinks/regular-water.jpg',
    },
    {
      id: '1-5ltr-drink',
      name: '1.5 Ltr Drink',
      price: 200,
      description: 'Family-sized 1.5 L bottle of soft drink — great for sharing.',
      image: '/images/drinks/1-5ltr-drink.jpg',
    },
    {
      id: '1-5ltr-water',
      name: '1.5 Ltr Water',
      price: 120,
      description: '1.5 L bottle of purified water — stay hydrated.',
      image: '/images/drinks/1-5ltr-water.jpg',
    },
    // New sauces added as multi-select addons
    {
      id: 'sweet-chilli-sauce',
      name: 'Sweet Chilli Sauce',
      price: 0,
      description: 'Tangy sweet chili sauce to add a flavorful kick.',
      image: '/images/addons/sweet-chilli.jpg',
    },
    {
      id: 'garlic-mayo-sauce',
      name: 'Garlic Mayo',
      price: 0,
      description: 'Creamy garlic mayo sauce for extra richness.',
      image: '/images/addons/garlic-mayo.jpg',
    },
    {
      id: 'fiery-peri-sauce',
      name: 'Fiery Peri Sauce',
      price: 0,
      description: 'Bold and spicy peri peri sauce for serious heat.',
      image: '/images/addons/fiery-peri.jpg',
    },
  ];

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = item => {
    setSelected({ ...item, category: 'Addons' });
    setOpen(true);
  };

  return (
    <section id="addons" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Addons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map(item => (
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
                    openModal(item);
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

      <ProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        product={selected}
      />
    </section>
  );
}
