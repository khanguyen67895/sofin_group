import { benefits, jobs } from '../data/jobs'
import JobCard from './JobCard'

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0"
    >
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
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — jobs list */}
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Right — panel */}
          <div className="order-first lg:order-last lg:sticky lg:top-24">
            <span className="block text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
              CÁC VỊ TRÍ ĐANG MỞ
            </span>
            <h2
              className="font-heading font-bold italic text-primary-500 mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Chúng tôi cần bạn!
            </h2>

            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-neutral-200 text-sm md:text-base">
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
