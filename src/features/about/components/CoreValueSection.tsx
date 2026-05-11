import { motion } from 'framer-motion'
import icCoreValue from '@/assets/images/ic_core_value.png'
import icCoreValue2x from '@/assets/images/ic_core_value@2x.png'
import icItem1 from '@/assets/images/ic_item_core_value1.png'
import icItem1x2 from '@/assets/images/ic_item_core_value1@2x.png'
import icItem2 from '@/assets/images/ic_item_core_value2.png'
import icItem2x2 from '@/assets/images/ic_item_core_value2@2x.png'
import icItem3 from '@/assets/images/ic_item_core_value3.png'
import icItem3x2 from '@/assets/images/ic_item_core_value3@2x.png'
import icItem4 from '@/assets/images/ic_item_core_value4.png'
import icItem4x2 from '@/assets/images/ic_item_core_value4@2x.png'
import icItem5 from '@/assets/images/ic_item_core_value5.png'
import icItem5x2 from '@/assets/images/ic_item_core_value5@2x.png'

const itemIcons = [
  { src: icItem1, srcSet: `${icItem1x2} 2x` },
  { src: icItem2, srcSet: `${icItem2x2} 2x` },
  { src: icItem3, srcSet: `${icItem3x2} 2x` },
  { src: icItem4, srcSet: `${icItem4x2} 2x` },
  { src: icItem5, srcSet: `${icItem5x2} 2x` },
]

const values = [
  {
    title: 'ĐỒNG ĐỘI',
    description: 'Tại SOFIN GROUP, chúng tôi tin rằng thành công lớn nhất luôn được tạo nên từ sức mạnh tập thể.',
    items: [
      { label: 'Đoàn kết:', desc: 'Chung mục tiêu, cùng vượt thử thách.' },
      { label: 'Hợp tác:', desc: 'Lắng nghe, tôn trọng và phối hợp hiệu quả.' },
      { label: 'Sẻ chia:', desc: 'Hỗ trợ, chia sẻ kiến thức và cùng phát triển.' },
    ],
    span: 1,
  },
  {
    title: 'SÁNG TẠO',
    description: 'Tại SOFIN GROUP, sáng tạo là động lực để tạo ra những giải pháp đột phá trong kỷ nguyên công nghệ.',
    items: [
      { label: 'Đổi mới:', desc: 'Không ngừng cải tiến và phát triển.' },
      { label: 'Đột phá:', desc: 'Tư duy khác biệt để giải quyết vấn đề mới.' },
      { label: 'Khám phá:', desc: 'Sẵn sàng đón nhận công nghệ và xu hướng mới.' },
    ],
    span: 1,
  },
  {
    title: 'CHÍNH TRỰC',
    description: 'Tại SOFIN GROUP, chính trực là nền tảng để xây dựng niềm tin bền vững.',
    items: [
      { label: 'Trung thực:', desc: 'Nói thật, làm đúng cam kết.' },
      { label: 'Hợp tác:', desc: 'Rõ ràng trong mọi hành động.' },
      { label: 'Công bằng:', desc: 'Tôn trọng và công tâm.' },
    ],
    span: 1,
  },
  {
    title: 'LINH HOẠT',
    description: 'Công nghệ thay đổi mỗi ngày. SOFIN GROUP luôn linh hoạt thích nghi và chủ động dẫn đầu thay đổi.',
    items: [
      { label: 'Thích nghi:', desc: 'Phản ứng nhanh nhạy trước thay đổi.' },
      { label: 'Cởi mở:', desc: 'Đón nhận điều mới như cơ hội.' },
      { label: 'Đa năng:', desc: 'Sẵn sàng vượt giới hạn.' },
    ],
    span: 1,
  },
  {
    title: 'TỐC ĐỘ',
    description: 'Tốc độ tạo nên lợi thế. SOFIN GROUP luôn nhanh chóng và hiệu quả.',
    items: [
      { label: 'Quyết đoán:', desc: 'Ra quyết định nhanh và chính xác.' },
      { label: 'Hiệu quả:', desc: 'Hoàn thành đúng hạn, tối ưu chất lượng.' },
      { label: 'Tiên phong:', desc: 'Dẫn đầu công nghệ và xu hướng mới.' },
    ],
    span: 1,
  },
]

export default function CoreValueSection() {
  return (
    <section className="py-15 md:py-20">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        {/* Header */}
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={icCoreValue}
            srcSet={`${icCoreValue2x} 2x`}
            alt="Giá trị cốt lõi"
            className="mb-3 h-8 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-medium font-['Unbounded'] leading-tight text-primary-500">
            Năm trụ cột định hình SOFIN GROUP
          </h2>
          <p className="mt-4 max-w-2xl text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            Giá trị cốt lõi không chỉ là những từ trên giấy. Đó là cách chúng tôi suy nghĩ, cách chúng tôi hành động, và cách chúng tôi kiến tạo nên SOFIN GROUP của ngày hôm nay và tương lai.
          </p>
        </motion.div>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {values.slice(0, 2).map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.slice(2).map((v, i) => (
            <ValueCard key={v.title} value={v} index={i + 2} />
          ))}
        </div>

      </div>
    </section>
  )
}

type Value = (typeof values)[number]

function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-center gap-3">
       <img
          src={itemIcons[index].src}
          srcSet={itemIcons[index].srcSet}
          alt=""
          className="w-9.5 h-9.5 object-contain"
        />
        <h3 className="text-white text-base font-semibold font-['Mona_Sans'] leading-6 tracking-wide">
          {value.title}
        </h3>
      </div>

      <p className="text-text-neutral-normal text-sm font-normal font-['Mona_Sans'] leading-6">
        {value.description}
      </p>

      <ul className="flex flex-col gap-2">
        {value.items.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <img
              src={itemIcons[index].src}
              srcSet={itemIcons[index].srcSet}
              alt=""
              className="mt-1 w-4 h-4 shrink-0 object-contain"
            />
            <span className="text-text-neutral-normal text-sm font-['Mona_Sans'] leading-6">
              <span className="font-semibold text-white">{item.label}</span>{' '}
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
