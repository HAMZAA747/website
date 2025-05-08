// File: website/components/ThemeDays.js

export default function ThemeDays() {
  const days = [
    { name: 'Wing Wednesday',     note: 'Free wings with 3 burgers',      status: 'open'  },
    { name: 'Monday',             note: 'Coming Soon',                   status: 'soon'  },
    { name: 'Tuesday',            note: 'Coming Soon',                   status: 'soon'  },
    { name: 'Thursday',           note: 'Coming Soon',                   status: 'soon'  },
    { name: 'Friday',             note: 'Coming Soon',                   status: 'soon'  },
    { name: 'Saturday',           note: 'Coming Soon',                   status: 'soon'  },
    { name: 'Shake Sunday',       note: '+195 RS meal→shake upgrade',    status: 'open-until-sunday' },
  ]

  return (
    <section id="theme-days" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Theme Days</h2>
      <ul className="space-y-3 text-lg">
        {days.map(day => (
          <li key={day.name} className="flex items-center justify-between">
            <span>
              • {day.name} — {day.note}
            </span>
            {day.status === 'open' && (
              <button className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition">
                Open
              </button>
            )}
            {day.status === 'open-until-sunday' && (
              <button className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition">
                Open until Sunday
              </button>
            )}
            {day.status === 'soon' && (
              <span className="italic text-gray-500 text-sm">Coming Soon</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
