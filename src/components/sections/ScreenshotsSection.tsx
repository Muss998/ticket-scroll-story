import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import S1 from '@/assets/S1.jpeg';
import S2 from '@/assets/S2.jpeg';
import S3 from '@/assets/S3.jpeg';
import S4 from '@/assets/S4.jpeg';
import S5 from '@/assets/S5.jpeg';

gsap.registerPlugin(ScrollTrigger);

export function ScreenshotsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const screenshots = [
    {
      src: S1,
      alt: 'Home Screen',
      titleKey: 'screenshotsCard1Title',
      descriptionKey: 'screenshotsCard1Description'
    },
    {
      src: S2,
      alt: 'Place Screen',
      titleKey: 'screenshotsCard2Title',
      descriptionKey: 'screenshotsCard2Description'
    },
    {
      src: S3,
      alt: 'Place Screen',
      titleKey: 'screenshotsCard3Title',
      descriptionKey: 'screenshotsCard3Description'
    },
    {
      src: S4,
      alt: 'Payment Screen',
      titleKey: 'screenshotsCard4Title',
      descriptionKey: 'screenshotsCard4Description'
    },
    {
      src: S5,
      alt: 'Support Screen',
      titleKey: 'screenshotsCard5Title',
      descriptionKey: 'screenshotsCard5Description'
    }
  ];

  useEffect(() => {
    const titleElement = titleRef.current;

    const titleTween = titleElement
      ? gsap.fromTo(titleElement,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleElement,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      : null;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const sectionEl = sectionRef.current;
      const trackEl = trackRef.current;
      const viewportEl = trackEl?.parentElement as HTMLElement | null;

      if (!sectionEl || !trackEl || !viewportEl) {
        return;
      }

      const getScrollDistance = () => trackEl.scrollWidth - viewportEl.clientWidth + 500; // 32px padding adjustment
      if (getScrollDistance() <= 0) {
        return;
      }

      const cards = Array.from(trackEl.querySelectorAll<HTMLElement>('[data-screenshot-card="true"]'));

      const scrollTriggerConfig: ScrollTrigger.Vars = {
        trigger: sectionEl,
        start: 'top top',
        end: () => `+=${getScrollDistance()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      };

      if (cards.length > 1) {
        scrollTriggerConfig.snap = {
          snapTo: 1 / (cards.length - 1),
          duration: 0.25,
          ease: 'power1.out'
        };
      }

      const horizontalTween = gsap.to(trackEl, {
        x: () => `-${getScrollDistance()}`,
        ease: 'none',
        scrollTrigger: scrollTriggerConfig
      });

      const cardTweens = cards.map((card) =>
        gsap.fromTo(
          card,
          { opacity: 0.35, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left center',
              end: 'right center',
              scrub: true
            }
          }
        )
      );

      return () => {
        horizontalTween.kill();
        cardTweens.forEach((tween) => tween.kill());
      };
    });

    return () => {
      titleTween?.kill();
      mm.revert();
    };
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
      </div>

      <div className="relative">
        <div className="overflow-hidden px-4 md:px-10 lg:px-20 pb-10">
          <div
            ref={trackRef}
            className="flex flex-col md:flex-row gap-8 md:gap-12 will-change-transform"
          >
            {screenshots.map((screenshot, index) => (
              <article
                key={`${screenshot.title}-${index}`}
                data-screenshot-card="true"
                className="group flex-shrink-0 w-full md:w-[520px] lg:w-[570px]"
              >
                <div className="h-full rounded-3xl border border-black/20 dark:border-white/20 bg-background/70 p-6 shadow-elegant backdrop-blur">
                  <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
                    <div className="relative w-full md:w-auto md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px]">
                      <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-3xl shadow-elegant">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-auto rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="w-full text-left space-y-3">
                      <p className="text-sm uppercase tracking-wide text-primary/80">{t('insideApp')}</p>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {t(screenshot.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {t(screenshot.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}