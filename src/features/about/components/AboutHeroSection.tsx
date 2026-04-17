import icBannerVct from '@/assets/images/ic_banner_vct.png'

export default function AboutHeroSection() {
  return (
    <section className="relative h-60 md:h-80 overflow-hidden">
      <img
        src={icBannerVct}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-5">
        <h1
          className="font-heading font-bold text-white italic"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          V&#7873; ch&uacute;ng t&ocirc;i
        </h1>
        <p className="text-neutral-300 text-sm md:text-base mt-1">
          SOFIN Group chuy&ecirc;n cung c&#7845;p gi&#7843;i ph&aacute;p c&ocirc;ng ngh&#7879; AI, v&#7899;i nh&#7919;ng c&#7853;p nh&#7853;t xu h&#432;&#7899;ng m&#7899;i nh&#7845;t
        </p>
      </div>
    </section>
  )
}
