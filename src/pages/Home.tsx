// import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
// import { ProjectCard } from '../components/ProjectCard';
import { services } from '../data/services';
// import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Users, Wrench, Heart } from 'lucide-react';

export function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: 'experience',
      descKey: 'experienceDesc'
    },
    {
      icon: Wrench,
      titleKey: 'customMade',
      descKey: 'customMadeDesc'
    },
    {
      icon: Users,
      titleKey: 'quality',
      descKey: 'qualityDesc'
    },
    {
      icon: Heart,
      titleKey: 'satisfaction',
      descKey: 'satisfactionDesc'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              {t('whyChooseUs')}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-red-800">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              {t('ourServices')}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              {t('ourProjects')}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}