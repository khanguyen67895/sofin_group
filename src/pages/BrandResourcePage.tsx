import HeroSection from "@/features/brand_resource/component/HeroSection"
import LogoSection from "@/features/brand_resource/component/LogoSection"
import LogoImagesSection from "@/features/brand_resource/component/LogoImagesSection"
import BrandSymbolSection from "@/features/brand_resource/component/BrandSymbolSection"
import LogoColorSection from "@/features/brand_resource/component/LogoColorSection"
import CTASection from "@/features/home/components/CTASection"

export default function BrandResourcePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <LogoImagesSection />
      <BrandSymbolSection />
      <LogoColorSection />
      <CTASection
        buttonText='TẢI VỀ'
        description='Mời tải các tài nguyên tại đây'
        onButtonClick={() => window.open('https://drive.google.com/drive/folders/1FbUrAd9NHFd1wEgYZpFAziFxree7NvQJ', '_blank')}
      />
    </>
  )
}
