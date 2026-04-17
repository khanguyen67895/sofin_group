import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '@/components/ui/Button'
import logo from '@/assets/images/Logo.png'
import icMenu from '@/assets/images/ic_menu.png'
import icCloseMenu from '@/assets/images/ic_close_menu.png'

const navItems = [
  { label: 'Trang chủ',              href: '/' },
  { label: 'Về chúng tôi',           href: '/ve-chung-toi' },
  { label: 'Hệ sinh thái SOFIN Group', href: '/he-sinh-thai' },
  { label: 'Tin tức',                href: '/tin-tuc' },
  { label: 'Tuyển dụng',             href: '/tuyen-dung' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-4 right-4 md:left-20 md:right-20 z-50">
      <div className="mx-auto md:px-10 flex items-center justify-between h-18">

        {/* Left: menu icon (mobile) */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <img src={mobileOpen ? icCloseMenu : icMenu} alt="Menu" className="w-6 h-6 object-contain" />
          </button>
          <Link to="/" className="shrink-0">
            <img src={logo} alt="SOFIN GROUP" className="h-5 md:h-6 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 backdrop-blur-md bg-neutral-700/30 border border-neutral-800/50 rounded-full" style={{ padding: '12px 32px' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `relative text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-500'
                    : 'text-neutral-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="text-primary-500 text-[14px] mr-1">✦</span>}
                  {item.label}
                  {isActive && <span className="text-primary-500 text-[14px] ml-1">✦</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div>
          <Button variant="secondary" size="sm">
            LIÊN HỆ
          </Button>
        </div>
      </div>

      {/* Mobile menu — fullscreen, centered */}
      {mobileOpen && (
        <nav className="lg:hidden fixed inset-0 top-18 bg-neutral-950/20 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 font-heading font-medium text-lg transition-colors ${
                  isActive ? 'text-primary-500' : 'text-neutral-0 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="text-primary-500 text-[14px] mr-1">✦</span>}
                  {item.label}
                  {isActive && <span className="text-primary-500 text-[14px] ml-1">✦</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
