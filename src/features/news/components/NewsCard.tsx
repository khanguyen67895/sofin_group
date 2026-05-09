import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import type { NewsItem } from '../types'

export interface NewsCardProps {
  item: NewsItem
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.article
      className="cursor-pointer group rounded-2xl overflow-hidden flex flex-col p-4 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        border: '2px solid #3C3C3C',
        background:
          'radial-gradient(120% 53.36% at 0% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(120% 53.36% at 0% 120%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      <Link to={`/tin-tuc/${item.id}`} className="flex flex-col flex-1">
        {/* Image */}
        <div className="overflow-hidden h-52 rounded-xl">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-neutral-100 text-base font-semibold font-['Mona_Sans'] leading-6">
              {item.category}
            </span>
            <span className="text-neutral-300 text-base font-normal font-['Mona_Sans'] leading-6">
              {item.date}
            </span>
          </div>
          <div className="self-stretch h-0.5 bg-linear-to-r from-zinc-100/10 to-zinc-100/0" />
          <h3 className="font-heading font-semibold text-neutral-100 text-xl leading-7 flex-1">
            {item.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
            {item.detail}
          </p>
          <div className="flex items-center gap-1.5 text-primary-500 text-sm font-semibold uppercase tracking-wider w-fit group-hover:opacity-80 transition-opacity mt-2">
            CHI TIẾT
            <img src={icArrowDetail} alt="" className="w-3 h-3 object-contain" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
