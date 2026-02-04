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

    tags: ['Virtual', 'FREE'],

    speaker: {
      name: 'David Brian Karpf, MD',
      title:
        'Adj. Clinical Professor of Endocrinology, Gerontology & Metabolism',
      org: 'Stanford University School of Medicine',
      image: '/david.png',
    },

    highlights: [
      'Attending, Osteoporosis & Metabolic Bone Disease Clinic, Stanford University Hospital',
      'Past-Chair, MSAB, American Bone Health | Fellow, ASBMR',
      'Scientific Advisor at Bone Health Technologies (Osteoboost).',
    ],

    meta: {
      mode: 'Virtual Zoom, Worldwide',
      date: 'Date TBA',
      duration: '1hr Session + Q&A',
    },
  },

  {
    id: 2,
    title: 'Halt Heart Attacks! Stop Diabetes!',
    category: 'Heart Health',

    tags: ['Virtual', 'FREE'],

    speaker: {
      name: 'Cesar Molina, M.D., FACC',
      title: 'Cardiologist & Internal Medicine Specialist',
      org: 'Co-founder & Medical Director of South Asian heart center at el camino hospital',
      image: '/molina.jpg',
    },

    highlights: [
      'M.D. Yale University | Cardiology Fellowship, Stanford University',
      'Expert in Cardiovascular Medicine',
      'Specialized in South Asian heart health and preventing cardiology',
    ],

    meta: {
      mode: 'Virtual Zoom, Worldwide',
      date: 'Date TBA',
      duration: '1hr Session + Q&A',
    },
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
