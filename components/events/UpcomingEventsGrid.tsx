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
    tags: ['Virtual', 'FREE', 'English'],

    speakers: [
      {
        name: 'David Brian Karpf, MD',
        title:
          'Adj. Clinical Professor of Endocrinology, Gerontology & Metabolism',
        org: 'Stanford University School of Medicine',
        image: '/david.png',
      },
    ],

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
    title: 'Cancer Awareness : Cancer Care in Elderly & Breast Cancer',
    category: 'Cancer Awareness',
    tags: ['Virtual', 'FREE', 'English'],

    speakers: [
      {
        name: 'Dr. Ponnandai Somasundar',
        title: 'MD – Surgical Oncologist',
        org: 'Roger Williams Medical Center',
        image: '/somasundar.png',
      },
      {
        name: 'Dr. P. Raghu Ram OBE',
        title: 'Padma Shri Awardee • Consultant Surgeon',
        org: ' KIMS-USHALAKSHMI Centre for Breast Diseases',
        image: '/raghu.png',
      },
    ],

    highlights: [
      'Founding Director, KIMS-USHALAKSHMI Centre for Breast Diseases. ',
      'Founder & Chairman, Ushalakshmi Breast Cancer Foundation.',
    ],

    meta: {
      mode: 'Virtual Zoom, Worldwide',
      date: 'Date TBA',
      duration: '1hr Session + Q&A',
    },
  },
  {
    id: 3,
    title: 'Cancer Awareness : Cancer Care in Elderly & Breast Cancer',
    category: 'Cancer Awareness',
    tags: ['Virtual', 'FREE', 'Telugu'],

    speakers: [
      {
        name: 'Dr. Ponnandai Somasundar',
        title: 'MD – Surgical Oncologist',
        org: 'Roger Williams Medical Center',
        image: '/somasundar.png',
      },
      {
        name: 'Dr. P. Raghu Ram OBE',
        title: 'Padma Shri Awardee • Consultant Surgeon',
        org: ' KIMS-USHALAKSHMI Centre for Breast Diseases',
        image: '/raghu.png',
      },
    ],

    highlights: [
      'Founding Director, KIMS-USHALAKSHMI Centre for Breast Diseases. ',
      'Founder & Chairman, Ushalakshmi Breast Cancer Foundation.',
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
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

