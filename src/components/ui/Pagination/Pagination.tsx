import { cn } from '@/utils/cn'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  className?: string
}

const DOTS = '…' as const
type PageItem = number | typeof DOTS

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function getPages(current: number, total: number, sibling: number): PageItem[] {
  const totalNumbers = sibling * 2 + 5
  if (total <= totalNumbers) return range(1, total)

  const leftSibling = Math.max(current - sibling, 1)
  const rightSibling = Math.min(current + sibling, total)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < total - 1

  if (!showLeftDots && showRightDots) {
    const leftCount = 3 + 2 * sibling
    return [...range(1, leftCount), DOTS, total]
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = 3 + 2 * sibling
    return [1, DOTS, ...range(total - rightCount + 1, total)]
  }

  return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, total]
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPages(currentPage, totalPages, siblingCount)
  const canPrev = currentPage > 1
  const canNext = currentPage < totalPages

  const baseBtn =
    'w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors select-none'

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-2', className)}
    >
      <button
        type="button"
        onClick={() => canPrev && onPageChange(currentPage - 1)}
        disabled={!canPrev}
        aria-label="Trang trước"
        className={cn(
          baseBtn,
          'text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 disabled:cursor-not-allowed',
        )}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pages.map((page, idx) =>
        page === DOTS ? (
          <span
            key={`dots-${idx}`}
            className="w-9 h-9 flex items-center justify-center text-neutral-500 text-sm"
          >
            {DOTS}
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={cn(
              baseBtn,
              page === currentPage
                ? 'bg-white text-neutral-950'
                : 'text-neutral-300 border border-neutral-700/70 hover:border-primary-500 hover:text-primary-500',
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => canNext && onPageChange(currentPage + 1)}
        disabled={!canNext}
        aria-label="Trang sau"
        className={cn(
          baseBtn,
          'text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 disabled:cursor-not-allowed',
        )}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  )
}
