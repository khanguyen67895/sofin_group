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
import ContactPage from '@/pages/ContactPage'
import EcosystemPage from '@/pages/EcosystemPage'
import ProductsPage from '@/pages/ProductsPage'
import CoreValuesPage from '@/pages/CoreValuesPage'
import ExpertTeamPage from '@/pages/ExpertTeamPage'
import BrandResourcePage from '@/pages/BrandResourcePage'
import TrainingPage from '@/pages/TrainingPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 've-chung-toi', element: <AboutPage /> },
      { path: 've-chung-toi/gia-tri-cot-loi', element: <CoreValuesPage /> },
      { path: 've-chung-toi/doi-ngu-chuyen-gia', element: <ExpertTeamPage /> },
      { path: 've-chung-toi/tai-lieu-thuong-hieu', element: <BrandResourcePage /> },
      { path: 'tin-tuc', element: <NewsPage /> },
      { path: 'tin-tuc/:id', element: <NewsDetailPage /> },
      { path: 'tuyen-dung', element: <RecruitmentPage /> },
      { path: 'tuyen-dung/:id', element: <JobDetailPage /> },
      { path: 'he-sinh-thai', element: <EcosystemPage /> },
      { path: 'lien-he', element: <ContactPage /> },
      { path: 'san-pham-noi-bat', element: <ProductsPage /> },
      { path: 'dao-tao', element: <TrainingPage /> },
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
  { path: '*', element: <Navigate to="/" replace /> },
])
