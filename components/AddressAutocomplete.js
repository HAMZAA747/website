// File: website/components/AddressAutocomplete.js

import { useEffect, useRef } from 'react'

export default function AddressAutocomplete({ value, onChange, placeholder }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (!window.google || !inputRef.current) return
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { types: ['geocode'] }
    )
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      onChange(place.formatted_address || inputRef.current.value)
    })
  }, [onChange])

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded px-2 py-1 mb-3"
    />
  )
}
