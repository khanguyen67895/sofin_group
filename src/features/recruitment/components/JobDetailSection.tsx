import { motion } from 'framer-motion'
import type { Job } from '../types'
import { useJobList } from '../hooks/useRecruitment'
import ApplicationForm from './ApplicationForm'
import JobCard from './JobCard'

export interface JobDetailSectionProps {
  job: Job
}

function RichLines({ text, className = '' }: { text: string; className?: string }) {
  const lines = text.split('\n').filter((l) => l.trim())
  return (
    <ul className={`flex flex-col gap-1 ${className}`}>
      {lines.map((line, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="text-white shrink-0">-</span>
          <span>{line.trim()}</span>
        </li>
      ))}
    </ul>
  )
}

export default function JobDetailSection({ job }: JobDetailSectionProps) {
  const { data: allJobs = [] } = useJobList()
  const otherJobs = allJobs.filter((j) => j.id !== job.id)

  return (
    <section className="bg-neutral-950 py-12 md:py-16">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 lg:items-start">
          {/* Content */}
          <motion.div
            className="lg:col-start-1 lg:row-start-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-heading font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mt-3 text-sm">
              <div>
                <span className="text-neutral-400">{job.location}</span>
                <span className="text-primary-500 font-semibold ml-2">{job.salary}</span>
              </div>
              <span className="text-neutral-500 text-xs md:text-sm mr-20">
                Cập nhật: {job.updatedAt}
              </span>
            </div>

            {job.descriptionText && (
              <div className="mt-10">
                <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                  Mô tả công việc
                </h2>
                <RichLines
                  text={job.descriptionText}
                  className="text-neutral-300 text-sm md:text-[15px] leading-relaxed"
                />
              </div>
            )}

            {job.requirementsText && (
              <div className="mt-10">
                <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                  Yêu cầu công việc
                </h2>
                <RichLines
                  text={job.requirementsText}
                  className="text-neutral-300 text-sm md:text-[15px] leading-relaxed"
                />
              </div>
            )}

            {job.benefitsText && (
              <div className="mt-10">
                <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                  Quyền lợi
                </h2>
                <RichLines
                  text={job.benefitsText}
                  className="text-neutral-300 text-sm md:text-[15px] leading-relaxed"
                />
              </div>
            )}

            {/* Fallback: block-based description (static data) */}
            {!job.descriptionText && job.description && job.description.length > 0 && (
              <div className="mt-10">
                <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                  Mô tả công việc
                </h2>
                <div className="flex flex-col gap-5">
                  {job.description.map((block) => (
                    <div key={block.heading}>
                      <h3 className="font-heading font-bold text-white text-base md:text-lg mb-2">
                        {block.heading}
                      </h3>
                      <ul className="flex flex-col gap-1 text-neutral-300 text-sm md:text-[15px] leading-relaxed">
                        {block.items.map((item, idx) => (
                          <li key={idx}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!job.requirementsText && job.requirements && job.requirements.length > 0 && (
              <div className="mt-10">
                <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                  Yêu cầu công việc
                </h2>
                <ul className="flex flex-col gap-1 text-neutral-300 text-sm md:text-[15px] leading-relaxed">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>- {req}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Application form */}
          <motion.div
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ApplicationForm jobTitle={job.title} />
          </motion.div>

          {/* Other jobs */}
          {otherJobs.length > 0 && (
            <div className="lg:col-start-1 lg:row-start-2">
              <h2 className="font-heading font-bold italic text-primary-500 text-xl md:text-2xl mb-4">
                Các vị trí khác
              </h2>
              <div className="flex flex-col gap-4">
                {otherJobs.map((j) => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
