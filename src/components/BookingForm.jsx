
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, MapPin, Package, Edit, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const InputField = ({ id, name, type, placeholder, value, onChange, Icon, required }) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      required={required}
    />
  </div>
);

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupAddress: '',
    deliveryAddress: '',
    weight: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.pickupAddress || !formData.deliveryAddress) {
      toast({
        title: "Vui lòng điền đủ các trường bắt buộc (*)",
        description: "Họ tên, SĐT, địa chỉ lấy và giao hàng là cần thiết.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('bookings')
      .insert([
        { 
          name: formData.name, 
          phone: formData.phone,
          pickup_address: formData.pickupAddress,
          delivery_address: formData.deliveryAddress,
          weight: formData.weight || null,
          description: formData.description
        }
      ]);

    setLoading(false);

    if (error) {
      toast({
        title: "Gửi yêu cầu thất bại!",
        description: "Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp.",
        variant: "destructive"
      });
      console.error('Supabase error:', error);
    } else {
      toast({
        title: "Gửi yêu cầu thành công! 🎉",
        description: "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại ngay để xác nhận."
      });

      // This will trigger the Zalo ZNS function if it's set up
      try {
        await supabase.functions.invoke('send-zns', {
            body: { record: { ...formData, pickup_address: formData.pickupAddress, delivery_address: formData.deliveryAddress } },
        });
      } catch (functionError) {
          console.error("Error invoking ZNS function:", functionError.message);
          // Optional: notify user that admin notification might have failed
      }

      setFormData({
        name: '',
        phone: '',
        pickupAddress: '',
        deliveryAddress: '',
        weight: '',
        description: ''
      });
    }
  };

  return (
    <section id="booking" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Đặt Hàng Nhanh
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chỉ cần điền thông tin bên dưới, chúng tôi sẽ liên hệ lại ngay để tư vấn và báo giá chi tiết cho bạn.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 border"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <InputField id="name" name="name" type="text" placeholder="Họ và tên *" value={formData.name} onChange={handleChange} Icon={User} required />
            <InputField id="phone" name="phone" type="tel" placeholder="Số điện thoại *" value={formData.phone} onChange={handleChange} Icon={Phone} required />
            <InputField id="pickupAddress" name="pickupAddress" type="text" placeholder="Địa chỉ lấy hàng *" value={formData.pickupAddress} onChange={handleChange} Icon={MapPin} required />
            <InputField id="deliveryAddress" name="deliveryAddress" type="text" placeholder="Địa chỉ giao hàng *" value={formData.deliveryAddress} onChange={handleChange} Icon={MapPin} required />
            <InputField id="weight" name="weight" type="number" placeholder="Trọng lượng (kg)" value={formData.weight} onChange={handleChange} Icon={Package} />
            <InputField id="description" name="description" type="text" placeholder="Mô tả hàng hóa (VD: Tủ lạnh, 10 thùng...)" value={formData.description} onChange={handleChange} Icon={Edit} />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg font-bold tracking-wide" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Đang gửi...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                Gửi Yêu Cầu Vận Chuyển
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
