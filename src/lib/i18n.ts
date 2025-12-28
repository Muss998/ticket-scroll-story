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
      insideApp: 'Inside the app',
      screenshotsCard1Title: 'Find your best places',
      screenshotsCard1Description: 'Search filters and venues to discover spots tailored to your preferences. New venue types are coming soon.',
      screenshotsCard2Title: 'View Place Details',
      screenshotsCard2Description: 'See photos, video, location, and more details to make informed decisions before you reserve.',
      screenshotsCard3Title: 'Reviews & Preferences',
      screenshotsCard3Description: 'Read community reviews, share your own feedback, and keep track of venue preferences.',
      screenshotsCard4Title: 'Reservation Completion',
      screenshotsCard4Description: 'Enter reservation details, apply coupons, and confirm your booking in just a few taps.',
      screenshotsCard5Title: '24/7 Support',
      screenshotsCard5Description: 'Reach our support team any time or get instant answers from the AI assistant when you need help fast.',
      
      // Download Section
      downloadTitle: 'Get Started Today',
      downloadSubtitle: 'Download TekaTicket and revolutionize how you handle reservations',
      availableOn: 'Available on',
      downloadIOSHeading: 'iOS App',
      downloadIOSButton: 'Download for iPhone',
      downloadAndroidHeading: 'Android App',
      downloadAndroidButton: 'Download for Android',
      downloadQRHeading: 'Scan QR Code',
      downloadQRInstruction: 'Scan to download',
      
      // Contact Section
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Have questions? We\'re here to help.',
      
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactAddress: 'Address',
      
      contactEmailValue: 'hello@tekaticket.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'Miami, FL, USA',
      contactInfoHeading: 'Get in Touch',
      contactFollowHeading: 'Follow Us',
      contactFormHeading: 'Send us a Message',
      contactFormNameLabel: 'Name',
      contactFormNamePlaceholder: 'Your name',
      contactFormEmailLabel: 'Email',
      contactFormEmailPlaceholder: 'your.email@example.com',
      contactFormSubjectLabel: 'Subject',
      contactFormSubjectPlaceholder: 'How can we help?',
      contactFormMessageLabel: 'Message',
      contactFormMessagePlaceholder: 'Tell us more about your inquiry...',
      contactFormButton: 'Send Message',
      contactSocialTwitter: 'Twitter',
      contactSocialLinkedIn: 'LinkedIn',
      contactSocialInstagram: 'Instagram',
      
      // Join Section
      joinTitle: 'Why Choose Us',
      joinSubtitle: 'Be part of the reservation revolution. Join Us Now.',
      joinButton: 'Join Now',
      joinReasonFastTitle: 'Fast reservations',
      joinReasonFastDescription: 'No back-and-forth',
      joinReasonRemindersTitle: 'Smart reminders',
      joinReasonRemindersDescription: 'Reduce no-shows',
      joinReasonUnifiedTitle: 'All in one place',
      joinReasonUnifiedDescription: 'Bookings, history, support',
      joinSatisfaction: 'Your satisfaction is our priority',
      joinNoCreditCard: 'Join our growing community of users who trust TekaTicket for their reservation needs.',
      
      // Footer
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      footerDescription: 'The future of reservation management. Make booking seamless, efficient, and beautiful.',
      footerQuickLinks: 'Quick Links',
      footerLegal: 'Legal',
      footerCookiePolicy: 'Cookie Policy',
      footerSupport: 'Support',
      footerMadeWith: 'Made with',
      footerForReservations: 'for better reservations',
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
      insideApp: 'داخل التطبيق',
      screenshotsCard1Title: 'اكتشف أفضل الأماكن',
      screenshotsCard1Description: 'استخدم الفلاتر واستكشف الأماكن لتجد الوجهات الأنسب لتفضيلاتك. أنواع جديدة من الوجهات قادمة قريبًا.',
      screenshotsCard2Title: 'عرض تفاصيل المكان',
      screenshotsCard2Description: 'اطّلع على الصور والفيديو والموقع والمزيد من التفاصيل لتتخذ قرار الحجز بثقة.',
      screenshotsCard3Title: 'المراجعات والتفضيلات',
      screenshotsCard3Description: 'اقرأ مراجعات المجتمع، وشارك رأيك، واحتفظ بتفضيلاتك الخاصة بالأماكن.',
      screenshotsCard4Title: 'إكمال الحجز',
      screenshotsCard4Description: 'أدخل تفاصيل الحجز والقسائم ثم أكد حجزك في بضع نقرات فقط.',
      screenshotsCard5Title: 'دعم على مدار الساعة',
      screenshotsCard5Description: 'تواصل مع فريق الدعم في أي وقت أو احصل على إجابات فورية من المساعد الذكي عندما تحتاج إلى مساعدة.',
      
      // Download Section
      downloadTitle: 'ابدأ اليوم',
      downloadSubtitle: 'حمّل TekaTicket وغيّر طريقتك في إدارة الحجوزات',
      availableOn: 'متوفر على',
      downloadIOSHeading: 'تطبيق iOS',
      downloadIOSButton: 'حمّل لهاتف آيفون',
      downloadAndroidHeading: 'تطبيق أندرويد',
      downloadAndroidButton: 'حمّل لهواتف أندرويد',
      downloadQRHeading: 'امسح رمز QR',
      downloadQRInstruction: 'امسح للتنزيل',
      
      // Contact Section
      contactTitle: 'تواصل معنا',
      contactSubtitle: 'هل لديك أسئلة؟ نحن هنا للمساعدة.',
      
      contactEmail: 'البريد الإلكتروني',
      contactPhone: 'الهاتف',
      contactAddress: 'العنوان',
      
      contactEmailValue: 'hello@tekaticket.com',
      contactPhoneValue: '+1 (555) 123-4567',
      contactAddressValue: 'ميامي، فلوريدا، الولايات المتحدة الأمريكية',
      contactInfoHeading: 'تواصل معنا',
      contactFollowHeading: 'تابعنا',
      contactFormHeading: 'أرسل لنا رسالة',
      contactFormNameLabel: 'الاسم',
      contactFormNamePlaceholder: 'اكتب اسمك',
      contactFormEmailLabel: 'البريد الإلكتروني',
      contactFormEmailPlaceholder: 'بريدك الإلكتروني',
      contactFormSubjectLabel: 'الموضوع',
      contactFormSubjectPlaceholder: 'كيف يمكننا مساعدتك؟',
      contactFormMessageLabel: 'الرسالة',
      contactFormMessagePlaceholder: 'أخبرنا المزيد عن استفسارك...',
      contactFormButton: 'إرسال الرسالة',
      contactSocialTwitter: 'تويتر',
      contactSocialLinkedIn: 'لينكدإن',
      contactSocialInstagram: 'إنستغرام',
      
      // Join Section
      joinTitle: 'لماذا تختارنا؟',
      joinSubtitle: 'كن جزءًا من ثورة الحجز المسبق. انضم إلينا الآن.',
      joinButton: 'انضم الآن',
      joinReasonFastTitle: 'حجوزات سريعة',
      joinReasonFastDescription: 'بدون ذهاب وإياب',
      joinReasonRemindersTitle: 'تذكيرات ذكية',
      joinReasonRemindersDescription: 'لتقليل حالات عدم الحضور',
      joinReasonUnifiedTitle: 'كل شيء في مكان واحد',
      joinReasonUnifiedDescription: 'الحجوزات والسجل والدعم',
      joinSatisfaction: 'رضاؤكم هو أولويتنا',
      joinNoCreditCard: 'انضم إلى مجتمعنا المتنامي من المستخدمين الذين يثقون في TekaTicket لتلبية احتياجاتهم في الحجز.',
      
      // Footer
      allRightsReserved: 'جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      footerDescription: 'مستقبل إدارة الحجوزات. اجعل الحجز سلسًا وفعالًا وأنيقًا.',
      footerQuickLinks: 'روابط سريعة',
      footerLegal: 'سياسات',
      footerCookiePolicy: 'سياسة ملفات تعريف الارتباط',
      footerSupport: 'الدعم',
      footerMadeWith: 'صُنع بـ',
      footerForReservations: 'لتحسين تجربة الحجوزات',
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