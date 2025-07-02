import React from 'react'
import { Mail, Send, Facebook, MessageCircle, MapPin } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mvgrlynw")

  if (state.succeeded) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom" id="contact">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Cảm ơn bạn đã liên hệ!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi trong vòng 24 giờ.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Yêu cầu đã được gửi thành công!
              </h3>
              <p className="text-gray-600 mb-6">
                Đội ngũ chuyên gia của Sail Agency sẽ liên hệ với bạn sớm nhất có thể 
                để tư vấn chi tiết về dịch vụ đăng ký LLC.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom" id="contact" >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Bắt đầu đăng ký LLC ngay hôm nay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí và bắt đầu quy trình đăng ký LLC
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info with Image */}
          <div className="">
            {/* Professional Image */}
            <div className="relative rounded-xl overflow-hidden pb-16">
              <img 
                src="images/general/supportCustomer.png"
                alt="Professional consultation"
                className="w-full h-auto object-cove "
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Thông tin liên hệ
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Địa chỉ</h4>
                    <p className="text-gray-600">12770 Coit Road, Suite 208<br />Dallas, Texas, US</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                    <p className="text-gray-600">ask@sailagency.co</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Facebook</h4>
                    <a 
                      href="https://fb.com/sailagency" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      fb.com/sailagency
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Telegram</h4>
                    <a 
                      href="https://t.me/sail_agency" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      t.me/sail_agency
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="email@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+84 xxx xxx xxx"
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Tên tiểu bang
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tiểu bang dự kiến"
                  />
                  <ValidationError 
                    prefix="Company" 
                    field="company"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Dịch vụ quan tâm
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="llc">Đăng ký LLC</option>
                  <option value="tax">Tư vấn thuế doanh nghiệp</option>
                  <option value="itin">Hỗ trợ lấy ITIN</option>
                  <option value="consultation">Chỉ tư vấn</option>
                </select>
                <ValidationError 
                  prefix="Service" 
                  field="service"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Mô tả ngắn về dự án và câu hỏi của bạn..."
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>{state.submitting ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}</span>
              </button>

              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="text-red-500 text-sm text-center">
                  Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin và thử lại.
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                Bằng cách gửi form, bạn đồng ý với{' '}
                <a href="/terms-of-service" className="text-blue-600 hover:underline">Điều khoản sử dụng</a>
                {' '}và{' '}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">Chính sách bảo mật</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact