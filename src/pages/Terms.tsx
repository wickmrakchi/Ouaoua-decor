// import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Scale, Phone, Mail } from 'lucide-react';

export function Terms() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('termsOfService')}
              </h1>
            </div>
            <p className="text-xl leading-relaxed">
              {t('termsIntro')}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              
              {/* Section 1: General Terms */}
              <div>
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-red-800 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">
                    {t('generalTerms')}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('generalTermsContent')}
                </p>
              </div>

              {/* Section 2: Services */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('ourServicesTerms')}
                </h3>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('customDesignTerms')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('qualityMaterialsTerms')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('installationTerms')}
                  </li>
                </ul>
              </div>

              {/* Section 3: Payment Terms */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('paymentTerms')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('paymentTermsContent')}
                </p>
              </div>

              {/* Section 4: Warranty */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('warrantyTerms')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('warrantyTermsContent')}
                </p>
              </div>

              {/* Section 5: Limitation of Liability */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {t('limitationLiability')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('limitationLiabilityContent')}
                </p>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  {t('contactForTerms')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700">+212 616 89 30 97</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-800 mr-3" />
                    <span className="text-gray-700">Tilila, Agadir, Morocco</span>
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