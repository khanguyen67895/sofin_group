export const refDm = {
  2:    2,
  4:    4,
  8:    8,
  10:   10,
  12:   12,
  14:   14,
  16:   16,
  18:   18,
  20:   20,
  24:   24,
  28:   28,
  32:   32,
  36:   36,
  40:   40,
  44:   44,
  48:   48,
  56:   56,
  64:   64,
  72:   72,
  80:   80,
  88:   88,
  96:   96,
  128:  128,
  144:  144,
  160:  160,
  1000: 1000,
} as const

export type RefDmKey = keyof typeof refDm
export type RefDmValue = (typeof refDm)[RefDmKey]

/** Trả về giá trị px dạng string, ví dụ: dm(16) → '16px' */
export function dm(key: RefDmKey): string {
  return `${refDm[key]}px`
}
