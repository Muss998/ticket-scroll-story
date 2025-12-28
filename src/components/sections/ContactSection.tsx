import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = contentRef.current?.children;
      if (children) {
        gsap.fromTo(children,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: t('contactEmail'),
      value: t('contactEmailValue'),
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: t('contactPhone'),
      value: t('contactPhoneValue'),
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: t('contactAddress'),
      value: t('contactAddressValue'),
      color: 'text-red-500'
    }
  ];

  const socialPlatforms = ['contactSocialTwitter', 'contactSocialLinkedIn', 'contactSocialInstagram'] as const;

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">{t('contactTitle')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('contactInfoHeading')}</h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary p-3 shadow-glow group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="pt-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">{t('contactFollowHeading')}</h4>
                <div className="flex space-x-4">
                  {socialPlatforms.map((socialKey) => (
                    <Button key={socialKey} variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      {t(socialKey)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('contactFormHeading')}</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormNameLabel')}</label>
                      <Input placeholder={t('contactFormNamePlaceholder')} className="bg-background/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormEmailLabel')}</label>
                      <Input type="email" placeholder={t('contactFormEmailPlaceholder')} className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormSubjectLabel')}</label>
                    <Input placeholder={t('contactFormSubjectPlaceholder')} className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormMessageLabel')}</label>
                    <Textarea 
                      placeholder={t('contactFormMessagePlaceholder')}
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t('contactFormButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}