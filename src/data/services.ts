import { Service } from '../types';

// photo
import salonmoroccan from '../img/salonmoroccan.jpg';
import bit from '../img/bit.jpg';
import maryo from '../img/maryo.jpg';

export const services: Service[] = [
  {
    id: 'custom-kitchens',
    title: {
      en: 'Custom Kitchens',
      fr: 'Cuisines Sur Mesure',
      ar: 'مطابخ مخصصة'
    },
    description: {
      en: 'Modern and classic kitchen designs tailored to your lifestyle and space requirements with premium materials and expert craftsmanship.',
      fr: 'Conceptions de cuisines modernes et classiques adaptées à votre style de vie et aux exigences d\'espace avec des matériaux premium.',
      ar: 'تصاميم مطابخ حديثة وكلاسيكية مصممة حسب نمط حياتك ومتطلبات المساحة مع مواد عالية الجودة.'
    },
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: {
      en: ['Custom cabinetry', 'Premium countertops', 'Modern appliances', 'Space optimization'],
      fr: ['Armoires sur mesure', 'Plans de travail premium', 'Électroménagers modernes', 'Optimisation d\'espace'],
      ar: ['خزائن مخصصة', 'أسطح عمل فاخرة', 'أجهزة حديثة', 'تحسين المساحة']
    }
  },
  {
    id: 'luxury-bathrooms',
    title: {
      en: 'Luxury Bathrooms',
      fr: 'Salles de Bains Luxueuses',
      ar: 'حمامات فاخرة'
    },
    description: {
      en: 'Complete bathroom setups with elegant finishes, premium fixtures, and sophisticated design elements that create a spa-like experience.',
      fr: 'Installations complètes de salle de bains avec finitions élégantes, accessoires premium et éléments de design sophistiqués.',
      ar: 'إعدادات حمامات كاملة مع تشطيبات أنيقة وتجهيزات عالية الجودة وعناصر تصميم متطورة.'
    },
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: {
      en: ['Luxury fixtures', 'Custom vanities', 'Premium tiles', 'Lighting design'],
      fr: ['Accessoires de luxe', 'Meubles-lavabos sur mesure', 'Carrelages premium', 'Design d\'éclairage'],
      ar: ['تجهيزات فاخرة', 'خزائن مخصصة', 'بلاط فاخر', 'تصميم إضاءة']
    }
  },
  {
    id: 'bedrooms',
    title: {
      en: 'Bedrooms',
      fr: 'Chambres',
      ar: 'غرف النوم'
    },
    description: {
      en: 'Comfortable and stylish bedroom furniture including custom beds, wardrobes, and side tables designed for relaxation and functionality.',
      fr: 'Mobilier de chambre confortable et élégant incluant lits sur mesure, armoires et tables de chevet conçus pour la détente.',
      ar: 'أثاث غرف نوم مريح وأنيق يشمل الأسرة المخصصة والخزائن والطاولات الجانبية المصممة للراحة.'
    },
    image: bit,
    features: {
      en: ['Custom wardrobes', 'Comfortable beds', 'Side tables', 'Storage solutions'],
      fr: ['Armoires sur mesure', 'Lits confortables', 'Tables de chevet', 'Solutions de rangement'],
      ar: ['خزائن مخصصة', 'أسرة مريحة', 'طاولات جانبية', 'حلول تخزين']
    }
  },
  {
    id: 'closets',
    title: {
      en: 'Closets & Dressing Rooms',
      fr: 'Placards & Dressings',
      ar: 'خزائن وغرف ملابس'
    },
    description: {
      en: 'Space-saving and stylish storage solutions with organized layouts, modern hardware, and efficient use of available space.',
      fr: 'Solutions de rangement élégantes et optimisées avec aménagements organisés, quincaillerie moderne et utilisation efficace de l\'espace.',
      ar: 'حلول تخزين أنيقة وموفرة للمساحة مع تخطيطات منظمة وعتاد حديث واستخدام فعال للمساحة.'
    },
    image: maryo,
    features: {
      en: ['Space optimization', 'Custom shelving', 'Modern hardware', 'Organized layouts'],
      fr: ['Optimisation d\'espace', 'Étagères sur mesure', 'Quincaillerie moderne', 'Aménagements organisés'],
      ar: ['تحسين المساحة', 'رفوف مخصصة', 'عتاد حديث', 'تخطيطات منظمة']
    }
  },
  {
    id: 'moroccan-salons',
    title: {
      en: 'Moroccan Salons',
      fr: 'Salons Marocains',
      ar: 'صالونات مغربية'
    },
    description: {
      en: 'Traditional and modern Moroccan living room designs with authentic touches, custom seating, and decorative elements that celebrate Moroccan heritage.',
      fr: 'Designs de salon marocain traditionnels et modernes avec touches authentiques, sièges sur mesure et éléments décoratifs.',
      ar: 'تصاميم غرف معيشة مغربية تقليدية وحديثة مع لمسات أصيلة ومقاعد مخصصة وعناصر زخرفية تحتفل بالتراث المغربي.'
    },
    image: salonmoroccan,
    features: {
      en: ['Traditional design', 'Authentic materials', 'Custom seating', 'Decorative elements'],
      fr: ['Design traditionnel', 'Matériaux authentiques', 'Sièges sur mesure', 'Éléments décoratifs'],
      ar: ['تصميم تقليدي', 'مواد أصيلة', 'مقاعد مخصصة', 'عناصر زخرفية']
    }
  },
  {
    id: 'storage-solutions',
    title: {
      en: 'Storage Solutions',
      fr: 'Solutions de Rangement',
      ar: 'حلول التخزين'
    },
    description: {
      en: 'Custom shelving and furniture solutions for optimal organization with quality materials and functional design that maximizes space efficiency.',
      fr: 'Étagères sur mesure et solutions de mobilier pour une organisation optimale avec des matériaux de qualité et un design fonctionnel.',
      ar: 'رفوف مخصصة وحلول أثاث للتنظيم الأمثل مع مواد عالية الجودة وتصميم وظيفي يزيد من كفاءة المساحة.'
    },
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: {
      en: ['Custom shelving', 'Space efficiency', 'Quality materials', 'Functional design'],
      fr: ['Étagères sur mesure', 'Efficacité d\'espace', 'Matériaux de qualité', 'Design fonctionnel'],
      ar: ['رفوف مخصصة', 'كفاءة المساحة', 'مواد عالية الجودة', 'تصميم وظيفي']
    }
  }
];