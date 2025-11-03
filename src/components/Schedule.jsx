
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Route, ArrowRight, Sun, Sunset } from 'lucide-react';

const ScheduleCard = ({ time, title, routes, Icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden p-8 rounded-2xl shadow-lg border-t-4 ${color.border}`}
    >
      <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${color.bg} opacity-30`}></div>
      <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full ${color.bg} opacity-20`}></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${color.bg}`}>
            <Icon className={`w-8 h-8 ${color.text}`} />
          </div>
          <div>
            <p className={`text-3xl font-bold ${color.text}`}>{time}</p>
            <p className="font-semibold text-gray-600">{title}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center font-semibold text-gray-800">
            <Route className="w-5 h-5 mr-3 text-gray-500" />
            <span>Lộ trình di chuyển:</span>
          </div>
          <ul className="space-y-3 pl-4 border-l-2 border-dashed">
            {routes.map((route, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <span>{route.from}</span>
                <ArrowRight className="w-4 h-4 mx-3 text-gray-400" />
                <span>{route.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Schedule = () => {
  const schedules = [
    {
      time: "6:00",
      title: "Chuyến Sáng",
      routes: [{ from: "Thăng Bình", to: "Đà Nẵng" }],
      Icon: Sun,
      color: { bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-500" },
      delay: 0.1,
    },
    {
      time: "14:00",
      title: "Chuyến Chiều 1",
      routes: [
        { from: "Đà Nẵng", to: "Điện Bàn & Hội An" },
        { from: "Thăng Bình", to: "Tam Kỳ" },
      ],
      Icon: Sunset,
      color: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-500" },
      delay: 0.2,
    },
    {
      time: "14:00",
      title: "Chuyến Chiều 2",
      routes: [
        { from: "Đà Nẵng", to: "Nam Phước & Quế Sơn" },
        { from: "Thăng Bình", to: "Tam Kỳ" },
      ],
      Icon: Sunset,
      color: { bg: "bg-green-100", text: "text-green-700", border: "border-green-500" },
      delay: 0.3,
    },
  ];

  return (
    <section id="schedule" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lịch Trình Xe Chạy Cố Định
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Các tuyến xe khởi hành hàng ngày, đảm bảo hàng hóa của bạn luôn được vận chuyển đúng giờ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {schedules.map((schedule, index) => (
            <ScheduleCard key={index} {...schedule} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
