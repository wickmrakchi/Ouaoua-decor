import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    object: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Nouvelle demande de devis - Ouaoua Decor

  _Nom_: *${formData.name}*
  _Téléphone_: *${formData.phone}*
  _Email_: *${formData.email || 'Optional'}*
  _Objet_: *${formData.object}*

  _Message_:
  *${formData.message}*
`; 
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/212616893097?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212616893097', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/decor_ouaoua/', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@decor_ouaoua', '_blank');
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contactUs')}
            </h1>
            <p className="text-xl leading-relaxed">
              {t('getInTouch')} - We're here to help bring your interior design dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-red-800 mb-8">
                {t('contactInfo')}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-800 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('address')}</h3>
                    <p className="text-gray-600">{t('addressValue')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-800 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+212 679 443 583</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-800 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('openingHours')}</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{t('mondayFriday')}</p>
                      <p>{t('saturday')}</p>
                      <p>{t('sunday')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">{t('followUs')}</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors text-white"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleInstagramClick}
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleTikTokClick}
                    className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('object')} *
                  </label>
                  <input
                    type="text"
                    id="object"
                    name="object"
                    required
                    value={formData.object}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    placeholder="Your objective"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('sendMessage')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
        Visit Our Showroom
      </h2>

      <div className="rounded-lg overflow-hidden h-96">
        <iframe
          title="Ouaoua Decor - Agadir"
          src="https://www.google.com/maps?q=30.3948837,-9.5188325&z=17&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay — small info + open-in-google button */}
        <div className="relative -mt-24 flex justify-end pr-4">
          <div className="bg-white/90 backdrop-blur-sm text-sm p-3 rounded-lg shadow-md max-w-xs">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8 6 6 8 6 11c0 4.5 6 11 6 11s6-6.5 6-11c0-3-2-5-6-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="11" r="2" fill="currentColor"/>
              </svg>
              <div>
                <div className="font-semibold text-gray-800">Ouaoua Decor</div>
                <div className="text-gray-600">Tilila, Agadir, Morocco</div>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <a
                href="https://www.google.com/maps/place/ouaoua+decor/@30.3948883,-9.5214074,610m/data=!3m2!1e3!4b1!4m6!3m5!1s0xdb3c90033524cf7:0xae69626f1a42c8f9!8m2!3d30.3948837!4d-9.5188325!16s%2Fg%2F11ldk9006w?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-red-800 text-white rounded-md text-xs font-medium"
              >
                Open in Google Maps
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.3948837,-9.5188325"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-gray-200 rounded-md text-xs"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}
