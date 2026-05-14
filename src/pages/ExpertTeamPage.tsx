import ExpertHeroSection from '@/features/about/components/ExpertHeroSection'
import ExpertiseGrid from '@/features/about/components/ExpertiseGrid'
import NurtureSection from '@/features/about/components/NurtureSection'
// import ExpertCTASection from '@/features/about/components/ExpertCTASection'
import EcosystemExperts from '@/features/ecosystem/components/EcosystemExperts'
import CTASection from '@/features/home/components/CTASection'

export default function ExpertTeamPage() {
  return (
    <>
      <ExpertHeroSection />
      <ExpertiseGrid />
      <EcosystemExperts />
      <NurtureSection />
      <CTASection />
      {/* <ExpertCTASection /> */}
    </>
  )
}
