import Image from 'next/image';
import { useCartContext } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductModal({ isOpen, onClose, product }) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState([]);

  // Define available options
  const allToppings = ['Lettuce', 'Onions', 'Tomatoes', 'Pickles', 'Jalapenos'];
  const sauceOptions = ['Sweet Chilli', 'Garlic Mayo', 'Fiery Peri'];

  if (!isOpen || !product) return null;

  // Determine which options to show based on category and item
  const category = product.category || '';
  let toppingsToShow = [];
  let showToppings = false;
  let showSauces = false;
  if (['Grilled Burgers', 'Beef Burgers', 'Crispy Burgers'].includes(category)) {
    // All toppings except lettuce
    toppingsToShow = allToppings.filter(t => t !== 'Lettuce');
    showToppings = true;
  } else if (['Loaded Fries', 'Wraps'].includes(category)) {
    // No lettuce, no onions
    toppingsToShow = allToppings.filter(t => t !== 'Lettuce' && t !== 'Onions');
    showToppings = true;
  } else if (category === 'Sides') {
    const name = (product.name || '').toLowerCase();
    if (name.includes('nuggets') || name.includes('tender')) {
      // Show sauce options for Nuggets & Tender Strips
      showSauces = true;
    } else if (name.includes('wings')) {
      // Wings: no extra options
      showSauces = false;
    }
  }
  // Shakes, Cartel Deals, Addons: no toppings or sauces (just special instructions)

  const handleAddToCart = () => {
    if (!product) return;
    const itemToAdd = {
      id: product.id ?? product.name.replace(/\s+/g, '-').toLowerCase(),
      name: product.name,
      price: product.price,
      qty: quantity,
      options: {}
    };
    // Include selected toppings/sauces in options
    if (showToppings && selectedToppings.length > 0) {
      itemToAdd.options.toppings = [...selectedToppings];
    }
    if (showSauces && selectedSauces.length > 0) {
      itemToAdd.options.sauces = [...selectedSauces];
    }
    if (note.trim() !== '') {
      itemToAdd.options.note = note.trim();
    }
    addToCart(itemToAdd);
    onClose();
  };

  const toggleTopping = (topping) => {
    setSelectedToppings(prev =>
      prev.includes(topping)
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };
  const toggleSauce = (sauce) => {
    setSelectedSauces(prev =>
      prev.includes(sauce)
        ? prev.filter(s => s !== sauce)
        : [...prev, sauce]
    );
  };

  // Calculate GST (15% tax rate, as used in cart totals)
  const taxRate = 0.15;
  const gstAmount = Math.round(product.price * taxRate);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-semibold text-gray-700"
        >
          &times;
        </button>
        {/* Product Image */}
        {product.image && (
          <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
            <Image 
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        {/* Product Details */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          )}
          {/* Price and GST per item */}
          <p className="mb-2"><strong>Price: </strong>Rs {product.price}</p>
          <p className="mb-4"><strong>GST: </strong>Rs {gstAmount}</p>
          {/* Toppings options */}
          {showToppings && (
            <div className="mb-4">
              <p className="font-medium mb-1">Toppings:</p>
              {toppingsToShow.map(topping => (
                <label key={topping} className="block text-sm">
                  <input 
                    type="checkbox"
                    className="mr-2"
                    checked={selectedToppings.includes(topping)}
                    onChange={() => toggleTopping(topping)}
                  />
                  {topping}
                </label>
              ))}
            </div>
          )}
          {/* Sauces options */}
          {showSauces && (
            <div className="mb-4">
              <p className="font-medium mb-1">Select Sauce:</p>
              {sauceOptions.map(sauce => (
                <label key={sauce} className="block text-sm">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedSauces.includes(sauce)}
                    onChange={() => toggleSauce(sauce)}
                  />
                  {sauce}
                </label>
              ))}
            </div>
          )}
          {/* Special instructions */}
          <div className="mb-4">
            <label className="block font-medium text-sm mb-1" htmlFor="specialInstructions">
              Special Instructions:
            </label>
            <textarea
              id="specialInstructions"
              className="w-full border rounded px-2 py-1"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any extra requests or instructions..."
            />
          </div>
          {/* Quantity selector */}
          <div className="mb-6 flex items-center">
            <span className="font-medium mr-4">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button 
                type="button" 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="px-3 py-1 border rounded-full text-lg"
              >
                –
              </button>
              <span className="text-lg">{quantity}</span>
              <button 
                type="button" 
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 border rounded-full text-lg"
              >
                +
              </button>
            </div>
          </div>
          {/* Add to Cart button */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-accent text-black font-semibold py-2 rounded-full hover:brightness-95 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
