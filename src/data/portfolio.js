export const personal = {
  name: 'Camilo Uribe Guerra',
  title: 'Data Scientist & AI Engineer',
  subtitle: 'Turning Data Into Insights',
  email: 'camuribe@icloud.com',
  phone: '+61-490 337 658',
  linkedin: 'https://www.linkedin.com/in/camilo-uribe-294942196/',
  github: 'https://github.com/camilouribeg',
  location: 'Sydney, Australia',
  cvUrl: '/professional-porfolio/assets/cv_camilo_uribe.pdf',
}

export const education = [
  {
    degree: 'Bachelor of Science — Petroleum Engineering (Honours)',
    institution: 'Universidad Nacional de Colombia',
    shortName: 'UNAL',
    domain: 'unal.edu.co',
    url: 'https://unal.edu.co',
    period: '2015 – 2021',
    detail: 'Honours graduate. Foundation in subsurface engineering, fluid mechanics, and production systems.',
    color: '#F59E0B',
  },
  {
    degree: 'Specialization in Data Analytics',
    institution: 'Universidad Nacional de Colombia',
    shortName: 'UNAL',
    domain: 'unal.edu.co',
    url: 'https://unal.edu.co',
    period: '2021 – 2022',
    detail: 'Postgraduate specialization bridging petroleum domain expertise with data science and statistical methods.',
    color: '#10B981',
  },
  {
    degree: 'Master of Data Science and Innovation',
    institution: 'University of Technology Sydney',
    shortName: 'UTS',
    domain: 'uts.edu.au',
    url: 'https://www.uts.edu.au',
    period: 'Expected July 2026',
    detail: 'GPA 6.7 / 7.0. Focus on machine learning, generative AI, and scalable data engineering.',
    badge: 'GPA 6.7 / 7.0',
    color: '#6366F1',
  },
]

export const about = {
  story: [
    'I started my career in the oil fields of Colombia — a Petroleum Engineer navigating the complexity of subsurface data, production systems, and high-stakes operational decisions.',
    'That foundation became my edge when I pivoted into data science. Where others see pipelines, I see physics. Where others see sensor noise, I see operational context. I brought that domain depth into every data role that followed.',
    'Since then I\'ve built GHG emissions pipelines for nearly 10 oil & gas clients, designed IoT streaming architectures for real-time rig monitoring, led AI intern teams building RAG systems, and published an SPE paper on automating emissions estimates.',
    'Today I work at the intersection of data engineering, machine learning, and generative AI — with a Master of Data Science at UTS (GPA 6.7/7.0) expected in July 2026.',
  ],
}

export const experience = [
  {
    role: 'Data Scientist & AI Intern',
    company: 'Synogize',
    location: 'Sydney, AU',
    period: 'Feb 2026 – Present',
    bullets: [
      'Contributing to Pentana dealership data enablement project',
      'Cleaning, restructuring and validating large dealership sales dataset (ERA Power operational data)',
      'Building analytics foundation for Snowflake-based reporting across sales performance, inventory and profitability',
    ],
    tech: ['Snowflake', 'Python', 'SQL'],
  },
  {
    role: 'Lead AI Intern',
    company: 'Triber Tech',
    location: 'Sydney, AU',
    period: 'Nov 2024 – Jan 2025',
    bullets: [
      'Led a team of 3 interns as Scrum Master, delivering AI pilot projects across resume ranking and tender document automation',
      'Designed production architecture using AWS Bedrock, MongoDB Atlas Vector Search and Amazon Textract; built implementation roadmap for full-scale rollout',
      'Contributed to an estimated 30% improvement in operational efficiency',
    ],
    tech: ['Python', 'AWS Bedrock', 'MongoDB', 'LlamaIndex', 'Streamlit', 'Amazon Lex', 'AWS Lambda'],
  },
  {
    role: 'Data Engineer / Customer Success Engineer',
    company: 'Tachyus',
    location: 'Houston, TX',
    period: 'Mar 2023 – Jan 2025',
    bullets: [
      'Built Python GHG emissions calculation pipelines applying EPA 40 CFR Part 98 for nearly 10 oil & gas clients',
      'Ingested data from CSV, Excel, PDF via OCR, SQL and NoSQL sources via SFTP and direct DB connections',
      'Built data quality automation layer; stored as Parquet; mapped to PostgreSQL via in-house SQL mapping tool',
      'Built Aurion City module: GHG Protocol for Cities standard across 3-country pilot (stationary energy, transport, waste, IPPU, AFOLU)',
      'Built ML forecasting models for future emissions scenarios and client dashboards using Plotly Dash',
      'Presented at conference in Canada; published SPE paper on automating GHG estimates for Appalachian Basin',
    ],
    tech: ['Python', 'PostgreSQL', 'GCP', 'BigQuery', 'Plotly Dash', 'Docker', 'Parquet', 'OCR', 'SQL'],
  },
  {
    role: 'Data Scientist',
    company: 'Skanhawk',
    location: 'Bogotá, CO',
    period: 'Sept 2022 – Feb 2023',
    bullets: [
      'First data role combining petroleum engineering domain expertise with data science',
      'Co-designed star schema database on Azure for real-time + historical rig operational data from 12 rigs',
      'Built IoT/SCADA streaming pipeline: sensors → Azure IoT Hub → Stream Analytics → Azure SQL',
      'Built Power BI dashboards for client KPI tracking and internal historical monitoring',
      'Built operation state classifier and XGBoost model (85% accuracy) for operational phase prediction',
    ],
    tech: ['Python', 'Azure', 'Power BI', 'XGBoost', 'TensorFlow', 'SQL', 'IoT/SCADA'],
  },
  {
    role: 'Petroleum & Field Engineer',
    company: 'Halliburton / Petroland',
    location: 'Colombia',
    period: '2021 – 2022',
    bullets: [
      'Field experience in cementing, workover operations, and production reporting',
      'Foundation of oil & gas domain knowledge applied throughout data career',
    ],
    tech: ['Production Engineering', 'Cementing', 'Workover Operations'],
  },
  {
    role: 'Research Assistant',
    company: 'Universidad Nacional de Colombia',
    location: 'Medellín, CO',
    period: 'Aug 2018 – Jul 2020',
    bullets: [
      'Developed reservoir simulation software in C++ and Fortran for CEOR (Chemical Enhanced Oil Recovery) processes',
      'Researched nanotechnology applications to optimise surfactants and polymers in enhanced oil recovery',
      'Early hands-on experience in computational problem-solving and engineering research',
    ],
    tech: ['C++', 'Fortran', 'Reservoir Simulation', 'Research'],
  },
]

export const projects = [
  {
    title: 'Airflow + dbt Medallion Pipeline',
    category: 'Data Engineering',
    description:
      'End-to-end pipeline with bronze/silver/gold layers, SCD Type 2 snapshots, star schema models and business marts for Airbnb and Census revenue + demographic analysis.',
    tech: ['Apache Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'Python'],
    color: '#0D9488',
  },
  {
    title: 'RAG Resume Ranking & Supplier Evaluation',
    category: 'AI / NLP',
    description:
      'AWS Bedrock-based retrieval workflow using MongoDB Atlas as vector store. Supports resume ranking and supplier evaluation use cases with LLM context injection.',
    tech: ['AWS Bedrock', 'MongoDB Atlas', 'LlamaIndex', 'Python'],
    color: '#0D9488',
  },
  {
    title: 'RL GHG Compliance Consultant',
    category: 'AI / Sustainability',
    description:
      'Led delivery and business analysis for a reinforcement learning assistant for Australian GHG compliance. Improved answer quality, groundedness and user satisfaction.',
    tech: ['Python', 'Reinforcement Learning', 'LLM'],
    color: '#0D9488',
  },
  {
    title: 'LLM Prompt Injection Security Framework',
    category: 'AI Security',
    description:
      'Modular framework to test prompt injection attacks, benchmark attack success rates and evaluate mitigation strategies across LLM and lightweight agent workflows.',
    tech: ['Python', 'LLMs', 'Agent Frameworks'],
    color: '#0D9488',
  },
]

export const skills = {
  Languages: ['Python (Advanced)', 'SQL (Advanced)', 'R (Intermediate)', 'C++ (Intermediate)'],
  'AI / ML': ['Machine Learning', 'Statistics', 'Generative AI', 'RAG', 'Reinforcement Learning', 'RLHF', 'Prompt Engineering', 'LangChain', 'LlamaIndex', 'Quantum Computing (QASM · Qiskit)'],
  'Data Engineering': ['Pandas', 'PySpark', 'PyArrow', 'ETL/ELT Pipelines', 'Apache Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'MongoDB', 'Data Quality Automation'],
  Cloud: ['AWS Bedrock', 'AWS Lambda', 'Amazon Lex', 'Amazon Textract', 'GCP BigQuery', 'Azure IoT Hub', 'Azure Stream Analytics'],
  'Visualization & Apps': ['Power BI', 'Tableau', 'Plotly Dash', 'Streamlit', 'Matplotlib'],
  'DevOps & App Dev': ['Git', 'Docker', 'FastAPI'],
}

export const publication = {
  title: 'Automation of Greenhouse Gas Emissions Estimates Associated with Natural Gas Production in the Appalachian Basin',
  publisher: 'OnePetro / SPE',
  url: 'https://onepetro.org/speets/proceedings-abstract/24ETS/24ETS/D012S005R002/548349',
  tachyusUrl: 'https://www.tachyus.com/projects/automation-of-greenhouse-gas-emission-estimates-associated-with-natural-gas-production-in-the-appalachian-basin',
  doi: '10.2118/221400-MS',
}
