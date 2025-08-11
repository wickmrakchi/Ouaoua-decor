// import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Award, Users } from 'lucide-react';

// photo
import logo from '../img/logo.png';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      {/* Hero Section */}
      {/* <section className="bg-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl leading-relaxed">
              {t('aboutContent')}
            </p>
          </div>
        </div>
      </section> */}

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-red-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-800 mb-2">30+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            {/* <div className="text-center">
              <MapPin className="h-12 w-12 text-red-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-800 mb-2">5+</div>
              <div className="text-gray-600">Cities Served</div>
            </div> */}
            <div className="text-center">
              <Award className="h-12 w-12 text-red-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-800 mb-2">100%</div>
              <div className="text-gray-600">Custom Made</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-red-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-800 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                {t('ourMission')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t('missionContent')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since our founding in 1991, Decor Ouaoua has been at the forefront of Moroccan interior design, 
                  combining traditional craftsmanship with modern aesthetics. Based in the beautiful city of Agadir, 
                  we have expanded our services to serve clients across Morocco's major cities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our team of skilled artisans and designers work tirelessly to create spaces that are not only 
                  beautiful but also functional, reflecting each client's unique personality while honoring the 
                  rich traditions of Moroccan design.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every project we undertake is 100% custom-made, using only the highest quality materials 
                  and time-tested techniques passed down through generations of Moroccan craftsmen.
                </p>
              </div>
              <div className="relative">
                <img 
                  // src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src={logo}
                  alt="Moroccan craftsmanship"
                  className="rounded-lg shadow-lg w-full h-97 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}