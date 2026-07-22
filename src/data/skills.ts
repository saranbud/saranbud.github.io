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
    category: "Data Analysis & Reporting",
    icon: "BarChart3",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 88 },
      { name: "Python", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Server",
    skills: [
      { name: "HubSpot CRM", level: 82 },
      { name: "Databricks", level: 80 },
      { name: "Amazon S3", level: 70 },
      { name: "PySpark", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Jira / Agile", level: 75 },
    ],
  },
  {
    category: "Programming & Databases",
    icon: "Database",
    skills: [
      { name: "Python (Pandas/NumPy)", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "R (tidyverse)", level: 70 },
      { name: "Statistical Modeling", level: 75 },
      { name: "scikit-learn", level: 70 },
      { name: "LLMs / GenAI", level: 55 },
    ],
  },
];