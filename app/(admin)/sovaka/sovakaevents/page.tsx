"use client"

import { useEffect, useState } from "react"

type Registration = {
  id: string
  event_id: string
  event_title: string
  name: string
  email: string
  created_at: string
}


export default function AdminRegistrations() {
  const [data, setData] = useState<Registration[]>([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/registrations")
      .then(res => res.json())
      .then(json => {
        setData(json.data)
        setCount(json.count)
      })
      .finally(() => setLoading(false))
  }, [])

  const exportCSV = () => {
    if (!data.length) return

    const headers = ["Name", "Email", "Event ID", "Registered At"]

    const rows = data.map(row => [
      row.name,
      row.email,
      row.event_id,
      new Date(row.created_at).toLocaleString(),
    ])

    const csvContent =
      [headers, ...rows]
        .map(row =>
          row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
        )
        .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `event-registrations-${Date.now()}.csv`
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Event Registrations ({count})
        </h1>

        <button
          onClick={exportCSV}
          disabled={!data.length}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Event</th>
                <th className="px-3 py-2">Registered</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="border-t">
                  <td className="px-3 py-2">{row.name}</td>
                  <td className="px-3 py-2">{row.email}</td>
                  <td className="px-3 py-2 text-xs">{row.event_title}</td>
                  <td className="px-3 py-2">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
