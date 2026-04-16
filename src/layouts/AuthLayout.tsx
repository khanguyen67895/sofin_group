import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Sofin Group</h1>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
