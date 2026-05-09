import { motion } from 'framer-motion'
import { benefits } from '../data/jobs'
import { useJobList } from '../hooks/useRecruitment'
import { JobCardSkeleton } from '@/components/ui/Skeleton'
import JobCard from './JobCard'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path
        d="M3.5 9.5L7 13L14.5 5.5"
        stroke="#00FFAA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function JobListSection() {
  const { data: jobs = [], isLoading } = useJobList()

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — jobs list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <JobCardSkeleton key={i} />)
            ) : jobs.length === 0 ? (
              <div className="text-neutral-500 text-sm py-8">Hiện chưa có vị trí tuyển dụng.</div>
            ) : (
              jobs.map((job) => <JobCard key={job.id} job={job} />)
            )}
          </motion.div>

          {/* Right — panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-first lg:order-last lg:sticky lg:top-24"
          >
            <span className="justify-center text-text-neutral-normal text-[10px] font-normal font-['Mona_Sans'] uppercase leading-3 tracking-[4px]">
              CÁC VỊ TRÍ ĐANG MỞ
            </span>
            <h2
              className="justify-center text-text-primary-normal text-4xl font-semibold font-['Unbounded'] leading-12 text-primary-500 mb-6"
            >
              Chúng tôi cần bạn!
            </h2>

            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 self-stretch text-white text-base font-normal font-['Mona_Sans'] leading-6">
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
