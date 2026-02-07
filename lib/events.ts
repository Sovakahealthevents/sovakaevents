export type Speaker = {
  id: number
  role: 'OPENING SPEAKER' | 'FEATURED SPEAKER'
  name: string
  title: string
  credentials?: string
  bio: string
  topic: string
  topicDescription: string
  highlights?: string[]
  website?: string
  image?: string
}

export type Event = {
  id: number
  type: string
  title: string
  date: string
  dayName: string
  month: string
  time: string
  location: string
  locationType?: string
  featured?: boolean
  free?: boolean
  aboutEvent?: string
  speakers: Speaker[]
}


export const events: Event[] = [
  {
    id: 1,
    type: 'Virtual Zoom, Worldwide',
    title: 'Cancer Awareness : Cancer Care in Elderly & Breast Cancer In Women',
    date: '02-2026',
    dayName: 'Monday',
    month: 'March',
    time: '10:00 AM IST',
    location: 'Virtual Zoom',
    locationType: 'Worldwide',
    featured: true,
    free: true,

    aboutEvent:
      "Join two distinguished surgeons for a comprehensive cancer awareness camp. Dr. Somasundar will address the growing cancer burden in India's ageing population, while Dr. Raghu Ram will focus on breast cancer awareness and early detection.",

    speakers: [
      {
        id: 1,
        role: 'OPENING SPEAKER',
        name: 'Dr. Ponnandai S. Somasundar',
        title: 'MD – Surgical Oncologist | Roger Williams Medical Center',
        bio:
          'Surgical Oncologist at Roger Williams Medical Center, Providence. 36+ years of experience in geriatric oncology.',
        topic: 'Cancer Care in Elderly ',
        topicDescription:
          "• Cancer burden in adults over 60 years in the Indian population • Frailty, multimorbidity and financial toxicity how they affect treatment and recovery",
        highlights: [
          "55–60% of India's cancer burden in adults over 60",
          'Frailty & multimorbidity challenges',
          'Financial toxicity in elderly households',
          'Need for geriatric oncology policies',
        ],
        image: '/somasundar.png',
      },

      {
        id: 2,
        role: 'FEATURED SPEAKER',
        name: 'Dr. P. Raghu Ram OBE',
        title:
          'Padma Shri Awardee • Consultant Surgeon: KIMS-USHALAKSHMI Centre for Breast Diseases',
        bio:
          'Founding Director, KIMS-USHALAKSHMI Centre for Breast Diseases. Founder & Chairman, Ushalakshmi Breast Cancer Foundation.',
        topic:
          'ABCs of Breast Cancer',
        topicDescription:
          'Essential knowledge about breast cancer awareness, early detection, and modern treatment approaches.',
        website: 'https://breastcancerindia.org',
        image: '/raghu.png',
      },
    ],
  },
]

