// import { UpcomingEventCard } from "./UpcomingEventCard"


// const EVENTS = [
//   {
//     id: 1,
//     title: 'Understanding and Preventing Osteoporosis',
//     category: 'Bone Health',
//     speaker: 'David Brian Karpf, MD',
//     speakerTitle:
//       'Adj. Clinical Professor of Endocrinology, Gerontology & Metabolism',
//     speakerOrg: 'Stanford University School of Medicine',
//     tags: ['Virtual', 'FREE'],
//   },
//   {
//     id: 2,
//     title: 'Halt Heart Attacks! Stop Diabetes!',
//     category: 'Heart Health',
//     speaker: 'Cesar Molina, M.D., FACC',
//     speakerTitle:
//       'Cardiologist & Internal Medicine Specialist',
//     speakerOrg:
//       'Co-founder & Medical Director, South Asian Heart Center',
//     tags: ['Virtual', 'FREE'],
//   },
// ]

// export function UpcomingEventsGrid({
//   onNotify,
// }: {
//   onNotify: (title: string) => void
// }) {
//   return (
//     <div className="grid md:grid-cols-2 gap-6">
//       {EVENTS.map((event) => (
//         <UpcomingEventCard
//           key={event.id}
//           event={event}
//           onNotify={onNotify}
//         />
//       ))}
//     </div>
//   )
// }

import { UpcomingEventCard } from './UpcomingEventCard'

const EVENTS = [
  {
    id: 1,
    title: 'Understanding and Preventing Osteoporosis',
    category: 'Bone Health',
    speaker: 'David Brian Karpf, MD',
    speakerTitle:
      'Adj. Clinical Professor of Endocrinology, Gerontology & Metabolism',
    speakerOrg: 'Stanford University School of Medicine',
    speakerImage: '/david.png',
  },
  {
    id: 2,
    title: 'Halt Heart Attacks! Stop Diabetes!',
    category: 'Heart Health',
    speaker: 'Cesar Molina, M.D., FACC',
    speakerTitle:
      'Cardiologist & Internal Medicine Specialist',
    speakerOrg:
      'Co-founder & Medical Director, South Asian Heart Center',
      speakerImage: '/molina.jpg',
  },
]

export function UpcomingEventsGrid({
  onNotify,
}: {
  onNotify: (title: string) => void
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {EVENTS.map((event) => (
        <UpcomingEventCard
          key={event.id}
          event={event}
          onNotify={onNotify}
        />
      ))}
    </div>
  )
}
