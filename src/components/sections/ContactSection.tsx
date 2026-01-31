import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const API_URL = import.meta.env.VITE_API_URL + '/contact-us';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = t('contactFormNameRequired');
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = t('contactFormEmailRequired');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t('contactFormEmailInvalid');
      }
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = t('contactFormSubjectRequired');
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = t('contactFormMessageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contactFormMessageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast.error(t('contactFormValidationError'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Success
      toast.success(t('contactFormSuccess'));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(t('contactFormError'));
    } finally {
      setIsSubmitting(false);
    }
  };

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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormNameLabel')}</label>
                      <Input 
                        placeholder={t('contactFormNamePlaceholder')} 
                        className={`bg-background/50 ${errors.name ? 'border-red-500' : ''}`}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormEmailLabel')}</label>
                      <Input 
                        type="email" 
                        placeholder={t('contactFormEmailPlaceholder')} 
                        className={`bg-background/50 ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormSubjectLabel')}</label>
                    <Input 
                      placeholder={t('contactFormSubjectPlaceholder')} 
                      className={`bg-background/50 ${errors.subject ? 'border-red-500' : ''}`}
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contactFormMessageLabel')}</label>
                    <Textarea 
                      placeholder={t('contactFormMessagePlaceholder')}
                      rows={6}
                      className={`bg-background/50 resize-none ${errors.message ? 'border-red-500' : ''}`}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">...</span>
                        {t('contactFormSending')}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t('contactFormButton')}
                      </>
                    )}
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