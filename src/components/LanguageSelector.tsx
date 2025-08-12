// import React from 'react';
import Select from 'react-select';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { value: 'en', label: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    { value: 'fr', label: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    { value: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w20/ma.png' }
  ];

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    })
  };

  return (
    <Select
      value={languages.find((l) => l.value === language)}
      onChange={(selected) => setLanguage(selected?.value as Language)}
      options={languages.map((lang) => ({
        value: lang.value,
        label: (
          <>
            <img src={lang.flag} alt={lang.label} style={{ width: 20, height: 15 }} />
            {lang.label}
          </>
        )
      }))}
      styles={customStyles}
      isSearchable={false}
    />
  );
}
