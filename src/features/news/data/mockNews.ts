import icInfo1 from '@/assets/images/ic_info1.png'
import icInfo2 from '@/assets/images/ic_info2.png'
import icInfo3 from '@/assets/images/ic_info3.png'
import type { NewsItem } from '../types'

const images = [icInfo1, icInfo2, icInfo3]

const seeds: Omit<NewsItem, 'id' | 'image'>[] = [
  {
    category: 'Đầu tư',
    date: '25 Tháng 4, 2026',
    title: 'SOFIN đầu tư 15 triệu USD vào 3 công ty khởi nghiệp trong lĩnh vực HealthTech.',
    detail: 'Danh mục y tế công nghệ mở rộng với các khoản đầu tư chiến lược vào AI chẩn đoán hình ảnh.',
  },
  {
    category: 'Công nghệ',
    date: '15 Tháng 3, 2026',
    title: 'Giới thiệu nền tảng SOFIN AI phiên bản 3.0.',
    detail: 'Nền tảng AI thế hệ mới với khả năng xử lý ngôn ngữ tự nhiên tiếng Việt đạt độ chính xác 98%.',
  },
  {
    category: 'Đầu tư',
    date: '25 Tháng 4, 2026',
    title: 'SOFIN Summit 2025: Hội nghị AI và đổi mới sáng tạo lớn nhất khu vực Đông Nam Á.',
    detail: 'Hội tụ hơn 2.000 lãnh đạo doanh nghiệp, chuyên gia công nghệ và nhà đầu tư hàng đầu từ 30 quốc gia.',
  },
]

export const mockNews: NewsItem[] = Array.from({ length: 24 }, (_, i) => {
  const seed = seeds[i % seeds.length]
  return {
    id: `mock-${i + 1}`,
    image: images[i % images.length],
    ...seed,
  }
})
