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
    title: "Claims Risk Analytics for Life Sciences",
    description:
      "Built an end-to-end healthcare claims analytics pipeline using Python, SQL, and Docker. Developed a 5-stage pipeline with automated data quality checks (missing values, duplicates, outliers), SQL-driven analytics for hospital KPI tracking, patient risk stratification, and diagnosis cost analysis. Containerized with Docker and automated via GitHub Actions CI/CD, producing 5 structured outputs per execution.",
    tech: ["Python", "SQL", "SQLite", "Docker", "GitHub Actions"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    icon: "Workflow",
    url: "https://github.com/saranbud/claims-risk-analytics-life-sciences",
    category: "healthcare",
  },
  {
    title: "Healthcare Claims Pipeline - Medallion Architecture",
    description:
      "Engineered a Bronze-to-Silver-to-Gold medallion pipeline on AWS using Glue and PySpark, processing 11,210 rows across 4 tables. Transformed raw CSV into enriched Parquet and 6 Gold KPI tables identifying $88.9M in cancer costs, 229 fraud flags, and 646 risk-stratified patients. Cataloged 10 tables in AWS Glue Data Catalog with Athena SQL querying.",
    tech: ["AWS Glue", "PySpark", "SQL", "Athena", "S3", "Unity Catalog"],
    gradient: "from-teal-500/20 to-cyan-600/20",
    icon: "Globe",
    url: "https://github.com/saranbud/healthcare-claims-pipeline",
    category: "healthcare",
  },
  {
    title: "Tinnitus Patient Segmentation",
    description:
      "Applied K-Means clustering on a 10,000-patient synthetic tinnitus cohort to identify 4 clinically meaningful patient subgroups on Databricks. Built an end-to-end pipeline with feature engineering, stability validation (ARI 0.976), and a live AI/BI dashboard mapping segment profiles and treatment engagement strategies.",
    tech: ["Databricks", "PySpark", "scikit-learn", "Unity Catalog", "AI/BI Dashboards"],
    gradient: "from-red-500/20 to-purple-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/Customer_Segmentation_Tinnitus-Patients",
    category: "healthcare",
  },
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
      "Analyzed 110K+ rows of CDC BRFSS data across 55 states/territories over 14 years on Databricks. Built a pipeline exploring obesity trends, demographic breakdowns, and socioeconomic correlations using Spark SQL. Delivered a 5-panel Lakeview dashboard mapping the American obesity crisis.",
    tech: ["Databricks", "Spark SQL", "Unity Catalog", "Lakeview Dashboards", "CDC BRFSS"],
    gradient: "from-red-500/20 to-rose-600/20",
    icon: "TrendingUp",
    url: "https://github.com/saranbud/nutriton-and-obesity-analysis-US-States.git",
    category: "healthcare",
  },
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
];
