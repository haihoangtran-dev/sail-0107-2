import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSectionWithOffset(sectionId);
      }, 100);
    } else {
      scrollToSectionWithOffset(sectionId);
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToSectionWithOffset = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Header height
      const offset = 20; // Additional 20px offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleLogoClick = (): void => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleHomeClick = (): void => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const services = [
    {
      name: 'Đăng ký LLC',
      description: 'Thành lập LLC chuyên nghiệp',
      action: () => scrollToSection('process'),
    },
    {
      name: 'Tư vấn thuế doanh nghiệp',
      description: 'Hỗ trợ thuế cho LLC',
      action: () => scrollToSection('tax-consulting'),
    },
    {
      name: 'Hỗ trợ lấy ITIN',
      description: 'Mã số thuế cho người nước ngoài',
      action: () => scrollToSection('itin-support'),
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="flex items-center space-x-3">
              <img
                src="/images/general/SailAgency-Logo.png"
                alt="Sail Agency Logo"
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image not found
                  e.currentTarget.style.display = 'none';
                  const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                  if (textLogo) {
                    textLogo.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SA</span>
                </div>
                <span className="text-xl font-bold text-blue-900">
                  Sail Agency
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Trang chủ
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Về chúng tôi
            </button>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Dịch vụ</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={service.action}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors group"
                    >
                      <div className="font-medium text-blue-900 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </div>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full px-4 py-2 text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Tư vấn miễn phí
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Bảng giá
            </button>
             <button
              onClick={() => handleNavigation('/blog')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Câu hỏi thường gặp
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors hidden"
            >
              Liên hệ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Bắt đầu ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={handleHomeClick}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Trang chủ
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Về chúng tôi
              </button>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  <span>Dịch vụ</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="pl-6 space-y-1 mt-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          service.action();
                          setIsMobileServicesOpen(false);
                        }}
                        className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
                </div>

              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Bảng giá
              </button>
             <button
              onClick={() => handleNavigation('/blog')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Blog
            </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Câu hỏi thường gặp
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Liên hệ
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary"
                >
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;