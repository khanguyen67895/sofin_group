import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NewsPage from '@/pages/NewsPage'
import NewsDetailPage from '@/pages/NewsDetailPage'
import RecruitmentPage from '@/pages/RecruitmentPage'
import JobDetailPage from '@/pages/JobDetailPage'
import NotFoundPage from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 've-chung-toi', element: <AboutPage /> },
      { path: 'tin-tuc', element: <NewsPage /> },
      { path: 'tin-tuc/:id', element: <NewsDetailPage /> },
      { path: 'tuyen-dung', element: <RecruitmentPage /> },
      { path: 'tuyen-dung/:id', element: <JobDetailPage /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
