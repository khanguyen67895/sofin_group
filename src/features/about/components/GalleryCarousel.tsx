import { useEffect, useRef, useState } from 'react'
import imgAction1 from '@/assets/images/image_action1.jpg'
import imgAction2 from '@/assets/images/image_action2.png'
import imgAction3 from '@/assets/images/image_action3.png'
import imgAction4 from '@/assets/images/image_action4.jpg'
import imgCompany from '@/assets/images/ic_company.png'
import imgCoreAction1 from '@/assets/images/ic_core_action1.png'
import imgCoreAction2 from '@/assets/images/ic_core_action2.png'

const IMAGES = [imgAction1, imgAction2, imgAction3, imgAction4, imgCompany, imgCoreAction1, imgCoreAction2]
const N = IMAGES.length
const TRACK = [...IMAGES, ...IMAGES, ...IMAGES]

const GAP = 16

export default function GalleryCarousel() {
  const [index, setIndex] = useState(N)
  const [noTransition, setNoTransition] = useState(false)
  const [containerW, setContainerW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

  const ITEM_W = containerW < 640 ? Math.round(containerW * 0.62) : 480
  const ITEM_H = containerW < 640 ? 180 : 300
  const STEP = ITEM_W + GAP
  const isPaused = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setContainerW(el.offsetWidth)
    const ro = new ResizeObserver(() => setContainerW(el.offsetWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) setIndex(prev => prev + 1)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
    if (index >= N * 2) {
      setNoTransition(true)
      setIndex(i => i - N)
    } else if (index < N) {
      setNoTransition(true)
      setIndex(i => i + N)
    }
  }

  useEffect(() => {
    if (!noTransition) return
    const raf = requestAnimationFrame(() => setNoTransition(false))
    return () => cancelAnimationFrame(raf)
  }, [noTransition])

  const offset = containerW / 2 - ITEM_W / 2 - index * STEP

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden select-none"
      style={{ height: `${ITEM_H + 50}px` }}
      onMouseEnter={() => { isPaused.current = true }}
      onMouseLeave={() => { isPaused.current = false }}
    >
      <div
        className="flex items-center h-full will-change-transform"
        style={{
          gap: `${GAP}px`,
          transform: `translateX(${offset}px)`,
          transition: noTransition ? 'none' : 'transform 0.75s cubic-bezier(0.4,0,0.2,1)',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {TRACK.map((img, i) => {
          const dist = Math.abs(i - index)
          const scale = dist === 0 ? 1 : dist === 1 ? 0.8 : 0.62
          const h = Math.round(ITEM_H * scale)
          return (
            <div
              key={i}
              className="shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: `${ITEM_W}px`,
                height: `${h}px`,
                transition: noTransition
                  ? 'none'
                  : 'height 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.75s cubic-bezier(0.4,0,0.2,1)',
              }}
              onClick={() => setIndex(i)}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
