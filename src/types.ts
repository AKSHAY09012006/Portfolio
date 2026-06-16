export interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  report?: string;
  workflow?: string;
  github?: string;
  image: string;
}

export interface Achievement {
  title: string;
  desc?: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  where: string;
  notes?: string;
}

export interface EducationItem {
  period: string;
  role: string;
  where: string;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  items: { name: string; level: number }[];
}
