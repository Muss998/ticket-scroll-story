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
      heroDescription: 'Experience the future of reservation management with TekaTicket. Book, manage, and track all your reservations in one beautiful, intuitive app.',
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
      screenshotsTitle: 'See TekaTicket in Action',
      screenshotsSubtitle: 'Beautiful, intuitive interface designed for efficiency',
      
      // Download Section
      downloadTitle: 'Get Started Today',
      downloadSubtitle: 'Download TekaTicket and revolutionize how you handle reservations',
      availableOn: 'Available on',
      
      // Contact Section
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Have questions? We\'re here to help.',
      
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactAddress: 'Address',
      
      contactEmailValue: 'hello@tekaticket.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'Miami, FL, USA',
      
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
  ar: {
    translation: {
      // Navigation
      features: 'الميزات',
      screenshots: 'لقطات الشاشة',
      download: 'التنزيل',
      contact: 'تواصل',
      join: 'انضم إلينا',
      
      // Hero Section
      heroTitle: 'أنجز حجوزاتك',
      heroSubtitle: 'بسلاسة',
      heroDescription: 'اختبر مستقبل إدارة الحجوزات مع TekaTicket. احجز وأدر وتتبع كل حجوزاتك في تطبيق واحد جميل وسهل الاستخدام.',
      downloadNow: 'حمّل الآن',
      learnMore: 'اكتشف المزيد',
      
      // Features Section
      featuresTitle: 'ميزات قوية',
      featuresSubtitle: 'كل ما تحتاجه لإدارة الحجوزات بسهولة',
      
      feature1Title: 'الحجز الفوري',
      feature1Description: 'ثبّت حجزك فورًا مع توافر وتأكيد في الوقت الفعلي.',
      
      feature2Title: 'إشعارات ذكية',
      feature2Description: 'لا تفوت أي حجز بفضل الإشعارات الذكية والتنبيهات التذكيرية.',
      
      feature3Title: 'دعم متعدد المنصات',
      feature3Description: 'يمكنك الوصول إلى حجوزاتك أينما كنت وعلى أي جهاز.',
      
      feature4Title: 'لوحة تحليلات',
      feature4Description: 'تابع سلوك الحجز واحصل على رؤى تساعدك على تحسين جدولك.',
      
      feature5Title: 'مدفوعات آمنة',
      feature5Description: 'عالج المدفوعات بأمان باستخدام تشفير وحماية بمعايير عالمية.',
      
      feature6Title: 'دعم متواصل 24/7',
      feature6Description: 'احصل على المساعدة وقتما احتجت إليها من فريق دعمنا المتخصص.',
      
      // Screenshots Section
      screenshotsTitle: 'انظر كيف يعمل TekaTicket',
      screenshotsSubtitle: 'واجهة جميلة وبديهية مصممة لتحقيق الكفاءة',
      
      // Download Section
      downloadTitle: 'ابدأ اليوم',
      downloadSubtitle: 'حمّل TekaTicket وغيّر طريقتك في إدارة الحجوزات',
      availableOn: 'متوفر على',
      
      // Contact Section
      contactTitle: 'تواصل معنا',
      contactSubtitle: 'هل لديك أسئلة؟ نحن هنا للمساعدة.',
      
      contactEmail: 'البريد الإلكتروني',
      contactPhone: 'الهاتف',
      contactAddress: 'العنوان',
      
      contactEmailValue: 'hello@tekaticket.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'ميامي، فلوريدا، الولايات المتحدة الأمريكية',
      
      // Join Section
      joinTitle: 'انضم إلى مجتمعنا',
      joinSubtitle: 'كن جزءًا من ثورة إدارة الحجوزات. انضم إلى آلاف المستخدمين الراضين.',
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