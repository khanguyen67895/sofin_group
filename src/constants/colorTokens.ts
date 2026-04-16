import { colors } from './colors'

const c = colors

/**
 * Semantic color tokens
 * Each token: [dark, light]
 */
export const colorTokens = {
  background: {
    primary: {
      subdued: [c.primary[600], c.primary[400]],
      normal:  [c.primary[500], c.primary[500]],
      accent:  [c.primary[400], c.primary[600]],
    },
    secondary: {
      subdued: [c.secondary[700], c.secondary[500]],
      normal:  [c.secondary[500], c.secondary[600]],
      accent:  [c.secondary[300], c.secondary[700]],
    },
    status: {
      positive:   [c.status.positive[800],   c.status.positive[100]],
      negative:   [c.status.negative[800],   c.status.negative[100]],
      warning:    [c.status.warning[800],    c.status.warning[100]],
      informative:[c.status.informative[800],c.status.informative[100]],
    },
    neutral: {
      disabled: [c.neutral[600], c.neutral[200]],
      subdued:  [c.neutral[700], c.neutral[100]],
      normal:   [c.neutral[800], c.neutral[0]],
      hover:    [c.neutral[900], c.neutral[100]],
    },
    neutralInvert: {
      disabled: [c.neutral[300], c.neutral[200]],
      subdued:  [c.neutral[200], c.neutral[300]],
      normal:   [c.neutral[100], c.neutral[400]],
      hover:    [c.neutral[100], c.neutral[500]],
    },
  },

  text: {
    primary: {
      subdued: [c.primary[600], c.primary[400]],
      normal:  [c.primary[500], c.primary[500]],
      accent:  [c.primary[400], c.primary[600]],
    },
    secondary: {
      subdued: [c.secondary[600], c.secondary[500]],
      normal:  [c.secondary[500], c.secondary[600]],
      accent:  [c.secondary[400], c.secondary[700]],
    },
    status: {
      positive:    [c.status.positive[500],    c.status.positive[500]],
      negative:    [c.status.negative[500],    c.status.negative[500]],
      warning:     [c.status.warning[500],     c.status.warning[500]],
      informative: [c.status.informative[400], c.status.informative[500]],
    },
    neutral: {
      disabled: [c.neutral[300], c.neutral[400]],
      subdued:  [c.neutral[200], c.neutral[500]],
      normal:   [c.neutral[100], c.neutral[600]],
      hover:    [c.neutral[0],   c.neutral[700]],
    },
    neutralInvert: {
      disabled: [c.neutral[600], c.neutral[300]],
      subdued:  [c.neutral[700], c.neutral[200]],
      normal:   [c.neutral[800], c.neutral[100]],
      hover:    [c.neutral[900], c.neutral[0]],
    },
  },

  icon: {
    primary: {
      subdued: [c.primary[600], c.primary[400]],
      normal:  [c.primary[500], c.primary[500]],
      accent:  [c.primary[400], c.primary[600]],
    },
    secondary: {
      subdued: [c.secondary[600], c.secondary[500]],
      normal:  [c.secondary[500], c.secondary[500]],
      accent:  [c.secondary[400], c.secondary[600]],
    },
    status: {
      positive:    [c.status.positive[500],    c.status.positive[500]],
      negative:    [c.status.negative[500],    c.status.negative[500]],
      warning:     [c.status.warning[500],     c.status.warning[500]],
      informative: [c.status.informative[500], c.status.informative[500]],
    },
    neutral: {
      disabled: [c.neutral[600], c.neutral[200]],
      subdued:  [c.neutral[500], c.neutral[300]],
      normal:   [c.neutral[400], c.neutral[400]],
      accent:   [c.neutral[300], c.neutral[500]],
      hover:    [c.neutral[200], c.neutral[600]],
      active:   [c.neutral[100], c.neutral[700]],
    },
    neutralInvert: {
      disabled: [c.neutral[400], c.neutral[700]],
      subdued:  [c.neutral[500], c.neutral[600]],
      normal:   [c.neutral[600], c.neutral[500]],
      accent:   [c.neutral[700], c.neutral[400]],
      hover:    [c.neutral[800], c.neutral[300]],
      active:   [c.neutral[900], c.neutral[200]],
    },
  },

  border: {
    primary: {
      subdued: [c.primary[600], c.primary[400]],
      normal:  [c.primary[500], c.primary[500]],
      accent:  [c.primary[400], c.primary[600]],
    },
    secondary: {
      subdued: [c.secondary[600], c.secondary[400]],
      normal:  [c.secondary[500], c.secondary[500]],
      accent:  [c.secondary[400], c.secondary[600]],
    },
    status: {
      positive:    [c.status.positive[500],    c.status.positive[500]],
      negative:    [c.status.negative[500],    c.status.negative[500]],
      warning:     [c.status.warning[500],     c.status.warning[500]],
      informative: [c.status.informative[500], c.status.informative[500]],
    },
    neutral: {
      disabled: [c.neutral[700], c.neutral[100]],
      subdued:  [c.neutral[600], c.neutral[200]],
      normal:   [c.neutral[500], c.neutral[300]],
      accent:   [c.neutral[400], c.neutral[400]],
      hover:    [c.neutral[300], c.neutral[500]],
      active:   [c.neutral[200], c.neutral[600]],
    },
    neutralInvert: {
      disabled: [c.neutral[100], c.neutral[600]],
      subdued:  [c.neutral[200], c.neutral[500]],
      normal:   [c.neutral[300], c.neutral[400]],
      accent:   [c.neutral[400], c.neutral[300]],
      hover:    [c.neutral[500], c.neutral[200]],
      active:   [c.neutral[600], c.neutral[100]],
    },
  },

  fixed: {
    white: [c.neutral[0],   c.neutral[0]],
    black: [c.neutral[900], c.neutral[900]],
  },

  component: {
    mainBg:        [c.neutral[900], c.neutral[0]],
    mainBgDarker:  ['#050505',      c.neutral[100]],
    bgModal:       [c.neutral[800], c.neutral[100]],
    bgModalSurface:[c.neutral[800], c.neutral[200]],
  },
} as const

export type ColorTokens = typeof colorTokens

/** Helper — lấy giá trị theo mode */
export function token(
  value: readonly [string, string],
  mode: 'dark' | 'light' = 'light',
): string {
  return mode === 'dark' ? value[0] : value[1]
}
