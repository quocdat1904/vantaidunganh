
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ZaloIcon from '@/components/ZaloIcon';

const Hero = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <section id="hero" className="hero-bg text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center pt-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-lg">
                Xe Tải Ghép Hàng
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Đà Nẵng - Quảng Nam</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold drop-shadow-md">
                Giải Pháp Vận Chuyển Nhanh Chóng • An Toàn • Siêu Tiết Kiệm
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-gray-200">
                Vận Tải Dũng Ánh chuyên dịch vụ xe tải ghép hàng Đà Nẵng - Quảng Nam, chuyển nhà, dọn trọ trọn gói với giá cước tốt nhất thị trường.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg group" onClick={() => scrollToSection('booking')}>
                    Đặt Hàng Ngay
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="https://zalo.me/0906511699" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 shadow-lg">
                        <ZaloIcon className="w-5 h-5 mr-2" />
                        Báo Giá Zalo
                    </Button>
                </a>
                <a href="tel:0906511699">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 shadow-lg group">
                        <Phone className="w-5 h-5 mr-2" />
                        Gọi ngay giá tốt nhất
                    </Button>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
