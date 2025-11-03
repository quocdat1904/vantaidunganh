
import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import TikTokIcon from '@/components/TikTokIcon';
import TruckLogo from '@/components/TruckLogo';

const Footer = () => {
  return <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TruckLogo className="w-12 h-12 text-blue-400" />
              <h3 className="text-2xl font-bold">Vận Tải Dũng Ánh</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Đối tác vận chuyển tin cậy trên tuyến Đà Nẵng - Quảng Nam. Chuyên xe tải ghép hàng, chuyển nhà, dọn trọ với phương châm Uy tín - Nhanh chóng - Giá tốt.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61582729004476&locale=vi_VN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
              <a href="https://www.tiktok.com/@ketnoivietnam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TikTokIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="text-xl font-semibold mb-4">Dịch Vụ Chính</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Xe tải ghép hàng</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cho thuê xe tải 2.5 tấn</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Chuyển nhà, văn phòng</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vận chuyển theo yêu cầu</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <p className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>Bãi xe: Đối diện Bến Xe Trung Tâm TP Đà Nẵng</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span><a href="tel:0911445772" className="hover:text-white transition-colors">Dũng: 0911 445 772</a></span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span><a href="tel:0966511699" className="hover:text-white transition-colors">Ánh: 0966 511 699</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:vantaidunganhqn@gmail.com" className="hover:text-white transition-colors">vantaidunganhqn@gmail.com</a>
              </li>
            </ul>
          </div>
          
           {/* Column 4: Schedule */}
          <div>
            <p className="text-xl font-semibold mb-4">Lịch Trình Hàng Ngày</p>
            <ul className="space-y-2 text-gray-400">
              <li><span className='font-semibold text-gray-200'>Sáng:</span> 6:00 Khởi hành</li>
              <li><span className='font-semibold text-gray-200'>Chiều:</span> 14:00 Khởi hành</li>
              <li><span className='font-semibold text-gray-200'>Ghi chú:</span> Các tuyến chạy linh hoạt trong ngày</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vận Tải Dũng Ánh.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
