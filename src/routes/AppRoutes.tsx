import { Routes, Route } from "react-router-dom"
import { BookingPage } from "../pages/BookingPage"
import { DashboardPage } from "../pages/DashboardPage"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/*" element={<DashboardPage />} />
    </Routes>
  )
}