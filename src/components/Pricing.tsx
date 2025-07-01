import React from 'react'
import { Check, Calculator, Building2, CreditCard } from 'lucide-react'
import { PricingPlan } from '../types'

const Pricing: React.FC = () => {
  const services: PricingPlan[] = [
    {
      name: 'Tư vấn thuế',
      price: '5.000.000 VNĐ',
      description: 'Hỗ trợ chuyên nghiệp về thuế cho LLC và doanh nghiệp nhỏ',
      features: [
        'Tư vấn khai thuế liên bang và tiểu bang',
        'Phân loại thuế LLC phù hợp nhất',
        'Cảnh báo và tránh lỗi thường gặp',
        'Tối ưu hóa chi phí thuế hợp pháp'
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
      {
      name: 'Đăng ký LLC',
      price: '6.500.000 VNĐ',
      description: 'Dịch vụ đăng ký LLC chuyên nghiệp và toàn diện',
      features: [
        'Đăng ký LLC tại bang bạn chọn',
        'Operating Agreement tùy chỉnh',
        'EIN Number (Mã số thuế)',
        'Registered Agent (1 năm)',
        'Hỗ trợ mở tài khoản ngân hàng'
      ],
      popular: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Hỗ trợ lấy ITIN',
      price: '8.000.000 VNĐ',
      description: 'Hỗ trợ trọn gói để có mã số thuế ITIN cho người nước ngoài',
      features: [
        'Chuẩn bị hồ sơ đầy đủ và chính xác',
        'Điền Form W-7 chuyên nghiệp',
        'Chứng thực hộ chiếu và giấy tờ',
        'Theo dõi tiến độ xử lý từ IRS'
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getServiceIcon = (index: number) => {
    const icons = [Building2, Calculator, CreditCard]
    const IconComponent = icons[index]
    return IconComponent
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn dịch vụ phù hợp với nhu cầu và mục tiêu kinh doanh của bạn tại Mỹ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(index)
            return (
              <div 
                key={index}
                className={`relative rounded-2xl border-2 overflow-hidden ${
                  service.popular 
                    ? 'border-blue-600 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-blue-200 hover:shadow-lg'
                } transition-all duration-300 bg-white`}
              >
                {/* Icon Header */}
                <div className="flex justify-center pt-12 pb-6">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                    service.popular 
                      ? 'bg-blue-600' 
                      : 'bg-blue-100'
                  } transition-colors duration-300`}>
                    <IconComponent className={`w-12 h-12 ${
                      service.popular 
                        ? 'text-white' 
                        : 'text-blue-600'
                    }`} />
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-gray-500 ml-2">chỉ từ </span>
                      <span className="text-3xl font-bold text-blue-600">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      service.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {index === 0 
                      ? 'Đặt lịch tư vấn thuế'
                      : index === 1
                        ? 'Bắt đầu đăng ký LLC'
                        : 'Bắt đầu xin ITIN'
                    }
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 bg-blue-50 rounded-xl p-6">
          <p className="mb-2 text-blue-900 font-semibold">
            <strong>Cam kết:</strong> Tất cả dịch vụ đều bao gồm phí chính thức và không có phí ẩn
          </p>
          <p className="text-sm text-blue-700">
           
          </p>
        </div>

        {/* Service Comparison */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 hidden">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            So sánh dịch vụ
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Đăng ký LLC</h4>
              <p className="text-gray-600 text-sm">
                Dành cho những ai muốn thành lập LLC mới tại Mỹ một cách chuyên nghiệp
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Tư vấn thuế</h4>
              <p className="text-gray-600 text-sm">
                Dành cho LLC đã thành lập, cần hiểu rõ nghĩa vụ thuế và tối ưu hóa chi phí
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Hỗ trợ ITIN</h4>
              <p className="text-gray-600 text-sm">
                Dành cho người nước ngoài cần mã số thuế để khai thuế và giao dịch tại Mỹ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing