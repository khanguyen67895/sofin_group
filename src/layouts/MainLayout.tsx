import { Outlet } from 'react-router-dom'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-neutral-900">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
