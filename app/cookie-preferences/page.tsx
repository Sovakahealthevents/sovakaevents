'use client'

import { useEffect, useState } from 'react'

type CookiePrefs = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const DEFAULT_PREFS: CookiePrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export default function CookiePreferencesPage() {
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS)
  const [saved, setSaved] = useState(false)

  /* ---------- Helpers ---------- */

  const setCookie = (name: string, value: string, days = 180) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString()
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
  }

  const getCookie = (name: string) => {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(name + '='))
      ?.split('=')[1]
  }

  /* ---------- Load existing prefs ---------- */

  useEffect(() => {
    const stored = getCookie('cookie_preferences')
    if (stored) {
      try {
        setPrefs(JSON.parse(decodeURIComponent(stored)))
      } catch {
        setPrefs(DEFAULT_PREFS)
      }
    }
  }, [])

  /* ---------- Actions ---------- */

  const savePrefs = (newPrefs: CookiePrefs) => {
    setPrefs(newPrefs)
    setCookie(
      'cookie_preferences',
      encodeURIComponent(JSON.stringify(newPrefs))
    )
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const acceptAll = () =>
    savePrefs({ necessary: true, analytics: true, marketing: true })

  const rejectAll = () =>
    savePrefs({ necessary: true, analytics: false, marketing: false })

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Cookie Preferences
      </h1>

      <p className="text-gray-600 mb-10">
        We use cookies to enhance your experience, analyze site usage,
        and support our marketing efforts. You can manage your
        preferences below.
      </p>

      <div className="space-y-6">
        {/* NECESSARY */}
        <CookieCard
          title="Strictly Necessary Cookies"
          description="These cookies are required for the website to function and cannot be switched off."
          checked
          disabled
        />

        {/* ANALYTICS */}
        <CookieCard
          title="Analytics Cookies"
          description="Help us understand how visitors interact with the website."
          checked={prefs.analytics}
          onChange={(v) =>
            setPrefs({ ...prefs, analytics: v })
          }
        />

        {/* MARKETING */}
        <CookieCard
          title="Marketing Cookies"
          description="Used to deliver relevant content and measure marketing effectiveness."
          checked={prefs.marketing}
          onChange={(v) =>
            setPrefs({ ...prefs, marketing: v })
          }
        />
      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-4 mt-10">
        <button
          onClick={() => savePrefs(prefs)}
          className="px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
        >
          Save Preferences
        </button>

        <button
          onClick={acceptAll}
          className="px-6 py-3 rounded-full border font-semibold hover:bg-gray-50"
        >
          Accept All
        </button>

        <button
          onClick={rejectAll}
          className="px-6 py-3 rounded-full border font-semibold hover:bg-gray-50"
        >
          Reject Non-Essential
        </button>
      </div>

      {saved && (
        <p className="mt-4 text-sm text-green-600 font-medium">
          Preferences saved successfully ✓
        </p>
      )}
    </section>
  )
}

/* ---------- Components ---------- */

function CookieCard({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <div className="border rounded-2xl p-6 flex items-start justify-between gap-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 max-w-xl">
          {description}
        </p>
      </div>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div
          className={`w-11 h-6 rounded-full transition ${
            checked
              ? 'bg-teal-600'
              : 'bg-gray-300'
          } ${disabled ? 'opacity-60' : ''}`}
        >
          <div
            className={`h-5 w-5 bg-white rounded-full shadow transform transition translate-y-0.5 ${
              checked ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </div>
      </label>
    </div>
  )
}
