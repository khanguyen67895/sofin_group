import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import type { NewsItem } from '../types'

export interface NewsCardProps {
  item: NewsItem
  heightClass?: string
}

export default function NewsCard({
  item,
  heightClass = 'h-80 sm:h-150 md:h-150 lg:h-150 xl:h-200',
}: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
    <Link
      to={`/tin-tuc/${item.id}`}
      className="relative cursor-pointer group overflow-hidden block"
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
      }}
    >
      <img
        src={item.image}
        alt=""
        className={`w-full ${heightClass} object-cover transition-all duration-500 group-hover:blur-[2px] group-hover:brightness-75 group-hover:scale-105`}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-bold">
              {item.category}
            </span>
            <span className="text-white text-sm">{item.date}</span>
          </div>
          <div className="w-12 h-0.5 bg-white my-3" />
          <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-snug">
            {item.title}
          </h3>
        </div>
        <div className="h-30 pt-15 relative">
          <span className="inline-flex items-center gap-2 text-primary-500 text-lg font-bold uppercase transition-transform duration-400 group-hover:-translate-y-12">
            CHI TIẾT
            <img src={icArrowDetail} alt="" className="w-3.5 h-3.5" />
          </span>
          <p className="absolute left-0 right-0 top-12 text-white text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            {item.detail}
          </p>
        </div>
      </div>
    </Link>
    </motion.div>
  )
}
