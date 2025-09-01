import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="h-10 px-3 rounded-full hover:bg-primary/10 transition-colors font-medium"
    >
      <Globe className="h-4 w-4 mr-2" />
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}