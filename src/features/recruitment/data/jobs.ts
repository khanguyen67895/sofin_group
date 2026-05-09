import type { CoreValue, Job, JobDescriptionBlock } from '../types'

const defaultDescription: JobDescriptionBlock[] = [
  {
    heading: 'Research',
    items: [
      'Collaborating with Digital Platforms team to collect customer feedback, usage metrics, and usability findings into design in order to enhance user experience.',
      'Identifying and troubleshooting UX problems (e.g. responsiveness)',
    ],
  },
  {
    heading: 'Design',
    items: [
      'Working closely with stakeholders to clarify business requirements, define user flows and feature wireframes.',
      'Developing intuitive, usable, and engaging interactions and visual designs for websites and mobile applications across on multiple platforms.',
      'Optimizing and translating UI designs into style guides, and design patterns.',
      'Contributing UI elements in design system such as input controls, navigational components and informational components.',
    ],
  },
  {
    heading: 'Development',
    items: [
      'Participate in the development process with engineers from hand-off to build, test, release, and maintenance for UI/UX related issues.',
    ],
  },
]

const defaultRequirements: string[] = [
  '4+ years of UI/UX experience for large-scale digital products or services, with strong experience with mobile applications',
  'Fluent English',
  'Be passionate about resolving user pain points through great design',
  'Be proficient in Figma',
  'Good stakeholder management skills',
  'Pay strong attention to detail and have a keen eye for aesthetics',
  'Ability to clearly and effectively communicate design processes, ideas, and solutions to teams and clients.',
  'Ability to work with clients to understand detailed requirements and design complete user experiences that meet client needs and vision',
]

export const jobs: Job[] = [
  {
    id: 'senior-product-designer',
    title: 'Senior Product Designer',
    location: 'Đà Nẵng (Remote)',
    salary: 'Thương lượng',
    updatedAt: '16/04/2026',
    description: defaultDescription,
    requirements: defaultRequirements,
  },
  {
    id: 'ky-su-bao-duong-sua-chua',
    title: 'Kỹ Sư Bảo Dưỡng Sửa Chữa',
    location: 'Đà Nẵng (Remote)',
    salary: '25tr-30tr ₫/tháng',
    updatedAt: '16/04/2026',
    description: defaultDescription,
    requirements: defaultRequirements,
  },
  {
    id: 'ky-su-ky-thuat-uv-laser-1',
    title: 'Kỹ Sư Kỹ Thuật Công Đoạn UV Laser',
    location: 'Đà Nẵng (Remote)',
    salary: 'Thương lượng',
    updatedAt: '16/04/2026',
    description: defaultDescription,
    requirements: defaultRequirements,
  },
  {
    id: 'head-manager-ground-station-software',
    title: 'Head / Manager Ground Station Software',
    location: 'Đà Nẵng (Remote)',
    salary: '$ 1,000-2,000 /tháng',
    updatedAt: '16/04/2026',
    description: defaultDescription,
    requirements: defaultRequirements,
  },
  {
    id: 'ky-su-ky-thuat-uv-laser-2',
    title: 'Kỹ Sư Kỹ Thuật Công Đoạn UV Laser',
    location: 'Đà Nẵng (Remote)',
    salary: 'Thương lượng',
    updatedAt: '16/04/2026',
    description: defaultDescription,
    requirements: defaultRequirements,
  },
]

export const benefits: string[] = [
  'Mức lương cạnh tranh + Thưởng hiệu suất',
  'Giờ làm việc linh hoạt',
  'Dự án mới liên tục và đổi mới',
  'Cơ hội học tập và phát triển',
]

export const coreValues: CoreValue[] = [
  {
    title: 'Xây dựng đội ngũ',
    description: 'Xây dựng quy trình làm việc minh bạch để mọi thành viên cùng hướng về một mục tiêu chung.',
  },
  {
    title: 'Chia sẻ kiến thức',
    description: 'Khuyến khích giao tiếp cởi mở và lan tỏa kinh nghiệm giữa các cá nhân, phòng ban.',
  },
  {
    title: 'Tư duy cởi mở',
    description: 'Tạo môi trường nơi mọi góc nhìn và ý tưởng đều được lắng nghe và tôn trọng.',
  },
  {
    title: 'Khơi nguồn sáng tạo',
    description: 'Luôn tìm kiếm những cách tiếp cận mới để giải quyết vấn đề một cách khác biệt.',
  },
  {
    title: 'Sẵn sàng thích nghi',
    description: 'Không ngại thay đổi, liên tục học hỏi và thích ứng với những thách thức mới.',
  },
  {
    title: 'Định hướng tương lai',
    description: 'Chủ động khám phá công nghệ và xu hướng mới để tạo ra giá trị bền vững.',
  },
]
