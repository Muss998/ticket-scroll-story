import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      features: 'Features',
      screenshots: 'Screenshots',
      download: 'Download',
      contact: 'Contact',
      join: 'Join Us',
      
      // Hero Section
      heroTitle: 'Make Reservations',
      heroSubtitle: 'Seamlessly',
      heroDescription: 'Experience the future of reservation management with Ticket. Book, manage, and track all your reservations in one beautiful, intuitive app.',
      downloadNow: 'Download Now',
      learnMore: 'Learn More',
      
      // Features Section
      featuresTitle: 'Powerful Features',
      featuresSubtitle: 'Everything you need to manage reservations effortlessly',
      
      feature1Title: 'Instant Booking',
      feature1Description: 'Book reservations instantly with real-time availability and confirmation.',
      
      feature2Title: 'Smart Notifications',
      feature2Description: 'Never miss a booking with intelligent push notifications and reminders.',
      
      feature3Title: 'Multi-Platform',
      feature3Description: 'Access your reservations anywhere, anytime on all your devices.',
      
      feature4Title: 'Analytics Dashboard',
      feature4Description: 'Track your booking patterns and get insights to optimize your schedule.',
      
      feature5Title: 'Secure Payments',
      feature5Description: 'Process payments securely with industry-leading encryption and protection.',
      
      feature6Title: '24/7 Support',
      feature6Description: 'Get help whenever you need it with our dedicated customer support team.',
      
      // Screenshots Section
      screenshotsTitle: 'See Ticket in Action',
      screenshotsSubtitle: 'Beautiful, intuitive interface designed for efficiency',
      
      // Download Section
      downloadTitle: 'Get Started Today',
      downloadSubtitle: 'Download Ticket and revolutionize how you handle reservations',
      availableOn: 'Available on',
      
      // Contact Section
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Have questions? We\'re here to help.',
      
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactAddress: 'Address',
      
      contactEmailValue: 'hello@ticketapp.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'San Francisco, CA',
      
      // Join Section
      joinTitle: 'Join Our Community',
      joinSubtitle: 'Be part of the reservation revolution. Join thousands of satisfied users.',
      joinButton: 'Join Now',
      
      // Footer
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    }
  },
  es: {
    translation: {
      // Navigation
      features: 'Características',
      screenshots: 'Capturas',
      download: 'Descargar',
      contact: 'Contacto',
      join: 'Únete',
      
      // Hero Section
      heroTitle: 'Haz Reservaciones',
      heroSubtitle: 'Sin Esfuerzo',
      heroDescription: 'Experimenta el futuro de la gestión de reservaciones con Ticket. Reserva, gestiona y rastrea todas tus reservaciones en una app hermosa e intuitiva.',
      downloadNow: 'Descargar Ahora',
      learnMore: 'Saber Más',
      
      // Features Section
      featuresTitle: 'Características Poderosas',
      featuresSubtitle: 'Todo lo que necesitas para gestionar reservaciones sin esfuerzo',
      
      feature1Title: 'Reserva Instantánea',
      feature1Description: 'Reserva instantáneamente con disponibilidad en tiempo real y confirmación.',
      
      feature2Title: 'Notificaciones Inteligentes',
      feature2Description: 'Nunca pierdas una reserva con notificaciones push inteligentes y recordatorios.',
      
      feature3Title: 'Multi-Plataforma',
      feature3Description: 'Accede a tus reservaciones en cualquier lugar, en cualquier momento, en todos tus dispositivos.',
      
      feature4Title: 'Panel de Analytics',
      feature4Description: 'Rastrea tus patrones de reserva y obtén información para optimizar tu horario.',
      
      feature5Title: 'Pagos Seguros',
      feature5Description: 'Procesa pagos de forma segura con encriptación y protección líder en la industria.',
      
      feature6Title: 'Soporte 24/7',
      feature6Description: 'Obtén ayuda cuando la necesites con nuestro equipo de soporte al cliente dedicado.',
      
      // Screenshots Section
      screenshotsTitle: 'Ve Ticket en Acción',
      screenshotsSubtitle: 'Interfaz hermosa e intuitiva diseñada para la eficiencia',
      
      // Download Section
      downloadTitle: 'Comienza Hoy',
      downloadSubtitle: 'Descarga Ticket y revoluciona cómo manejas las reservaciones',
      availableOn: 'Disponible en',
      
      // Contact Section
      contactTitle: 'Ponte en Contacto',
      contactSubtitle: '¿Tienes preguntas? Estamos aquí para ayudar.',
      
      contactEmail: 'Email',
      contactPhone: 'Teléfono',
      contactAddress: 'Dirección',
      
      contactEmailValue: 'hola@ticketapp.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'San Francisco, CA',
      
      // Join Section
      joinTitle: 'Únete a Nuestra Comunidad',
      joinSubtitle: 'Sé parte de la revolución de reservaciones. Únete a miles de usuarios satisfechos.',
      joinButton: 'Únete Ahora',
      
      // Footer
      allRightsReserved: 'Todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
    }
  },
  ar: {
    translation: {
      // Navigation
      features: 'المميزات',
      screenshots: 'لقطات الشاشة',
      download: 'تحميل',
      contact: 'اتصل بنا',
      join: 'انضم إلينا',
      
      // Hero Section
      heroTitle: 'احجز بسهولة',
      heroSubtitle: 'وبساطة',
      heroDescription: 'اكتشف مستقبل إدارة الحجوزات مع تذكرة. احجز وأدر وتتبع جميع حجوزاتك في تطبيق واحد جميل وبديهي.',
      downloadNow: 'حمل الآن',
      learnMore: 'اعرف أكثر',
      
      // Features Section
      featuresTitle: 'مميزات قوية',
      featuresSubtitle: 'كل ما تحتاجه لإدارة الحجوزات بسهولة',
      
      feature1Title: 'حجز فوري',
      feature1Description: 'احجز على الفور مع توفر في الوقت الفعلي والتأكيد.',
      
      feature2Title: 'إشعارات ذكية',
      feature2Description: 'لا تفوت أي حجز مع الإشعارات الذكية والتذكيرات.',
      
      feature3Title: 'متعدد المنصات',
      feature3Description: 'الوصول إلى حجوزاتك في أي مكان وفي أي وقت على جميع أجهزتك.',
      
      feature4Title: 'لوحة التحليلات',
      feature4Description: 'تتبع أنماط الحجز واحصل على رؤى لتحسين جدولك.',
      
      feature5Title: 'مدفوعات آمنة',
      feature5Description: 'معالجة المدفوعات بأمان مع التشفير والحماية الرائدة في الصناعة.',
      
      feature6Title: 'دعم 24/7',
      feature6Description: 'احصل على المساعدة عندما تحتاجها مع فريق دعم العملاء المتخصص.',
      
      // Screenshots Section
      screenshotsTitle: 'شاهد تذكرة في العمل',
      screenshotsSubtitle: 'واجهة جميلة وبديهية مصممة للكفاءة',
      
      // Download Section
      downloadTitle: 'ابدأ اليوم',
      downloadSubtitle: 'حمل تذكرة وثور طريقة التعامل مع الحجوزات',
      availableOn: 'متاح على',
      
      // Contact Section
      contactTitle: 'تواصل معنا',
      contactSubtitle: 'لديك أسئلة؟ نحن هنا للمساعدة.',
      
      contactEmail: 'البريد الإلكتروني',
      contactPhone: 'الهاتف',
      contactAddress: 'العنوان',
      
      contactEmailValue: 'hello@ticketapp.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'سان فرانسيسكو، كاليفورنيا',
      
      // Join Section
      joinTitle: 'انضم إلى مجتمعنا',
      joinSubtitle: 'كن جزءًا من ثورة الحجوزات. انضم إلى آلاف المستخدمين الراضين.',
      joinButton: 'انضم الآن',
      
      // Footer
      allRightsReserved: 'جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
    }
  }
};

// RTL languages configuration
export const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];

export const isRTL = (language: string) => RTL_LANGUAGES.includes(language);

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;