import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 px-3 rounded-full hover:bg-primary/10 transition-colors font-medium"
      >
        <Globe className="h-4 w-4 mr-2" />
        {currentLang.code.toUpperCase()}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-background border border-border rounded-xl shadow-elegant z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                i18n.language === lang.code ? 'bg-primary/5 text-primary' : 'text-foreground'
              }`}
            >
              {/* <span className="text-lg">{lang.flag}</span> */}
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}