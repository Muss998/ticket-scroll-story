import { useEffect, useRef } from 'react';
import { Users, Star, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function JoinSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      number: '50K+',
      label: 'Active Users',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'App Store Rating',
      color: 'text-yellow-500'
    },
    {
      icon: TrendingUp,
      number: '1M+',
      label: 'Bookings Made',
      color: 'text-green-500'
    }
  ];

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

      // Animate stats cards
      const cards = contentRef.current?.querySelectorAll('.stat-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.3,
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

  return (
    <section id="join" ref={sectionRef} className="py-24 bg-gradient-to-br from-background to-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">{t('joinTitle')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('joinSubtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="stat-card group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary p-4 shadow-glow group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-lg text-muted-foreground">
              <Heart className="h-5 w-5 text-primary" />
              <span>Loved by professionals worldwide</span>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-glow hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
            >
              {t('joinButton')}
            </Button>

            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Join our growing community of users who trust TekaTicket for their reservation needs. 
              No commitments, cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}