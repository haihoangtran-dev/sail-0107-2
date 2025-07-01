# Images Folder

Thư mục này chứa các hình ảnh được sử dụng trong project Sail Agency.

## Cấu trúc thư mục:
```
public/images/
├── hero/           # Ảnh cho hero section
├── services/       # Ảnh cho các dịch vụ
├── team/          # Ảnh team members
├── testimonials/  # Ảnh khách hàng
├── blog/          # Ảnh cho blog posts
├── about/         # Ảnh cho trang about
└── general/       # Ảnh chung

```

## Cách sử dụng:
```jsx
// Trong React component
<img src="/images/hero/business-meeting.jpg" alt="Business meeting" />

// Hoặc import
import heroImage from '/images/hero/business-meeting.jpg'
<img src={heroImage} alt="Business meeting" />
```

## Lưu ý:
- Tất cả ảnh trong thư mục `public/` có thể truy cập trực tiếp qua URL
- Đường dẫn bắt đầu bằng `/images/` (không cần `public/`)
- Nên sử dụng format WebP hoặc JPEG để tối ưu performance
- Nên có alt text cho accessibility