import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DEFINITION_KEYS = [
  'privacyDefinitionsPlatform',
  'privacyDefinitionsCompany',
  'privacyDefinitionsUser',
  'privacyDefinitionsVenue',
  'privacyDefinitionsBooking',
  'privacyDefinitionsPersonalData'
] as const;

const COLLECTION_KEYS = [
  'privacyCollectionAccount',
  'privacyCollectionBooking',
  'privacyCollectionUsage',
  'privacyCollectionUGC',
  'privacyCollectionSupport'
] as const;

const USAGE_KEYS = [
  'privacyUsageBookings',
  'privacyUsageQR',
  'privacyUsageSupport',
  'privacyUsageImprove',
  'privacyUsageAnalytics'
] as const;

const SHARING_KEYS = [
  'privacySharingPayments',
  'privacySharingCloud',
  'privacySharingVenues',
  'privacySharingAuthorities'
] as const;

const RIGHTS_KEYS = [
  'privacyRightsAccess',
  'privacyRightsCorrection',
  'privacyRightsDeletion'
] as const;

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-primary mb-4">{t('legalLastUpdated')}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('privacyTitle')}</h1>
          <p className="text-xl text-muted-foreground mb-6">{t('privacySubtitle')}</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t('privacyIntro')}</p>
            <p>{t('privacyAcceptance')}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyDefinitionsHeading')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {DEFINITION_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyCollectionHeading')}</h2>
              <p className="text-muted-foreground">{t('privacyCollectionIntro')}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {COLLECTION_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyUsageHeading')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {USAGE_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacySharingHeading')}</h2>
              <p className="text-muted-foreground">{t('privacySharingIntro')}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {SHARING_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t('privacySharingNote')}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacySecurityHeading')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('privacySecurityDescription')}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyCookiesHeading')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('privacyCookiesDescription')}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyRetentionHeading')}</h2>
              <p className="text-muted-foreground">{t('privacyRetentionIntro')}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {RIGHTS_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t('privacyRightsInstructions')}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t('privacyContactHeading')}</h2>
              <p className="text-muted-foreground">{t('privacyContactEmail')}</p>
              <p className="text-muted-foreground">{t('privacyContactSupport')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/">{t('legalBackHome')}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
