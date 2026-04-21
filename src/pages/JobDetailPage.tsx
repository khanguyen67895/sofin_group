import { Navigate, useParams } from 'react-router-dom'
import RecruitmentHeroSection from '@/features/recruitment/components/RecruitmentHeroSection'
import JobDetailSection from '@/features/recruitment/components/JobDetailSection'
import { jobs } from '@/features/recruitment/data/jobs'

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const job = jobs.find((j) => j.id === id)

  if (!job) return <Navigate to="/tuyen-dung" replace />

  return (
    <>
      <RecruitmentHeroSection />
      <JobDetailSection job={job} />
    </>
  )
}
