export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  description: string;
  skillsTitle: string;
  mainSkills: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}
