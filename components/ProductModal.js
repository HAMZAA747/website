// File: website/components/ProductModal.js

import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function ProductModal({ isOpen, onClose, product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [veggies, setVeggies] = useState({ jalapeno: false, pickle: false, onion: false })
  const [cheese, setCheese] = useState(false)
  const [dips, setDips] = useState({ garlicMayo: false, fieryPeri: false, sweetChilli: false })
  const [instructions, setInstructions] = useState('')

  // Reset state when modal opens or product changes
  useEffect(() => {
    if (isOpen) {
      setQty(1)
      setVeggies({ jalapeno: false, pickle: false, onion: false })
      setCheese(false)
      setDips({ garlicMayo: false, fieryPeri: false, sweetChilli: false })
      setInstructions('')
    }
  }, [isOpen, product])

  if (!isOpen || !product) return null

  // Calculate selected options & pricing
  const selectedVeggies = Object.keys(veggies).filter(k => veggies[k])
  const selectedDips = Object.keys(dips).filter(k => dips[k])
  const optionsPrice =
    selectedVeggies.length * 20 +
    (cheese ? 99 : 0) +
    (product.category === 'Sides' ? selectedDips.length * 99 : 0)
  const unitPrice = product.price + optionsPrice
  const totalPrice = unitPrice * qty

  function handleAdd() {
    addItem({
      id: product.name,
      name: product.name,
      price: unitPrice,
      qty,
      options: {
        veggies: selectedVeggies,
        cheese: cheese ? ['cheese'] : [],
        dips: selectedDips,
      },
      instructions,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-40 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative ml-auto w-full max-w-sm h-full bg-white shadow-lg flex flex-col">
        <button
          className="absolute top-3 right-3 text-2xl"
          onClick={onClose}
        >&times;</button>

        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Dips for Sides */}
          {product.category === 'Sides' && (
            <>
              <h4 className="font-medium mb-1">Dips (Rs 99 each)</h4>
              {[
                ['garlicMayo', 'Garlic Mayo'],
                ['fieryPeri', 'Fiery Peri'],
                ['sweetChilli', 'Sweet Chilli'],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center space-x-2 mb-1">
                  <input
                    type="checkbox"
                    checked={dips[key]}
                    onChange={() => setDips(prev => ({ ...prev, [key]: !prev[key] }))}
                  />
                  <span>{label}</span>
                </label>
              ))}
              <hr className="my-4" />
            </>
          )}

          {/* Veggie Toppings */}
          {product.category !== 'Beef Burgers' &&
           product.category !== 'Loaded Fries' &&
           product.category !== 'Sides' && (
            <>
              <h4 className="font-medium mb-1">Veggie Toppings (Rs 20 each)</h4>
              {['jalapeno', 'pickle', 'onion'].map(v => (
                <label key={v} className="flex items-center space-x-2 mb-1">
                  <input
                    type="checkbox"
                    checked={veggies[v]}
                    onChange={() => setVeggies(prev => ({ ...prev, [v]: !prev[v] }))}
                  />
                  <span className="capitalize">{v}</span>
                </label>
              ))}
              <hr className="my-4" />
            </>
          )}

          {/* Cheese for Grilled & Crispy Burgers */}
          {(product.category === 'Grilled Burgers' ||
            product.category === 'Crispy Burgers') && (
            <>
              <h4 className="font-medium mb-1">Cheese (Rs 99)</h4>
              <label className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  checked={cheese}
                  onChange={() => setCheese(!cheese)}
                />
                <span>Add Slice</span>
              </label>
              <hr className="my-4" />
            </>
          )}

          {/* Special Instructions */}
          <h4 className="font-medium mb-1">Special Instructions</h4>
          <textarea
            rows={2}
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            className="w-full border rounded px-2 py-1 mb-4"
            placeholder="e.g. less spicy, extra crisp…"
          />

          {/* Quantity & Pricing */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>–</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <span className="font-semibold">Rs {totalPrice}</span>
          </div>

          {/* Add to Cart Action */}
          <button
            className="w-full bg-accent text-black py-2 rounded-full font-semibold"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
