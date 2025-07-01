import React, { useEffect } from 'react';
import { CreditCard } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Thanh toán và hoàn trả | Sail Agency';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Thanh toán và hoàn trả
            </h1>
            <p className="text-xl text-gray-600">
              Chính sách thanh toán và hoàn tiền của Sail Agency
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Cập nhật lần cuối: 15 tháng 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Tổng quan */}
          <section className="mb-12">
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Tổng quan chính sách
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Sail Agency cam kết minh bạch trong mọi giao dịch tài chính.
                Chúng tôi cung cấp nhiều phương thức thanh toán tiện lợi và
                chính sách hoàn tiền công bằng để đảm bảo quyền lợi khách hàng.
              </p>
            </div>
          </section>

          {/* Phương thức thanh toán */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Phương thức thanh toán
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi chấp nhận thanh toán bằng Việt Nam đồng (VND) hoặc Đô
                la Mỹ (USD), tùy theo lựa chọn của khách hàng. Phương thức thanh
                toán bao gồm chuyển khoản ngân hàng và ví điện tử.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Đối với chuyển khoản ngân hàng, thông tin tài khoản sẽ được cung
                cấp ngay sau khi khách hàng hoàn tất đơn đặt dịch vụ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi hỗ trợ thanh toán qua các ví điện tử quốc tế như
                Paypal, Payoneer, tùy thuộc vào tình trạng đáp ứng tại thời điểm
                thanh toán. Sail Agency có toàn quyền quyết định phương thức
                thanh toán qua ví điện tử nào sẽ được chấp nhận.{' '}
              </p>
            </div>
          </section>

          {/* Hình thức thanh toán*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Hình thức thanh toán
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Hình thức thanh toán linh hoạt tuỳ thuộc vào loại dịch vụ mà bạn
                sử dụng. Một số dịch vụ yêu cầu thanh toán trước, trong khi các
                dịch vụ khác áp dụng phương thức thanh toán sau.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Chính sách chậm thanh toán*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Chính sách chậm thanh toán
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed"></p>
              <p className="text-gray-700 leading-relaxed"></p>
              <p className="text-gray-700 leading-relaxed">
                Nếu khách hàng không thanh toán sau 30 ngày kể từ ngày đến hạn,
                quyền truy cập vào dịch vụ có thể bị chấm dứt. Chúng tôi không
                chịu trách nhiệm đối với bất kỳ tổn thất hay thiệt hại nào phát
                sinh từ việc ngừng cung cấp dịch vụ do chậm thanh toán.
              </p>
            </div>
          </section>

          {/* Chính sách hoàn trả*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Chính sách hoàn trả
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi không hoàn trả các khoản phí dịch vụ đã thanh toán,
                ngoại trừ trường hợp lỗi phát sinh do chúng tôi gây ra.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nếu khách hàng chủ động hủy dịch vụ trước khi hết thời hạn hợp
                đồng, mọi khoản phí đã thanh toán trước đó sẽ không được hoàn
                lại
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
