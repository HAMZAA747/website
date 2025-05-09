// File: components/CartDrawer.js

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import AddressAutocomplete from './AddressAutocomplete'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, updateQty, subtotal, gst, total } = useCart()
  const [step, setStep] = useState(0)
  const [method, setMethod] = useState(null)      // 'takeaway' or 'delivery'
  const [pickupTime, setPickupTime] = useState('')
  const [address, setAddress] = useState('')

  function reset() {
    setStep(0)
    setMethod(null)
    setPickupTime('')
    setAddress('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={reset}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-md h-full bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">🛒 My Cart ({items.length})</h2>
          <button
            className="text-2xl leading-none"
            onClick={reset}
          >&times;</button>
        </div>

        {/* Step Contents */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Step 0: Review Items */}
          {step === 0 && items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium cursor-pointer" onClick={reset /* could open modal */}>
                  {item.name}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <button
                    className="px-2"
                    onClick={() => updateQty(item.id, item.options, item.qty - 1)}
                    disabled={item.qty <= 1}
                  >–</button>
                  <span>{item.qty}</span>
                  <button
                    className="px-2"
                    onClick={() => updateQty(item.id, item.options, item.qty + 1)}
                  >+</button>
                </div>
              </div>
              <span>Rs {item.price * item.qty}</span>
            </div>
          ))}

          {/* Step 1: Pick Your Method */}
          {step === 1 && (
            <>
              <h3 className="font-semibold mb-3">Pick Your Method</h3>
              <div className="flex space-x-4 mb-4">
                {['takeaway','delivery'].map(m => (
                  <button
                    key={m}
                    className={`px-4 py-2 rounded-full border ${
                      method===m
                        ? 'bg-accent text-white'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setMethod(m)}
                  >
                    {m === 'takeaway' ? 'Take Away' : 'Delivery'}
                  </button>
                ))}
              </div>

              {method === 'takeaway' && (
                <>
                  <p className="mb-2">
                    <strong>Pickup Location:</strong><br/>
                    Burgers Cartel, Bahria Phase 7
                  </p>
                  <label className="block mb-1">Pickup Time:</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={e => setPickupTime(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </>
              )}

              {method === 'delivery' && (
                <>
                  <label className="block mb-1">Delivery Address:</label>
                  <AddressAutocomplete
                    value={address}
                    onChange={setAddress}
                    placeholder="Enter your address…"
                  />
                  <label className="block mb-1">Preferred Time:</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={e => setPickupTime(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </>
              )}
            </>
          )}

          {/* Step 2: Choose Payment */}
          {step === 2 && (
            <>
              <h3 className="font-semibold mb-3">Choose Payment</h3>
              <button
                className="w-full mb-3 px-4 py-2 border rounded-full"
                onClick={() => setStep(3)}
              >Bank Transfer</button>
              <button
                className="w-full px-4 py-2 border rounded-full"
                onClick={() => setStep(4)}
              >Cash On Delivery</button>
            </>
          )}

          {/* Step 3: Bank Transfer */}
          {step === 3 && (
            <>
              <h3 className="font-semibold mb-2">Bank Transfer</h3>
              <p>Please transfer <strong>Rs {total}</strong> to:</p>
              <ul className="list-disc list-inside my-2">
                <li>Danish Ghaffar</li>
                <li>Account #: 0127314595764</li>
              </ul>
              <p className="mb-4">
                Then WhatsApp the screenshot to +92 337 556 1898.
              </p>
              <button
                className="w-full bg-accent text-white px-4 py-2 rounded-full"
                onClick={reset}
              >
                Confirm Order
              </button>
            </>
          )}

          {/* Step 4: Cash on Delivery */}
          {step === 4 && (
            <>
              <h3 className="font-semibold mb-2">Cash On Delivery</h3>
              <p>
                Your order total is <strong>Rs {total}</strong>. 
                Please have the exact amount ready upon delivery.
              </p>
              <p className="mb-4">
                You’ll receive a WhatsApp confirmation shortly.
              </p>
              <button
                className="w-full bg-accent text-white px-4 py-2 rounded-full"
                onClick={reset}
              >
                Confirm Order
              </button>
            </>
          )}
        </div>

        {/* Footer: Totals & Navigation */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span><span>Rs {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>GST (15%):</span><span>Rs {gst}</span>
          </div>
          <div className="flex justify-between font-semibold mb-4">
            <span>Total:</span><span>Rs {total}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setStep(prev => Math.max(prev - 1, 0))}
              className="flex-1 border px-4 py-2 rounded-full"
            >
              Back
            </button>
            {step < 2 && (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="flex-1 bg-accent text-white px-4 py-2 rounded-full"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
