import ExpertHeroSection from '@/features/about/components/ExpertHeroSection'
import ExpertiseGrid from '@/features/about/components/ExpertiseGrid'
import NurtureSection from '@/features/about/components/NurtureSection'
import ExpertCTASection from '@/features/about/components/ExpertCTASection'
import TestimonialsSection from '@/features/ecosystem/components/TestimonialsSection'

export default function ExpertTeamPage() {
  return (
    <>
      <ExpertHeroSection />
      <ExpertiseGrid />
      <TestimonialsSection />
      <NurtureSection />
      <ExpertCTASection />
    </>
  )
}
