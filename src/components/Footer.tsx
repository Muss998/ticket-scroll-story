import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="TekaTicket Logo" 
                className="h-8 w-8 rounded-full" 
              />
              <span className="text-xl font-bold text-gradient-primary">TekaTicket</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footerQuickLinks')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">{t('features')}</a></li>
              <li><a href="#screenshots" className="hover:text-primary transition-colors">{t('screenshots')}</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">{t('download')}</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footerLegal')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t('termsOfService')}</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footerCookiePolicy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footerSupport')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} TekaTicket.</span>
            <span>{t('allRightsReserved')}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>{t('footerMadeWith')}</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>{t('footerForReservations')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}