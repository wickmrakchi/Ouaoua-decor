import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// photo
import salondecor from '../img/WhatsApp Image 2025-08-09 à 15.16.51_042a1afa.jpg';
import salondecor1 from '../img/WhatsApp Image 2025-08-09 à 15.16.51_2b3203e1.jpg';
// import salondecor2 from '../img/WhatsApp Image 2025-08-09 à 15.16.51_56026e3f.jpg';
// import salondecor3 from '../img/WhatsApp Image 2025-08-09 à 15.16.51_891eb72a.jpg';
import salondecor4 from '../img/WhatsApp Image 2025-08-09 à 16.00.54_63752815.jpg';




export function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the slideshow
  const backgroundImages = [
    salondecor,
    salondecor1,
    // salondecor2,
    // salondecor3,
    salondecor4
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleGetQuote = () => {
    window.open('https://wa.me/212616893097?text=Hello, I would like to get a quote for interior design services.', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 via-red-800 to-red-700">
      {/* Background Images Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      ))}

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
      
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>
        <button
          onClick={handleGetQuote}
          className="bg-gold-500 hover:bg-gold-600 text-red-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#D4AF37' }}
        >
          {t('getQuote')}
        </button>
      </div>
    </section>
  );
}