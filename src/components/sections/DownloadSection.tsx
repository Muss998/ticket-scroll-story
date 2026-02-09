import { useEffect, useRef } from 'react';
import { Apple, Play, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function DownloadSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="download" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">{t('downloadTitle')}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('downloadSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* App Store */}
            {/* <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary p-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Apple className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{t('downloadIOSHeading')}</h3>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('downloadIOSButton')}
                </Button>
              </CardContent>
            </Card> */}

            {/* Google Play */}
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary p-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{t('downloadAndroidHeading')}</h3>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('downloadAndroidButton')}
                </Button>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary p-4 shadow-glow group-hover:scale-110 transition-transform">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{t('downloadQRHeading')}</h3>
                <div className="w-24 h-24 mx-auto bg-white rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-16 h-16 text-black" />
                </div>
                <p className="text-sm text-muted-foreground">{t('downloadQRInstruction')}</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">{t('availableOn')}</span> Android 8+
          </p>
        </div>
      </div>
    </section>
  );
}