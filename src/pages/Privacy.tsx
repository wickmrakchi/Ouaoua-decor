// import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Eye, Lock, MessageCircle, Instagram, Phone } from 'lucide-react';

export function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('privacyPolicy')}
              </h1>
            </div>
            <p className="text-xl leading-relaxed">
              {t('privacyIntro')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              
              {/* Section 1: Information We Collect */}
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-red-800 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">
                    {t('informationWeCollect')}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('informationWeCollectContent')}
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('contactFormInfo')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('whatsappCommunication')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('projectConsultation')}
                  </li>
                </ul>
              </div>

              {/* Section 2: How We Use Information */}
              <div>
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-red-800 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">
                    {t('howWeUseInfo')}
                  </h2>
                </div>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('respondToInquiries')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('provideQuotes')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('scheduleConsultations')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('improveServices')}
                  </li>
                </ul>
              </div>

              {/* Section 3: Third-Party Services */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('thirdPartyServices')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('thirdPartyServicesContent')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold">WhatsApp</span>
                    </div>
                    <p className="text-sm text-gray-600">{t('whatsappPrivacy')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Instagram className="h-5 w-5 text-pink-600 mr-2" />
                      <span className="font-semibold">Instagram</span>
                    </div>
                    <p className="text-sm text-gray-600">{t('instagramPrivacy')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                      <span className="font-semibold">TikTok</span>
                    </div>
                    <p className="text-sm text-gray-600">{t('tiktokPrivacy')}</p>
                  </div>
                </div>
              </div>

              {/* Section 4: Data Security */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('dataSecurity')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('dataSecurityContent')}
                </p>
              </div>

              {/* Section 5: What We Don't Do */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {t('whatWeDontDo')}
                </h3>
                <ul className="text-green-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('noCookies')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('noTracking')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('noDataSelling')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('noSpam')}
                  </li>
                </ul>
              </div>

              {/* Section 6: Your Rights */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('yourRights')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('yourRightsContent')}
                </p>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  {t('contactForPrivacy')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700">+212 616 89 30 97</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700">WhatsApp: +212 616 89 30 97</span>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
                {t('lastUpdated')}: January 2024
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}