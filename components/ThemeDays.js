import { useState, useEffect } from 'react';

const themeDays = [
  {
    name: 'Wing Wednesday',
    description: 'Free wings with 3 burgers',
    day: 'Wednesday',
  },
  {
    name: 'Shake Sunday',
    description: 'Pay extra Rs 200 to convert your meal drink to shake',
    day: 'Sunday',
  },
];

export default function ThemeDays({ searchQuery = '' }) {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    // Determine the current weekday in Asia/Karachi timezone
    const today = new Date().toLocaleString('en-US', {
      weekday: 'long',
      timeZone: 'Asia/Karachi',
    });
    setCurrentDay(today);
  }, []);

  // Always a string, then lowercase
  const q = searchQuery.toLowerCase();

  // Filter by name, description, or day
  const filteredDays = themeDays.filter(dayObj =>
    dayObj.name.toLowerCase().includes(q) ||
    dayObj.description.toLowerCase().includes(q) ||
    dayObj.day.toLowerCase().includes(q)
  );

  return (
    <section id="theme-days" className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Theme Days</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredDays.map(dayObj => {
          const isOpen = currentDay === dayObj.day;
          return (
            <div
              key={dayObj.name}
              className="p-6 rounded-xl shadow-lg bg-white flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {dayObj.name}
              </h3>
              <p className="text-sm text-gray-700 flex-grow">
                {dayObj.description}
              </p>
              <span
                className={`mt-4 inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  isOpen ? 'bg-[#f2aa21] text-black' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {isOpen ? 'Open' : 'Coming Soon'}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
