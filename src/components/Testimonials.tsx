import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const titleRef = useScrollAnimation('fade-up')
  const testimonialsGridRef = useScrollAnimation('fade-in', 200)
  const statsRef = useScrollAnimation('scale-up', 400)

  const testimonials: Testimonial[] = [
    {
      name: 'Nguyễn Minh Anh',
      company: 'Tech Startup',
      content:
        'Sail Agency đã giúp tôi đăng ký LLC một cách nhanh chóng và chuyên nghiệp. Đội ngũ hỗ trợ rất tận tình, giải đáp mọi thắc mắc chi tiết. Tôi đã tiết kiệm được rất nhiều thời gian và công sức.',
      rating: 5,
      avatar: 'images/testimonials/MinhAnh.png',
    },
    {
      name: 'Trần Văn Hùng',
      company: 'E-commerce Business',
      content:
        'Dịch vụ tuyệt vời! Từ tư vấn chọn bang đến hoàn thành tài liệu, mọi thứ đều được thực hiện một cách chuyên nghiệp. Giá cả minh bạch, không có phí ẩn như tôi lo lắng.',
      rating: 5,
      avatar: 'images/testimonials/VanHung.png',
    },
    {
      name: 'Lê Kim Mai',
      company: 'Consulting Firm',
      content:
        'Tôi đã thử nhiều dịch vụ khác nhưng Sail Agency là tốt nhất. Họ không chỉ đăng ký LLC mà còn hướng dẫn tôi cách vận hành và tuân thủ pháp luật. Rất đáng tin cậy!',
      rating: 5,
      avatar: 'images/testimonials/KimMai.png',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl text-blue-600 mb-4 uppercase" style={{ fontWeight: 900, fontStyle: 'normal' }}>
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 200+ doanh nghiệp đã tin tưởng và sử dụng dịch vụ của Sail
            Agency
          </p>
        </div>

        <div ref={testimonialsGridRef} className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              ref={useScrollAnimation(
                index === 0 ? 'fade-left' : 
                index === 1 ? 'fade-up' : 'fade-right', 
                100 * (index + 1)
              )}
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote 
                ref={useScrollAnimation('fade-in', 150 * (index + 1))}
                className="w-8 h-8 text-blue-200 mb-4" 
              />

              <div 
                ref={useScrollAnimation('fade-right', 200 * (index + 1))}
                className="flex items-center mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p 
                ref={useScrollAnimation('fade-up', 250 * (index + 1))}
                className="text-gray-700 leading-relaxed mb-6"
              >
                "{testimonial.content}"
              </p>

              <div 
                ref={useScrollAnimation('fade-left', 300 * (index + 1))}
                className="border-t border-gray-200 pt-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-blue-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with background image */}
        <div ref={statsRef} className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>

          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-200">LLC đã đăng ký</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5 năm</div>
                <div className="text-blue-200">Kinh nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
