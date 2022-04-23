import { Route, Routes } from 'solid-app-router'
import type { JSX } from 'solid-js'

import DashboardPage from '@sunner/ambi/pages/dashboard'
import LoginPage from '@sunner/ambi/pages/login'

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}
