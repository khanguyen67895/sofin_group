import { Navigate, useParams } from 'react-router-dom'
import RecruitmentHeroSection from '@/features/recruitment/components/RecruitmentHeroSection'
import JobDetailSection from '@/features/recruitment/components/JobDetailSection'
import { JobDetailSkeleton } from '@/components/ui/Skeleton'
import { useJobDetail } from '@/features/recruitment/hooks/useRecruitment'

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: job, isLoading, isError } = useJobDetail(id)

  if (isLoading) {
    return (
      <>
        <RecruitmentHeroSection />
        <JobDetailSkeleton />
      </>
    )
  }

  if (isError || !job) return <Navigate to="/tuyen-dung" replace />

  return (
    <>
      <RecruitmentHeroSection />
      <JobDetailSection job={job} />
    </>
  )
}
