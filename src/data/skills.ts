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
    category: "BI & Visualization",
    icon: "BarChart3",
    skills: [
      { name: "Tableau", level: 88 },
      { name: "Power BI", level: 85 },
      { name: "SAP Analytics Cloud", level: 82 },
      { name: "Looker", level: 70 },
      { name: "Google Analytics (GA4)", level: 75 },
    ],
  },
  {
    category: "Programming & Data",
    icon: "Server",
    skills: [
      { name: "SQL (PostgreSQL, Snowflake)", level: 92 },
      { name: "Python (Pandas, NumPy)", level: 88 },
      { name: "PySpark", level: 82 },
      { name: "Databricks", level: 80 },
      { name: "R", level: 65 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "Database",
    skills: [
      { name: "AWS (S3, Glue, Athena)", level: 78 },
      { name: "SAP S/4HANA", level: 80 },
      { name: "HubSpot CRM", level: 75 },
      { name: "Excel / Google Sheets", level: 90 },
      { name: "Jira / Agile", level: 72 },
    ],
  },
];
