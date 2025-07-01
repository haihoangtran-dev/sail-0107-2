import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Bảo mật và quyền riêng tư | Sail Agency';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Bảo mật và quyền riêng tư
            </h1>
            <p className="text-xl text-gray-600">
              Chính sách bảo vệ thông tin cá nhân của Sail Agency
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Cập nhật lần cuối: 15 tháng 1, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Cam kết bảo mật */}
          <section className="mb-12">
            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Cam kết bảo mật của chúng tôi
              </h2>
              <p className="text-purple-800 leading-relaxed">
                Sail Agency cam kết bảo vệ thông tin cá nhân của khách hàng với
                mức độ bảo mật cao nhất. Chúng tôi tuân thủ các tiêu chuẩn bảo
                mật quốc tế và không bao giờ chia sẻ thông tin của bạn với bên
                thứ ba mà không có sự đồng ý.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Giới thiệu
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi tại Sail Agency hiểu rằng bạn quan tâm đến cách thông
                tin cá nhân của mình được sử dụng và chia sẻ, và chúng tôi coi
                trọng quyền riêng tư của bạn. Vui lòng đọc Chính sách quyền
                riêng tư sau đây. Bằng cách sử dụng hoặc truy cập các dịch vụ
                của chúng tôi, bao gồm trang web này, theo bất kỳ cách nào, bạn
                xác nhận rằng bạn chấp nhận các thực tiễn và chính sách được nêu
                trong Chính sách quyền riêng tư này, và bạn đồng ý cho phép
                chúng tôi thu thập, sử dụng và chia sẻ thông tin của bạn theo
                các cách sau đây.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Thông tin cá nhân của tôi có được bảo mật không?
           */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Thông tin cá nhân của tôi có được bảo mật không?
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi áp dụng các biện pháp bảo mật vật lý, kỹ thuật và hành
                chính (bao gồm mã hóa) để bảo vệ thông tin cá nhân. Tuy nhiên,
                không có biện pháp bảo mật nào là tuyệt đối. Truy cập trái phép,
                lỗi phần cứng hoặc phần mềm, hoặc các yếu tố khác có thể làm lộ
                thông tin của bạn.
              </p>
            </div>
          </section>

          {/* Thông tin cá nhân của tôi được lưu trữ trong bao lâu?*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Thông tin cá nhân của tôi được lưu trữ trong bao lâu?
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi lưu trữ thông tin cá nhân của bạn trong suốt thời gian
                bạn duy trì tài khoản với chúng tôi. Thông tin này sẽ được giữ
                tối thiểu năm năm hoặc lâu hơn nếu cần thiết để tuân thủ các
                nghĩa vụ pháp lý.
              </p>
            </div>
          </section>

          {/* Tôi có thể liên hệ ai nếu có câu hỏi về chính sách này?*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Tôi có thể liên hệ ai nếu có câu hỏi về chính sách này?
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách quyền
                riêng tư của chúng tôi, vui lòng gửi email đến
                ask@sailagency.co, chúng tôi sẽ cố gắng giải quyết các mối quan
                tâm của bạn.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
