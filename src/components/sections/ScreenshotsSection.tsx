import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import screenshotDashboard from '@/assets/screenshot-dashboard.jpg';
import screenshotBooking from '@/assets/screenshot-booking.jpg';
import screenshotProfile from '@/assets/screenshot-profile.jpg';

gsap.registerPlugin(ScrollTrigger);

export function ScreenshotsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const screenshotsRef = useRef<HTMLDivElement>(null);

  const screenshots = [
    {
      src: screenshotDashboard,
      alt: 'Dashboard Screen',
      title: 'Dashboard',
      description: 'Manage all your reservations in one place'
    },
    {
      src: screenshotBooking,
      alt: 'Booking Screen',
      title: 'Easy Booking',
      description: 'Book your favorite spots instantly'
    },
    {
      src: screenshotProfile,
      alt: 'Profile Screen',
      title: 'Profile & Settings',
      description: 'Customize your experience'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Screenshots animation
      const screenshots = screenshotsRef.current?.children;
      if (screenshots) {
        gsap.fromTo(screenshots,
          { y: 100, opacity: 0, rotationY: 45 },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: screenshotsRef.current,
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
    <section id="screenshots" ref={sectionRef} className="py-24 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">{t('screenshotsTitle')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('screenshotsSubtitle')}
          </p>
        </div>

        <div ref={screenshotsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-3xl shadow-elegant">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {screenshot.title}
              </h3>
              <p className="text-muted-foreground">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}