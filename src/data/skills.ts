export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "SAP Architecture & Analytics",
    icon: "BarChart3",
    skills: [
      { name: "SAP S/4HANA", level: 92 },
      { name: "SAP Analytics Cloud (SAC)", level: 90 },
      { name: "SAP BDC", level: 85 },
      { name: "Universal Journal (ACDOCA)", level: 88 },
      { name: "Cost/Profit Center Hierarchies", level: 82 },
      { name: "SAP BTP", level: 75 },
    ],
  },
  {
    category: "Data Engineering & Cloud",
    icon: "Server",
    skills: [
      { name: "SQL (PostgreSQL, Snowflake)", level: 92 },
      { name: "Python", level: 88 },
      { name: "PySpark", level: 85 },
      { name: "Databricks Delta Lake", level: 82 },
      { name: "AWS (Glue, S3, Athena)", level: 78 },
      { name: "Medallion Architecture", level: 80 },
    ],
  },
  {
    category: "Financial & Operational Planning",
    icon: "Database",
    skills: [
      { name: "Driver-Based Budgeting", level: 90 },
      { name: "Rolling Cash Flow Forecasting", level: 85 },
      { name: "Variance Mitigation", level: 88 },
      { name: "Operational KPI Scorecards", level: 82 },
      { name: "Record-to-Report (R2R)", level: 80 },
      { name: "CI/CD (GitHub Actions, Docker)", level: 75 },
    ],
  },
];
