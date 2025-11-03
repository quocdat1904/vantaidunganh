
import React from 'react';
import { motion } from 'framer-motion';
import ZaloIcon from '@/components/ZaloIcon';
import { Button } from '@/components/ui/button';
const ZaloContact = () => {
  return <section id="zalo-contact" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ZaloIcon className="w-10 h-10 bg-white rounded-full p-1" />
            <h2 className="text-3xl md:text-4xl font-bold">Báo Giá & Tư Vấn Qua Zalo</h2>
          </div>
          <p className="text-blue-100 mb-8">Quét mã QR hoặc nhấn nút bên dưới để kết nối với <span className="font-bold text-yellow-300">Trần Ngọc Ánh</span></p>

          <div className="flex justify-center mb-8">
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://horizons-cdn.hostinger.com/a5b69958-9b17-44a3-8880-d056eb3c92ff/5555555-sGmdv.jpg" alt="Mã QR Zalo của Trần Ngọc Ánh" className="w-48 h-48" />
            </motion.div>
          </div>

          <a href="https://zalo.me/0906511699" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
              <ZaloIcon className="w-6 h-6 mr-2" />
              Nhắn Tin Zalo Ngay
            </Button>
          </a>
        </motion.div>
      </div>
    </section>;
};
export default ZaloContact;
