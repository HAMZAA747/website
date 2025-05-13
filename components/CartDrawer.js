import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import AddressAutocomplete from './AddressAutocomplete'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, updateQty, addToCart, subtotal, gst, total } = useCart()
  const [step, setStep] = useState(0)
  const [method, setMethod] = useState(null)      // 'takeaway' or 'delivery'
  const [payment, setPayment] = useState(null)    // 'Online' or 'COD'
  const [pickupTime, setPickupTime] = useState('')
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  function reset() {
    setStep(0)
    setMethod(null)
    setPayment(null)
    setPickupTime('')
    setAddress('')
    setName('')
    setPhone('')
    onClose()
  }

  // Helper: add meal upgrade item to cart
  function addMealUpgrade() {
    addToCart({
      id: 'meal-upgrade',
      name: 'Meal (Fries + Drink)',
      price: 320,
      qty: 1,
      options: {}
    })
  }

  // Helper: confirm order via WhatsApp
  function confirmViaWhatsApp() {
    // Compose WhatsApp message with order details
    let msg = '*New Order* (%23' + (Math.floor(Math.random() * 90000) + 10000) + ')\n'
    // List each cart item with quantity and options
    items.forEach(item => {
      let line = `${item.qty} x ${item.name}`
      if (item.options) {
        const optParts = []
        if (item.options.toppings && item.options.toppings.length) {
          optParts.push(`Toppings: ${item.options.toppings.join(', ')}`)
        }
        if (item.options.sauces && item.options.sauces.length) {
          optParts.push(`Sauces: ${item.options.sauces.join(', ')}`)
        }
        if (item.options.note) {
          optParts.push(`Note: ${item.options.note}`)
        }
        if (optParts.length) {
          line += ` (${optParts.join('; ')})`
        }
      }
      msg += line + '\n'
    })
    msg += `Total: Rs ${total}\n`
    if (method === 'delivery') {
      msg += `Delivery Address: ${address}\nName: ${name}\nPhone: ${phone}\n`
    } else if (method === 'takeaway') {
      msg += `Pickup Time: ${pickupTime || 'ASAP'}\n`
    }
    msg += `Payment Method: ${payment === 'Online' ? 'Online Payment' : 'Cash on Delivery'}`
    // Open WhatsApp with the composed message
    const whatsappUrl = `https://wa.me/923375561898?text=${encodeURIComponent(msg)}`
    window.open(whatsappUrl, '_blank')
    // Move to confirmation status step
    setStep(5)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={reset} />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-md h-full bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">🛒 My Cart ({items.length})</h2>
          <button className="text-2xl leading-none" onClick={reset}>
            &times;
          </button>
        </div>

        {/* Step Contents */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Step 0: Review Items */}
          {step === 0 && (
            <>
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between mb-4">
                  <div>
                    <p 
                      className="font-medium cursor-pointer" 
                      onClick={reset /* could open modal for editing */}
                    >
                      {item.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <button
                        className="px-2"
                        onClick={() => updateQty(item.id, item.options, item.qty - 1)}
                        disabled={item.qty <= 1}
                      >
                        –{/* minus */}
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="px-2"
                        onClick={() => updateQty(item.id, item.options, item.qty + 1)}
                      >
                        +{/* plus */}
                      </button>
                    </div>
                  </div>
                  <span>Rs {item.price * item.qty}</span>
                </div>
              ))}
              {/* Make it a Meal Upsell */}
              {items.length > 0 && !items.find(item => item.id === 'meal-upgrade') && (
                <div className="flex items-center justify-between p-3 mb-4 bg-gray-100 rounded-lg">
                  <span className="text-sm">
                    Make it a meal (add fries & drink) for <strong>Rs 320</strong>?
                  </span>
                  <button
                    className="bg-accent text-black text-sm font-medium px-3 py-1 rounded-full"
                    onClick={addMealUpgrade}
                  >
                    Add
                  </button>
                </div>
              )}
            </>
          )}

          {/* Step 1: Pick Your Method (Take Away or Delivery) */}
          {step === 1 && (
            <>
              <h3 className="font-semibold mb-3">Pick Your Method</h3>
              <div className="flex space-x-4 mb-4">
                {['takeaway', 'delivery'].map(m => (
                  <button
                    key={m}
                    className={`px-4 py-2 rounded-full border ${
                      method === m ? 'bg-accent text-white' : 'text-gray-700'
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
                  <label className="block mb-1">Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border rounded px-2 py-1 mb-3"
                  />
                  <label className="block mb-1">Contact Number:</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full border rounded px-2 py-1 mb-3"
                  />
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

          {/* Step 2: Choose Payment Method */}
          {step === 2 && (
            <>
              <h3 className="font-semibold mb-3">Choose Payment</h3>
              <button
                className="w-full mb-3 px-4 py-2 border rounded-full"
                onClick={() => { setPayment('Online'); setStep(3); }}
              >
                Bank Transfer
              </button>
              <button
                className="w-full px-4 py-2 border rounded-full"
                onClick={() => { setPayment('COD'); setStep(4); }}
              >
                Cash On Delivery
              </button>
            </>
          )}

          {/* Step 3: Bank Transfer Details */}
          {step === 3 && (
            <>
              <h3 className="font-semibold mb-2">Bank Transfer</h3>
              <p>Please transfer <strong>Rs {total}</strong> to:</p>
              <ul className="list-disc list-inside my-2">
                <li>Hamza Ali</li>
                <li>Account #: 4649520838006043</li>
              </ul>
              <p className="mb-4">
                After transferring, tap <strong>Confirm via WhatsApp</strong> below to send us your order (attach the payment screenshot in chat).
              </p>
              <button
                className="w-full bg-accent text-white px-4 py-2 rounded-full"
                onClick={confirmViaWhatsApp}
              >
                Confirm via WhatsApp
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
                Tap <strong>Confirm via WhatsApp</strong> below to send your order for confirmation.
              </p>
              <button
                className="w-full bg-accent text-white px-4 py-2 rounded-full"
                onClick={confirmViaWhatsApp}
              >
                Confirm via WhatsApp
              </button>
            </>
          )}

          {/* Step 5: Await Confirmation via WhatsApp */}
          {step === 5 && (
            <>
              <h3 className="font-semibold mb-3">Confirming Order...</h3>
              <p className="mb-4">
                Your order is being confirmed via WhatsApp. Please wait for a confirmation update.
              </p>
              <button
                className="w-full px-4 py-2 rounded-full border"
                onClick={reset}
              >
                Cancel Order
              </button>
            </>
          )}
        </div>

        {/* Footer: Totals & Navigation */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>Rs {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>GST (15%):</span>
            <span>Rs {gst}</span>
          </div>
          <div className="flex justify-between font-semibold mb-4">
            <span>Total:</span>
            <span>Rs {total}</span>
          </div>
          <div className="flex space-x-2">
            {step > 0 && step < 5 && (
              <button
                onClick={() => setStep(prev => Math.max(prev - 1, 0))}
                className="flex-1 border px-4 py-2 rounded-full"
              >
                Back
              </button>
            )}
            {step < 2 && (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="flex-1 bg-accent text-white px-4 py-2 rounded-full"
                disabled={step === 1 && !method}  {/* require method selected */}
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

