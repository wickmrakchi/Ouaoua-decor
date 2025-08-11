// import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('ourServices')}
            </h1>
            <p className="text-xl leading-relaxed">
              {t('aboutServices')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact us today for a free consultation and let our experts create the perfect 
              interior design solution for your home or business.
            </p>
            <button
              onClick={() => window.open('https://wa.me/212679443583?text=Hello, I would like to discuss my interior design project.', '_blank')}
              className="bg-red-800 hover:bg-red-900 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('getQuote')}
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}