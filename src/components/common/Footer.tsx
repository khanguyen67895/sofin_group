import { Link } from 'react-router-dom'
import logo from '@/assets/images/Logo.png'

const col1 = [
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Tin tức',      href: '/tin-tuc' },
  { label: 'Tuyển dụng',   href: '/tuyen-dung' },
  { label: 'Liên hệ',      href: '/lien-he' },
]
const col2 = [
  { label: 'Khoa học công nghệ',  href: '/he-sinh-thai/cong-nghe' },
  { label: 'Đầu tư chiến lược',   href: '/he-sinh-thai/dau-tu' },
  { label: 'Truyền thông giá trị',href: '/he-sinh-thai/truyen-thong' },
  { label: 'Giáo dục đào tạo',    href: '/he-sinh-thai/giao-duc' },
]
const col3 = [
  { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
  { label: 'Điều khoản sử dụng', href: '/dieu-khoan' },
  { label: 'Quy chế hoạt động',  href: '/quy-che' },
]

function NavCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4
        className="text-[11px] font-bold text-white tracking-[0.15em] uppercase"
        style={{ fontFamily: 'Unbounded, sans-serif' }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              className="text-sm text-neutral-500 hover:text-neutral-200 transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Social SVG icons
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}
function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.93 3.57L1.07 11.43c-.9.35-.88 1.35.03 1.67l5.15 1.61 2 6.33c.26.83 1.31 1.1 1.93.49l2.88-2.73 5.6 4.12c.76.56 1.84.13 2.02-.8l3.44-17.33c.2-.98-.73-1.76-1.19-1.22z"/>
    </svg>
  )
}

const socials = [
  { name: 'Facebook',  href: 'https://facebook.com',  Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { name: 'Youtube',   href: 'https://youtube.com',   Icon: YoutubeIcon },
  { name: 'Telegram',  href: 'https://telegram.org',  Icon: TelegramIcon },
]

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">

      {/* ── Main content ── */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto] gap-10">

          {/* Contact column */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="SOFIN GROUP" className="h-6 w-auto object-contain object-left" />

            <div className="flex flex-col gap-3.5">
              <a href="tel:0335456789" className="flex items-start gap-2.5 text-sm text-neutral-500 hover:text-neutral-200 transition-colors">
                <span className="mt-0.5 text-neutral-600 shrink-0"><PhoneIcon /></span>
                0335 456 789
              </a>
              <a href="mailto:hello@sofingroup.com" className="flex items-start gap-2.5 text-sm text-neutral-500 hover:text-neutral-200 transition-colors">
                <span className="mt-0.5 text-neutral-600 shrink-0"><MailIcon /></span>
                hello@sofingroup.com
              </a>
              <p className="flex items-start gap-2.5 text-sm text-neutral-500">
                <span className="mt-0.5 text-neutral-600 shrink-0"><MapPinIcon /></span>
                216–218 Trần Hưng Đạo, P. An Hải,<br/>TP. Đà Nẵng
              </p>
            </div>
          </div>

          <NavCol title="SOFIN GROUP" links={col1} />
          <NavCol title="HỆ SINH THÁI" links={col2} />
          <NavCol title="CHÍNH SÁCH"   links={col3} />

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[11px] font-bold text-white tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Unbounded, sans-serif' }}
            >
              SOCIAL
            </h4>
            <div className="flex gap-2.5">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-500 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-neutral-600">
            © 2025 SOFIN GROUP all rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors"
          >
            Lên đầu trang ↑
          </button>
        </div>
      </div>

      {/* ── Giant brand name ── */}
      <div className="overflow-hidden">
        <p
          className="font-black text-white text-center leading-[0.85] select-none py-3"
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontSize: 'clamp(4rem, 18vw, 18rem)',
            opacity: 0.04,
          }}
        >
          SOFIN<br/>GROUP
        </p>
      </div>
    </footer>
  )
}
