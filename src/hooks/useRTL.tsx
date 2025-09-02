import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isRTL } from '@/lib/i18n';

export function useRTL() {
  const { i18n } = useTranslation();
  const currentIsRTL = isRTL(i18n.language);

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (currentIsRTL) {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', i18n.language);
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', i18n.language);
    }
  }, [i18n.language, currentIsRTL]);

  return currentIsRTL;
}