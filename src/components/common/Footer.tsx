import { Link } from 'react-router-dom'
import logo from '@/assets/images/Logo.png'
import logoFooter from '@/assets/images/ic_logo_footer.png'
import icFb from '@/assets/images/ic_fb.png'
import icTiktok from '@/assets/images/ic_tiktok.png'
import icYou from '@/assets/images/ic_you.png'
import icTele from '@/assets/images/ic_tele.png'
import icPhone from '@/assets/images/ic_phone.png'
import icEmail from '@/assets/images/ic_email.png'
import icLocation from '@/assets/images/ic_location.png'

const col1 = [
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Tin tức',      href: '/tin-tuc' },
  { label: 'Tuyển dụng',   href: '/tuyen-dung' },
  { label: 'Liên hệ',      href: '/lien-he' },
]
const col2 = [
  { label: 'Khoa học công nghệ',     href: '/he-sinh-thai/cong-nghe' },
  { label: 'Đầu tư chiến lược',      href: '/he-sinh-thai/dau-tu' },
  { label: 'Truyền thông giải trí',   href: '/he-sinh-thai/truyen-thong' },
  { label: 'Giáo dục đào tạo',       href: '/he-sinh-thai/giao-duc' },
]
const col3 = [
  { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
  { label: 'Điều khoản sử dụng', href: '/dieu-khoan' },
  { label: 'Quy chế hoạt động',  href: '/quy-che' },
]

function NavCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[10px] font-heading font-bold text-neutral-500 tracking-[0.15em] uppercase">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              className="text-sm text-neutral-white hover:text-300 transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const socials = [
  { name: 'Facebook', href: 'https://facebook.com', icon: icFb },
  { name: 'Tiktok',   href: 'https://tiktok.com',   icon: icTiktok },
  { name: 'Youtube',  href: 'https://youtube.com',   icon: icYou },
  { name: 'Telegram', href: 'https://telegram.org',  icon: icTele },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950">

      {/* ── Top: Logo + Socials ── */}
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 pt-16 pb-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <img src={logo} alt="SOFIN GROUP" className="h-10 md:h-6 w-auto object-contain" />
          <div className="flex gap-3">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center hover:border-neutral-400 transition-colors"
              >
                <img src={icon} alt={name} className="w-8 h-8 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact + Nav columns ── */}
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <img src={icPhone} alt="" className="w-10 h-10 mt-1 object-contain" />
              <div>
                <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-1">ĐIỆN THOẠI</span>
                <a href="tel:0335456789" className="text-white font-heading font-bold text-lg hover:text-primary-500 transition-colors">
                  0335 456 789
                </a>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3">
              <img src={icEmail} alt="" className="w-10 h-10 mt-1 object-contain" />
              <div>
                <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-1">EMAIL</span>
                <a href="mailto:hello@sofingroup.com" className="text-white font-heading font-bold text-lg hover:text-primary-500 transition-colors">
                  hello@sofingroup.com
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-3">
              <img src={icLocation} alt="" className="w-10 h-10 mt-1 object-contain" />
              <div>
                <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-1">TRỤ SỞ CHÍNH</span>
                <p className="text-white font-heading font-bold text-lg leading-snug">
                  216 - 218 Trần Hưng Đạo, P. An Hải,<br />TP. Đà Nẵng
                </p>
              </div>
            </div>
          </div>

          <NavCol title="SOFIN GROUP" links={col1} />
          <NavCol title="HỆ SINH THÁI" links={col2} />
          <NavCol title="LEGAL" links={col3} />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-b border-neutral-800">
        <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 py-5 flex items-center justify-between">
          <p className="text-xs text-neutral-0">
            © 2026 SOFIN GROUP all rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-neutral-0 hover:text-neutral-300 transition-colors"
          >
            Lên đầu trang ↑
          </button>
        </div>
      </div>

      {/* ── Giant brand logo ── */}
      <div className="overflow-hidden flex justify-center px-5 sm:px-10 md:px-20 lg:px-30 pb-10 mt-20">
        <img src={logoFooter} alt="SOFIN GROUP" className="w-full object-contain select-none brightness-0 invert" />
      </div>
    </footer>
  )
}
