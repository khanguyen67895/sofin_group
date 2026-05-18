import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import icPhone from '@/assets/images/ic_phone.png'
import icEmail from '@/assets/images/ic_email.png'
import icLocation from '@/assets/images/ic_location.png'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import icItemContact from '@/assets/images/ic_bg_vision.png'
import bgContact from '@/assets/images/bg_contact.png'
import bgFormHopTacMB from '@/assets/images/bg-form-hop-tac-mb.png'

const contactInfo = [
  {
    icon: icPhone,
    label: 'ĐIỆN THOẠI',
    value: '079 456 6789',
    href: 'tel:0335456789',
  },
  {
    icon: icEmail,
    label: 'EMAIL',
    value: 'vietnguyen@sofingroup.com',
    href: 'mailto:vietnguyen@sofingroup.com',
  },
  {
    icon: icLocation,
    label: 'TRỤ SỞ CHÍNH',
    value: '216 - 218 Trần Hưng Đạo, P. An Hải, TP. Đà Nẵng',
    href: 'https://maps.google.com/?q=216+Tran+Hung+Dao+Da+Nang',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0C0C0C] pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden">
        <img
          src={bgContact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <motion.div
          className="relative mx-auto px-5 sm:px-10 md:px-20 lg:px-30 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-neutral-100 text-2xl md:text-6xl font-semibold font-['Unbounded'] md:leading-18">
            Liên hệ hợp tác
          </h1>
          <p className="mt-4 text-neutral-100 text-base font-normal font-['Mona_Sans'] leading-6">
            Chọn mục đích liên hệ — chúng tôi sẽ kết nối đúng người, đúng lúc
          </p>
        </motion.div>
      </section>

      {/* Main content: contact cards left + form right */}
      <section className="bg-[#0C0C0C] flex flex-col pt-12 md:pt-20">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-20 lg:px-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

            {/* LEFT: contact cards stacked */}
            <div className="flex flex-col relative z-100 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-8 py-6 flex items-center gap-4 border-2 border-neutral-800 transition-colors hover:border-neutral-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={icItemContact}
                    alt=""
                    className="absolute top-0 left-0 w-50 h-50 opacity-10 pointer-events-none select-none"
                    style={{
                      WebkitMaskImage: 'radial-gradient(ellipse at top left, black 20%, transparent 75%)',
                      maskImage: 'radial-gradient(ellipse at top left, black 20%, transparent 75%)',
                    }}
                  />
                  <img src={item.icon} alt="" className="w-10 h-10 shrink-0 object-contain" />
                  <div className="flex flex-col gap-1">
                    <span className="text-neutral-300 text-[10px] font-normal font-['Mona_Sans'] uppercase leading-3 tracking-[4px]">
                      {item.label}
                    </span>
                    <span className="text-neutral-100 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-semibold font-['Unbounded'] leading-snug group-hover:text-primary-500 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* RIGHT: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-neutral-100 text-base md:text-2xl font-normal font-['Mona_Sans'] md:leading-9 mb-8">
                Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng doanh nghiệp của bạn
              </p>

              {submitted ? (
                <div className="border border-neutral-700 px-6 py-8 text-center">
                  <div className="text-positive-500 text-3xl mb-3">✓</div>
                  <p className="font-heading font-bold text-white text-lg mb-1">Đã nhận yêu cầu!</p>
                  <p className="text-neutral-400 text-sm">
                    Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }) }}
                    className="mt-6 text-xs text-neutral-500 hover:text-neutral-300 transition-colors underline"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-30 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Họ và Tên *"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      required
                      className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại *"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      required
                      className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Lời nhắn yêu cầu hợp tác"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors resize-none"
                  />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      rightIcon={<img src={icArrowDetail} alt="" className="w-full h-3.5 filter-[brightness(0)_invert(1)]" />}
                    >
                      GỬI YÊU CẦU
                    </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>

        <div className="relative w-full -mt-20">
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          <img
            src={bgFormHopTacMB}
            alt=""
            className="w-full object-contain"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        </div>
      </section>
    </>
  )
}
