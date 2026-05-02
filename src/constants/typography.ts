export const fontFamily = {
  body:    'Mona Sans',
  heading: 'Unbounded',
} as const

export const fontWeight = {
  regular:  400,
  semibold: 600,
} as const

export type FontFamily = keyof typeof fontFamily
export type FontWeight = keyof typeof fontWeight

// ─── Text Style Token ────────────────────────────────────────────────────────

interface TextStyle {
  fontFamily: string
  fontWeight: number
  fontSize:   number  // px
  lineHeight: number  // px
  letterSpacing?: number // px (0 = 0%)
}

export const textStyles = {
  // Heading
  h1: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      64,
    lineHeight:    72,
    letterSpacing: 0,
  },
  h2: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      48,
    lineHeight:    56,
    letterSpacing: 0,
  },
  h3: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      40,
    lineHeight:    48,
    letterSpacing: 0,
  },
  h4: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      32,
    lineHeight:    40,
    letterSpacing: 0,
  },
  h5: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      24,
    lineHeight:    32,
    letterSpacing: 0,
  },
  h6: {
    fontFamily:    fontFamily.heading,
    fontWeight:    fontWeight.semibold,
    fontSize:      20,
    lineHeight:    28,
    letterSpacing: 0,
  },

  // Lead / Large
  leadLargeRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      28,
    lineHeight:    40,
    letterSpacing: 0,
  },
  leadLargeSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      28,
    lineHeight:    40,
    letterSpacing: 0,
  },

  // Lead / Medium
  leadMediumRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      20,
    lineHeight:    32,
    letterSpacing: 0,
  },
  leadMediumSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      20,
    lineHeight:    32,
    letterSpacing: 0,
  },

  // Body / Large
  bodyLargeRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      16,
    lineHeight:    24,
    letterSpacing: 0,
  },
  bodyLargeSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      16,
    lineHeight:    24,
    letterSpacing: 0,
  },

  // Body / Medium
  bodyMediumRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      14,
    lineHeight:    20,
    letterSpacing: 0,
  },
  bodyMediumSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      14,
    lineHeight:    20,
    letterSpacing: 0,
  },

  // Body / Small
  bodySmallRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      12,
    lineHeight:    16,
    letterSpacing: 0,
  },
  bodySmallSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      12,
    lineHeight:    16,
    letterSpacing: 0,
  },

  // Body / X-Small
  bodyXSmallRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      10,
    lineHeight:    12,
    letterSpacing: 0,
  },
  bodyXSmallSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      10,
    lineHeight:    12,
    letterSpacing: 0,
  },

  // Caption
  captionRegular: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.regular,
    fontSize:      10,
    lineHeight:    12,
    letterSpacing: 4,
  },
  captionSemibold: {
    fontFamily:    fontFamily.body,
    fontWeight:    fontWeight.semibold,
    fontSize:      10,
    lineHeight:    12,
    letterSpacing: 0,
  },
} as const satisfies Record<string, TextStyle>

export type TextStyleKey = keyof typeof textStyles

/**
 * Trả về object CSSProperties từ một text style token.
 * lineHeight được convert sang unitless ratio.
 */
export function getTextStyle(key: TextStyleKey): React.CSSProperties {
  const s = textStyles[key]
  return {
    fontFamily:    s.fontFamily,
    fontWeight:    s.fontWeight,
    fontSize:      `${s.fontSize}px`,
    lineHeight:    `${s.lineHeight}px`,
    letterSpacing: s.letterSpacing ? `${s.letterSpacing}px` : undefined,
  }
}
