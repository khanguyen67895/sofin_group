import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '@/components/ui/Button'
import logo from '@/assets/images/Logo.png'

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
    <header className="fixed top-0 left-20 right-20 z-50">
      <div className="mx-auto px-6 md:px-10 flex items-center justify-between h-18">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="SOFIN GROUP" className="h-5 md:h-6 w-auto object-contain" />
        </Link>

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
                  {isActive && <span className="text-primary-500 text-[8px] mr-1">✦</span>}
                  {item.label}
                  {isActive && <span className="text-primary-500 text-[8px] ml-1">✦</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="secondary" size="sm">
            LIÊN HỆ
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.25 w-9 h-9"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] bg-neutral-300 transition-all origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px] w-6' : 'w-6'}`} />
          <span className={`block h-[1.5px] bg-neutral-300 transition-opacity w-4 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] bg-neutral-300 transition-all origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px] w-6' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-neutral-800/50 bg-neutral-900/95 backdrop-blur-md px-6 py-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-2.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-neutral-0' : 'text-neutral-400 hover:text-neutral-0'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-neutral-800 mt-2">
            <Button variant="secondary" size="sm" className="w-full">
              LIÊN HỆ
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
