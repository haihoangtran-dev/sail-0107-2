import React from 'react';
import {
  Clock,
  Shield,
  DollarSign,
  Award,
} from 'lucide-react';
import { Benefit } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits: React.FC = () => {
  const titleRef = useScrollAnimation('fade-up')
  const benefitsGridRef = useScrollAnimation('fade-in', 200)

  const benefits: Benefit[] = [
    {
      icon: Clock,
      title: 'Nhanh chóng',
      description:
        'Hoàn thành đăng ký LLC trong 10-14 ngày làm việc, nhanh nhất thị trường',
      image:
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Award,
      title: 'Chuyên nghiệp',
      description:
        'Đội ngũ chuyên gia hỗ trợ 24/7 trong suốt quá trình',
      image:
        'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: DollarSign,
      title: 'Giá cả minh bạch',
      description: 'Không có phí ẩn, mọi chi phí được công khai rõ ràng từ đầu',
      image:
        'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Shield,
      title: 'Bảo mật',
      description:
        'Thông tin khách hàng được bảo vệ tuyệt đối và không chia sẻ với bên thứ ba',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  // Define different color schemes for each benefit
  const colorSchemes = [
    {
      bg: 'bg-green-100',
      hoverBg: 'group-hover:bg-green-600',
      icon: 'text-green-600',
      hoverIcon: 'group-hover:text-white'
    },
    {
      bg: 'bg-purple-100',
      hoverBg: 'group-hover:bg-purple-600',
      icon: 'text-purple-600',
      hoverIcon: 'group-hover:text-white'
    },
    {
      bg: 'bg-orange-100',
      hoverBg: 'group-hover:bg-orange-600',
      icon: 'text-orange-600',
      hoverIcon: 'group-hover:text-white'
    },
    {
      bg: 'bg-red-100',
      hoverBg: 'group-hover:bg-red-600',
      icon: 'text-red-600',
      hoverIcon: 'group-hover:text-white'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl text-blue-600 mb-4 uppercase" style={{ fontWeight: 900, fontStyle: 'normal' }}>
            Tại sao chọn Sail Agency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ đăng ký LLC chuyên nghiệp nhất
            với quy trình tối ưu và hỗ trợ toàn diện
          </p>
        </div>

        {/* Mobile: Single column, Desktop: 2x2 grid */}
        <div ref={benefitsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const colors = colorSchemes[index];
            const animationType = index % 2 === 0 ? 'fade-left' : 'fade-right';
            const benefitRef = useScrollAnimation(animationType, 100 * (index + 1));
            
            return (
              <div
                ref={benefitRef}
                key={index}
                className={`group text-center p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-6 ${colors.hoverBg} transition-colors`}>
                  <benefit.icon className={`w-8 h-8 ${colors.icon} ${colors.hoverIcon} transition-colors`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;