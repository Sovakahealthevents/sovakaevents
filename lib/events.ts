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
    title: 'Cancer Awareness Camp: Elderly & Breast Cancer',
    date: '02',
    dayName: 'Monday',
    month: 'March',
    time: '10:00 AM IST',
    location: 'Virtual Zoom',
    locationType: 'Worldwide',
    featured: true,
    free: true,

    aboutEvent:
      "Join two distinguished oncologists for a comprehensive cancer awareness camp. Dr. Somasundar will address the growing cancer burden in India's ageing population, while Dr. Raghu Ram will focus on breast cancer awareness and early detection.",

    speakers: [
      {
        id: 1,
        role: 'OPENING SPEAKER',
        name: 'Dr. Ponnandai S. Somasundar',
        title: 'MD – Surgical Oncology Specialist',
        bio:
          'Board-certified Surgical Oncologist at Roger Williams Medical Center, Providence. 36+ years of experience in geriatric oncology.',
        topic: 'Cancer in Elderly',
        topicDescription:
          "55–60% of India's cancer burden now in adults over 60. Covering frailty, multimorbidity, financial toxicity, and the urgent need for geriatric oncology policies.",
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
          'Padma Shri & Dr. B.C. Roy National Awardee • OBE',
        bio:
          'Founding Director, KIMS-USHALAKSHMI Centre for Breast Diseases. Founder & Chairman, Ushalakshmi Breast Cancer Foundation.',
        topic:
          'ABCs of Breast Cancer – What Everyone Must Know!',
        topicDescription:
          'Essential knowledge about breast cancer awareness, early detection, and modern treatment approaches.',
        website: 'https://breastcancerindia.org',
        image: '/raghu.png',
      },
    ],
  },
]

