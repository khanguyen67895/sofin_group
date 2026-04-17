import AboutHeroSection from '@/features/about/components/AboutHeroSection'
import AboutContentSection from '@/features/about/components/AboutContentSection'
import MilestoneSection from '@/features/about/components/MilestoneSection'
import AboutVisionQuote from '@/features/about/components/AboutVisionQuote'
import ExpertSection from '@/features/home/components/ExpertSection'
import PartnersSection from '@/features/home/components/PartnersSection'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
      <MilestoneSection />
      <AboutVisionQuote />
      <ExpertSection />
      <PartnersSection />
    </>
  )
}
