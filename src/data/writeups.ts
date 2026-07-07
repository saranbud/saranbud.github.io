export interface Writeup {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  url: string;
}

export const writeups: Writeup[] = [
  {
    title: "Gentech Proposal Optimization",
    description:
      "Applied Lean Six Sigma DMAIC methodology to reduce proposal creation cycle time at a $60B company. Identified bottlenecks, delivered data-driven solutions targeting a 15% cycle time reduction.",
    tech: ["Python", "Lean Six Sigma", "Statistical Modeling", "FMEA"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Workflow",
    url: "https://github.com/saranbud/Gentech-A-Data-Driven-Approach-to-Proposal-Optimization.git",
  },
  {
    title: "Marketing Campaign Analysis",
    description:
      "Built a Random Forest model to predict customer purchase likelihood for a food company's direct marketing campaign. Identified key drivers: income, recency, loyalty, and purchase channels with 72% accuracy.",
    tech: ["Python", "Random Forest", "ANOVA", "Chi-Square"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/Food_Data_Analysis.git",
  },
  {
    title: "CH(AI)NED - AI Supplier Sourcing",
    description:
      "AI-driven platform transforming supplier sourcing using machine learning, NLP, and real-time risk scoring. Reduces sourcing time and improves match quality with ESG compliance visibility.",
    tech: ["Machine Learning", "NLP", "Python", "Risk Scoring"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Globe",
    url: "https://github.com/saranbud/SUB-ZERO-SDP-Analysis.git",
  },
];
