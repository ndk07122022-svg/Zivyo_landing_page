
export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface SolutionCardProps {
  title: string;
  governs: string[];
  howItWorks: string[];
  outcome: string;
  imageAlt: string;
  ctaText: string;
}

export interface ResourceCard {
  title: string;
  category: string;
  description: string;
}
