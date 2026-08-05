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
    role: "Data Analyst & Engineer",
    period: "Feb 2026 - Present",
    description:
      "Built automated SQL and Python pipelines in Databricks to process 10K+ sales, CRM, and financial records. Automated weekly reporting with Databricks Workflows, saving ~2 hours of manual prep per cycle. Implemented data-quality checks for duplicates, missing values, and schema changes. Developed a GenAI/LLM finance agent achieving 90% response accuracy. Used BERTopic, NER, and knowledge graphs on customer feedback to identify issues and recommend improvements.",
    tech: ["Databricks", "SQL", "Python", "GenAI/LLM", "BERTopic"],
  },
  {
    company: "Datagaps",
    role: "Data Analyst Intern",
    period: "Jun 2026 - Present",
    description:
      "Designed fact and dimension tables for revenue, expenses, customers, services, and reporting periods. Built revenue and resource forecasts improving quarterly planning accuracy. Developed workforce dashboards tracking headcount, utilization, labor cost, attrition, and hiring needs for 120+ users. Analyzed clickstream data in HubSpot CRM, identifying webinars generated 78% of total leads.",
    tech: ["SQL", "HubSpot CRM", "Power BI", "Python"],
  },
  {
    company: "Yonder Talent",
    role: "Business Analyst - Graduate Capstone Consultant",
    period: "Aug 2025 - Dec 2025",
    description:
      "Built pipelines combining 20K+ call, schedule, staffing, and agent-productivity records. Compared regression, SARIMA, XGBoost, and Random Forest models to forecast demand, achieving 90% peak-period staffing coverage. Partnered with FP&A, procurement, and IT to present Tableau-driven analytics, reducing customer wait times by 15%. Engineered lag, seasonality, and holiday features that improved forecast accuracy by 18%.",
    tech: ["Python", "Tableau", "Power BI", "Jira", "Excel"],
  },
  {
    company: "M/s Ramadevi & Co.",
    role: "Financial Planning & Business Analyst",
    period: "May 2023 - Jun 2024",
    description:
      "Designed PySpark pipelines to move 100K+ SAP ledger records into AWS S3 and Databricks Delta Lake. Designed financial warehouse tables for actuals, budgets, forecasts, cash flow, and cost centers. Developed a 13-week cash-flow forecast that reduced quarter-over-quarter variance by 18%.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "PySpark", "Databricks", "AWS S3", "SQL"],
  },
];
