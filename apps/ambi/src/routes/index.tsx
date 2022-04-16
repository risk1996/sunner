import { Route, Routes } from 'solid-app-router';
import LoginPage from '../pages/login';


export default function AppRoutes() {
  return <Routes>
    <Route path="/login" element={<LoginPage />} />
  </Routes>
}
