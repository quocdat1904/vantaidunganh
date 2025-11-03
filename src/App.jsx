
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dich-vu/:slug" element={<ServiceDetailPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
