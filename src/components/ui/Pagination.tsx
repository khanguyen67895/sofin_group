interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Hiển thị tối đa 5 trang
  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(totalPages, currentPage + 2)

  if (endPage - startPage < 4) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, 5)
    } else if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - 4)
    }
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-neutral-100 hover:text-primary-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors pb-1"
      >
        &laquo;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`font-semibold font-['Mona_Sans'] transition-colors ${p === currentPage
              ? 'text-primary-500'
              : 'text-neutral-100 hover:text-primary-400'
            }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-neutral-100 hover:text-primary-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors pb-1"
      >
        &raquo;
      </button>
    </div>
  )
}
