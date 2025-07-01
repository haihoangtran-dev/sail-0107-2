import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import AdditionalServices from './components/AdditionalServices'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import About from './components/About'
import TermsOfService from './components/TermsOfService'
import RefundPolicy from './components/RefundPolicy'
import PrivacyPolicy from './components/PrivacyPolicy'

// Home Page Component
const HomePage: React.FC = () => (
  <>
    <Hero />
    <Benefits />
    <Process />
    <AdditionalServices />
    <Pricing />
    <FAQ />
    <Testimonials />
    <Contact />
  </>
)

// 404 Not Found Component
const NotFound: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 lg:pt-24">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Trang không tìm thấy
      </h2>
      <p className="text-gray-600 mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Về trang chủ
      </button>
    </div>
  </div>
)

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App