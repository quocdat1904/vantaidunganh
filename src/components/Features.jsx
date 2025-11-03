
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const stats = [
    { icon: Star, value: '4.9/5', label: 'Đánh giá từ khách hàng' },
    { icon: Award, value: '5+ năm', label: 'Kinh nghiệm vận tải' },
    { icon: Users, value: '1000+', label: 'Khách hàng tin tưởng' },
    { icon: TrendingUp, value: '99%', label: 'Tỷ lệ giao đúng hẹn' }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-blue-100">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
