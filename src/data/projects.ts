export type ProjectCategory = "finance" | "technology" | "healthcare";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  url: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "King County House Sales Dashboard",
    description:
      "Interactive Tableau dashboard analyzing residential property sales in King County, WA. Explores price trends, geographic distribution, and how features like bedrooms, bathrooms, view, and condition impact sale prices.",
    tech: ["Tableau", "Time-Series", "Geospatial", "Real Estate Analytics"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Home",
    url: "https://public.tableau.com/views/HouseSales-Dashboard-SARANYASB/Dashboard1",
    category: "finance",
  },
  {
    title: "British Airways Review Dashboard",
    description:
      "Tableau dashboard analyzing customer reviews and service ratings for British Airways. Tracks satisfaction trends, service gaps, and performance variations across regions, traveler types, seat classes, and aircraft models.",
    tech: ["Tableau", "Customer Analytics", "Time-Series", "Geospatial"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Plane",
    url: "https://public.tableau.com/views/BritishAirwaysReview-SaranyaSB/BritishAirwaysReview",
    category: "technology",
  },
  {
    title: "Gentech Proposal Optimization",
    description:
      "Applied Lean Six Sigma DMAIC methodology to reduce proposal creation cycle time at a $60B company. Identified bottlenecks, delivered data-driven solutions targeting a 15% cycle time reduction.",
    tech: ["Python", "Lean Six Sigma", "Statistical Modeling", "FMEA"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Workflow",
    url: "https://github.com/saranbud/Gentech-A-Data-Driven-Approach-to-Proposal-Optimization.git",
    category: "technology",
  },
  {
    title: "Marketing Campaign Analysis",
    description:
      "Built a Random Forest model to predict customer purchase likelihood for a food company's direct marketing campaign. Identified key drivers: income, recency, loyalty, and purchase channels with 72% accuracy.",
    tech: ["Python", "Random Forest", "ANOVA", "Chi-Square"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/Food_Data_Analysis.git",
    category: "finance",
  },
  {
    title: "CH(AI)NED - AI Supplier Sourcing",
    description:
      "AI-driven platform transforming supplier sourcing using machine learning, NLP, and real-time risk scoring. Reduces sourcing time and improves match quality with ESG compliance visibility.",
    tech: ["Machine Learning", "NLP", "Python", "Risk Scoring"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Globe",
    url: "https://github.com/saranbud/SUB-ZERO-SDP-Analysis.git",
    category: "technology",
  },
];