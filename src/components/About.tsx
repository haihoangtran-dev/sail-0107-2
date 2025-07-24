import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Heart,
  Shield,
  Clock,
  Globe,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '200+', label: 'LLC đã đăng ký thành công' },
    { number: '98%', label: 'Khách hàng hài lòng' },
    { number: '5+', label: 'Năm kinh nghiệm' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Minh bạch',
      description:
        'Chúng tôi cam kết minh bạch trong mọi giao dịch, không có phí ẩn và luôn thông báo rõ ràng về quy trình.',
    },
    {
      icon: Heart,
      title: 'Tận tâm',
      description:
        'Đội ngũ chuyên gia của chúng tôi luôn đặt lợi ích khách hàng lên hàng đầu và hỗ trợ tận tình trong suốt quá trình.',
    },
    {
      icon: Award,
      title: 'Chuyên nghiệp',
      description:
        'Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi đảm bảo chất lượng dịch vụ cao nhất.',
    },
    {
      icon: Clock,
      title: 'Nhanh chóng',
      description:
        'Quy trình tối ưu giúp hoàn thành đăng ký LLC trong 10-14 ngày làm việc, nhanh nhất thị trường.',
    },
  ];

  const team = [
    {
      name: 'Nguyễn Minh Anh',
      position: 'CEO & Founder',
      description:
        'Hơn 10 năm kinh nghiệm trong lĩnh vực luật doanh nghiệp tại Mỹ',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Trần Văn Hùng',
      position: 'Legal Director',
      description:
        'Chuyên gia thuế và pháp lý với bằng JD từ Harvard Law School',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lê Thị Mai',
      position: 'Operations Manager',
      description:
        'Chuyên gia quy trình với kinh nghiệm tối ưu hóa dịch vụ khách hàng',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Thành lập Sail Agency',
      description:
        'Khởi đầu từ ý tưởng giúp doanh nghiệp Việt Nam tiếp cận thị trường Mỹ. Với kinh nghiệm sâu rộng trong lĩnh vực pháp lý và kinh doanh quốc tế, đội ngũ sáng lập nhận ra những khó khăn mà doanh nghiệp Việt gặp phải khi mở rộng ra nước ngoài. Sail Agency ra đời với sứ mệnh trở thành cầu nối tin cậy.',
    },
    {
      year: '2020',
      title: '100 LLC đầu tiên',
      description:
        'Năm 2020 đánh dấu cột mốc quan trọng khi hoàn thành thành công 100 LLC đầu tiên. Đây không chỉ là con số mà còn là minh chứng cho chất lượng dịch vụ và sự tin tưởng của khách hàng. Mỗi LLC đều đi kèm với câu chuyện thành công riêng từ startup công nghệ đến doanh nghiệp thương mại điện tử.',
    },
    {
      year: '2022',
      title: 'Mở rộng dịch vụ',
      description:
        'Nhận thấy nhu cầu ngày càng đa dạng của khách hàng, Sail Agency mở rộng danh mục dịch vụ với tư vấn thuế chuyên sâu và hỗ trợ mở tài khoản ngân hàng. Đây là bước tiến quan trọng giúp khách hàng có giải pháp toàn diện từ A đến Z, tối ưu hóa chi phí và quản lý tài chính hiệu quả.',
    },
    {
      year: '2024',
      title: '200+ LLC và tầm nhìn tương lai',
      description:
        'Với hơn 200 LLC được đăng ký thành công, Sail Agency trở thành đối tác tin cậy của doanh nghiệp không chỉ từ Việt Nam mà còn từ nhiều quốc gia khác trong khu vực Đông Nam Á. Năm 2024 đánh dấu việc đầu tư mạnh vào công nghệ, xây dựng nền tảng số hóa quy trình để chuẩn bị cho giai đoạn phát triển tiếp theo.',
    },
  ];

  // Function to navigate to homepage contact section
  const handleContactClick = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const headerHeight = 80;
        const offset = 20;
        const elementPosition = contactElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-600 mb-6 leading-tight">
                Về Sail Agency
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chúng tôi là đối tác tin cậy giúp doanh nghiệp Việt Nam và quốc
                tế thành lập LLC tại Mỹ một cách nhanh chóng, chuyên nghiệp và
                minh bạch.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">LLC thành công</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Hài lòng</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/about/about.png"
                alt="Sail Agency team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">
                    Trusted by 200+ businesses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Sứ mệnh</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Giúp các doanh nghiệp Việt Nam và quốc tế tiếp cận thị trường Mỹ
                một cách dễ dàng thông qua việc thành lập LLC chuyên nghiệp,
                nhanh chóng và tuân thủ đầy đủ pháp luật.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Đơn giản hóa quy trình pháp lý
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Tiết kiệm thời gian và chi phí
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Hỗ trợ toàn diện từ A-Z</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Tầm nhìn
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Trở thành nền tảng hàng đầu khu vực Đông Nam Á trong việc hỗ trợ
                doanh nghiệp thành lập và phát triển tại thị trường Mỹ, góp phần
                xây dựng cầu nối kinh tế giữa các quốc gia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Mở rộng ra toàn khu vực</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Đa dạng hóa dịch vụ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Công nghệ tiên tiến</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${
                  index === 0 ? 'bg-green-100 group-hover:bg-green-600' :
                  index === 1 ? 'bg-purple-100 group-hover:bg-purple-600' :
                  index === 2 ? 'bg-orange-100 group-hover:bg-orange-600' :
                  'bg-red-100 group-hover:bg-red-600'
                }`}>
                  <value.icon className={`w-10 h-10 transition-colors duration-300 group-hover:text-white ${
                    index === 0 ? 'text-green-600' :
                    index === 1 ? 'text-purple-600' :
                    index === 2 ? 'text-orange-600' :
                    'text-red-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50 hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Đội ngũ chuyên gia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những chuyên gia hàng đầu với kinh nghiệm sâu rộng trong lĩnh vực
              pháp lý và kinh doanh
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những cột mốc quan trọng trong quá trình xây dựng và phát triển
              Sail Agency
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden lg:block">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Mobile timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className="ml-12 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="text-xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm text-justify">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Business success"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Những con số minh chứng cho chất lượng dịch vụ và sự tin tưởng của
              khách hàng
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Cam kết của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lời hứa mà chúng tôi luôn giữ vững với mọi khách hàng
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/about/commit.png"
                alt="Professional commitment"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hidden">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Hoàn tiền 100%
                  </h3>
                  <p className="text-gray-600">
                    Nếu không hài lòng với dịch vụ trong vòng 30 ngày, chúng tôi
                    cam kết hoàn tiền 100%.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Đúng thời hạn
                  </h3>
                  <p className="text-gray-600">
                    Hoàn thành đăng ký LLC trong 10-14 ngày làm việc hoặc hoàn
                    tiền phí dịch vụ.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Hỗ trợ 24/7
                  </h3>
                  <p className="text-gray-600">
                    Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Bảo mật tuyệt đối
                  </h3>
                  <p className="text-gray-600">
                    Thông tin khách hàng được bảo vệ bằng công nghệ mã hóa cao
                    cấp và không chia sẻ với bên thứ ba.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sẵn sàng bắt đầu hành trình kinh doanh?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Hãy để Sail Agency đồng hành cùng bạn trong việc thành lập LLC và
            chinh phục thị trường Mỹ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Liên hệ tư vấn miễn phí
            </button>
            <button
              onClick={() => (window.location.href = '/blog')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;