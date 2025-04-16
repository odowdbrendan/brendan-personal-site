type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Fantasy Football Helper',
    description:
      'Regonition system that offers fantasy football reccomendations based on your current team and AI predicited trends',
    link: 'https://www.google.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Token Traveler',
    description: 'Augmented Reality Android mobile app where players collect beer, park, and coffee tokens.',
    link: 'https://www.google.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Amazon',
    title: 'Data Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://health.amazon.com/onemedical',
    id: 'work1',
  },
  {
    company: 'PwC',
    title: 'Data Engineer',
    start: '2023',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Amazon',
    title: 'Business Intelligence Engineer',
    start: '2021',
    end: '2023',
    link: 'https://pharmacy.amazon.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Journey working at Amazon',
    description: 'My experience working in data roles at Amazon.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/odowdbrendan',
  },
  {
    label: 'X',
    link: 'https://x.com/brendanodowd16',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brendanodowd/',
  },
]

export const EMAIL = 'brendan.pp.odowd@gmail.com'
