export function generateICS(event: any) {
  const start = new Date(`${event.month} ${event.date}, 2026 ${event.time}`)
    .toISOString()
    .replace(/[-:]/g, '')
    .split('.')[0]

  const ics = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${start}
DESCRIPTION:${event.description}
LOCATION:${event.locationType || event.location}
END:VEVENT
END:VCALENDAR
`

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `${event.title}.ics`
  a.click()

  URL.revokeObjectURL(url)
}
