import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero: React.FC = () => {
  const heroContentRef = useScrollAnimation('fade-right')
  const heroImageRef = useScrollAnimation('fade-left', 200)
  const benefitsRef = useScrollAnimation('fade-up', 400)
  const ctaRef = useScrollAnimation('scale-up', 600)
  const trustRef = useScrollAnimation('fade-in', 800)

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Header height
      const offset = 20 // Additional 20px offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const benefits: string[] = [
    'Hoàn thành trong 10-14 ngày làm việc',
    'Hỗ trợ chuyên nghiệp 24/7',
    'Giá cả minh bạch, không phí ẩn'
  ]

  return (
    <section className="pt-32 lg:pt-36 pb-8 lg:pb-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={heroContentRef} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-5xl text-blue-600 leading-tight uppercase" style={{ fontWeight: 900, fontStyle: 'normal' }}>
                Sở hữu LLC dễ dàng
                <span className="text-blue-600"> chỉ trong vài bước</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khởi nghiệp tại Mỹ một cách chuyên nghiệp với dịch vụ đăng ký LLC nhanh chóng, 
                minh bạch và được hỗ trợ pháp lý đầy đủ.
              </p>
            </div>

            {/* Key Benefits */}
            <div ref={benefitsRef} className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-3 animate-stagger-${index + 1}`}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Bắt đầu ngay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="btn-secondary"
              >
                Xem bảng giá
              </button>
            </div>

            {/* Trust Indicators */}
            <div ref={trustRef} className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Được tin tưởng bởi hơn 200+ doanh nghiệp</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400 animate-stagger-1">200+</div>
                <div className="text-2xl font-bold text-gray-400 animate-stagger-2">LLC</div>
                <div className="text-2xl font-bold text-gray-400 animate-stagger-3">CORP</div>
                <div className="text-2xl font-bold text-gray-400 animate-stagger-4">INC</div>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div ref={heroImageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero/SailAgency-Hero.png"
                alt="Professional business meeting"
                className="w-full h-96 lg:h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "images/hero/SailAgency-Hero.png"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">LLC đã được đăng ký thành công</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Hoàn thành trong 10 ngày làm việc
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero