import { BlogPost } from '../types';

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Hướng dẫn đăng ký LLC tại Delaware: Lợi ích và quy trình chi tiết',
    slug: 'huong-dan-dang-ky-llc-tai-delaware',
    excerpt:
      'Delaware là bang được nhiều doanh nghiệp lựa chọn để đăng ký LLC. Tìm hiểu lý do tại sao và quy trình đăng ký chi tiết.',
    content: `<p>Delaware được biết đến là "thiên đường" cho việc đăng ký doanh nghiệp tại Mỹ. Với hệ thống pháp luật doanh nghiệp hoàn thiện và tòa án chuyên biệt, Delaware thu hút hàng nghìn LLC mới mỗi năm.</p>

<h2>Tại sao chọn Delaware?</h2>

<h4>1. Hệ thống pháp luật ưu việt</h4>
<p>Delaware có Court of Chancery - tòa án chuyên xử các vụ việc doanh nghiệp, với các thẩm phán có chuyên môn sâu về luật doanh nghiệp.</p>

<h4>2. Bảo mật thông tin cao</h4>
<p>Delaware không yêu cầu công khai tên của các thành viên LLC, giúp bảo vệ quyền riêng tư của chủ sở hữu.</p>

<h4>3. Không có thuế bán hàng</h4>
<p>Delaware không áp dụng thuế bán hàng, giúp tiết kiệm chi phí cho các doanh nghiệp bán lẻ.</p>

<h2>Quy trình đăng ký LLC tại Delaware</h2>

<h4>Bước 1: Chọn tên LLC</h4>
<ul>
  <li>Tên phải kết thúc bằng "LLC" hoặc "Limited Liability Company"</li>
  <li>Kiểm tra tính khả dụng trên website của Delaware Division of Corporations</li>
  <li>Tên không được trùng với các LLC đã đăng ký</li>
</ul>

<h4>Bước 2: Chỉ định Registered Agent</h4>
<p>Registered Agent phải có địa chỉ tại Delaware và sẵn sàng nhận tài liệu pháp lý trong giờ hành chính.</p>

<h4>Bước 3: Nộp Certificate of Formation</h4>
<ul>
  <li>Phí nộp: $90</li>
  <li>Có thể nộp online hoặc qua đường bưu điện</li>
  <li>Thời gian xử lý: 7-10 ngày làm việc</li>
</ul>

<h4>Bước 4: Tạo Operating Agreement</h4>
<p>Mặc dù không bắt buộc, Operating Agreement giúp xác định rõ quyền và nghĩa vụ của các thành viên.</p>

<img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Legal Documents" />

<h2>Chi phí duy trì hàng năm</h2>

<ul>
  <li>Annual Report: $300/năm</li>
  <li>Registered Agent: $100-200/năm</li>
  <li>Franchise Tax: $300/năm (tối thiểu)</li>
</ul>

<h2>Kết luận</h2>

<p>Delaware là lựa chọn tuyệt vời cho các LLC muốn có sự linh hoạt trong quản trị và bảo vệ pháp lý tốt nhất. Tuy chi phí cao hơn một số bang khác, nhưng lợi ích lâu dài rất đáng giá.</p>

<img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Success in Business" />`,
    author: 'Sail Agency',
    publishDate: '2024-01-15',
    category: 'LLC tại Mỹ',
    tags: ['Delaware', 'LLC', 'Đăng ký doanh nghiệp'],
    readTime: '8 phút đọc',
    image:
      'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7,
    title: 'Hướng Dẫn Thuế và Báo Cáo Hàng Năm Cho LLC Tại Mỹ',
    slug: 'huong-dan-thue-va-bao-cao-hang-nam-cho-llc-tai-my',
    excerpt:
      'Hướng dẫn chi tiết về nghĩa vụ thuế liên bang, tiểu bang và các báo cáo bắt buộc hàng năm cho LLC tại Mỹ. Tìm hiểu về thời hạn, phí và quy trình.',
    content: `Việc hiểu rõ nghĩa vụ thuế và báo cáo hàng năm là điều cực kỳ quan trọng để duy trì LLC hoạt động hợp pháp tại Mỹ. Bài viết này sẽ hướng dẫn chi tiết về tất cả các yêu cầu bạn cần biết.

## Tổng quan về nghĩa vụ thuế LLC

LLC có nghĩa vụ tuân thủ các quy định thuế ở cả cấp liên bang và tiểu bang. Tùy thuộc vào cách LLC được phân loại thuế và bang hoạt động, các yêu cầu có thể khác nhau đáng kể.

![Tax Overview](https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800)

## Báo cáo thuế liên bang (Federal Tax Return)

#### LLC được phân loại là Corporation
Nếu LLC elect để được đánh thuế như Corporation, bạn phải:

- **Nộp Form 1120** (U.S. Corporation Income Tax Return)
- **Thời hạn**: Ngày 15 tháng 3 (hoặc ngày 15 tháng 9 nếu xin gia hạn)
- **Nộp Form 5472** nếu LLC có foreign ownership trên 25%

#### Single-Member LLC (Default)
- Không cần nộp separate tax return
- Báo cáo thu nhập trên **Schedule C** của Form 1040 cá nhân
- Thời hạn: Ngày 15 tháng 4 (theo tax year cá nhân)

#### Multi-Member LLC (Partnership)
- Nộp **Form 1065** (U.S. Return of Partnership Income)
- Cung cấp **Schedule K-1** cho mỗi thành viên
- Thời hạn: Ngày 15 tháng 3

![Federal Tax Forms](https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800)

## Yêu cầu báo cáo cấp tiểu bang

#### Bang có thuế thu nhập doanh nghiệp
Hầu hết các bang yêu cầu LLC nộp **Business Tax Return** hoặc **Franchise Tax**:

##### California
- **Lệ phí tối thiểu**: $800/năm
- **Form**: Form 568 (Limited Liability Company Return of Income)
- **Thời hạn**: Ngày 15 tháng 3
- **Lưu ý**: Phí $800 áp dụng ngay cả khi LLC không có thu nhập

##### Delaware
- **Franchise Tax**: $300/năm (tối thiểu)
- **Thời hạn**: Ngày 1 tháng 6
- **Tính toán**: Dựa trên total gross assets hoặc assumed par value method

##### New York
- **Filing Fee**: $25-$4,500 (tùy thuộc vào gross income)
- **Form**: Form IT-204-LL
- **Thời hạn**: Ngày 15 tháng 3

#### Bang không có thuế thu nhập tiểu bang
Các bang sau không yêu cầu nộp thuế thu nhập tiểu bang:
- **Wyoming**: Chỉ có Annual Report ($50)
- **Nevada**: Business License fee ($500) + Annual List ($150)
- **South Dakota**: Annual Report ($50)
- **Alaska**: Biennial Report ($100 mỗi 2 năm)

![State Requirements](https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800)

## Báo cáo thường niên (Annual Report)

Annual Report là yêu cầu bắt buộc để cập nhật thông tin LLC với bang đăng ký.

#### Thông tin thường được yêu cầu:
- Tên và địa chỉ LLC
- Thông tin Registered Agent
- Tên và địa chỉ của managers/members
- Mô tả ngắn về business activities
- Authorized shares (nếu có)

#### Ví dụ cụ thể:

##### Florida
- **Thời hạn**: Trước ngày 1 tháng 5
- **Phí**: $138.75
- **Nộp online**: Qua Florida Division of Corporations website

##### Colorado
- **Thời hạn**: Cuối tháng anniversary của formation
- **Phí**: $10
- **Periodic Report**: Mỗi 2 năm

##### Texas
- **Thời hạn**: Ngày 15 tháng 5
- **Phí**: $0 (miễn phí)
- **Public Information Report**: Form 05-102

## Thuế bán hàng và thuế sử dụng (Sales Tax & Use Tax)

#### Khi nào cần đăng ký Sales Tax?
LLC kinh doanh hàng hóa hoặc dịch vụ chịu thuế phải:
- Đăng ký **Sales Tax Permit** tại bang hoạt động
- Thu thuế từ khách hàng
- Nộp báo cáo định kỳ

![Sales Tax](https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800)

#### Tần suất báo cáo:
- **Hàng tháng**: Doanh thu cao (thường >$1,000 thuế/tháng)
- **Hàng quý**: Doanh thu trung bình
- **Hàng năm**: Doanh thu thấp hoặc seasonal business

#### Nexus và Economic Nexus:
- **Physical Nexus**: Có văn phòng, kho hàng, nhân viên tại bang
- **Economic Nexus**: Vượt ngưỡng doanh thu (thường $100,000-$500,000/năm)

## Lịch thuế quan trọng

#### Quý 1 (Tháng 1-3):
- **15/3**: Form 1065 (Partnership), Form 1120 (Corporation)
- **15/3**: Hầu hết state tax returns
- **31/3**: FBAR (nếu có foreign accounts)

#### Quý 2 (Tháng 4-6):
- **15/4**: Individual tax returns (Single-member LLC)
- **1/6**: Delaware Franchise Tax
- **15/6**: Quarterly estimated taxes (Q1)

#### Quý 3 (Tháng 7-9):
- **15/9**: Extended corporate returns
- **15/9**: Quarterly estimated taxes (Q2)

#### Quý 4 (Tháng 10-12):
- **15/12**: Quarterly estimated taxes (Q3)
- **31/12**: Year-end planning

![Tax Calendar](https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800)

## Hậu quả của việc không tuân thủ

#### Penalties liên bang:
- **Late filing**: $195/tháng cho mỗi member (Form 1065)
- **Late payment**: 0.5%/tháng của số thuế nợ
- **Failure to file**: Lên đến 25% của số thuế nợ

#### Penalties tiểu bang:
- **California**: $20/tháng + interest
- **Delaware**: $200 penalty + interest
- **New York**: $50-$350 tùy theo thời gian chậm

#### Hậu quả nghiêm trọng:
- LLC có thể bị **dissolved** hoặc **suspended**
- Mất **good standing status**
- Không thể defend trong lawsuit
- Khó khăn trong việc renew licenses

## Tips để tuân thủ hiệu quả

#### 1. Thiết lập hệ thống theo dõi:
- Sử dụng calendar software để nhắc nhở deadlines
- Maintain organized records
- Set up automatic reminders

#### 2. Làm việc với professionals:
- **CPA** cho tax planning và preparation
- **Registered Agent** cho state compliance
- **Business attorney** cho legal advice

#### 3. Sử dụng technology:
- Accounting software (QuickBooks, Xero)
- Tax software hoặc professional services
- State filing services

![Professional Help](https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800)

## Kết luận

Tuân thủ nghĩa vụ thuế và báo cáo cho LLC đòi hỏi:

1. **Hiểu rõ requirements** của cả liên bang và tiểu bang
2. **Theo dõi deadlines** một cách chặt chẽ
3. **Maintain accurate records** và documentation
4. **Seek professional help** khi cần thiết
5. **Stay updated** với changes trong tax laws

Đầu tư thời gian và resources vào compliance sẽ giúp LLC hoạt động smooth và tránh được costly penalties. Remember: Prevention is always better than cure khi nói đến tax compliance.

![LLC Success](https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800)`,
    author: 'Sail Agency',
    publishDate: '2024-01-20',
    category: 'Thuế cho LLC',
    tags: ['Thuế', 'LLC', 'Annual Report', 'Compliance', 'IRS', 'State Tax'],
    readTime: '20 phút đọc',
    image:
      'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
  },
  {
    id: 2,
    title: 'Thuế LLC: Những điều cần biết về Single-Member và Multi-Member LLC',
    slug: 'thue-llc-single-member-multi-member',
    excerpt:
      'Tìm hiểu cách LLC được đánh thuế tại Mỹ, sự khác biệt giữa Single-Member và Multi-Member LLC, và các lựa chọn thuế khác nhau.',
    content: `<p>Một trong những lợi ích lớn nhất của LLC là tính linh hoạt trong việc lựa chọn cách thức đánh thuế. Hiểu rõ các tùy chọn này sẽ giúp bạn tối ưu hóa nghĩa vụ thuế của mình.</p>

<h2>LLC và Pass-Through Taxation</h2>

<p>Theo mặc định, LLC sử dụng "pass-through taxation", có nghĩa là:</p>
<ul>
  <li>LLC không nộp thuế ở cấp độ doanh nghiệp</li>
  <li>Lợi nhuận và lỗ "chuyển qua" cho các thành viên</li>
  <li>Thành viên nộp thuế trên tờ khai thuế cá nhân</li>
</ul>

<h2>Single-Member LLC (SMLLC)</h2>

<h4>Đặc điểm:</h4>
<ul>
  <li>Được IRS coi như "disregarded entity"</li>
  <li>Báo cáo thu nhập trên Schedule C của Form 1040</li>
  <li>Phải nộp Self-Employment Tax (15.3%)</li>
</ul>

<img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Single Member LLC" />

<h4>Ví dụ:</h4>
<p>Nếu SMLLC có lợi nhuận $50,000:</p>
<ul>
  <li>Income Tax: theo tax bracket cá nhân</li>
  <li>Self-Employment Tax: $50,000 × 15.3% = $7,650</li>
</ul>

<h2>Multi-Member LLC</h2>

<h4>Đặc điểm:</h4>
<ul>
  <li>Được đánh thuế như Partnership</li>
  <li>Nộp Form 1065 (thông tin)</li>
  <li>Mỗi thành viên nhận Schedule K-1</li>
  <li>Thành viên báo cáo trên tờ khai cá nhân</li>
</ul>

<h4>Phân bổ lợi nhuận:</h4>
<ul>
  <li>Theo tỷ lệ sở hữu (mặc định)</li>
  <li>Theo thỏa thuận trong Operating Agreement</li>
</ul>

<h2>Lựa chọn đánh thuế khác</h2>

<h4>S-Corp Election</h4>
<ul>
  <li>Nộp Form 2553</li>
  <li>Tiết kiệm Self-Employment Tax</li>
  <li>Yêu cầu trả lương hợp lý cho owner-employee</li>
</ul>

<h4>C-Corp Election</h4>
<ul>
  <li>Nộp Form 8832</li>
  <li>Double taxation</li>
  <li>Phù hợp khi muốn giữ lại lợi nhuận trong công ty</li>
</ul>

<img src="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tax Elections" />

<h2>Chiến lược tối ưu thuế</h2>

<h4>1. Theo dõi chi phí kinh doanh</h4>
<ul>
  <li>Văn phòng tại nhà</li>
  <li>Thiết bị và phần mềm</li>
  <li>Chi phí đi lại</li>
  <li>Bữa ăn kinh doanh (50%)</li>
</ul>

<h4>2. Retirement Plans</h4>
<ul>
  <li>SEP-IRA: đóng góp lên đến 25% thu nhập</li>
  <li>Solo 401(k): đóng góp cao hơn cho owner-only business</li>
</ul>

<h4>3. Health Savings Account (HSA)</h4>
<ul>
  <li>Deduction cho self-employed</li>
  <li>Triple tax advantage</li>
</ul>

<h2>Lưu ý quan trọng</h2>

<h4>State Taxes</h4>
<ul>
  <li>Mỗi bang có quy định khác nhau</li>
  <li>Một số bang không có income tax</li>
  <li>Cần hiểu rõ quy định tại bang đăng ký và bang hoạt động</li>
</ul>

<h4>Quarterly Estimated Taxes</h4>
<ul>
  <li>Nộp thuế ước tính hàng quý</li>
  <li>Tránh penalty cho underpayment</li>
  <li>Sử dụng Form 1040ES</li>
</ul>

<h2>Kết luận</h2>

<p>Việc lựa chọn cách thức đánh thuế cho LLC cần được cân nhắc kỹ lưỡng dựa trên:</p>
<ul>
  <li>Số lượng thành viên</li>
  <li>Mức thu nhập dự kiến</li>
  <li>Kế hoạch phân phối lợi nhuận</li>
  <li>Chiến lược phát triển dài hạn</li>
</ul>

<img src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tax Consultation" />

<p><strong>Khuyến nghị nên tham khảo ý kiến của chuyên gia thuế để đưa ra quyết định phù hợp nhất.</strong></p>`,
    author: 'Sail Agency',
    publishDate: '2024-01-10',
    category: 'Thuế cho LLC',
    tags: ['Thuế', 'LLC', 'IRS', 'Tax Planning'],
    readTime: '12 phút đọc',
    image:
      'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
];

export const categories: string[] = [
  'Tất cả',
  'LLC tại Mỹ',
  'Thuế cho LLC',
  'Kinh nghiệm kinh doanh',
];

export const tags: string[] = [
  'LLC',
  'Delaware',
  'Wyoming',
  'Nevada',
  'Thuế',
  'EIN',
  'Operating Agreement',
  'Registered Agent',
  'IRS',
  'Tax Planning',
  'Business Management',
  'Legal Documents',
  'LLC Compliance',
  'Business Services',
  'LLC Setup',
  'Đăng ký doanh nghiệp',
];