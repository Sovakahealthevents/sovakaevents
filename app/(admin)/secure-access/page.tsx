"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError("")

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/sovaka/sovakaevents")
    } else {
      setError("Invalid password")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Admin Login
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Access the admin dashboard
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-200 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  )
}
