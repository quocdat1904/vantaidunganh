import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import ZaloIcon from '@/components/ZaloIcon';

const PriceCalculator = () => {
  const { toast } = useToast();
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('danang-quangnam');
  const [serviceType, setServiceType] = useState('ghep');
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const calculatePrice = () => {
    if (!weight || parseFloat(weight) <= 0) {
      toast({
        title: "Vui lòng nhập trọng lượng hợp lệ",
        variant: "destructive"
      });
      return;
    }

    const weightNum = parseFloat(weight);
    let basePrice = 0;

    if (serviceType === 'ghep') {
      basePrice = weightNum * 15000;
    } else {
      basePrice = weightNum * 20000;
    }

    if (distance === 'quangnam-danang') {
      basePrice *= 1.1;
    }
    
    const finalPrice = Math.round(basePrice / 1000) * 1000;

    setCalculatedPrice(finalPrice);
    toast({
      title: "Tính giá thành công!",
      description: "Chi phí ước tính đã được tính toán"
    });
  };
  
  const sendToZalo = () => {
    const routeText = distance === 'danang-quangnam' ? 'Đà Nẵng -> Quảng Nam' : 'Quảng Nam -> Đà Nẵng';
    const serviceText = serviceType === 'ghep' ? 'Hàng ghép' : 'Xe riêng';
    const message = `Chào bạn, tôi muốn báo giá vận chuyển:\n- Tuyến đường: ${routeText}\n- Loại dịch vụ: ${serviceText}\n- Trọng lượng: ${weight} kg\n- Giá ước tính: ${calculatedPrice.toLocaleString('vi-VN')} đ.\n\nVui lòng tư vấn thêm cho tôi.`;
    const zaloLink = `https://zalo.me/0906511699?text=${encodeURIComponent(message)}`;
    window.open(zaloLink, '_blank');
  };

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Tính Giá Vận Chuyển</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="weight" className="text-gray-700 mb-2 block">Trọng lượng (kg)</Label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Nhập trọng lượng"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <Label htmlFor="distance" className="text-gray-700 mb-2 block">Tuyến đường</Label>
              <select
                id="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="danang-quangnam">Đà Nẵng → Quảng Nam</option>
                <option value="quangnam-danang">Quảng Nam → Đà Nẵng</option>
              </select>
            </div>

            <div className='md:col-span-2'>
              <Label htmlFor="serviceType" className="text-gray-700 mb-2 block">Loại dịch vụ</Label>
              <select
                id="serviceType"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="ghep">Hàng ghép</option>
                <option value="rieng">Xe riêng</option>
              </select>
            </div>
          </div>

          <Button onClick={calculatePrice} className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
            <Calculator className="w-5 h-5 mr-2" />
            Tính Giá Ngay
          </Button>

          {calculatedPrice !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center"
            >
              <p className="text-lg mb-2">Chi phí ước tính</p>
              <p className="text-4xl font-bold">{calculatedPrice.toLocaleString('vi-VN')} đ</p>
              <p className="text-sm mt-2 opacity-90">*Giá chưa bao gồm VAT</p>
              <Button onClick={sendToZalo} className="mt-4 bg-white text-blue-600 hover:bg-gray-100 font-bold">
                <ZaloIcon className="w-5 h-5 mr-2" />
                Gửi Báo Giá Qua Zalo
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;