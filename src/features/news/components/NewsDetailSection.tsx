import type { NewsDetail } from '../types'

export interface NewsDetailSectionProps {
  item: NewsDetail
}

export default function NewsDetailSection({ item }: NewsDetailSectionProps) {
  const paragraphs =
    item.paragraphs && item.paragraphs.length > 0
      ? item.paragraphs
      : item.detail
        ? [item.detail]
        : []

  const extraImages = (item.images || []).filter((u) => u && u !== item.image)

  return (
    <section className="bg-neutral-950 pt-24 md:pt-28">
      <div className="mx-auto px-5 max-w-5xl">
        <h1
          className="font-heading font-bold text-white leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          {item.title}
        </h1>

        <div className="mt-4 mb-8 text-neutral-400 text-sm flex items-center gap-3">
          <span>{item.date}</span>
          {item.category && (
            <>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>{item.category}</span>
            </>
          )}
        </div>

        {item.detail && (
          <p className="text-neutral-200 text-base md:text-lg font-semibold leading-relaxed mb-6">
            {item.detail}
          </p>
        )}

        <div className="flex flex-col gap-5">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-neutral-300 text-sm md:text-base leading-relaxed"
            >
              {p}
            </p>
          ))}

          {item.image && (
            <figure className="my-4">
              <img
                src={item.image}
                alt=""
                className="w-full h-auto object-cover rounded-sm"
              />
            </figure>
          )}

          {extraImages.map((src, idx) => (
            <figure key={src} className="my-4">
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover rounded-sm"
              />
              {paragraphs[idx + Math.ceil(paragraphs.length / 2)] && (
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-5">
                  {paragraphs[idx + Math.ceil(paragraphs.length / 2)]}
                </p>
              )}
            </figure>
          ))}
        </div>

        {item.source && (
          <p className="mt-8 text-neutral-500 text-xs italic">
            Nguồn: {item.source}
          </p>
        )}
      </div>
    </section>
  )
}
