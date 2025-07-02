import React from 'react'
import { Mail, Facebook, MessageCircle, MapPin } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { createServiceNavigators } from '../utils/navigation'

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  // Sử dụng common navigation utility
  const { scrollToProcess, scrollToTaxConsulting, scrollToItinSupport } = 
    createServiceNavigators(navigate, location.pathname)

  return (
    <footer className="bg-blue-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Business background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/general/SailAgency-Logo-White.png"
                alt="Sail Agency Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image not found
                  e.currentTarget.style.display = 'none';
                  const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                  if (textLogo) {
                    textLogo.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-sm">SA</span>
                </div>
                <span className="text-xl font-bold">Sail Agency</span>
              </div>
            </div>
            <p className="mb-6 leading-relaxed">
              Dịch vụ đăng ký LLC chuyên nghiệp tại Mỹ. Chúng tôi giúp bạn khởi nghiệp 
              một cách nhanh chóng, an toàn và tuân thủ pháp luật.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ask@sailagency.co"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://fb.com/sailagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/sail_agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                title="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToProcess}
                  className="hover:text-white transition-colors text-left"
                >
                  Đăng ký LLC
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToTaxConsulting}
                  className="hover:text-white transition-colors text-left"
                >
                  Tư vấn thuế doanh nghiệp
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToItinSupport}
                  className="hover:text-white transition-colors text-left"
                >
                  Hỗ trợ lấy ITIN
                </button>
              </li>
            </ul>
          </div>

          {/* Thông tin */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Thông tin</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Điều khoản và Điều kiện</a></li>
              <li><a href="/refund-policy" className="hover:text-white transition-colors">Thanh toán và hoàn trả</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Bảo mật và quyền riêng tư</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="">
                    12770 Coit Road, Suite 208<br />
                    Dallas, Texas, US
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:ask@sailagency.co"
                    className="hover:text-white transition-colors"
                  >
                    ask@sailagency.co
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://fb.com/sailagency" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    fb.com/sailagency
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://t.me/sail_agency" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    t.me/sail_agency
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4">
          <div className="flex flex-col justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright {currentYear} © Sail Agency
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer