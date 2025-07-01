import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Điều khoản và Điều kiện | Sail Agency';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Điều khoản và Điều kiện
            </h1>
            <p className="text-xl text-gray-600">
              Các điều khoản sử dụng dịch vụ của Sail Agency
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Cập nhật lần cuối: 15 tháng 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* 1. Tổng quan */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Tổng quan
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Trang web này được vận hành bởi Sail Agency. Khi truy cập trang
                web hoặc sử dụng các dịch vụ do chúng tôi cung cấp, bạn đồng ý
                tuân thủ tất cả các điều khoản, điều kiện và chính sách được quy
                định trong tài liệu này.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bằng cách truy cập trang web hoặc cung cấp thông tin cho chúng
                tôi, bạn chính thức tham gia vào Dịch vụ và đồng ý bị ràng buộc
                bởi các Điều khoản dịch vụ này. Các điều khoản này áp dụng cho
                tất cả người dùng trang web, bao gồm nhưng không giới hạn ở
                người truy cập, nhà cung cấp, khách hàng, người bán và người
                đóng góp nội dung.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trang web này được vận hành bởi Sail Agency. Khi truy cập trang
                web hoặc sử dụng các dịch vụ do chúng tôi cung cấp, bạn đồng ý
                tuân thủ tất cả các điều khoản, điều kiện và chính sách được quy
                định trong tài liệu này.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700 hidden">
              <li>
                • Các điều khoản này áp dụng cho tất cả người dùng dịch vụ
              </li>
              <li>• Chúng tôi có quyền cập nhật điều khoản bất kỳ lúc nào</li>
              <li>
                • Việc tiếp tục sử dụng dịch vụ sau khi cập nhật có nghĩa là bạn
                chấp nhận thay đổi
              </li>
            </ul>
          </section>

          {/* 2. Điều kiện chung */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Điều kiện chung
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi có quyền từ chối cung cấp dịch vụ cho bất kỳ ai vì bất
                kỳ lý do gì vào bất kỳ lúc nào.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bạn đồng ý không sao chép, nhân bản, sao chép, bán, bán lại hoặc
                khai thác bất kỳ phần nào của Dịch vụ, việc sử dụng Dịch vụ hoặc
                quyền truy cập vào Dịch vụ hoặc bất kỳ liên hệ nào trên trang
                web mà dịch vụ được cung cấp mà không có sự cho phép rõ ràng
                bằng văn bản của chúng tôi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Các tiêu đề được sử dụng trong thỏa thuận này chỉ được đưa vào
                để thuận tiện và sẽ không hạn chế hoặc ảnh hưởng đến các Điều
                khoản này.
              </p>
            </div>
          </section>

          {/* Tính chính xác, đầy đủ và kịp thời của thông tin */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Tính chính xác, đầy đủ và kịp thời của thông tin
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Sail Agency luôn nỗ lực cung cấp thông tin chính xác, đầy đủ và
                cập nhật trên nền tảng của chúng tôi. Tuy nhiên, chúng tôi không
                chịu trách nhiệm nếu thông tin được đăng tải không chính xác,
                chưa đầy đủ hoặc không được cập nhật kịp thời. Các nội dung trên
                trang web này chỉ mang tính tham khảo chung và không nên được sử
                dụng làm căn cứ duy nhất để đưa ra quyết định quan trọng mà
                không kiểm chứng với các nguồn thông tin chính thống, đầy đủ và
                đáng tin cậy hơn.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Khách hàng có trách nhiệm xác minh độ chính xác của thông tin
                trước khi sử dụng. Việc bạn phụ thuộc vào bất kỳ nội dung nào
                trên trang web này hoàn toàn do bạn tự chịu rủi ro.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ngoài ra, trang web có thể chứa một số thông tin mang tính lịch
                sử, không phản ánh tình trạng mới nhất. Những thông tin này chỉ
                nhằm mục đích tham khảo. Sail Agency có quyền thay đổi nội dung
                trang web bất kỳ lúc nào mà không cần báo trước nhưng không có
                nghĩa vụ cập nhật thông tin theo thời gian thực.
              </p>
            </div>
          </section>

          {/* Các điều khoản riêng biệt */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Các điều khoản riêng biệt
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Tùy theo tính chất của từng dịch vụ, Sail Agency có thể áp dụng
                các điều khoản và chính sách riêng biệt (“Điều khoản riêng
                biệt”). Những điều khoản này có thể được công khai hoặc không
                được đề cập trên trang web nhằm đảm bảo tính bảo mật. Trong quá
                trình trao đổi và thỏa thuận, chúng tôi sẽ xác nhận với khách
                hàng về các điều khoản riêng biệt cũng như cách thức thực hiện
                dịch vụ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trong trường hợp có sự khác biệt giữa Điều khoản riêng biệt và
                Điều khoản chung trên trang web, Điều khoản riêng biệt sẽ được
                ưu tiên áp dụng.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Sửa đổi dịch vụ và giá cả */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Sửa đổi dịch vụ và giá cả
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Giá dịch vụ được công bố trên trang web chỉ mang tính tham khảo
                và có thể thay đổi tùy theo từng trường hợp cụ thể. Mức giá thực
                tế có thể điều chỉnh (tăng hoặc giảm) dựa trên thỏa thuận giữa
                hai bên. Khi đó, giá dịch vụ chính thức sẽ được xác nhận bằng
                văn bản có chữ ký của hai bên hoặc thông qua một phương thức xác
                nhận khác phù hợp.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi có quyền điều chỉnh giá dịch vụ trên trang web mà
                không cần thông báo trước. Đồng thời, Sail Agency có thể sửa
                đổi, tạm ngừng hoặc ngừng cung cấp một phần hoặc toàn bộ dịch vụ
                vào bất kỳ thời điểm nào mà không cần báo trước.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi không chịu trách nhiệm đối với bạn hoặc bất kỳ bên thứ
                ba nào về việc thay đổi giá, điều chỉnh dịch vụ, đình chỉ hoặc
                ngừng cung cấp bất kỳ dịch vụ nào.
              </p>
            </div>
          </section>

          {/* Chính sách thanh toán chung */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Chính sách thanh toán chung
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chính sách thanh toán chung bao gồm các quy định về phương thức
                thanh toán, thời hạn thanh toán, chính sách chậm thanh toán,
                chính sách hoàn trả và hóa đơn chứng từ. Các điều khoản cụ thể
                có thể thay đổi tùy theo từng dịch vụ hoặc gói dịch vụ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Để biết thêm chi tiết, vui lòng tham khảo Chính sách thanh toán
                của chúng tôi.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Tuyên bố từ chối trách nhiệm */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Tuyên bố từ chối trách nhiệm
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi không đảm bảo rằng dịch vụ sẽ luôn hoạt động liên tục,
                không có lỗi hoặc không gặp sự cố kỹ thuật. Mặc dù chúng tôi
                luôn nỗ lực khắc phục nhanh chóng các vấn đề phát sinh, nhưng
                không chịu trách nhiệm đối với bất kỳ tổn thất hoặc thiệt hại
                nào do việc gián đoạn dịch vụ hoặc sự cố kỹ thuật gây ra.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Khách hàng có trách nhiệm đọc và hiểu rõ các điều khoản cũng như
                chính sách dịch vụ. Khi thực hiện thanh toán, khách hàng mặc
                định đồng ý với tất cả điều khoản và chính sách của chúng tôi.
                Chúng tôi không chịu trách nhiệm nếu khách hàng không đọc kỹ các
                nội dung này, dẫn đến hiểu lầm hoặc tranh chấp không cần thiết.
                Trong những trường hợp như vậy, chúng tôi có quyền từ chối yêu
                cầu hoàn tiền từ khách hàng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trang web và dịch vụ của chúng tôi có thể chứa liên kết đến các
                trang web bên thứ ba. Những liên kết này chỉ mang tính chất tham
                khảo, và chúng tôi không chịu trách nhiệm về nội dung, chính
                sách bảo mật hoặc hoạt động của các trang web đó.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Đối với các dịch vụ có sản phẩm cuối cùng được tạo ra từ thông
                tin khách hàng cung cấp (ví dụ: thiết kế website bán hàng),
                chúng tôi không chịu trách nhiệm về bất kỳ sai sót, thiếu sót
                hoặc sự không chính xác nào trong nội dung được đăng tải. Khách
                hàng có trách nhiệm kiểm tra, xác minh thông tin và đảm bảo rằng
                tất cả nội dung, hình ảnh sử dụng đều có quyền sử dụng hợp pháp.
                Chúng tôi không chịu trách nhiệm đối với bất kỳ vi phạm quyền sở
                hữu trí tuệ nào liên quan đến tài liệu do khách hàng cung cấp.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Khách hàng cũng có trách nhiệm đảm bảo rằng nội dung và hoạt
                động kinh doanh tuân thủ đầy đủ các quy định pháp luật hiện
                hành. Chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ
                hành vi vi phạm pháp luật nào liên quan đến khách hàng. Nếu phát
                hiện khách hàng kinh doanh trái pháp luật, vi phạm quyền lợi
                người tiêu dùng hoặc gây ảnh hưởng đến uy tín của chúng tôi,
                chúng tôi có quyền đình chỉ dịch vụ, hủy hợp đồng trước thời hạn
                và không hoàn trả khoản phí đã thanh toán.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi cam kết bảo vệ thông tin cá nhân và dữ liệu doanh
                nghiệp của khách hàng. Trong trường hợp thông tin bị đánh cắp
                hoặc rò rỉ, chúng tôi sẽ hỗ trợ cung cấp bằng chứng cần thiết để
                xác minh nguyên nhân. Tuy nhiên, chúng tôi không chịu trách
                nhiệm hoặc bồi thường thiệt hại trừ khi có bằng chứng rõ ràng
                cho thấy lỗi xuất phát từ hệ thống hoặc quy trình của chúng tôi.
                Để biết thêm chi tiết, vui lòng tham khảo Chính sách quyền riêng
                tư của chúng tôi.
              </p>
            </div>
          </section>

          {/* Liên kết của bên thứ ba*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Liên kết của bên thứ ba
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Một số nội dung, sản phẩm hoặc dịch vụ được cung cấp thông qua
                nền tảng của chúng tôi có thể bao gồm tài liệu từ bên thứ ba.
                Các liên kết bên thứ ba trên trang web của chúng tôi có thể dẫn
                đến các trang web không thuộc quyền sở hữu hoặc kiểm soát của
                chúng tôi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi không chịu trách nhiệm kiểm tra, đánh giá tính chính
                xác hoặc đảm bảo về nội dung, sản phẩm, dịch vụ của các trang
                web này. Chúng tôi cũng không có nghĩa vụ pháp lý đối với bất kỳ
                tổn thất hoặc thiệt hại nào phát sinh từ việc bạn sử dụng hoặc
                giao dịch với bên thứ ba.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bạn có trách nhiệm xem xét chính sách và điều khoản của bên thứ
                ba trước khi thực hiện bất kỳ giao dịch nào. Khiếu nại hoặc
                tranh chấp liên quan đến sản phẩm hoặc dịch vụ của bên thứ ba
                phải được gửi trực tiếp đến bên cung cấp đó.
              </p>
            </div>
          </section>

          {/* Thông tin cá nhân, doanh nghiệp */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Thông tin cá nhân, doanh nghiệp
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Việc bạn cung cấp thông tin cá nhân hoặc thông tin doanh nghiệp
                trên trang web này được điều chỉnh bởi Chính sách quyền riêng tư
                của chúng tôi.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Sai sót, thiếu chính xác và thiếu sót*/}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Sai sót, thiếu chính xác và thiếu sót
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi không đảm bảo rằng nội dung trên trang web hoặc trong
                dịch vụ của chúng tôi luôn chính xác, đầy đủ hoặc không có sai
                sót. Đôi khi, có thể xảy ra lỗi liên quan đến mô tả sản phẩm,
                giá cả, khuyến mãi, phí vận chuyển, thời gian giao hàng hoặc
                tình trạng hàng hóa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi có quyền sửa lỗi, cập nhật thông tin hoặc hủy đơn hàng
                nếu bất kỳ thông tin nào không chính xác, mà không cần thông báo
                trước. Chúng tôi không có nghĩa vụ cập nhật thông tin trừ khi
                pháp luật yêu cầu.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>

          {/* Toàn bộ thỏa thuận */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Toàn bộ thỏa thuận
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Việc chúng tôi không thực hiện hoặc không thực thi bất kỳ quyền
                hoặc điều khoản nào trong Điều khoản dịch vụ này sẽ không được
                coi là từ bỏ quyền hoặc điều khoản đó.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Các Điều khoản dịch vụ này, cùng với mọi chính sách hoặc quy tắc
                hoạt động được chúng tôi công bố trên trang web, cũng như bất kỳ
                điều khoản riêng biệt nào liên quan đến Dịch vụ, cấu thành toàn
                bộ thỏa thuận giữa bạn và chúng tôi. Thỏa thuận này thay thế mọi
                thỏa thuận, thông tin liên lạc hoặc đề xuất trước đó—dù bằng văn
                bản hay bằng lời nói—giữa bạn và chúng tôi, bao gồm nhưng không
                giới hạn ở các phiên bản trước đây của Điều khoản dịch vụ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mọi sự mơ hồ trong việc diễn giải các Điều khoản dịch vụ này sẽ
                không được hiểu theo hướng bất lợi cho bên soạn thảo.
              </p>
            </div>
          </section>

          {/* Thay đổi điều khoản dịch vụ */}
          <section className="mb-12">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Thay đổi điều khoản dịch vụ
            </h4>
            <div className="rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                Bạn có thể xem phiên bản mới nhất của Điều khoản dịch vụ bất kỳ
                lúc nào trên trang này.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi bảo lưu quyền, theo quyết định riêng, cập nhật, sửa
                đổi hoặc thay thế bất kỳ phần nào của Điều khoản dịch vụ này
                bằng cách đăng tải nội dung cập nhật trên trang web. Bạn có
                trách nhiệm kiểm tra định kỳ để nắm bắt những thay đổi. Việc bạn
                tiếp tục sử dụng hoặc truy cập trang web hoặc Dịch vụ của chúng
                tôi sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các
                điều khoản đã được cập nhật.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
