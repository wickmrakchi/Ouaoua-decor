import React from 'react';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title[language]}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-red-800">
          {service.title[language]}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description[language]}
        </p>
        <div className="space-y-2">
          {service.features[language].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}