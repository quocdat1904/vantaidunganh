
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Dịch Vụ', sectionId: 'services' },
    { name: 'Lịch Trình', sectionId: 'schedule' },
    { name: 'Đặt Hàng', sectionId: 'booking' },
    { name: 'Liên Hệ', sectionId: 'footer' },
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  };
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        navigate('/');
    }
  };


  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={handleLogoClick} className="flex items-center gap-2 text-xl font-bold text-blue-600 text-left">
            <h1>Xe Tải Ghép Hàng<br className="sm:hidden" /> Đà Nẵng - Quảng Nam</h1>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
             <a href="tel:0906511699" className="hidden md:block">
              <Button className='bg-blue-600 hover:bg-blue-700'>
                <Phone className="w-4 h-4 mr-2" />
                Gọi Ngay
              </Button>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                {link.name}
              </button>
            ))}
             <a href="tel:0906511699">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Gọi Ngay
              </Button>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
