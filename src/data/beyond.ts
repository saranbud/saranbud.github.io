export interface BeyondItem {
  title: string;
  description: string;
  gradient: string;
  icon: string;
  link?: string;
}

export const beyondItems: BeyondItem[] = [
  {
    title: "Community Building",
    description:
      "Built and grew a community from zero. [Add your community name, size, and impact here.]",
    gradient: "from-pink-500/20 to-rose-600/20",
    icon: "Users",
  },
  {
    title: "Coaching & Mentorship",
    description:
      "Completed coaching sessions and earned recognition. [Add your coaching platform, session count, and achievements here.]",
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "HeartHandshake",
  },
  {
    title: "Volunteering",
    description:
      "Volunteer work and cultural representation. [Add your volunteering roles and impact here.]",
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "HeartHandshake",
  },
  {
    title: "Travel & Curiosity",
    description:
      "Exploring new places and staying curious about the world beyond the screen. [Add your travel experiences or interests here.]",
    gradient: "from-blue-500/20 to-cyan-600/20",
    icon: "Compass",
  },
];
