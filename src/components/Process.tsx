import React from 'react'
import { MapPin, FileText, CheckCircle } from 'lucide-react'
import { ProcessStep } from '../types'

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: MapPin,
      title: 'Chọn bang đăng ký',
      description: 'Tư vấn và lựa chọn bang phù hợp nhất cho mục tiêu kinh doanh của bạn',
      details: ['Wyoming - Ưu đãi thuế tốt nhất', 'Montana - Chi phí thấp', 'New Mexico - Bảo mật cao', 'Colorado - Uy tín pháp lý tốt'],
      image: 'images/process/select.png'
    },
    {
      icon: FileText,
      title: 'Cung cấp thông tin LLC',
      description: 'Chuẩn bị hồ sơ đăng ký gồm thông tin công ty và thành viên liên quan',
      details: ['Tên công ty', 'Địa chỉ đăng ký','Thông tin liên lạc','Thông tin thành viên'],
      image: 'images/process/fill-infor.png'
    },
    {
      icon: CheckCircle,
      title: 'Nhận tài liệu LLC',
      description: 'Nhận đầy đủ tài liệu pháp lý và hướng dẫn vận hành LLC',
      details: ['Certificate of Formation', 'Operating Agreement','Operating Agreement','EIN Number'],
      image: 'images/process/receive-document.png'
    }
  ]

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div id="process" className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Quy trình đăng ký LLC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chỉ cần 3 bước đơn giản để có LLC hoàn chỉnh và sẵn sàng hoạt động
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Image relative rounded-xl overflow-hidden pb-16*/}
                <div className="relative rounded-xl pb-8">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step number - Thêm mt-8 để đẩy xuống 30px */}
                <div className="flex justify-center mb-6 mt-8 relative z-10 hidden">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    Bước {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Bắt đầu quy trình ngay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process