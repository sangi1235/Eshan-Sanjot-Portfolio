import { EducationItem, ExperienceItem, ProjectItem, SkillItem, ServiceItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Eshan Sanjot',
  formalName: 'Eshan Sanjot',
  brandName: 'ES Creative Studio',
  monogram: 'ES',
  title: 'Graphic Designer & Creative Designer',
  secondaryTitle: 'Logo Design, Branding & Social Media Graphics',
  studentId: '471554',
  courseCampus: 'Bano Qabil Program — HOL Foundation Campus',
  instructor: 'Sir Shujaat Ejaz',
  batchTiming: '4:00 PM – 6:00 PM',
  roles: [
    'Graphic Designer',
    'Creative Designer',
    'Logo & Brand Identity Designer',
    'Poster & Flyer Designer',
    'Social Media Graphic Designer',
    'Meta Ads & Digital Marketer',
  ],
  status: 'Available for Freelance Projects & Entry-Level Opportunities',
  experienceDuration: 'Certified Graduate',
  completedProjects: '10+ Deliverables',
  satisfiedClients: '100%',
  location: 'Nayabad Lyari, Karachi South, Pakistan',
  address: 'Shah Abdul Latif Bhittai Road, Nayabad Lyari, Karachi South, Pakistan',
  phone: '+92 336 3179298',
  phoneRaw: '0336-3179298',
  whatsappUrl: 'https://wa.me/923363179298',
  email: 'Eshansanjot@gmail.com',
  linkedin: 'Eshansanjot',
  linkedinUrl: 'https://linkedin.com/in/eshansanjot',
  portfolioUrl: 'https://bit.ly/3Rh9UB1',
  portraitImage: '/src/assets/images/eshan_portrait_real_1786963996968.jpg',
  brandBannerImage: '/src/assets/images/eshan_brand_banner_1786963168997.jpg',
  objective:
    'Hardworking and reliable individual seeking an entry-level opportunity. Quick to learn, committed to punctuality and teamwork, with strong skills in Graphic Design and Digital Marketing.',
  bio:
    "Hi, I'm Eshan Sanjot, a Graphic Designer from Karachi, Pakistan. I completed my Graphic Design certificate from Bano Qabil (HOL Foundation Campus), with a strong eye for detail and a focus on turning ideas into clean, visually appealing designs.",
  aboutStory: [
    "Hi, I'm Eshan Sanjot, a dedicated Graphic Designer from Karachi, Pakistan. I completed my Graphic Design certificate from the Bano Qabil Program at HOL Foundation Campus under the guidance of Sir Shujaat Ejaz.",
    "With a strong eye for detail, I specialize in Adobe Photoshop, Adobe Illustrator, and Canva to design bespoke logos, branding materials, social media graphics, invoices, business stationery, and promotional posters.",
    "Additionally, I have completed coursework in Digital Marketing (Meta Ads fundamentals), mastering campaign setup, audience targeting, and high-conversion ad creative production."
  ],
  stats: [
    { label: 'Graphic Design', value: 'Canva 90%', suffix: 'Photoshop & Illustrator 50%' },
    { label: 'Bano Qabil', value: 'Certified', suffix: 'Student ID: 471554' },
    { label: 'Client Focus', value: '100%', suffix: 'Reliable & Punctual' },
    { label: 'Meta Ads', value: 'Certified', suffix: 'Campaigns & Targeting' },
  ],
  educationSummary: [
    {
      degree: 'First Year in Process (Humanities Arts group)',
      institute: 'S.M Arts and Commerce College',
      period: '2025 – 2026 (1st Year)',
    },
    {
      degree: 'Matriculation (Science group / Bio Science)',
      institute: 'Iranian Technical Govt Sec School',
      period: '2022 – 2025',
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'logo-brand-identity',
    title: 'Logo Design & Brand Identity',
    tagline: 'Custom brand logos, monograms, color schemes & complete visual branding',
    icon: 'palette',
    popular: true,
    description:
      'Designing distinctive brand logos and complete visual identity packages, from initial sketches to print-ready and digital vector deliverables.',
    deliverables: [
      'Bespoke Vector Logo & Monogram Design',
      'Brand Color Palette & Font Pairing Guidelines',
      'High-Resolution PNG, JPG, SVG & AI Source Files',
      'Favicon & Sub-Mark Variations',
    ],
  },
  {
    id: 'stationery-print',
    title: 'Business Stationery & Print Collateral',
    tagline: 'Visiting cards, invoice templates, official letterheads & receipt vouchers',
    icon: 'layout',
    popular: true,
    description:
      'Crafting professional print materials that build client trust, including dual-sided visiting cards, customized billing invoices, and formal corporate letterheads.',
    deliverables: [
      'Double-Sided Business Visiting Cards with Measurement Fields',
      'Official Corporate Letterheads with Contact Badges',
      'Itemized Billing Invoice & Receipt Templates',
      'Print-Ready 300 DPI CMYK PDFs with Bleed Margins',
    ],
  },
  {
    id: 'posters-flyers',
    title: 'Poster, Banner & Flyer Design',
    tagline: 'Storefront opening announcements, promotional posters & event flyers',
    icon: 'package',
    popular: true,
    description:
      'Eye-catching promotional posters and flyers designed to announce grand openings, special sales, product launches, and seasonal discounts.',
    deliverables: [
      'Store Opening Day & Launch Posters (Vintage & Modern)',
      'Promotional Sales Flyers & Product Feature Sheets',
      'Large Format Roll-Up Banners & Backdrop Designs',
      'Social Media Formatted Flyer Variations',
    ],
  },
  {
    id: 'social-media-design',
    title: 'Social Media Graphics & Ad Creatives',
    tagline: 'Instagram, Facebook & WhatsApp promo posts, story templates & banners',
    icon: 'palette',
    popular: false,
    description:
      'Custom visual creatives tailored for social platforms to drive customer engagement, click-through rates, and consistent online branding.',
    deliverables: [
      'Facebook & Instagram Service Showcase Posts',
      'Story Templates & Highlight Covers',
      'WhatsApp Business Catalog Banners',
      'Product & Service Announcement Carousels',
    ],
  },
  {
    id: 'meta-ads',
    title: 'Digital Marketing & Meta Ads',
    tagline: 'Meta Ads campaign setup, audience targeting & ad creative optimization',
    icon: 'layout',
    popular: false,
    description:
      'Strategic digital marketing services utilizing Meta Ads fundamentals to help small businesses reach local target customers effectively.',
    deliverables: [
      'Facebook & Instagram Ad Campaign Setup',
      'Audience Demographic & Interest Targeting',
      'High-CTR Ad Copy & Visual Creative Pairing',
      'Campaign Performance Monitoring & Optimization',
    ],
  },
  {
    id: 'office-presentation',
    title: 'Computer Skills & Presentations',
    tagline: 'MS Office documentation, slide decks & Canva design templates',
    icon: 'package',
    popular: false,
    description:
      'Professional document formatting, MS Word and Excel templates, and engaging MS PowerPoint / Canva presentation slide decks.',
    deliverables: [
      'Custom PowerPoint & Canva Presentation Decks',
      'MS Word Official Forms & Structured Documents',
      'Excel Calculation Sheets & Invoicing Spreadsheets',
      'PDF Document Packaging & Digital Distribution',
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Primary Graphic Design Tools
  {
    name: 'Canva',
    category: 'tools',
    level: 90,
    iconType: 'layout',
    description: 'Rapid social media templates, posters, promotional banners, flyers, and branding kits.',
    experienceYears: 'Coursework & Practice',
  },
  {
    name: 'Adobe Photoshop',
    category: 'branding',
    level: 50,
    iconType: 'photoshop',
    description: 'Photo retouching, image compositing, mockups, social graphics, and layout adjustments.',
    experienceYears: 'Coursework & Practice',
  },
  {
    name: 'Adobe Illustrator',
    category: 'branding',
    level: 50,
    iconType: 'illustrator',
    description: 'Vector logo design, custom badges, monograms, typography, and scalable vector art.',
    experienceYears: 'Coursework & Practice',
  },
  {
    name: 'Logo & Monogram Design',
    category: 'branding',
    level: 85,
    iconType: 'illustrator',
    description: 'Vintage badges, heritage emblems (like M.K Tailors), and modern ES monogram logos.',
    experienceYears: 'Core Discipline',
  },
  {
    name: 'Branding & Identity Packages',
    category: 'branding',
    level: 85,
    iconType: 'layout',
    description: 'Complete brand kits including visiting cards, letterheads, invoice templates, and logos.',
    experienceYears: 'Core Discipline',
  },
  {
    name: 'Poster & Flyer Design',
    category: 'packaging',
    level: 85,
    iconType: 'shield',
    description: 'Storefront opening announcements, service list flyers, and promotional print designs.',
    experienceYears: 'Core Discipline',
  },
  {
    name: 'Social Media Graphics',
    category: 'design',
    level: 88,
    iconType: 'palette',
    description: 'Custom Instagram, Facebook, and WhatsApp marketing banners and story layouts.',
    experienceYears: 'Core Discipline',
  },
  {
    name: 'Typography & Layout',
    category: 'typography',
    level: 82,
    iconType: 'illustrator',
    description: 'Font pairing, kerning, visual hierarchy, and bilingual English & Urdu alignments.',
    experienceYears: 'Core Discipline',
  },
  {
    name: 'Digital Marketing — Meta Ads',
    category: 'digital',
    level: 80,
    iconType: 'layout',
    description: 'Meta Ads campaign setup, audience targeting, budget allocation, and ad creation.',
    experienceYears: '2 Months Coursework',
  },
  {
    name: 'Computer Skills (MS Office)',
    category: 'tools',
    level: 88,
    iconType: 'shield',
    description: 'MS Word, Excel invoicing, PowerPoint slide presentations, and document workflows.',
    experienceYears: 'Academic & Coursework',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'mk-tailors-brand-package',
    title: 'M.K Tailors — Complete Brand Identity Package',
    category: 'Branding',
    subtitle: "Complete Visual Identity System, Heritage Emblem, Visiting Cards, Invoices & Opening Campaign",
    context: 'Final Course Project — Bano Qabil Program (HOL Foundation Campus, 2025)',
    year: '2025',
    client: 'Master Kishan (M.K Tailors)',
    liveUrl: 'https://bit.ly/3Rh9UB1',
    imageUrl: '/src/assets/images/branding_mockup_1786963185192.jpg',
    description:
      "Designed a complete branding and marketing package for a men's tailoring and stitching business ('Master Kishan — M.K Tailors', Shop#23, Mehran Centre, Shah Abdul Latif Bhittai Road, Moosa Lane, Karachi). The comprehensive project includes the heritage sewing machine vector logo, dual-sided visiting cards with client measurement fields, official customer order confirmation letterheads, itemized custom invoice billing sheets, vintage Opening Day announcement posters, and promotional social media ad graphics.",
    tools: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'MS Office', 'Bano Qabil Design Framework'],
    deliverables: [
      'Heritage Circular Sewing Machine Vector Logo (Estd 2002)',
      "Double-Sided Gents Specialist Visiting Card with Customer Measurement Grid",
      'Official Customer Order Confirmation Letterhead (27 October 2025)',
      'Itemized Custom Invoice Sheet (Invoice No. 471554)',
      'Vintage Opening Day Store Announcement Poster (Monday 30 October)',
      'Social Media Service Catalog & Marketing Ad Creatives',
      'Complete Presentation Slide Deck for Course Evaluation',
    ],
    colorPalette: ['#254B4B', '#D98A36', '#FBF9F5', '#111111'],
    highlights: [
      'Submitted as the Final Graphic Design Project for Bano Qabil under instructor Sir Shujaat Ejaz (Student ID: 471554)',
      'Complete practical branding package covering identity, stationery, invoicing, and launch marketing',
      'Dual-purpose visiting card featuring front marketing layout and reverse customer measurement ledger',
    ],
    metrics: [
      { label: 'Deliverables', value: '7 Core Assets' },
      { label: 'Course Grade', value: 'Certified' },
      { label: 'Student ID', value: '471554' },
      { label: 'Client Feedback', value: '100% Approved' },
    ],
    featuredImage: 'mk-tailors-hero',
    galleryImages: [
      {
        title: 'M.K Tailors Heritage Sewing Machine Logo',
        description: 'Circular vector emblem with vintage sewing machine illustration, Estd 2002, and Kishan Master banner.',
        type: 'branding',
      },
      {
        title: 'Gents Specialist Visiting Card (Front & Back)',
        description: 'Front showing traditional menswear models and contact info; Back featuring customer measurement & advance payment receipt grid.',
        type: 'mockup',
      },
      {
        title: 'Official Confirmation Letterhead & Invoicing',
        description: 'Formal suit order confirmation letterhead and itemized billing invoice (Invoice No. 471554).',
        type: 'ui',
      },
      {
        title: 'Opening Day Announcement Poster',
        description: 'Vintage stitched border opening day poster with thimble and needle motifs (Monday 30 October).',
        type: 'packaging',
      },
      {
        title: 'Social Media & Promotional Launch Graphics',
        description: 'Service showcase flyers featuring custom tailoring, bridal & wedding attire, and salwar kameez alterations.',
        type: 'dashboard',
      },
    ],
  },
  {
    id: 'eshan-portfolio-brand',
    title: 'Eshan Sanjot — Personal Brand Identity & Portfolio 2025',
    category: 'Graphic Design',
    subtitle: 'Signature ES Luxury Serif Monogram, Portfolio Presentation Deck & Social Brand Assets',
    context: 'Official Personal Brand Identity System (2025)',
    year: '2025',
    client: 'Eshan Sanjot Creative Designer',
    liveUrl: 'https://bit.ly/3Rh9UB1',
    imageUrl: '/src/assets/images/eshan_brand_banner_1786963168997.jpg',
    description:
      'The signature visual identity system designed for Eshan Sanjot. Features an interlocking classical serif ligature combining "E" and "S" on high-contrast textured background, complete slide deck visual layout, curriculum vitae typography, and social media branding banners.',
    tools: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Typography', 'MS PowerPoint'],
    deliverables: [
      'Interlocking ES Luxury Serif Ligature Monogram Vector',
      '8-Slide Graphic Design Portfolio Presentation Deck',
      'Official Curriculum Vitae & Resume Layout',
      'Social Media Header Banners & Contact Signatures',
    ],
    colorPalette: ['#C59B4E', '#ECE8DC', '#0F172A', '#1E293B'],
    highlights: [
      'Clean optical balance between classic serif craftsmanship and modern typography',
      'Featured across the official Portfolio 2025 slide deck and online profiles',
      'Built to communicate professionalism, reliability, and creative design skills',
    ],
    metrics: [
      { label: 'Deck Pages', value: '8 Slides' },
      { label: 'Identity Assets', value: 'Complete Kit' },
      { label: 'Portfolio Year', value: '2025' },
      { label: 'Satisfaction', value: '100%' },
    ],
    featuredImage: 'es-brand-hero',
    galleryImages: [
      {
        title: 'ES Luxury Monogram Emblem & Typography',
        description: 'Classic serif ligature representing Eshan Sanjot Graphic Designer.',
        type: 'branding',
        imageUrl: '/src/assets/images/eshan_brand_banner_1786963168997.jpg',
      },
    ],
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    title: 'Graphic Design Coursework & Practical Projects',
    company: 'Bano Qabil Program — HOL Foundation Campus',
    duration: '3 Months (Certified)',
    location: 'Karachi, Pakistan',
    type: 'Intensive Coursework & Practical Studio',
    description:
      'Completed hands-on practical projects in logo design, complete branding identity packages, business stationery, invoices, and social media promotional graphics under instructor Sir Shujaat Ejaz.',
    achievements: [
      'Designed the complete M.K Tailors Brand Identity Package as the final evaluation project (Student ID: 471554).',
      'Mastered design tools including Canva, Adobe Photoshop, Adobe Illustrator, and MS Office.',
      'Created print-ready visiting cards, invoices, letterheads, and grand opening announcement posters.',
      'Developed the official Eshan Sanjot 2025 Graphic Designer portfolio presentation deck.',
    ],
    techStack: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Print Stationery', 'Social Media Graphics'],
    accentColor: '#C59B4E',
    current: true,
  },
  {
    title: 'Digital Marketing Coursework — Meta Ads',
    company: 'Specialized Digital Training',
    duration: '2 Months (Certified)',
    location: 'Karachi, Pakistan',
    type: 'Coursework & Practical Training',
    description:
      'Learned Meta Ads fundamentals including comprehensive ad campaign setup, demographic and interest audience targeting, budget optimization, and high-converting ad creative design.',
    achievements: [
      'Mastered Facebook & Instagram Ads Manager campaign structures and objective selection.',
      'Practiced audience research, custom targeting, and demographic alignment for local businesses.',
      'Designed high-CTR visual ad creatives and paired them with persuasive marketing copy.',
    ],
    techStack: ['Meta Ads Manager', 'Facebook Marketing', 'Instagram Ads', 'Audience Targeting', 'Ad Creatives'],
    accentColor: '#38BDF8',
    current: false,
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'First Year in Process (Humanities Arts group)',
    institution: 'S.M Arts and Commerce College',
    period: '2025 – 2026 (1st Year)',
    status: 'In Process',
    field: 'Humanities & Arts Group',
    details: 'Currently pursuing intermediate studies in humanities and arts, developing strong critical thinking, communication, and visual design skills.',
  },
  {
    degree: 'Matriculation (Science group / Bio Science)',
    institution: 'Iranian Technical Govt Sec School',
    period: '2022 – 2025',
    status: 'Completed',
    field: 'Science Group (Bio Science)',
    details: 'Completed secondary school certificate with foundational coursework in science, mathematics, and analytical reasoning.',
  },
  {
    degree: 'Graphic Designing Course (3 Months)',
    institution: 'Bano Qabil Program — HOL Foundation Campus',
    period: '2025 (Student ID: 471554)',
    status: 'Completed with Final Project',
    field: 'Graphic Design, Branding & Social Media Graphics',
    details: 'Under Instructor Sir Shujaat Ejaz (Timing: 4:00 PM – 6:00 PM). Complete hands-on training in logo design, brand packages, business stationery, invoices, posters, and presentation decks.',
  },
  {
    degree: 'Digital Marketing Course (2 Months)',
    institution: 'Specialized Coursework',
    period: '2025',
    status: 'Completed',
    field: 'Meta Ads Fundamentals & Campaign Management',
    details: 'Comprehensive coursework in Facebook & Instagram Ads, targeting, campaign management, and digital ad strategy.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Master Kishan',
    role: 'Owner & Head Tailor',
    company: 'M.K Tailors (Moosa Lane, Karachi)',
    country: 'Pakistan',
    rating: 5,
    quote:
      'Eshan Sanjot designed an outstanding complete brand package for M.K Tailors. The heritage sewing machine logo, measurement visiting cards, official letterhead, and opening day posters are very professional and exactly what my shop needed!',
    project: 'M.K Tailors Complete Brand Identity Package',
  },
  {
    id: 'test-2',
    name: 'Sir Shujaat Ejaz',
    role: 'Graphic Design Instructor',
    company: 'Bano Qabil Program (HOL Foundation Campus)',
    country: 'Pakistan',
    rating: 5,
    quote:
      'Eshan (Student ID: 471554) demonstrated great dedication, punctuality, and creative aptitude throughout the 3-month graphic design program. His final project on M.K Tailors was well-researched, cleanly executed, and beautifully presented.',
    project: 'Bano Qabil Graphic Design Final Project Evaluation',
  },
];
