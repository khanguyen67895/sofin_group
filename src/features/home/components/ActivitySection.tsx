import { useState } from 'react'

const slides = [
  { label: 'Hội nghị công nghệ 2024',  caption: 'Sự kiện thường niên của SOFIN GROUP' },
  { label: 'Ra mắt nền tảng SofinOS',  caption: 'Lễ ra mắt sản phẩm mới' },
  { label: 'Chương trình đào tạo 2024', caption: 'Phát triển nhân lực nội bộ' },
]

export default function ActivitySection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="flex items-start justify-between mb-10">
          <div>
            <span className="block text-[11px] font-heading font-bold text-primary-500 tracking-[0.2em] uppercase mb-2">
              HOẠT ĐỘNG
            </span>
            <h2 className="font-heading font-bold text-neutral-0"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Hình ảnh hoạt động
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >←</button>
            <span className="text-sm text-neutral-500 tabular-nums">{current + 1}/{slides.length}</span>
            <button
              onClick={() => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >→</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 h-[420px] md:h-[500px]">
          <div className="col-span-2 relative bg-neutral-800 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-heading font-bold text-neutral-0 text-base">{slides[current].label}</p>
              <p className="text-neutral-400 text-[13px] mt-1">{slides[current].caption}</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            {['Văn phòng SOFIN', 'Ký kết đối tác'].map((label) => (
              <div key={label} className="flex-1 relative bg-neutral-800 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-neutral-0 text-xs font-medium">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
