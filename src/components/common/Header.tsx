import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/images/Logo.svg'
import icMenu from '@/assets/images/ic_menu.png'
import icCloseMenu from '@/assets/images/ic_close_menu.png'

const navLeft = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { label: 'Hệ sinh thái', href: '/he-sinh-thai' },
]

const navRight = [
  { label: 'Sản phẩm nổi bật', href: '/lien-he' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Tuyển dụng', href: '/tuyen-dung' },
]

const allNavItems = [...navLeft, ...navRight]

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <NavLink
      to={href}
      end={href === '/'}
      className={({ isActive }) =>
        `flex items-center text-center text-[16px] font-semibold leading-6 not-italic transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-primary-500' : 'text-[#F5F0E8] hover:text-white'
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
    <header className="fixed top-0 left-0 right-0 z-999 px-4 md:px-8 lg:px-16 pt-4">
      {/* Desktop & Mobile pill */}
      <div className="flex items-center justify-between h-18 px-6 lg:px-8 xl:px-14 bg-black/30 backdrop-blur-lg rounded-[40px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.20)]">

        {/* Mobile: hamburger */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <img src={mobileOpen ? icCloseMenu : icMenu} alt="Menu" className="w-6 h-6 object-contain" />
        </button>

        {/* Desktop left nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-16">
          {navLeft.map((item) => <NavItem key={item.href + item.label} {...item} />)}
        </nav>

        {/* Logo — center */}
        <Link to="/" className="shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <img src={logo} alt="SOFIN GROUP" className="h-5 lg:h-9 w-auto object-contain" />
        </Link>

        {/* Desktop right nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-16">
          {navRight.map((item) => <NavItem key={item.href + item.label} {...item} />)}
        </nav>

        {/* Mobile: spacer to balance hamburger */}
        <div className="lg:hidden w-9 shrink-0" />
      </div>

      {/* Mobile menu — fullscreen overlay */}
      {mobileOpen && (
        <nav className="lg:hidden fixed inset-0 top-22 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8">
          {allNavItems.map((item) => (
            <NavLink
              key={item.href + item.label}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 font-semibold text-lg transition-colors ${isActive ? 'text-primary-500' : 'text-[#F5F0E8] hover:text-white'
                }`
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
