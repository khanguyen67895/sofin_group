import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/images/Logo.svg'
import icMenu from '@/assets/images/ic_menu.png'
import icCloseMenu from '@/assets/images/ic_close_menu.png'
import icHomePage from '@/assets/images/ic_home_page.png'
import icLanguageVi from '@/assets/images/ic_language_vi.png'

const navLeft = [
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Hệ sinh thái', href: '/he-sinh-thai' },
  { label: 'Sản phẩm nổi bật', href: '/san-pham-noi-bat' },
]

const navRight = [
  { label: 'Tin tức/Sự kiện', href: '/tin-tuc' },
  { label: 'Tuyển dụng', href: '/tuyen-dung' },
  { label: 'Liên hệ', href: '/lien-he' },
]

const navMobile = [
  { label: 'Trang chủ', href: '/' },
]

const allNavItems = [...navMobile, ...navLeft, ...navRight]

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <NavLink
      to={href}
      end={href === '/'}
      className={({ isActive }) =>
        `flex items-center text-center text-[13px] xl:text-[15px] font-semibold leading-6 not-italic transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-primary-500' : 'text-[#F5F0E8] hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && <span className="text-primary-500 mr-2">✦</span>}
          {label}
          {isActive && <span className="text-primary-500 ml-2">✦</span>}
        </>
      )}
    </NavLink>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-999 px-4 md:px-8 lg:px-16 py-3 md:pt-4 bg-black lg:bg-transparent">
      <div className="h-10 md:h-18 px-4 lg:px-6 xl:px-10 bg-black/30 backdrop-blur-lg rounded-[40px] md:border md:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.20)]
        flex items-center lg:grid lg:grid-cols-[1fr_auto_1fr] overflow-hidden">

        {/* ── LEFT: mobile hamburger / desktop nav ── */}
        <div className="flex items-center gap-4 xl:gap-6 min-w-0">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-7 h-7 flex items-center justify-center shrink-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <img src={mobileOpen ? icCloseMenu : icMenu} alt="Menu" className="w-6 h-6 object-contain" />
          </button>

          {/* Desktop left nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 min-w-0">
            <Link to="/" className="shrink-0">
              <img src={icHomePage} alt="Trang chủ" className="w-6 h-6 object-contain" />
            </Link>
            {navLeft.map((item) => <NavItem key={item.href} {...item} />)}
          </nav>
        </div>

        {/* ── CENTER: Logo ── */}
        <Link to="/" className="flex-1 flex justify-start ml-2 lg:flex-none lg:justify-center lg:px-4">
          <img src={logo} alt="SOFIN GROUP" className="h-5 lg:h-6 lg:pl-18 xl:h-9 w-auto object-contain" />
        </Link>

        {/* ── RIGHT: mobile Liên hệ / desktop nav ── */}
        <div className="flex items-center justify-end gap-4 xl:gap-6 min-w-0">
          {/* Desktop right nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 min-w-0">
            {navRight.map((item) => <NavItem key={item.href} {...item} />)}
            <img src={icLanguageVi} alt="Tiếng Việt" className="w-7 h-7 object-contain shrink-0 cursor-pointer" />
          </nav>

          {/* Mobile Liên hệ */}
          <Link
            to="/lien-he"
            className="lg:hidden shrink-0 px-4 py-1.5 rounded-full border border-primary-500 text-primary-500 text-sm font-semibold whitespace-nowrap hover:bg-primary-500/10 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <nav className="lg:hidden fixed inset-0 top-14 bg-black/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-8">
          {allNavItems.map((item) => (
            <NavLink
              key={item.href + item.label}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 font-semibold text-lg transition-colors ${isActive ? 'text-primary-500' : 'text-[#F5F0E8] hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="text-primary-500 text-sm mr-1">✦</span>}
                  {item.label}
                  {isActive && <span className="text-primary-500 text-sm ml-1">✦</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
