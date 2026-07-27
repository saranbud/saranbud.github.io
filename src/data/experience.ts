export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Arizona State University",
    role: "Healthcare Research Assistant to Professor Tam McCreless",
    period: "Jul 2026 - Present",
    description:
      "Assist healthcare IT and outcomes-data research, developing research questions on how AI adoption in hospitals influences clinical outcomes, operational performance, profitability, and enterprise valuation. Review academic literature and assess potential data sources including hospital outcomes, financial statements, and stock-market performance. Develop hypotheses, variable definitions, and analytical frameworks for longitudinal and comparative analyses.",
    tech: ["Research", "Data Analysis", "Healthcare IT", "Statistical Modeling", "Literature Review"],
  },
  {
    company: "KATBOTZ LLC & Datagaps",
    role: "Finance Data Analyst",
    period: "Feb 2026 - Present",
    description:
      "Architected and maintained structured financial planning models inside SAP Analytics Cloud (SAC) across 6 business units, reducing manual enterprise reporting cycles. Consolidated and cleansed massive transactional datasets using SQL, Python, and Databricks, processing 4,500+ global ledger rows spanning 25 service lines mapped to SAP S/4HANA. Designed and analyzed A/B tests across 2,000+ users using GA4 and Python, measuring conversion lift and statistical significance.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "SQL", "Python", "Databricks", "GA4"],
  },
  {
    company: "Datagaps & FocalCXM",
    role: "Data Analyst Intern",
    period: "Dec 2025 - Present",
    description:
      "Built 5+ BI dashboards with 20+ reports using SQL and HubSpot CRM to track sales pipeline, email campaign performance, and deal stage forecasting. Implemented an AI-powered monitoring agent using Claude AI to track expiring orders. Developed contact segmentation strategies analyzing clickstream data, identifying that webinars generated 78% of total leads.",
    tech: ["SQL", "HubSpot CRM", "Power BI", "Claude AI", "Python"],
  },
  {
    company: "Yonder Talent",
    role: "Business Analyst Consultant",
    period: "Aug 2025 - Dec 2025",
    description:
      "Analyzed historical call volume, answer rate, abandonment, and agent productivity; established KPI definitions for operational performance and staffing decisions. Built regression, SARIMA, XGBoost, Random Forest, and clustering models to forecast staffing demand, achieving 90% peak-period coverage accuracy. Presented findings and recommendations to business stakeholders as primary point of contact.",
    tech: ["Python", "Tableau", "Power BI", "Jira", "Excel"],
  },
  {
    company: "M/s Ramadevi & Co.",
    role: "Financial Planning Analyst",
    period: "May 2023 - Jun 2024",
    description:
      "Engineered an end-to-end driver-based budgeting engine in SAP Analytics Cloud (SAC) integrated with SAP S/4HANA (ACDOCA Universal Journal), minimizing forecasting variance from ±6% to ±3%. Co-steered data pipeline automation using PySpark ETL streams to transition ledger records into Databricks Delta Lake, driving a 15% expansion in data accessibility across 120+ stakeholders. Constructed an automated 13-week liquid asset forecasting mechanism inside AWS S3 and Databricks, lowering quarter-over-quarter accounting variances by 18%.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "PySpark", "Databricks", "AWS S3", "SQL"],
  },
];
