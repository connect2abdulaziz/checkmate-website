'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Star, Zap, Shield } from 'lucide-react';

const ClientLogos = () => {
  const [logos, setLogos] = useState([]);
  
  useEffect(() => {
    // Generate random company data
    const companyTypes = ['Tech', 'Finance', 'Health', 'Media', 'Retail'];
    const icons = [Globe, Award, Star, Zap, Shield];
    const colors = ['#38bdf8', '#a78bfa', '#fb7185', '#4ade80', '#facc15'];
    
    const generateCompanies = () => {
      return Array.from({ length: 5 }, (_, i) => ({
        name: `${companyTypes[Math.floor(Math.random() * companyTypes.length)]} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
        icon: icons[i % icons.length],
        color: colors[i % colors.length],
      }));
    };
    
    setLogos(generateCompanies());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-16 p-8 text-center rounded-2xl bg-slate-800/30 border border-white/5 backdrop-blur-lg"
    >
      <p className="text-sm uppercase tracking-wider text-slate-400 mb-8">
        Trusted by innovative companies worldwide
      </p>

      <div className="flex justify-center items-center flex-wrap gap-10">
        {logos.map((company, index) => {
          const Icon = company.icon;
          return (
            <motion.div
              key={`logo-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="p-3 rounded-xl mb-2" style={{ backgroundColor: `${company.color}20` }}>
                <Icon size={24} color={company.color} />
              </div>
              <div className="text-base font-semibold text-slate-100">
                {company.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ClientLogos;