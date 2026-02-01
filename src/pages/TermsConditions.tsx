import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const DEFINITION_KEYS = [
  'termsDefinitionsPlatform',
  'termsDefinitionsCompany',
  'termsDefinitionsUser',
  'termsDefinitionsVenue',
  'termsDefinitionsBooking',
  'termsDefinitionsPersonalData'
] as const;

const ELIGIBILITY_KEYS = [
  'termsEligibilityAge',
  'termsEligibilityAccuracy',
  'termsEligibilitySecurity',
  'termsEligibilityMisuse',
  'termsEligibilitySuspension'
] as const;

const REVIEW_KEYS = [
  'termsReviewsSubmission',
  'termsReviewsVisibility',
  'termsReviewsRemoval'
] as const;

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 py-24" style={{ paddingBottom: 0 }}>
      <Navigation parentPage="TermsConditions" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-primary mb-4">{t('legalLastUpdated')}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('termsTitle')}</h1>
          <p className="text-xl text-muted-foreground mb-6">{t('termsSubtitle')}</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t('termsIntro')}</p>
            <p>{t('termsAcceptance')}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('termsDefinitionsHeading')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {DEFINITION_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('termsEligibilityHeading')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {ELIGIBILITY_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('termsReviewsHeading')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {REVIEW_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center space-y-4"  style={{ marginBottom: '2rem' }}>
          <p className="text-muted-foreground">
            {t('termsContactText', { email: t('contactEmailValue') })}
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/">{t('legalBackHome')}</Link>
          </Button>
        </div>
      </div>

      <Footer parentPage="TermsConditions" />
    </main>
  );
}
