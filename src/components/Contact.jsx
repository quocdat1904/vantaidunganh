import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, content, href, color }) => {
  const contentElement = href ? (
    <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors">{content}</a>
  ) : (
    <p className="text-gray-600">{content}</p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
    >
      <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      {contentElement}
    </motion.div>
  );
};


const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline Dũng',
      content: '0911445772',
      href: 'tel:0911445772',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Hotline Ánh',
      content: '0966511699',
      href: 'tel:0966511699',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vanchuyendanang.vn',
      href: 'mailto:info@vanchuyendanang.vn',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: 'Đà Nẵng - Quảng Nam',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-gray-600">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <ContactInfoItem key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;