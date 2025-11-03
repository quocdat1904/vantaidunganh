
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, color, delay, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${color.border} flex flex-col h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
    >
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${color.bg} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className={`w-8 h-8 ${color.text}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={`/dich-vu/${slug}`} className="mt-auto">
        <Button className={`${color.button} w-full`}>
          Xem Chi Tiết
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      slug: 'xe-ghep-hang',
      icon: Users,
      title: "Xe Tải Ghép Hàng",
      description: "Giải pháp tối ưu chi phí vận chuyển bằng cách chia sẻ không gian xe với các khách hàng khác. Phù hợp cho hàng hóa nhỏ lẻ, không cần giao gấp.",
      features: ["Giá cước siêu tiết kiệm", "Lịch trình linh hoạt mỗi ngày", "Giao nhận tận nơi"],
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
        button: "bg-blue-600 hover:bg-blue-700",
      },
    },
    {
      slug: 'chuyen-nha-tron-goi',
      icon: Home,
      title: "Chuyển Nhà, Dọn Trọ",
      description: "Dịch vụ chuyển nhà, phòng trọ trọn gói, chuyên nghiệp. Đảm bảo đồ đạc của bạn được tháo dỡ, bốc xếp và vận chuyển an toàn.",
      features: ["Tháo lắp, đóng gói miễn phí", "Đội ngũ bốc xếp chuyên nghiệp", "Tư vấn và khảo sát tận nơi"],
      color: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
        button: "bg-green-600 hover:bg-green-700",
      },
    },
    {
      slug: 'cho-thue-xe-tai',
      icon: Truck,
      title: "Cho Thuê Xe Tải 2.5 Tấn",
      description: "Cho thuê xe tải 2.5 tấn theo chuyến hoặc tự lái. Dành cho khách hàng cần sự riêng tư và chủ động hoàn toàn về thời gian.",
      features: ["Chủ động tuyệt đối về thời gian", "Không gian xe riêng biệt", "Giá cước trọn gói, minh bạch"],
      color: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-500",
        button: "bg-purple-600 hover:bg-purple-700",
      },
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Dịch Vụ Vận Tải Cốt Lõi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp các giải pháp vận chuyển linh hoạt và hiệu quả, đáp ứng mọi nhu cầu của bạn trên tuyến Đà Nẵng - Quảng Nam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
