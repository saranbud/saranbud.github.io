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
    title: "Specialty Coffee Pricing Analysis",
    description:
      "Analyzed 4,400+ orders across a coffee company's full product catalog from 2023-2025 on Databricks. Built an automated pipeline joining 5 source tables to compute revenue growth, gross margins, regional pricing power, and product profitability rankings using SQL and Lakeview dashboards.",
    tech: ["Databricks", "SQL", "Unity Catalog", "Lakeview Dashboards"],
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/pricing-analysis-da-viz",
    category: "finance",
  },
  {
    title: "Nutrition & Obesity Analysis - US States",
    description:
      "Analyzed 110K+ rows of CDC BRFSS data across 55 states/territories over 14 years on Databricks. Built a pipeline exploring obesity trends, demographic breakdowns by sex/age/income/education/race, and socioeconomic correlations using Spark SQL. Delivered a 5-panel Lakeview dashboard mapping the American obesity crisis.",
    tech: ["Databricks", "Spark SQL", "Unity Catalog", "Lakeview Dashboards", "CDC BRFSS"],
    gradient: "from-red-500/20 to-rose-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/nutriton-and-obesity-analysis-US-States.git",
    category: "healthcare",
  },
];
