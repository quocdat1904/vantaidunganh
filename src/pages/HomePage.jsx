
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Schedule from '@/components/Schedule';
import Features from '@/components/Features';
import BookingForm from '@/components/BookingForm';
import ZaloContact from '@/components/ZaloContact';
import Footer from '@/components/Footer';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Xe Tải Ghép Hàng Đà Nẵng - Quảng Nam | Vận Chuyển Nhanh, An Toàn, Tiết Kiệm</title>
        <meta name="description" content="Chuyên dịch vụ xe tải ghép hàng Đà Nẵng - Quảng Nam. Vận chuyển hàng hóa, chuyển nhà, dọn trọ trọn gói. Giá cước ưu đãi, liên hệ ngay 0911 445 772." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Features />
          <Services />
          <Schedule />
          <BookingForm />
          <ZaloContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
