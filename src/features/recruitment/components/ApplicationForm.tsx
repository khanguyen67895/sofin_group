import { motion } from 'framer-motion'
import { useRef, useState, type ChangeEvent } from 'react'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import cmsAxios from '@/lib/cmsAxios'

interface ApplicationFormProps {
  jobTitle?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileObj, setFileObj] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [cvError, setCvError] = useState(false)
  const [form, setForm] = useState({ ho_ten: '', so_dien_thoai: '', email: '', ghi_chu: '' })

  const handlePickFile = () => fileInputRef.current?.click()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) { setFileObj(file); setCvError(false) }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) { setFileObj(file); setCvError(false) }
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!fileObj) {
      setCvError(true)
      return
    }
    setCvError(false)
    setStatus('loading')

    try {
      let cvId: number | undefined

      if (fileObj) {
        const formData = new FormData()
        formData.append('files', fileObj)
        const uploadRes = await cmsAxios.post<{ id: number }[]>('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        cvId = uploadRes.data[0]?.id
      }

      await cmsAxios.post('/don-ung-tuyens', {
        data: {
          ho_ten: form.ho_ten,
          email: form.email,
          so_dien_thoai: form.so_dien_thoai,
          vi_tri_ung_tuyen: jobTitle ?? '',
          ghi_chu: form.ghi_chu || undefined,
          ...(cvId !== undefined && { cv: cvId }),
        },
      })

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const fieldBase =
    'w-full bg-transparent text-white placeholder-neutral-500 border-b border-neutral-700 focus:border-primary-500 outline-none py-2 transition-colors'

  if (status === 'success') {
    return (
      <div className="border border-neutral-700 px-6 py-10 text-center">
        <div className="text-green-400 text-3xl mb-3">✓</div>
        <p className="font-heading font-bold text-white text-lg mb-1">Đã nhận đơn ứng tuyển!</p>
        <p className="text-neutral-400 text-sm">Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
        <button
          onClick={() => {
            setStatus('idle')
            setForm({ ho_ten: '', so_dien_thoai: '', email: '', ghi_chu: '' })
            setFileObj(null)
          }}
          className="mt-6 text-xs text-neutral-500 hover:text-neutral-300 transition-colors underline"
        >
          Gửi đơn khác
        </button>
      </div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {jobTitle && (
        <label className="flex flex-col gap-1">
          <span className="text-neutral-500 text-xs">Vị trí ứng tuyển</span>
          <input type="text" value={jobTitle} readOnly className={`${fieldBase} cursor-default text-neutral-400`} />
        </label>
      )}

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Họ và tên</span>
        <input
          type="text"
          value={form.ho_ten}
          onChange={(e) => setForm((f) => ({ ...f, ho_ten: e.target.value }))}
          className={fieldBase}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Số điện thoại</span>
        <input
          type="tel"
          value={form.so_dien_thoai}
          onChange={(e) => setForm((f) => ({ ...f, so_dien_thoai: e.target.value }))}
          className={fieldBase}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={fieldBase}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-neutral-500 text-xs">Ghi chú</span>
        <textarea
          value={form.ghi_chu}
          onChange={(e) => setForm((f) => ({ ...f, ghi_chu: e.target.value }))}
          rows={3}
          className={`${fieldBase} resize-none`}
        />
      </label>

      <div
        onClick={handlePickFile}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border border-dashed rounded-sm p-6 text-center cursor-pointer transition-colors ${
          cvError ? 'border-red-500 bg-red-500/5' : dragOver ? 'border-primary-500 bg-primary-500/5' : 'border-neutral-700 hover:border-neutral-500'
        }`}
      >
        <p className="text-white text-sm">
          {fileObj ? fileObj.name : 'Upload hoặc kéo thả file CV vào đây'}
        </p>
        <p className={`text-xs mt-1 ${cvError ? 'text-red-400' : 'text-neutral-500'}`}>
          {cvError ? 'Vui lòng đính kèm CV trước khi gửi' : 'Định dạng .doc hoặc .pdf không quá 2mb'}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">Gửi thất bại, vui lòng thử lại.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold h-12 px-8 rounded-full transition-colors"
      >
        {status === 'loading' ? 'ĐANG GỬI...' : 'NỘP ĐƠN ỨNG TUYỂN'}
        {status !== 'loading' && (
          <img src={icArrowDetail} alt="" className="w-3.5 h-3.5 filter-[brightness(0)_invert(1)]" />
        )}
      </button>
    </motion.form>
  )
}
