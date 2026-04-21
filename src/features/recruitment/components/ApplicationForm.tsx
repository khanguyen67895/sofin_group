import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'

export default function ApplicationForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [dragOver, setDragOver] = useState(false)

  const handlePickFile = () => fileInputRef.current?.click()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: integrate with API
  }

  const fieldBase =
    'w-full bg-transparent text-white placeholder-neutral-500 border-b border-neutral-700 focus:border-primary-500 outline-none py-2 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Họ và tên</span>
        <input type="text" placeholder="Nguyễn Hoài Nam Nam" className={fieldBase} required />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Số điện thoại</span>
        <input type="tel" className={fieldBase} required />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Email</span>
        <input type="email" className={fieldBase} required />
      </label>

      <div
        onClick={handlePickFile}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border border-dashed rounded-sm p-6 text-center cursor-pointer transition-colors ${
          dragOver ? 'border-primary-500 bg-primary-500/5' : 'border-neutral-700 hover:border-neutral-500'
        }`}
      >
        <p className="text-white text-sm">
          {fileName || 'Upload hoặc kéo thả file CV vào đây'}
        </p>
        <p className="text-neutral-500 text-xs mt-1">
          Định dạng .docs hoặc .pdf không quá 2mb
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white font-bold h-12 px-8 rounded-full transition-colors"
      >
        NỘP ĐƠN ỨNG TUYỂN
        <img src={icArrowDetail} alt="" className="w-3.5 h-3.5 filter-[brightness(0)_invert(1)]" />
      </button>
    </form>
  )
}
