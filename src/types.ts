export interface ProjectItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Branding' | 'Packaging' | 'UI/UX Design' | 'Typography' | 'Print & Editorial' | 'Visual Identity';
  subtitle: string;
  context: string;
  year: string;
  client: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  description: string;
  tools: string[];
  deliverables: string[];
  colorPalette?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  featuredImage: string;
  galleryImages: {
    title: string;
    description: string;
    type: 'ui' | 'code' | 'dashboard' | 'mobile' | 'architecture' | 'mockup' | 'branding' | 'packaging';
    imageUrl?: string;
    aspectRatio?: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'branding' | 'packaging' | 'design' | 'typography' | 'tools' | 'digital';
  level: number;
  iconType: string;
  description: string;
  experienceYears?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  field: string;
  details?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
  accentColor?: string;
  current?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  rating: number;
  quote: string;
  project: string;
}
