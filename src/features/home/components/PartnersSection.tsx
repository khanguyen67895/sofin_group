import Button from '@/components/ui/Button'

const partners = ['VPBank', 'hipt', 'GIANTY', 'SeABank', 'Fiin']

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-800/30 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="block text-[11px] font-heading font-bold text-primary-500 tracking-[0.2em] uppercase mb-3">
              THÀNH LẬP BỞI TẬP ĐOÀN
            </span>
            <h2 className="font-heading font-bold text-neutral-0"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Đối tác &amp; Khách hàng
            </h2>
          </div>
          <p className="text-neutral-500 text-[14px] leading-[1.75] max-w-xs">
            Chúng tôi tự hào đồng hành cùng những đối tác chiến lược hàng đầu, tạo nên sức mạnh
            cộng hưởng của hệ sinh thái SOFIN.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-neutral-800 border border-neutral-700/50 rounded-xl h-28 flex items-center justify-center cursor-pointer group hover:border-neutral-600 transition-colors"
            >
              <span className="font-heading font-bold text-xl text-neutral-600 group-hover:text-neutral-200 transition-colors">
                {name}
              </span>
            </div>
          ))}

          <div className="bg-neutral-800 border border-neutral-700/50 rounded-xl h-28 flex flex-col items-center justify-center gap-3 px-5 hover:border-primary-500/30 transition-colors">
            <p className="text-center text-[12px] text-neutral-500 leading-relaxed">
              Cùng trở thành đối tác hàng đầu<br />Đông Nam Á
            </p>
            <Button variant="primary" size="xs">
              HỢP TÁC
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
