
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Shield, Clock } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Rocket,
      title: "Nhanh Chóng",
      description: "Lịch trình xe chạy liên tục, đảm bảo hàng đi đúng hẹn.",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "Giá Rẻ",
      description: "Tối ưu chi phí, mang lại giá cước cạnh tranh nhất.",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "An Toàn",
      description: "Đội ngũ lái xe kinh nghiệm, hàng hóa được bảo quản cẩn thận.",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Linh Hoạt 24/7",
      description: "Sẵn sàng phục vụ mọi lúc, mọi nơi theo yêu cầu của bạn.",
      delay: 0.4
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Tại Sao Chọn Chúng Tôi?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{delay: 0.1}}
              className="text-lg text-gray-600 mb-10"
            >
              Với nhiều năm kinh nghiệm trong lĩnh vực vận tải, chúng tôi tự tin là đối tác tin cậy cho mọi nhu cầu vận chuyển hàng hóa, chuyển nhà của bạn trên tuyến Đà Nẵng - Quảng Nam.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <FeatureItem key={i} {...feature} />
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img alt="Nhà kho chứa hàng hóa vận chuyển" class="rounded-2xl shadow-2xl w-full h-full object-cover" src="https://images.unsplash.com/photo-1645736315000-6f788915923b" />
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 rounded-full shadow-lg border-4 border-blue-500 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-blue-600">1000+</p>
                <p className="text-sm text-gray-600 font-semibold">Chuyến Hàng</p>
                <p className="text-xs text-gray-500">Thành Công</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
