export interface Service {
  id: string;
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  image: string;
  features: {
    en: string[];
    fr: string[];
    ar: string[];
  };
}

export interface Project {
  id: string;
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  category: string;
  image: string;
  description: {
    en: string;
    fr: string;
    ar: string;
  };
}

export type Language = 'en' | 'fr' | 'ar';
