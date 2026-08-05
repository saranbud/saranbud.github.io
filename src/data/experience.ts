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
    company: "KATBOTZ LLC",
    role: "Data Analyst & Engineer",
    period: "Feb 2026 - Present",
    description:
      "Built automated SQL and Python pipelines in Databricks to process 10K+ sales, CRM, and financial records. Automated weekly reporting with Databricks Workflows, saving ~2 hours of manual prep per cycle. Implemented data-quality checks for duplicates, missing values, and schema changes. Developed a GenAI/LLM finance agent achieving 90% response accuracy. Used BERTopic, NER, and knowledge graphs on customer feedback to identify issues and recommend improvements.",
    tech: ["Databricks", "SQL", "Python", "GenAI/LLM", "BERTopic"],
  },
  {
    company: "KATBOTZ LLC & Datagaps",
    role: "Finance Data Analyst",
    period: "Feb 2025 - Present",
    description:
      "Architected and maintained structured financial planning models inside SAP Analytics Cloud (SAC) across 6 distinct business units, systematically decreasing manual enterprise reporting cycles. Built and maintained planning, budgeting, and reporting models in SAP SAC, reducing reporting cycle time and supporting financial analysis and management reporting. Consolidated and cleansed massive transactional datasets using SQL, Python, and Databricks, processing 4,500+ global ledger rows spanning 25 service lines mapped back to SAP S/4HANA core architectures. Defined strategic corporate financial parameters for revenue margin profiles, multi-tier segment discounts, and deal conversions to create executive analytical scorecards. Designed and analyzed an A/B test across 2,000+ users using GA4 and Python, measuring conversion lift and statistical significance.",
    tech: ["SAP Analytics Cloud", "SAP S/4HANA", "SQL", "Python", "Databricks", "GA4"],
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
    company: "Datagaps & FocalCXM",
    role: "Data Analyst Intern",
    period: "Dec 2025 - Present",
    description:
      "Built 5+ BI dashboards with 20+ reports using SQL and HubSpot CRM to track sales pipeline, email campaign performance, and deal stage forecasting. Implemented an AI-powered monitoring agent using Claude AI to track expiring orders. Developed contact segmentation strategies analyzing clickstream data, identifying that webinars generated 78% of total leads.",
    tech: ["SQL", "HubSpot CRM", "Power BI", "Claude AI", "Python"],
  },
  {
    company: "Yonder Talent",
    role: "Business Analyst - Graduate Capstone Consultant",
    period: "Aug 2025 - Dec 2025",
    description:
      "Built pipelines combining 20K+ call, schedule, staffing, and agent-productivity records. Compared regression, SARIMA, XGBoost, and Random Forest models to forecast demand, achieving 90% peak-period staffing coverage. Partnered with FP&A, procurement, and IT to present Tableau-driven analytics, reducing customer wait times by 15%. Engineered lag, seasonality, and holiday features that improved forecast accuracy by 18%. Built a Power BI dashboard comparing forecast demand, actual volume, staffing capacity, and service levels.",
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
