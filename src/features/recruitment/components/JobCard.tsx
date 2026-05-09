import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Job } from '../types'

export interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
    <Link
      to={`/tuyen-dung/${job.id}`}
      className="relative bg-neutral-800 hover:bg-neutral-600 transition-colors cursor-pointer p-5 md:p-6 block"
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-neutral-100 self-stretch justify-center text-text-neutral-normal text-xl font-semibold font-['Unbounded'] leading-7">
            {job.title}
          </h3>
          <div className="flex flex-wrap justify-between gap-x-3 gap-y-1 mt-2 text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            <div>
              <span className="text-neutral-400">{job.location}</span>
              <span className="text-primary-500 font-semibold ml-1.5">
                {job.salary}
              </span>
            </div>
            <span className="text-neutral-300 justify-center text-text-neutral-disabled text-base font-normal font-['Mona_Sans'] leading-6 mt-1">
              Cập nhật: {job.updatedAt}
            </span>
          </div>
        </div>
      </div>
    </Link>
    </motion.div>
  )
}
