import EcosystemHeroSection from '@/features/ecosystem/components/EcosystemHeroSection'
import StatsSection from '@/features/ecosystem/components/StatsSection'
import SolutionSection, { SolutionHeading } from '@/features/ecosystem/components/SolutionSection'
import ClientsMarquee from '@/features/ecosystem/components/ClientsMarquee'
import TestimonialsSection from '@/features/ecosystem/components/TestimonialsSection'
import EcosystemQuote from '@/features/ecosystem/components/EcosystemQuote'
import EcosystemExperts from '@/features/ecosystem/components/EcosystemExperts'

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHeroSection />
      <SolutionHeading />
      <StatsSection />
      <SolutionSection />
      <ClientsMarquee />
      <TestimonialsSection />
      <EcosystemQuote />
      <EcosystemExperts />
    </>
  )
}
