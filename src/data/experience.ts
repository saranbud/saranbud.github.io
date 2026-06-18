export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "KATBOTZ LLC",
    role: "Data Analyst Intern",
    period: "Feb 2026 — Present",
    description:
      "Wrote and optimized SQL queries in Databricks to analyze SAP S/4HANA financial data (100K+ records), reducing query execution time by 30%. Built data pipelines transforming raw SAP data into analysis-ready tables, cutting manual prep time by 40%. Developed KPI-focused datasets for dashboards tracking revenue, cost, and margin.",
    tech: ["SQL", "Databricks", "Python", "Tableau", "Power BI"],
  },
  {
    company: "Datagaps & FocalCXM",
    role: "Data Analyst Intern",
    period: "Dec 2025 — Present",
    description:
      "Built 5+ BI dashboards with 20+ reports using SQL and HubSpot CRM to track sales pipeline, email campaign performance, and deal stage forecasting. Implemented an AI-powered monitoring agent using Claude AI to track expiring orders. Developed contact segmentation strategies analyzing clickstream data, identifying that webinars generated 78% of total leads.",
    tech: ["SQL", "HubSpot CRM", "Power BI", "Claude AI", "Python"],
  },
  {
    company: "Yonder Talent",
    role: "Business Analyst — Capstone Consultant",
    period: "Aug 2025 — Dec 2025",
    description:
      "Programmed predictive models including regression, SARIMA, Random Forest, and XGBoost to forecast demand and achieve 90% peak-period staffing coverage. Partnered cross-functionally to present Tableau-driven customer flow analytics, reducing wait times by 15%. Acted as analyst in Agile environment using Jira with Excel and Power BI dashboards.",
    tech: ["Python", "Tableau", "Power BI", "Jira", "Excel"],
  },
];