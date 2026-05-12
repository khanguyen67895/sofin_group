import AboutHeroSection from '@/features/about/components/AboutHeroSection'
import AboutContentSection from '@/features/about/components/AboutContentSection'
import MilestoneSection from '@/features/about/components/MilestoneSection'
import AboutVisionQuote from '@/features/about/components/AboutVisionQuote'
import CoreValueSection from '@/features/about/components/CoreValueSection'
import AboutExpertSection from '@/features/about/components/AboutExpertSection'
import PartnersMarquee from '@/features/home/components/PartnersMarquee'
import bgCoreValue from '@/assets/images/bg_core_value.png'
import bgCoreValue2x from '@/assets/images/bg_core_value@2x.png'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
      <div className="relative">
        <div
          className="absolute inset-0 top-60 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none"
          style={{ backgroundImage: `image-set(url(${bgCoreValue}) 1x, url(${bgCoreValue2x}) 2x)` }}
        />
        <div className="absolute inset-x-0 top-60 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0C0C0C, transparent)' }} />
        <CoreValueSection />
        <MilestoneSection />
      </div>
      <AboutVisionQuote />
      <AboutExpertSection />
      <PartnersMarquee />
    </>
  )
}
