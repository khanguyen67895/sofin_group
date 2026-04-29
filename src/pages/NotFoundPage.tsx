import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '@/constants'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="mt-2 text-lg text-gray-600">Trang không tồn tại</p>
        <Link
          to={ROUTES.HOME}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Về trang chủ
        </Link>
      </motion.div>
    </div>
  )
}
