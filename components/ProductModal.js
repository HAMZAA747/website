// File: components/ProductModal.js

import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function ProductModal({ isOpen, onClose, product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [veggies, setVeggies] = useState({
    jalapeno: false,
    pickle: false,
    onion: false
  })
  const [cheese, setCheese] = useState(false)
  const [dips, setDips] = useState({
    garlicMayo: false,
    fieryPeri: false,
    sweetChilli: false
  })
  const [instructions, setInstructions] = useState('')

  // Reset state whenever modal opens or product changes
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

  // Destructure for clarity
  const { name, description, price, category } = product

  // Calculate options
  const selectedVeggies = Object.keys(veggies).filter(k => veggies[k])
  const selectedDips = Object.keys(dips).filter(k => dips[k])
  const optionsPrice =
    selectedVeggies.length * 20 +
    (cheese ? 99 : 0) +
    (category === 'Sides' ? selectedDips.length * 99 : 0)

  const unitPrice = price + optionsPrice
  const totalPrice = unitPrice * qty

  function handleAdd() {
    addItem({
      id: name,
      name,
      price: unitPrice,
      qty,
      options: {
        veggies: selectedVeggies,
        cheese: cheese ? ['cheese'] : [],
        dips: selectedDips
      },
      instructions
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-sm p-6 rounded-xl shadow-lg">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Veggies */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Veggies (Rs 20 each)</h4>
          {['jalapeno', 'pickle', 'onion'].map(key => (
            <label key={key} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={veggies[key]}
                onChange={() => setVeggies(v => ({ ...v, [key]: !v[key] }))}
              />
              <span className="capitalize">{key}</span>
            </label>
          ))}
        </div>

        {/* Cheese */}
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={cheese}
              onChange={() => setCheese(c => !c)}
            />
            <span>Cheese (Rs 99)</span>
          </label>
        </div>

        {/* Dips (only on Sides) */}
        {category === 'Sides' && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Dips (Rs 99 each)</h4>
            {[
              ['garlicMayo', 'Garlic Mayo'],
              ['fieryPeri', 'Fiery Peri'],
              ['sweetChilli', 'Sweet Chilli']
            ].map(([key, label]) => (
              <label key={key} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={dips[key]}
                  onChange={() => setDips(d => ({ ...d, [key]: !d[key] }))}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        )}

        {/* Special Instructions */}
        <div className="mb-4">
          <label className="block mb-1">Special Instructions</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            rows={3}
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
          />
        </div>

        {/* Quantity & Add */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
              onClick={() => setQty(q => Math.max(1, q - 1))}
            >-</button>
            <span>{qty}</span>
            <button
              className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
              onClick={() => setQty(q => q + 1)}
            >+</button>
          </div>
          <button
            className="px-4 py-2 rounded-full bg-[#f2aa21] text-black font-bold"
            onClick={handleAdd}
          >
            Add | Rs {totalPrice}
          </button>
        </div>
      </div>
    </div>
  )
}
