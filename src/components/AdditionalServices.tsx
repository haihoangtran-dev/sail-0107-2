import React from 'react'
import { 
  Calculator, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle, 
  Users,
  CreditCard,
  BookOpen,
  AlertTriangle
} from 'lucide-react'

const AdditionalServices: React.FC = () => {
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

  const taxServices = [
    {
      icon: FileText,
      title: 'Tư vấn khai thuế liên bang',
      description: 'Hướng dẫn chi tiết cách khai thuế cho LLC, tối ưu hóa nghĩa vụ thuế'
    },
    {
      icon: Calculator,
      title: 'Phân loại thuế LLC',
      description: 'Giải thích các lựa chọn thuế: Single-member, Partnership, S-Corp, C-Corp'
    },
    {
      icon: AlertTriangle,
      title: 'Cảnh báo lỗi thường gặp',
      description: 'Tránh những sai lầm phổ biến có thể dẫn đến phạt từ IRS'
    }
  ]

  const taxBenefits = [
    'Hiểu rõ nghĩa vụ thuế liên bang và tiểu bang',
    'Giảm thiểu rủi ro bị phạt từ IRS',
    'Tối ưu hóa chi phí thuế hợp pháp',
    'Lập kế hoạch thuế dài hạn'
  ]

  const itinServices = [
    {
      icon: FileText,
      title: 'Chuẩn bị hồ sơ đầy đủ',
      description: 'Kiểm tra và chuẩn bị tất cả giấy tờ cần thiết'
    },
    {
      icon: BookOpen,
      title: 'Điền Form W-7',
      description: 'Hỗ trợ điền chính xác Form W-7 và các tài liệu kèm theo'
    },
    {
      icon: Shield,
      title: 'Chứng thực hộ chiếu',
      description: 'Dịch vụ chứng thực hộ chiếu và tài liệu nhận dạng'
    }
  ]

  const itinBenefits = [
    'Khai thuế tại Mỹ khi có thu nhập',
    'Mở tài khoản ngân hàng dễ dàng hơn',
    'Đầu tư bất động sản và chứng khoán',
    'Thành lập và quản lý LLC hiệu quả'
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Dịch vụ bổ sung chuyên nghiệp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ngoài đăng ký LLC, chúng tôi còn cung cấp dịch vụ tư vấn thuế và hỗ trợ ITIN 
            để đảm bảo bạn tuân thủ đầy đủ pháp luật Mỹ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Tax Consulting Service */}
          <div id="tax-consulting" className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header with icon */}
            <div className="bg-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Tư vấn thuế doanh nghiệp</h3>
                  <p className="text-blue-100">Small Business Tax Consulting</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Giúp chủ LLC hiểu rõ nghĩa vụ thuế liên bang & tiểu bang, 
                tối ưu hóa chi phí và tránh rủi ro pháp lý
              </p>
            </div>

            <div className="p-8">
              {/* Services included */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Dịch vụ bao gồm:
                </h4>
                <div className="space-y-4">
                  {taxServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-900 mb-1">
                          {service.title}
                        </h5>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Lợi ích:
                </h4>
                <div className="space-y-2">
                  {taxBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Consulting Button */}
              <div className="mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Đặt lịch tư vấn thuế
                </button>
              </div>
            </div>
          </div>

          {/* ITIN Service */}
          <div id="itin-support" className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header with icon */}
            <div className="bg-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hỗ trợ lấy ITIN</h3>
                  <p className="text-blue-100">Individual Taxpayer Identification Number</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Giúp người nước ngoài không có SSN lấy được mã ITIN 
                để tuân thủ thuế và thực hiện các giao dịch tài chính tại Mỹ
              </p>
            </div>

            <div className="p-8">
              {/* What is ITIN */}
              <div className="mb-8 hidden">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  ITIN là gì và tại sao cần?
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  ITIN là mã số thuế 9 chữ số do IRS cấp cho những người không đủ điều kiện 
                  có SSN nhưng cần khai thuế tại Mỹ. Đây là yêu cầu bắt buộc cho việc:
                </p>
                <div className="space-y-2">
                  {itinBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services included */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Hỗ trợ trọn gói:
                </h4>
                <div className="space-y-4">
                  {itinServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-900 mb-1">
                          {service.title}
                        </h5>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing time info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Thời gian xử lý:</span>
                </div>
                <span className="text-sm text-gray-600">7-11 tuần từ khi IRS nhận hồ sơ</span>
              </div>

              {/* ITIN Button */}
              <div className="mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Bắt đầu xin ITIN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Tại sao chọn Sail Agency cho dịch vụ bổ sung?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Với kinh nghiệm sâu rộng trong lĩnh vực thuế và pháp lý Mỹ, 
              chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Đội ngũ chuyên gia
              </h4>
              <p className="text-gray-600 text-sm">
                CPA và Tax Advisor có license, kinh nghiệm 10+ năm
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Bảo mật tuyệt đối
              </h4>
              <p className="text-gray-600 text-sm">
                Thông tin khách hàng được bảo vệ theo chuẩn ngân hàng
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Hỗ trợ liên tục
              </h4>
              <p className="text-gray-600 text-sm">
                Theo dõi và hỗ trợ khách hàng trong suốt quá trình
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Sẵn sàng bắt đầu?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí về dịch vụ thuế và ITIN. 
            Đội ngũ chuyên gia sẽ hỗ trợ bạn từ A đến Z.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg px-8 py-4"
          >
            Tư vấn miễn phí ngay
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdditionalServices