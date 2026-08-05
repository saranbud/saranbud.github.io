export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "KATBOTZ LLC & Datagaps",
    role: "Finance Data Analyst",
    period: "Feb 2025 - Present",
    description:
      "Architected and maintained structured financial planning models inside SAP Analytics Cloud (SAC) across 6 distinct business units, systematically decreasing manual enterprise reporting cycles. Built and maintained planning, budgeting, and reporting models in SAP SAC, reducing reporting cycle time and supporting financial analysis and management reporting. Consolidated and cleansed massive transactional datasets using SQL, Python, and Databricks, processing 4,500+ global ledger rows spanning 25 service lines mapped back to SAP S/4HANA core architectures. Defined strategic corporate financial parameters for revenue margin profiles, multi-tier segment discounts, and deal conversions to create executive analytical scorecards. Designed and analyzed an A/B test across 2,000+ users using GA4 and Python, measuring conversion lift and statistical significance.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "SQL", "Python", "Databricks", "GA4"],
  },
  {
    company: "Yonder Talent",
    role: "Business Analyst Consultant",
    period: "Aug 2025 - Dec 2025",
    description:
      "Analyzed historical call volume, answer rate, abandonment, average speed of answer, handle time, and agent productivity; established KPI definitions and measurement logic for operational performance and staffing decisions. Built regression, SARIMA, XGBoost, Random Forest, and clustering models to forecast staffing demand, achieving 90% peak-period coverage accuracy and supporting short- and long-range resource planning. Audited source data and business definitions, identifying duplicate time-period fields, missing operational variables, and inconsistent measures; documented assumptions, limitations, and remediation needs. Presented findings, dashboards, and recommendations to business stakeholders and coordinated project activities, priorities, deliverables, and team communication as the primary point of contact.",
    tech: ["Python", "Tableau", "Power BI", "Jira", "Excel"],
  },
  {
    company: "M/s Ramadevi & Co.",
    role: "Financial Planning Analyst",
    period: "May 2023 - Jun 2024",
    description:
      "Engineered an end-to-end driver-based budgeting engine in SAP Analytics Cloud (SAC) directly integrated with SAP S/4HANA (ACDOCA Universal Journal) ledger objects, minimizing forecasting variance from ±6% to ±3%. Co-steered data pipeline automation transformations alongside core database engineers, using PySpark ETL streams to transition ledger records into Databricks Delta Lake, driving a 15% expansion in data accessibility across 120+ internal stakeholders. Executed targeted corporate cost-centre hierarchy audits utilizing Databricks SQL scripts, identifying redundant outlays to reduce operational overhead within labour categories by 4%. Constructed an automated 13-week liquid asset forecasting mechanism inside AWS S3 and Databricks environments, lowering quarter-over-quarter accounting variances by 18%.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "PySpark", "Databricks", "AWS S3", "SQL"],
  },
];
