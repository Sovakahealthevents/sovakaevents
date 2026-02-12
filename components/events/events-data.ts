export type Speaker = {
  name: string
  title: string
  org: string
  image: string
}

export type Event = {
  id: string
  title: string
  category: string
  tags: string[]
  speakers: Speaker[]
  highlights: string[]
  meta: {
    mode: string
    date: string
    duration: string
  }
}

export const EVENTS: Event[] = [
  {
    id: "osteoporosis-2026",
    title: "Understanding and Preventing Osteoporosis",
    category: "Bone Health",
    tags: ["Virtual", "FREE", "English"],
    speakers: [
      {
        name: "David Brian Karpf, MD",
        title:
          "Adj. Clinical Professor of Endocrinology, Gerontology & Metabolism",
        org: "Stanford University School of Medicine",
        image: "/david.png",
      },
    ],
    highlights: [
      "Attending, Osteoporosis & Metabolic Bone Disease Clinic, Stanford University Hospital",
      "Past-Chair, MSAB, American Bone Health | Fellow, ASBMR",
      "Scientific Advisor at Bone Health Technologies (Osteoboost).",
    ],
    meta: {
      mode: "Virtual Zoom, Worldwide",
      date: "Date TBA",
      duration: "1hr Session + Q&A",
    },
  },
  {
    id: "cancercareRaghuRam-2026",
    title: "Cancer Care Awareness:ABCs of Breast Cancer – What Every Woman Must Know!",
    category: "Cancer Awareness",
    tags: ["Virtual", "FREE", "Telugu"],
    speakers: [
      {
        name: "Dr. P. Raghu Ram OBE",
        title:
          "Essential knowledge about breast cancer awareness, early detection, and modern treatment approaches.",
        org: "Padma Shri Awardee • Consultant Surgeon: KIMS-USHALAKSHMI Centre for Breast Diseases",
        image: "/raghu.png",
      },
    ],
    highlights: [
      "Essential knowledge about breast cancer awareness, early detection, and modern treatment approaches.",
    //   "Past-Chair, MSAB, American Bone Health | Fellow, ASBMR",
    //   "Scientific Advisor at Bone Health Technologies (Osteoboost).",
    ],
    meta: {
      mode: "Virtual Zoom, Worldwide",
      date: "Date TBA",
      duration: "1hr Session + Q&A",
    },
  },
  {
    id: "CancerCareinElderly-2026",
    title: "Cancer Care in Elderly - What you need to know!",
    category: "Bone Health",
    tags: ["Virtual", "FREE", "English","Telugu"],
    speakers: [
      {
        name: "Dr. Ponnandai Somasundar",
        title:
          "Cancer Care in Elderly",
        org: "MD – Surgical Oncologist | Roger Williams Medical Center | USA, 36+ years of experience in geriatric oncology",
        image: "/somasundar.png",
      },
    ],
    highlights: [
      "Cancer burden in adults over 60 years in the Indian population.Frailty, multimorbidity and financial toxicity how they affect treatment and recovery.",
    //   "Past-Chair, MSAB, American Bone Health | Fellow, ASBMR",
    //   "Scientific Advisor at Bone Health Technologies (Osteoboost).",
    ],
    meta: {
      mode: "Virtual Zoom, Worldwide",
      date: "Date TBA",
      duration: "1hr Session + Q&A",
    },
  },
]
