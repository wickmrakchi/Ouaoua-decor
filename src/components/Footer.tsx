// import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// photo
import logo from '../img/logo.png';

export function Footer() {
  const { t } = useLanguage();

  // const quickLinks = [
  //   { path: '/', key: 'home' },
  //   { path: '/about', key: 'about' },
  //   { path: '/services', key: 'services' },
  //   // { path: '/gallery', key: 'gallery' },
  //   { path: '/contact', key: 'contact' },
  //   { path: '/terms', key: 'termsOfService' },
  //   { path: '/privacy', key: 'privacyPolicy' },
  // ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212616893097', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/decor_ouaoua/', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@decor_ouaoua', '_blank');
  };

  const startYear = 1991;
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear ? `${startYear}` : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={logo} alt="Ouaoua Decor Logo" className="h-20 w-20" />
            <h3 className="text-2xl font-bold text-white mb-4">Ouaoua Decor</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footerDesc')}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={handleTikTokClick}
                className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">{t('addressValue')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">+212 616 89 30 97</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400" />
                <div className="text-gray-300">
                  <div>{t('mondayFriday')}</div>
                  <div>{t('saturday')}</div>
                  <div>{t('sunday')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            <p>&copy; {yearDisplay} {t('copy')}</p>
          </p>
        </div>
      </div>
    </footer>
  );
}