
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZaloIcon from '@/components/ZaloIcon';
const servicesData = {
  'xe-ghep-hang': {
    title: 'Dịch Vụ Xe Tải Ghép Hàng',
    description: 'Giải pháp vận chuyển hàng hóa siêu tiết kiệm bằng cách ghép các đơn hàng nhỏ lẻ trên cùng một chuyến xe. Dịch vụ này là lựa chọn lý tưởng cho các chủ shop online, doanh nghiệp nhỏ hoặc cá nhân có nhu cầu gửi hàng không yêu cầu giao ngay lập tức.',
    imageDescription: 'A 2.5 ton truck being loaded with various packages for a consolidated delivery route',
    details: ['Nhận hàng tận nơi, giao hàng tận tay.', 'Lịch xe chạy cố định hàng ngày, đảm bảo hàng không bị tồn kho.', 'Giá cước siêu tiết kiệm.', 'Hệ thống theo dõi đơn hàng trực quan.', 'Phù hợp với hàng hóa đa dạng: từ bưu phẩm, quần áo đến đồ gia dụng.']
  },
  'chuyen-nha-tron-goi': {
    title: 'Dịch Vụ Chuyển Nhà, Dọn Trọ Trọn Gói',
    description: 'Chúng tôi lo tất cả các công đoạn từ A-Z, bạn chỉ việc "xách vali vào ở". Đội ngũ chuyên nghiệp của chúng tôi sẽ tháo dỡ, bọc lót, đóng gói, vận chuyển và lắp đặt lại toàn bộ đồ đạc của bạn một cách cẩn thận và nhanh chóng.',
    imageDescription: 'A team of movers expertly packing furniture into a 2.5 ton moving truck for a home relocation',
    details: ['Khảo sát và tư vấn miễn phí tận nơi.', 'Cung cấp thùng carton, băng keo, màng PE bọc lót miễn phí.', 'Đội ngũ bốc xếp được đào tạo bài bản, kinh nghiệm, thái độ nhiệt tình.', 'Hệ thống xe tải 2,5 tấn và các loại xe khác phù hợp mọi khối lượng đồ đạc.', 'Cam kết chất lượng dịch vụ, đảm bảo an toàn cho đồ đạc.']
  },
  'cho-thue-xe-tai': {
    title: 'Dịch Vụ Cho Thuê Xe Tải 2,5 Tấn',
    description: 'Khi bạn cần sự chủ động tuyệt đối về thời gian và không gian vận chuyển riêng biệt, dịch vụ thuê xe tải 2,5 tấn nguyên chuyến là giải pháp tối ưu. Phù hợp cho việc chuyển văn phòng, dọn kho xưởng, hoặc vận chuyển hàng hóa giá trị cao.',
    imageDescription: 'A pristine 2.5 ton white truck parked and ready for rental, ideal for private cargo transport',
    details: ['Cung cấp xe tải 2,5 tấn đời mới, thùng sạch sẽ.', 'Lựa chọn tự lái hoặc có tài xế kinh nghiệm, nhiệt tình.', 'Bạn toàn quyền quyết định thời gian, địa điểm giao nhận.', 'Giá cước trọn gói, minh bạch, không phát sinh chi phí ẩn.', 'Thủ tục cho thuê nhanh chóng, đơn giản.']
  }
};
const ServiceDetailPage = () => {
  const {
    slug
  } = useParams();
  const service = servicesData[slug];
  if (!service) {
    return <Navigate to="/" replace />;
  }
  return <>
      <Helmet>
        <title>{service.title} | Vận Tải Dũng Ánh</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <Header />
      <main className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <Link to="/" className="inline-flex items-center text-blue-600 font-semibold mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trở về trang chủ
            </Link>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{service.description}</p>
            
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="rounded-2xl shadow-lg overflow-hidden">
                    <img class="w-full h-auto object-cover aspect-video" alt={service.title} src="https://horizons-cdn.hostinger.com/a5b69958-9b17-44a3-8880-d056eb3c92ff/dnqn-1-thg-11-2025-7qYqB.png" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <h3 className="text-2xl font-bold mb-6">Chi tiết dịch vụ</h3>
                  <ul className="space-y-4">
                    {service.details.map((item, index) => <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-2xl text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Sẵn sàng vận chuyển?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">Liên hệ ngay với chúng tôi để được tư vấn và nhận báo giá tốt nhất cho nhu cầu của bạn!</p>
              <div className="flex flex-wrap justify-center gap-4">
                 <a href="https://zalo.me/0906511699" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
                        <ZaloIcon className="w-6 h-6 mr-2" />
                        Nhắn Tin Zalo (Ánh)
                    </Button>
                </a>
                <a href="tel:0911445772">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                        <Phone className="w-5 h-5 mr-2" />
                        Gọi Ngay (Dũng)
                    </Button>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </main>
      <Footer />
    </>;
};
export default ServiceDetailPage;
