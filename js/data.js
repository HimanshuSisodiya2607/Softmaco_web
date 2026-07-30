/* ==========================================================================
   SOFTMACO — Static Data Store
   ========================================================================== */
const SOFTMACO_DATA = {

  company: {
    name: 'Softmaco',
    tagline: 'Software, engineered like it matters.',
    subtagline: 'We design and build AI-powered software for startups and enterprises — then hold ourselves to the same bar building our own products.',
    founded: 2019,
    stats: { years: '5', projects: '140+', countries: '28+', engineers: '60+' },
    contact: {
      email: 'hello@softmaco.com',
      phone: '+1 (415) 820-9900',
      address: '500 Technology Blvd, Suite 1200, San Francisco, CA 94107, USA',
      indiaOffice: 'DLF CyberCity, Tower 8, Gurugram, Haryana 122002, India',
      hours: 'Mon – Fri, 09:00 – 18:00 PST'
    },
    social: {
      linkedin: 'https://linkedin.com/company/softmaco',
      github: 'https://github.com/softmaco',
      twitter: 'https://twitter.com/softmaco'
    }
  },

  /* ── PRODUCTS ── */
  products: [
    {
      id: 'restroai',
      slug: 'restroai',
      name: 'RestroAI',
      logo: '🍽️',
      tagline: 'AI-powered restaurant management — from tables to treasury.',
      category: 'AI',
      status: 'Live',
      launchDate: '2022',
      website: 'https://restroai.softmaco.com',
      description: 'A full-stack AI platform that transforms restaurant operations with real-time insights, predictive ordering, automated cost control, and smart customer analytics.',
      fullDescription: 'RestroAI is our flagship AI-first restaurant management platform built to eliminate the operational chaos that kills otherwise great restaurants. It combines POS intelligence, kitchen display systems, inventory forecasting, and customer sentiment analysis into a single unified operations layer. Used by over 2,400 restaurants across 14 countries.',
      problemSolved: 'Over 60% of restaurant failures are preventable operational issues — food waste, staffing inefficiencies, manual reporting delays, and missed customer trends.',
      keyBenefits: [
        'Reduce food waste by up to 38% through AI-driven inventory prediction',
        'Cut labour scheduling time from 4 hours to under 15 minutes per week',
        'Real-time revenue dashboards with P&L alerts on mobile',
        'Guest sentiment AI classifies reviews and surfaces patterns instantly',
        'Integrates with Square, Toast, Clover, Lightspeed, and Revel'
      ],
      features: [
        { icon: '🤖', title: 'AI Menu Intelligence', description: 'Analyse sales velocity, ingredient cost, and weather data to recommend live menu pricing and dish substitutions.' },
        { icon: '📦', title: 'Smart Inventory', description: 'Predictive ordering engine tied to reservations, events, and historical consumption curves.' },
        { icon: '👥', title: 'Staff Scheduling AI', description: 'Optimise shifts based on footfall prediction, local events, and contract rules.' },
        { icon: '📊', title: 'Live P&L Dashboard', description: 'Real-time revenue, COGS, and margin tracking with instant anomaly alerts.' },
        { icon: '⭐', title: 'Guest Sentiment Engine', description: 'Aggregate and classify reviews from Google, Yelp, TripAdvisor, and your own feedback forms.' },
        { icon: '🔗', title: 'POS & Delivery Integrations', description: 'Native connectors to 12 POS systems and 8 delivery platforms including DoorDash and Uber Eats.' }
      ],
      targetAudience: ['Independent Restaurants', 'Multi-site Groups', 'Hotel F&B', 'Ghost Kitchens', 'QSR Chains'],
      techStack: {
        frontend: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
        backend: ['Node.js', 'Python', 'FastAPI', 'GraphQL'],
        database: ['PostgreSQL', 'Redis', 'ClickHouse'],
        cloud: ['AWS', 'CloudFront', 'SQS', 'Lambda'],
        aiModels: ['GPT-4o', 'Mistral 8x7B', 'Custom LSTM forecasting']
      },
      pricing: [
        { tier: 'Starter', price: '$149', period: '/month', popular: false, features: ['Up to 2 locations', 'AI menu insights', 'Basic inventory', 'Email support'] },
        { tier: 'Pro', price: '$349', period: '/month', popular: true, features: ['Up to 10 locations', 'Full AI scheduling', 'Live P&L', 'POS integrations', 'Priority support'] },
        { tier: 'Enterprise', price: 'Custom', period: 'annual contract', popular: false, features: ['Unlimited locations', 'White-label option', 'Custom AI models', 'Dedicated CSM', 'SLA 99.99%'] }
      ],
      faq: [
        { question: 'Does RestroAI replace my existing POS?', answer: 'No. RestroAI is designed to sit on top of your current POS and enrich it with intelligence. We have native integrations for all major systems.' },
        { question: 'How long does onboarding take?', answer: 'Most restaurants are fully live within 5 business days. Our onboarding team handles data migration and staff training.' },
        { question: 'Is there a free trial?', answer: 'Yes — 21-day full-featured trial, no card required.' }
      ],
      screenshots: ['https://placehold.co/1200x680/101A30/4C7CF0?text=RestroAI+Dashboard', 'https://placehold.co/1200x680/101A30/C9A24B?text=Inventory+AI', 'https://placehold.co/1200x680/101A30/2ECC8E?text=P%26L+Live+View']
    },
    {
      id: 'inventorypro',
      slug: 'inventorypro',
      name: 'InventoryPro',
      logo: '📦',
      tagline: 'Real-time multi-warehouse inventory intelligence for SMBs and enterprise.',
      category: 'SaaS',
      status: 'Live',
      launchDate: '2023',
      website: 'https://inventorypro.softmaco.com',
      description: 'Multi-location inventory management with barcode scanning, reorder automation, supplier integrations, and AI demand forecasting — built for manufacturers, distributors, and retailers.',
      fullDescription: 'InventoryPro unifies stock visibility across warehouses, retail floors, and 3PL partners into one operations platform. It automates purchase orders, tracks serialised assets, and uses AI to predict demand shifts weeks before they hit.',
      problemSolved: 'Most SMBs run inventory on spreadsheets or disconnected tools, causing costly stockouts and over-ordering that erodes margins.',
      keyBenefits: [
        'Real-time stock sync across unlimited locations',
        'AI demand forecasting with 94% accuracy at 4-week horizon',
        'Automated PO generation with multi-supplier comparison',
        'Barcode and QR scanning via iOS / Android',
        'Integrates with Shopify, WooCommerce, Amazon, and NetSuite'
      ],
      features: [
        { icon: '🏭', title: 'Multi-Warehouse Hub', description: 'Unified stock visibility across all locations, 3PL partners, and in-transit shipments.' },
        { icon: '🔮', title: 'Demand Forecasting', description: 'AI model trained on seasonality, promotions, and external signals predicts stockouts before they happen.' },
        { icon: '📱', title: 'Mobile Scanning', description: 'iOS and Android apps with offline support for receiving, cycle counting, and transfers.' },
        { icon: '🤝', title: 'Supplier Portal', description: 'Self-service portal lets suppliers confirm POs, update lead times, and attach shipping documents.' },
        { icon: '🔗', title: 'eCommerce Sync', description: 'Bidirectional stock sync with Shopify, WooCommerce, Amazon Seller Central, and eBay.' },
        { icon: '📈', title: 'Analytics Suite', description: 'Turnover ratios, dead stock alerts, supplier scorecard, and margin drill-downs.' }
      ],
      targetAudience: ['Manufacturers', 'Distributors', 'Retailers', 'eCommerce Brands', 'Wholesale'],
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'D3.js'],
        backend: ['Go', 'Python', 'gRPC'],
        database: ['PostgreSQL', 'TimescaleDB', 'Elasticsearch'],
        cloud: ['GCP', 'Cloud Run', 'Pub/Sub'],
        aiModels: ['Prophet', 'XGBoost', 'Custom ARIMA']
      },
      pricing: [
        { tier: 'SMB', price: '$99', period: '/month', popular: false, features: ['2 warehouses', '1,000 SKUs', 'Basic forecasting', 'Shopify sync'] },
        { tier: 'Growth', price: '$249', period: '/month', popular: true, features: ['10 warehouses', '25,000 SKUs', 'AI forecasting', 'All integrations', 'API access'] },
        { tier: 'Enterprise', price: 'Custom', period: '', popular: false, features: ['Unlimited', 'Custom AI', 'ERP integrations', 'White label', 'SLA'] }
      ],
      faq: [
        { question: 'Can InventoryPro handle serialised items?', answer: 'Yes — full serial number tracking, warranty management, and audit history are included on all tiers.' },
        { question: 'Does it work offline?', answer: 'The mobile apps support full offline scanning and sync automatically when connectivity is restored.' }
      ],
      screenshots: ['https://placehold.co/1200x680/101A30/4C7CF0?text=InventoryPro+Dashboard', 'https://placehold.co/1200x680/101A30/2ECC8E?text=Demand+Forecast']
    },
    {
      id: 'softcrm',
      slug: 'softcrm',
      name: 'SoftCRM',
      logo: '🤝',
      tagline: 'AI-augmented CRM that actually understands your pipeline.',
      category: 'SaaS',
      status: 'Beta',
      launchDate: '2024',
      website: 'https://softcrm.softmaco.com',
      description: 'A lean, AI-first CRM that scores leads, drafts follow-ups, forecasts close probability, and surfaces deal risks — so your team focuses on selling, not data entry.',
      fullDescription: 'SoftCRM was built out of frustration with bloated CRMs that require more administration than they save. We stripped the feature set to what actually moves deals and added an AI layer that reads the context of every deal and tells you what to do next.',
      problemSolved: 'Sales teams spend 35% of their time on CRM data entry and reporting instead of customer conversations.',
      keyBenefits: [
        'AI scores every lead 0–100 based on 40+ signals at point of entry',
        'Automated follow-up draft generation based on deal stage and context',
        'Close probability forecasting updated daily with pipeline analytics',
        'Email, calendar, and LinkedIn sync — data entry nearly eliminated',
        'Deal risk alerts: stalled conversations, competitive threats, key contact turnover'
      ],
      features: [
        { icon: '🧠', title: 'AI Lead Scoring', description: 'Multi-signal scoring model ranks leads by close probability at point of capture.' },
        { icon: '✉️', title: 'Draft Generator', description: 'Context-aware email and proposal drafts using deal history, contact role, and stage.' },
        { icon: '📊', title: 'Pipeline Intelligence', description: 'Rolling 90-day forecast with variance alerts and team quota tracking.' },
        { icon: '⚠️', title: 'Deal Risk Engine', description: 'Detects stalled deals, missed touchpoints, and competitor mentions in email threads.' },
        { icon: '🔗', title: 'Zero-Entry Sync', description: 'Auto-logs emails, meetings, and calls from Gmail, Outlook, and Google Calendar.' },
        { icon: '🏆', title: 'Coaching Insights', description: 'Win/loss analysis by rep, segment, and product — surface what patterns win deals.' }
      ],
      targetAudience: ['B2B SaaS', 'Professional Services', 'IT Consulting', 'Financial Services', 'Agencies'],
      techStack: {
        frontend: ['React', 'TypeScript', 'Radix UI'],
        backend: ['Python', 'FastAPI', 'Celery'],
        database: ['PostgreSQL', 'Pinecone', 'Redis'],
        cloud: ['AWS', 'Lambda', 'SES'],
        aiModels: ['GPT-4o', 'Fine-tuned Llama 3.1', 'Custom scoring model']
      },
      pricing: [
        { tier: 'Starter', price: '$49', period: '/user/month', popular: false, features: ['Up to 5 users', 'AI lead scoring', 'Email sync', 'Core pipeline'] },
        { tier: 'Team', price: '$89', period: '/user/month', popular: true, features: ['Unlimited users', 'Draft generator', 'Risk alerts', 'Forecasting', 'API'] },
        { tier: 'Enterprise', price: 'Custom', period: '', popular: false, features: ['SSO / SAML', 'Custom AI models', 'Dedicated infra', 'SLA', 'CSM'] }
      ],
      faq: [
        { question: 'Does SoftCRM replace Salesforce?', answer: 'For most sub-500 person sales teams, yes. For complex enterprise CPQ workflows, we integrate alongside it.' },
        { question: 'How accurate is the lead scoring?', answer: 'In beta validation across 12 sales teams, AI scores predicted final outcome with 82% accuracy at 30 days.' }
      ],
      screenshots: ['https://placehold.co/1200x680/101A30/4C7CF0?text=SoftCRM+Pipeline', 'https://placehold.co/1200x680/101A30/C9A24B?text=AI+Lead+Score']
    },
    {
      id: 'datapulse',
      slug: 'datapulse',
      name: 'DataPulse AI',
      logo: '📡',
      tagline: 'Ask your business data anything. In plain English.',
      category: 'AI',
      status: 'Beta',
      launchDate: '2024',
      website: 'https://datapulse.softmaco.com',
      description: 'Natural language analytics for teams that can\'t wait for a data analyst. Connect your warehouse, ask questions, get accurate charts and insights in seconds.',
      fullDescription: 'DataPulse AI is a semantic layer between your data warehouse and your business teams. It translates plain English questions into verified SQL, runs queries against your live data, and returns charts, summaries, and action recommendations — all without writing a single line of code.',
      problemSolved: 'Business teams wait days for BI reports that answer questions they can\'t even fully articulate, while data teams are drowned in ad-hoc requests.',
      keyBenefits: [
        'Natural language to SQL with query verification and explanation',
        'Connects to Snowflake, BigQuery, Redshift, PostgreSQL, MySQL in minutes',
        'Scheduled insight emails: weekly business digest, anomaly alerts',
        'AI-generated executive summaries with chart narratives',
        'Role-based data access control for enterprise compliance'
      ],
      features: [
        { icon: '💬', title: 'Chat Analytics', description: 'Ask "What were our top 10 customers by revenue last quarter?" and get a verified chart, not a ticket.' },
        { icon: '🔗', title: 'Warehouse Connectors', description: 'Native connectors to all major cloud data warehouses with schema auto-discovery.' },
        { icon: '📧', title: 'Scheduled Digests', description: 'Weekly business summaries and real-time anomaly alerts delivered to Slack or email.' },
        { icon: '🛡️', title: 'Access Control', description: 'Row-level security and role-based permissions synced with your IdP.' },
        { icon: '📝', title: 'Auto-Narratives', description: 'AI generates plain-English explanations for every chart and trend.' },
        { icon: '🔄', title: 'Live Refresh', description: 'Dashboards refresh against live warehouse data with configurable cache windows.' }
      ],
      targetAudience: ['Business Analysts', 'Product Managers', 'C-Suite', 'Finance Teams', 'Marketing Ops'],
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'Observable Plot'],
        backend: ['Python', 'LangChain', 'FastAPI'],
        database: ['BigQuery', 'Snowflake', 'PostgreSQL'],
        cloud: ['GCP', 'Cloud Run', 'Vertex AI'],
        aiModels: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro']
      },
      pricing: [
        { tier: 'Team', price: '$199', period: '/month', popular: false, features: ['5 users', '3 data sources', '100 queries/day', 'Slack alerts'] },
        { tier: 'Business', price: '$499', period: '/month', popular: true, features: ['25 users', '10 sources', 'Unlimited queries', 'Scheduled digests', 'API'] },
        { tier: 'Enterprise', price: 'Custom', period: '', popular: false, features: ['Unlimited', 'Private LLM option', 'VPC deployment', 'SLA', 'CSM'] }
      ],
      faq: [
        { question: 'Does DataPulse send my data to OpenAI?', answer: 'Only query metadata (schema and column names) is sent to LLM providers. Your actual data values never leave your infrastructure unless you choose cloud-hosted mode.' },
        { question: 'How accurate is the SQL generation?', answer: 'On our benchmark against 2,000 business questions across 5 schema types, DataPulse AI achieves 91% accuracy on first attempt.' }
      ],
      screenshots: ['https://placehold.co/1200x680/101A30/4C7CF0?text=DataPulse+Chat', 'https://placehold.co/1200x680/101A30/2ECC8E?text=AI+Chart+Output']
    },
    {
      id: 'softlaunch',
      slug: 'softlaunch',
      name: 'SoftLaunch',
      logo: '🚀',
      tagline: 'End-to-end product launch platform for SaaS founders.',
      category: 'SaaS',
      status: 'In Development',
      launchDate: 'Q3 2025',
      website: 'https://softlaunch.softmaco.com',
      description: 'Manage waitlists, beta access, staged rollouts, launch day analytics, and investor updates from one command centre.',
      fullDescription: 'SoftLaunch brings together every tool a founder needs to orchestrate a product launch — without stitching together 8 different services. From early waitlist to GA announcement.',
      problemSolved: 'Product launches fail not because of bad products but because of fragmented go-to-market tooling, poor sequencing, and no single source of truth for launch status.',
      keyBenefits: [
        'Waitlist management with viral referral mechanics built in',
        'Staged rollout engine with feature flags per cohort',
        'Launch day real-time dashboard for signups, activations, and errors',
        'Automated investor update generator from your metrics',
        'PR & media tracker: press hits, backlinks, social mentions'
      ],
      features: [
        { icon: '📝', title: 'Waitlist Engine', description: 'Viral referral loops, priority queue logic, and custom criteria-based invite batching.' },
        { icon: '🚦', title: 'Staged Rollout', description: 'Ship to 1%, 10%, 50%, 100% of users with automatic rollback triggers.' },
        { icon: '📺', title: 'Launch Control', description: 'Real-time launch day command centre with signup, activation, and error tracking.' },
        { icon: '📣', title: 'Press Tracker', description: 'Monitor TechCrunch, Product Hunt, and 40+ tech outlets for your launch coverage.' },
        { icon: '💌', title: 'Investor Updates', description: 'Auto-generated weekly investor update emails pulled from your live metrics.' },
        { icon: '🎯', title: 'Goal Tracking', description: 'Set launch KPIs and track them in real-time against targets with alert thresholds.' }
      ],
      targetAudience: ['SaaS Founders', 'Product Managers', 'Growth Teams', 'Indie Hackers', 'Investors'],
      techStack: {
        frontend: ['Next.js', 'TypeScript', 'Framer Motion'],
        backend: ['Node.js', 'Hono', 'tRPC'],
        database: ['PlanetScale', 'Upstash Redis'],
        cloud: ['Vercel', 'AWS SES', 'Inngest'],
        aiModels: ['GPT-4o mini', 'Custom copy model']
      },
      pricing: [],
      faq: [],
      screenshots: ['https://placehold.co/1200x680/101A30/4C7CF0?text=SoftLaunch+Command+Center']
    }
  ],

  /* ── SERVICES ── */
  services: [
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      summary: 'End-to-end AI development: custom models, LLM integrations, RAG pipelines, computer vision, and production MLOps. We don\'t bolt AI on — we architect it in.',
      benefits: ['Reduced manual decision-making by 40–70%', 'AI systems that explain their reasoning', 'Production-grade MLOps from day one', 'Custom fine-tuning on your proprietary data'],
      technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI', 'Vertex AI', 'Hugging Face', 'Pinecone'],
      industries: ['Healthcare', 'Finance', 'Retail', 'Logistics', 'Legal Tech'],
      process: ['Discovery: map data sources and define AI success metrics', 'Data audit and labelling strategy', 'Model selection and baseline benchmarking', 'Training, fine-tuning, evaluation', 'Production deployment with monitoring and drift detection', 'Ongoing model maintenance']
    },
    {
      icon: '🌐',
      title: 'Custom Web Development',
      summary: 'Scalable web applications built on modern stacks — React, Next.js, Vue, Node.js, Go. Performance-obsessed, accessible by default, and built to handle real traffic.',
      benefits: ['Sub-100ms TTFB on all pages', 'WCAG 2.1 AA accessible by default', 'SEO-ready architecture from day one', '99.99% uptime SLA'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Redis'],
      industries: ['FinTech', 'EdTech', 'eCommerce', 'SaaS', 'Media'],
      process: ['Technical discovery and stack selection', 'Architecture diagram and security review', 'Component design system and UI library', 'Development in 2-week sprints with daily previews', 'Load testing and performance audit', 'Staged production deployment']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      summary: 'Native iOS, native Android, and React Native apps built by mobile specialists — not generalists. App Store rated 4.8+ across all our shipped products.',
      benefits: ['Native performance: 60fps animations guaranteed', 'Offline-first architecture with intelligent sync', 'Push notification strategies that actually convert', 'Structured App Store submission support'],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'RevenueCat'],
      industries: ['Food & Hospitality', 'Healthcare', 'Fintech', 'Logistics', 'Consumer'],
      process: ['User journey mapping and IA', 'Figma prototype for stakeholder sign-off', 'Component library setup', 'Sprint-based development with TestFlight builds', 'QA on 15+ real device matrix', 'App Store submission and approval management']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps Engineering',
      summary: 'AWS, GCP, and Azure infrastructure designed for scale, security, and cost. IaC with Terraform, Kubernetes orchestration, CI/CD pipelines, and 24/7 monitoring.',
      benefits: ['Infrastructure-as-Code: everything version controlled', 'Average 30% cost reduction vs self-managed setups', 'Zero-downtime deployments with automated rollbacks', 'SOC2 Type II compliant configurations'],
      technologies: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Helm', 'GitHub Actions', 'Datadog'],
      industries: ['All Industries', 'FinTech', 'HealthTech', 'Enterprise', 'SaaS'],
      process: ['Cloud spend and architecture audit', 'Cost optimisation recommendations', 'IaC migration and environment parity', 'CI/CD pipeline design and implementation', 'Security hardening and WAF setup', 'Runbook creation and team handover']
    },
    {
      icon: '🏢',
      title: 'Enterprise Software Development',
      summary: 'Complex internal tools, ERP modules, workflow engines, and digital transformation programmes for enterprises with legacy systems and strict compliance requirements.',
      benefits: ['Legacy system modernisation without big-bang rewrites', 'API-first architecture enabling future integrations', 'Change management and internal adoption support', 'Full data migration with zero business interruption'],
      technologies: ['Java Spring', 'C# .NET', 'SAP integrations', 'Oracle', 'Kafka', 'gRPC'],
      industries: ['Manufacturing', 'Banking', 'Government', 'Healthcare', 'Insurance'],
      process: ['Business process audit and gap analysis', 'Stakeholder interviews and requirements specification', 'Phased modernisation roadmap', 'Parallel run period before cutover', 'Training and change management', 'SLA-backed hypercare support']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      summary: 'Research-led product design from IA and wireframes to polished Figma designs and interactive prototypes. We design systems, not screens.',
      benefits: ['Design systems that developers actually love using', 'Validated with real users before a line of code', 'Accessible, internationalisation-ready from the start', 'Handoff includes annotated specs and motion guidelines'],
      technologies: ['Figma', 'Framer', 'Storybook', 'Zeroheight', 'Maze', 'Hotjar'],
      industries: ['SaaS', 'Consumer Apps', 'FinTech', 'Healthcare', 'eCommerce'],
      process: ['User research and persona workshops', 'Information architecture and user flow mapping', 'Low-fi wireframes for structure validation', 'High-fi Figma designs with design system', 'Interactive prototype and usability testing', 'Developer handoff with component specs']
    },
    {
      icon: '🚀',
      title: 'SaaS Product Development',
      summary: 'Full-stack SaaS development: multi-tenant architecture, billing, onboarding flows, analytics, and growth infrastructure. From zero to paying customers.',
      benefits: ['Multi-tenant isolation: data security by design', 'Stripe billing with usage metering and dunning', 'Built-in product analytics from day one', 'Growth infrastructure: referrals, trials, PLG loops'],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Segment', 'PostHog'],
      industries: ['B2B SaaS', 'Developer Tools', 'HR Tech', 'LegalTech', 'PropTech'],
      process: ['MVP scoping and feature prioritisation', 'Multi-tenant data architecture design', 'Auth, billing, and onboarding flows', 'Core product feature development', 'Analytics and instrumentation setup', 'Beta launch and iteration']
    },
    {
      icon: '🔌',
      title: 'API & Backend Development',
      summary: 'Robust, documented, and versioned APIs. REST, GraphQL, gRPC. We architect backends that handle 10x the load you expect on day one.',
      benefits: ['OpenAPI documented from day one', 'Rate limiting, auth, and versioning built in', 'P99 latency under 80ms for core endpoints', 'SDK generation for web, mobile, and server clients'],
      technologies: ['Node.js', 'Go', 'Python', 'GraphQL', 'gRPC', 'OpenAPI', 'Kong'],
      industries: ['FinTech', 'Logistics', 'Healthcare', 'IoT', 'Marketplace'],
      process: ['API design workshop with stakeholders', 'OpenAPI spec and mock server setup', 'Security threat modelling', 'Implementation in test-driven cycles', 'Load testing and rate limit tuning', 'SDK generation and documentation']
    },
    {
      icon: '📊',
      title: 'Data Engineering & Analytics',
      summary: 'Modern data stacks: ingestion pipelines, data warehouses, dbt transformations, and BI layers. Turn your raw data into decisions your team can act on.',
      benefits: ['Unified data model replacing spreadsheet chaos', 'Sub-second BI query performance at any scale', 'Data quality monitoring with automatic alerting', 'GDPR-compliant data governance baked in'],
      technologies: ['dbt', 'Snowflake', 'BigQuery', 'Airflow', 'Fivetran', 'Looker', 'Metabase'],
      industries: ['eCommerce', 'Finance', 'Healthcare', 'Logistics', 'Media'],
      process: ['Data audit and source mapping', 'Warehouse selection and cost modelling', 'Ingestion pipeline design', 'Data modelling with dbt', 'BI layer setup and dashboard creation', 'Data team training and handover']
    },
    {
      icon: '🎯',
      title: 'Product Strategy & Consulting',
      summary: 'Technical strategy, product-market fit validation, build-vs-buy decisions, architecture reviews, and CTO advisory. We bring the experience of 140+ builds to your roadmap.',
      benefits: ['Outside perspective that surfaces blind spots', 'Build-vs-buy analysis backed by real cost data', 'Roadmap sequencing based on actual engineering constraints', 'Investor-ready technical due diligence support'],
      technologies: ['Figma', 'Linear', 'Notion', 'Miro', 'Loom'],
      industries: ['All Sectors', 'Pre-seed / Seed Startups', 'Series A–C', 'Enterprise'],
      process: ['Deep-dive discovery over 2–3 weeks', 'Architecture and product audit', 'Competitive and technology landscape review', 'Strategic roadmap and prioritisation framework', 'Board/investor presentation preparation', 'Optional ongoing fractional CTO engagement']
    }
  ],

  /* ── TEAM ── */
  team: [
    {
      id: 'arjun-mehta',
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      department: 'Leadership',
      bio: 'Previously VP Engineering at a YC unicorn. 12 years building infrastructure at scale.',
      fullBio: 'Arjun founded Softmaco after a decade leading engineering at venture-backed companies across fintech and logistics. He has shipped products used by 40 million+ users and personally led the architecture of systems processing $2B+ in annual transaction volume. He brings a rare combination of product intuition and deep infrastructure knowledge to every client engagement.',
      photo: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=14203A&color=4C7CF0&size=160',
      skills: ['System Design', 'Go', 'Kubernetes', 'AI Strategy', 'Product Vision', 'Team Leadership'],
      productsContributed: ['RestroAI', 'InventoryPro', 'SoftCRM'],
      experience: [
        { role: 'Founder & CEO', company: 'Softmaco', period: '2019 – Present' },
        { role: 'VP Engineering', company: 'FreightOS (YC W14)', period: '2015 – 2019' },
        { role: 'Senior Engineer', company: 'Razorpay', period: '2012 – 2015' }
      ],
      awards: ['Forbes 30 Under 30 Technology 2021', 'YC Alumni Engineering Excellence 2020'],
      social: { linkedin: 'https://linkedin.com', github: 'https://github.com', twitter: 'https://twitter.com', email: 'arjun@softmaco.com' }
    },
    {
      id: 'priya-kapoor',
      name: 'Priya Kapoor',
      role: 'CTO',
      department: 'Leadership',
      bio: 'Former Google Brain research engineer. Expert in production ML and LLM systems.',
      fullBio: 'Priya leads all technical direction at Softmaco, overseeing both client engineering and internal product R&D. She spent 6 years at Google Brain working on large-scale ML infrastructure before joining to build Softmaco\'s AI practice. She holds a PhD in Machine Learning from IIT Bombay.',
      photo: 'https://ui-avatars.com/api/?name=Priya+Kapoor&background=14203A&color=C9A24B&size=160',
      skills: ['Python', 'PyTorch', 'LLM Fine-tuning', 'Distributed Systems', 'MLOps', 'TensorFlow'],
      productsContributed: ['RestroAI', 'DataPulse AI', 'SoftCRM'],
      experience: [
        { role: 'CTO', company: 'Softmaco', period: '2020 – Present' },
        { role: 'Staff Research Engineer', company: 'Google Brain', period: '2014 – 2020' },
        { role: 'Research Intern', company: 'DeepMind', period: '2013' }
      ],
      awards: ['Google AI Research Award 2018', 'NeurIPS Best Paper Honourable Mention 2017'],
      social: { linkedin: 'https://linkedin.com', github: 'https://github.com', twitter: 'https://twitter.com', email: 'priya@softmaco.com' }
    },
    {
      id: 'rohan-sharma',
      name: 'Rohan Sharma',
      role: 'Head of Engineering',
      department: 'Engineering',
      bio: 'Full-stack architect with deep expertise in high-traffic distributed systems.',
      fullBio: 'Rohan manages Softmaco\'s engineering guild of 40+ engineers across web, mobile, cloud, and data disciplines. He previously scaled the engineering team at an Indian unicorn from 8 to 120 engineers and architected systems serving 15M DAU.',
      photo: 'https://ui-avatars.com/api/?name=Rohan+Sharma&background=14203A&color=2ECC8E&size=160',
      skills: ['TypeScript', 'Go', 'Kafka', 'PostgreSQL', 'Kubernetes', 'System Architecture'],
      productsContributed: ['InventoryPro', 'SoftCRM', 'RestroAI'],
      experience: [
        { role: 'Head of Engineering', company: 'Softmaco', period: '2021 – Present' },
        { role: 'VP Engineering', company: 'Meesho', period: '2018 – 2021' },
        { role: 'Engineering Lead', company: 'Flipkart', period: '2014 – 2018' }
      ],
      awards: [],
      social: { linkedin: 'https://linkedin.com', github: 'https://github.com', email: 'rohan@softmaco.com' }
    },
    {
      id: 'sofia-chen',
      name: 'Sofia Chen',
      role: 'Head of Design',
      department: 'Design',
      bio: 'Ex-Stripe, ex-Linear. Systems designer obsessed with craft and typographic precision.',
      fullBio: 'Sofia built the design practice at Softmaco from scratch, growing it into a six-person team known for work that looks like it shipped from a top-tier tech company. She spent 4 years at Stripe working on core product and billing UI, and 2 years at Linear defining their iconic interface.',
      photo: 'https://ui-avatars.com/api/?name=Sofia+Chen&background=14203A&color=F04C6C&size=160',
      skills: ['Figma', 'Framer', 'Design Systems', 'Motion Design', 'User Research', 'Prototyping'],
      productsContributed: ['RestroAI', 'SoftCRM', 'DataPulse AI', 'SoftLaunch'],
      experience: [
        { role: 'Head of Design', company: 'Softmaco', period: '2022 – Present' },
        { role: 'Product Designer', company: 'Linear', period: '2020 – 2022' },
        { role: 'Senior Designer', company: 'Stripe', period: '2016 – 2020' }
      ],
      awards: ['Awwwards SOTD × 4', 'CSS Design Awards Winner'],
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'sofia@softmaco.com' }
    },
    {
      id: 'marcus-lee',
      name: 'Marcus Lee',
      role: 'Lead AI Engineer',
      department: 'Engineering',
      bio: 'PhD MIT. Specialises in LLM fine-tuning, RAG architectures, and production AI inference.',
      fullBio: 'Marcus joined Softmaco to lead the AI engineering practice after completing his PhD at MIT focusing on efficient inference for large language models. He is the primary architect of the AI layers in RestroAI, DataPulse AI, and SoftCRM.',
      photo: 'https://ui-avatars.com/api/?name=Marcus+Lee&background=14203A&color=4C7CF0&size=160',
      skills: ['Python', 'PyTorch', 'LangChain', 'Pinecone', 'CUDA', 'RAG', 'Fine-tuning'],
      productsContributed: ['DataPulse AI', 'RestroAI', 'SoftCRM'],
      experience: [
        { role: 'Lead AI Engineer', company: 'Softmaco', period: '2023 – Present' },
        { role: 'AI Research Intern', company: 'Anthropic', period: '2022' },
        { role: 'PhD Researcher', company: 'MIT CSAIL', period: '2019 – 2023' }
      ],
      awards: ['ICLR Outstanding Paper 2022'],
      social: { linkedin: 'https://linkedin.com', github: 'https://github.com', email: 'marcus@softmaco.com' }
    },
    {
      id: 'aisha-patel',
      name: 'Aisha Patel',
      role: 'VP Growth',
      department: 'Growth',
      bio: 'Built growth loops that took two SaaS products from $0 to $10M ARR.',
      fullBio: 'Aisha drives all commercial strategy at Softmaco — product-led growth for the SaaS portfolio and business development for client services. She has previously led growth at two successfully acquired SaaS companies, designing PLG funnels, referral mechanics, and pricing architectures that doubled NRR within 12 months.',
      photo: 'https://ui-avatars.com/api/?name=Aisha+Patel&background=14203A&color=C9A24B&size=160',
      skills: ['PLG Strategy', 'Pricing', 'GTM', 'Analytics', 'Partnerships', 'Content Marketing'],
      productsContributed: ['SoftCRM', 'SoftLaunch', 'InventoryPro'],
      experience: [
        { role: 'VP Growth', company: 'Softmaco', period: '2022 – Present' },
        { role: 'Head of Growth', company: 'Locus.sh', period: '2019 – 2022' },
        { role: 'Growth Lead', company: 'Freshworks', period: '2016 – 2019' }
      ],
      awards: [],
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'aisha@softmaco.com' }
    }
  ],

  /* ── TESTIMONIALS ── */
  testimonials: [
    {
      quote: 'Softmaco didn\'t just build what we asked for — they challenged our assumptions and shipped something better than we imagined. RestroAI paid for itself in 6 weeks.',
      author: 'James Whitfield',
      role: 'CEO',
      company: 'Savor Hospitality Group'
    },
    {
      quote: 'We\'ve worked with 4 agencies before Softmaco. The difference is that their senior people are actually on your project, not juniors with seniors rubber-stamping.',
      author: 'Nadia Ostroff',
      role: 'CPO',
      company: 'Nova Digital Bank'
    },
    {
      quote: 'The DataPulse AI integration halved the time our finance team spent on weekly reporting. Questions that took 3 days now take 30 seconds.',
      author: 'Raj Krishnamurthy',
      role: 'CFO',
      company: 'OmniTech Ventures'
    }
  ],

  /* ── CASE STUDIES ── */
  caseStudies: [
    {
      id: 'apex-logistics',
      title: 'Cutting Apex Logistics delivery delays by 41% with AI route optimisation',
      client: 'Apex Global Logistics',
      category: 'AI / Logistics',
      timeline: '14 weeks',
      challenge: 'Apex was managing 18,000 daily deliveries across 6 cities with a legacy routing engine built in 2011. Driver utilisation was at 62% and customer complaints about late deliveries had reached an all-time high, threatening a $28M contract renewal.',
      solution: 'We rebuilt the dispatch engine from the ground up using a real-time ML routing model trained on 3 years of historical delivery data, live traffic feeds, and weather APIs. The new system re-optimises all active routes every 4 minutes and predicts ETAs with 94% accuracy at 2-hour windows.',
      metrics: { metric1: '41%', label1: 'Fewer late deliveries', metric2: '23%', label2: 'Fuel cost reduction', metric3: '94%', label3: 'ETA accuracy' },
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Google Maps API', 'TensorFlow', 'Kubernetes'],
      coverImage: 'https://placehold.co/800x480/101A30/4C7CF0?text=Apex+Logistics+AI+Dashboard'
    },
    {
      id: 'nova-bank',
      title: 'Launching Nova Digital Bank\'s core banking platform in 11 weeks',
      client: 'Nova Digital Bank',
      category: 'FinTech / Banking',
      timeline: '11 weeks MVP',
      challenge: 'Nova needed to launch a digital-first banking product for the UK market before a regulatory window closed. Their previous vendor had delivered 6 months late and over-budget with an architecture that couldn\'t handle concurrent users above 500.',
      solution: 'We scoped, designed, and built the core banking layer — accounts, payments, KYC, and the customer-facing React Native app — in parallel sprints. The architecture uses event sourcing for an immutable audit trail required by FCA, and handles 50,000 concurrent users on a predictable cost curve.',
      metrics: { metric1: '11 wks', label1: 'Time to production', metric2: '50K', label2: 'Concurrent users', metric3: '99.99%', label3: 'Uptime since launch' },
      technologies: ['React Native', 'Node.js', 'Kafka', 'PostgreSQL', 'AWS', 'Terraform', 'Sumsub'],
      coverImage: 'https://placehold.co/800x480/101A30/C9A24B?text=Nova+Bank+App'
    },
    {
      id: 'coretech-data',
      title: 'Replacing CoreFintech\'s manual reporting with a real-time data warehouse',
      client: 'CoreFintech Labs',
      category: 'Data Engineering',
      timeline: '8 weeks',
      challenge: 'CoreFintech\'s 12-person finance and ops team spent 3 days per week manually pulling data from 6 systems into spreadsheets. A single Sunday process failure could delay board reporting by 48 hours. There was no single source of truth.',
      solution: 'We designed and deployed a modern data stack: Fivetran syncing all source systems, Snowflake as the warehouse, dbt for transformations, and Metabase for self-serve BI. The full stack was live in 8 weeks with an automated data quality layer catching issues before they reach analysts.',
      metrics: { metric1: '3 days', label1: 'Reporting time saved/week', metric2: '< 4hr', label2: 'Data freshness SLA', metric3: '0', label3: 'Manual data pulls' },
      technologies: ['Snowflake', 'dbt', 'Fivetran', 'Metabase', 'Airflow', 'Python'],
      coverImage: 'https://placehold.co/800x480/101A30/2ECC8E?text=Data+Warehouse+Architecture'
    }
  ],

  /* ── BLOG ── */
  blogPosts: [
    {
      id: 'rag-production-guide',
      title: 'The definitive guide to RAG in production: what actually breaks at scale',
      excerpt: 'Retrieval-Augmented Generation sounds simple in demos. Here\'s what nobody tells you about running it in production for enterprise clients — from chunking strategies to rerankers to observability.',
      category: 'AI Engineering',
      author: 'Marcus Lee',
      authorRole: 'Lead AI Engineer',
      date: 'July 2026',
      readTime: '14 min read',
      content: `<p>After deploying RAG pipelines for 11 enterprise clients over the past 18 months, we've accumulated a set of hard lessons that rarely appear in tutorials.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">1. Chunking is the most underrated decision</h3>
      <p>Most teams use fixed-size chunking because it's easy. In production, it consistently loses to semantic chunking strategies — particularly for long-form documents like contracts, medical records, and technical manuals where context spans page boundaries.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">2. Embedding model choice matters more than vector DB choice</h3>
      <p>We've tested OpenAI text-embedding-3-large, Cohere embed-english-v3, and several open-source alternatives. The delta in retrieval precision between models is 8–15 percentage points on domain-specific corpora — far larger than the delta between Pinecone, Weaviate, and Qdrant.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">3. Rerankers are not optional at enterprise scale</h3>
      <p>Vector similarity search returns semantically similar chunks. Rerankers (Cohere Rerank, cross-encoders) filter those results by actual relevance to the specific query. In our benchmarks, adding a reranker improved answer faithfulness by 22% on complex multi-hop questions.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">4. Observability is not an afterthought</h3>
      <p>Every RAG system needs per-query logging of: retrieved chunks, similarity scores, final prompt, model output, and user feedback signal. Without this, debugging retrieval failures is guesswork. We use LangSmith for client deployments and a custom Postgres-based logging layer for privacy-sensitive workloads.</p>`
    },
    {
      id: 'multi-tenant-saas',
      title: 'Multi-tenancy done right: row-level security vs schema isolation vs database isolation',
      excerpt: 'The multi-tenancy decision shapes your entire architecture. Three real trade-offs, one right answer for your stage — and how we\'ve approached it across 20+ SaaS builds.',
      category: 'SaaS Architecture',
      author: 'Rohan Sharma',
      authorRole: 'Head of Engineering',
      date: 'June 2026',
      readTime: '11 min read',
      content: `<p>Every SaaS product needs multi-tenancy. The architecture you choose at the start will be extremely expensive to change later. Here's how we think about it.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Option 1: Row-Level Security (RLS)</h3>
      <p>All tenants share tables. A tenant_id column on every row, with database-enforced RLS policies. This is the most operationally simple approach and works well up to ~500 tenants with moderate data volumes. The risk: a misconfigured policy can leak data across tenants — this is a compliance concern for healthcare and financial data.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Option 2: Schema-per-tenant</h3>
      <p>Each tenant gets an isolated PostgreSQL schema within the same database. Strong isolation without the operational overhead of separate databases. Migration complexity grows linearly with tenant count — 1,000 tenants means running 1,000 schema migrations. Manageable with tooling; we use Bytebase for this.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Option 3: Database-per-tenant</h3>
      <p>The gold standard for compliance-sensitive workloads (HIPAA, FCA, ISO27001). Each tenant has a completely isolated database — often in a separate cloud account. This gives you per-tenant backups, audit trails, and egress control. The cost is significant operational overhead and higher infrastructure cost at low tenant counts.</p>
      <p>Our recommendation: start with RLS. Migrate to schema isolation at 100+ enterprise clients. Database isolation only when compliance requires it or a client mandates it contractually.</p>`
    },
    {
      id: 'llm-cost-optimisation',
      title: 'How we cut LLM API costs by 73% without hurting quality: a real case study',
      excerpt: 'A client\'s DataPulse AI integration was burning $22K/month on OpenAI. Here\'s the exact playbook we used — routing, caching, distillation, and prompt compression — to bring it to $6K.',
      category: 'AI Engineering',
      author: 'Priya Kapoor',
      authorRole: 'CTO',
      date: 'May 2026',
      readTime: '9 min read',
      content: `<p>When one of our DataPulse AI clients crossed $22,000/month in OpenAI costs, it was a forcing function to build a proper cost-optimisation layer. Over 8 weeks, we reduced spend to $5,940/month while maintaining a 94% user satisfaction score.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Step 1: Request classification and model routing</h3>
      <p>Not every query needs GPT-4o. We built a lightweight classifier (fine-tuned GPT-3.5 Turbo) that routes simple lookups, chart requests, and single-table queries to gpt-4o-mini. Only complex multi-step analytical queries and report generation hit GPT-4o. This alone cut costs by 41%.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Step 2: Semantic caching</h3>
      <p>Businesses ask the same 20–40 questions repeatedly. We use GPTCache with vector similarity matching to serve cached responses for semantically equivalent queries. Cache hit rate of 34% on a 30-day rolling window.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">Step 3: Prompt compression</h3>
      <p>We reduced average prompt token count by 28% using LLMLingua — a prompt compression library that removes semantically redundant tokens while preserving reasoning accuracy. The quality delta was imperceptible in user testing.</p>`
    },
    {
      id: 'design-system-scale',
      title: 'Building a design system that developers don\'t hate (lessons from 5 enterprise rollouts)',
      excerpt: 'Most design systems die because developers never adopt them. Here\'s the change management, tooling, and documentation strategy that made ours stick across 5 large engineering teams.',
      category: 'Product Design',
      author: 'Sofia Chen',
      authorRole: 'Head of Design',
      date: 'April 2026',
      readTime: '10 min read',
      content: `<p>We've built design systems for 5 enterprise clients in the past two years. Four of them are still actively used and maintained. Here's what separated those from the one that was quietly abandoned 6 months after delivery.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">1. Developer involvement from week 1</h3>
      <p>The systems that failed were designed in a vacuum and handed over. The systems that thrived had a lead developer reviewing Figma components alongside the design team from the start — catching implementations that are beautiful but expensive to build.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">2. Storybook is not optional</h3>
      <p>Zeroheight for documentation, Storybook for interactive component exploration. Every component gets: a default state, all variant states, an accessibility annotation, and a copy-paste code snippet. Reduce friction to zero and adoption follows.</p>
      <h3 style="color:var(--text);margin:28px 0 12px;font-size:20px;">3. Name things the same way in Figma and code</h3>
      <p>When the Figma component is called "Button / Primary / Large" and the code is <code style="color:var(--azure);">&lt;Button variant="primary" size="lg"&gt;</code>, there is no translation layer. Engineers can look at a design and know exactly what they're building. Sounds obvious; it rarely happens.</p>`
    }
  ],

  /* ── CAREERS ── */
  careers: [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$160K – $220K',
      description: 'Build and maintain production LLM pipelines, RAG systems, and custom ML models for our SaaS products and enterprise clients. Own the full lifecycle from experimentation to production monitoring.',
      requirements: [
        '4+ years of production Python and ML engineering',
        'Shipped at least one LLM-based product to 1,000+ users',
        'Deep familiarity with LangChain, LlamaIndex, or equivalent frameworks',
        'Experience with vector databases: Pinecone, Weaviate, or Qdrant',
        'Strong understanding of evaluation frameworks for LLM systems',
        'PhD in ML/CS or equivalent practical experience'
      ]
    },
    {
      title: 'Full-Stack Engineer (Node.js / React)',
      department: 'Engineering',
      location: 'Remote (EMEA / APAC)',
      type: 'Full-time',
      salary: '$120K – $170K',
      description: 'Work on the core product stack across multiple client projects and our own SaaS products. You\'ll own features end-to-end — from Figma handoff to database schema to API to React component.',
      requirements: [
        '4+ years in TypeScript, React, and Node.js',
        'Experience designing and documenting REST or GraphQL APIs',
        'Strong PostgreSQL skills: query optimisation, schema design, indexing',
        'Familiar with CI/CD pipelines and container-based deployments',
        'Can review a Figma design and ask the right questions before building',
        'Experience with SaaS multi-tenancy patterns is a plus'
      ]
    },
    {
      title: 'Senior Product Designer',
      department: 'Design',
      location: 'Remote (Anywhere)',
      type: 'Full-time',
      salary: '$100K – $150K',
      description: 'Design complex B2B and AI-powered product experiences from scratch. You\'ll work directly with engineering leads and clients, running your own research, producing high-fidelity Figma designs, and owning the design system.',
      requirements: [
        '4+ years designing complex SaaS or enterprise product UIs',
        'Expert Figma skills including component libraries and auto-layout',
        'Experience running user research and translating findings into design decisions',
        'Contributed to or built a design system from scratch',
        'Strong opinions on typography, motion, and accessibility',
        'Portfolio demonstrating clarity of thinking, not just visual polish'
      ]
    },
    {
      title: 'DevOps / Platform Engineer',
      department: 'Engineering',
      location: 'Remote (US / EU)',
      type: 'Full-time',
      salary: '$130K – $180K',
      description: 'Own the cloud infrastructure and developer platform for our SaaS products and client deployments. We operate on AWS and GCP; everything is Terraform, and we ship multiple times per day.',
      requirements: [
        '4+ years in DevOps or SRE roles at product companies',
        'Expert-level Terraform and Kubernetes (production-grade)',
        'AWS or GCP professional-level certification or equivalent experience',
        'Experience building CI/CD pipelines with GitHub Actions or similar',
        'Security mindset: SOC2 controls, network segmentation, secrets management',
        'On-call capacity with fair rotation and compensation'
      ]
    },
    {
      title: 'Enterprise Account Executive',
      department: 'Growth',
      location: 'San Francisco or Remote (US)',
      type: 'Full-time',
      salary: '$90K base + commission',
      description: 'Own the full sales cycle for enterprise software clients. You\'ll be selling custom development, AI integration programmes, and product licensing to VP/C-suite buyers at companies with $50M+ revenue.',
      requirements: [
        '4+ years B2B enterprise sales with ACV $150K+',
        'Comfortable with technical conversations around software architecture',
        'Track record of building relationships with VP and C-suite buyers',
        'Experience selling professional services or complex SaaS',
        'Excellent written and verbal communication — our clients are technical',
        'Self-directed; Softmaco has no SDR team — you build your own pipeline'
      ]
    }
  ],

  /* ── FAQS ── */
  faqs: [
    {
      question: 'How does Softmaco structure client engagements?',
      answer: 'Most client projects run as time-and-materials retainers with 2-week sprint cycles. Fixed-price engagements are available for well-scoped MVP builds. We always start with a 2-week paid Discovery phase — this protects you from building the wrong thing and us from under-scoping the work.'
    },
    {
      question: 'Do you work with early-stage startups or only enterprises?',
      answer: 'Both. About 40% of our client work is with Series A–C startups who need a senior engineering team without the hiring burden. The other 60% is enterprise digital transformation. Our minimum engagement is typically $25,000.'
    },
    {
      question: 'Who actually works on my project?',
      answer: 'Senior engineers and designers — not juniors supervised from a distance. Every project has a named Lead Engineer and a Lead Designer who attend all client calls. We keep team sizes small on purpose: 2–4 people per project rather than rotating headcount.'
    },
    {
      question: 'Who owns the IP and source code?',
      answer: '100% of custom code, designs, and architecture built for your project transfers to you on final payment. We retain no rights to client IP. Our internal SaaS products (RestroAI etc.) remain Softmaco IP.'
    },
    {
      question: 'Can we license your products for our own brand?',
      answer: 'Yes. RestroAI, InventoryPro, and SoftCRM all have white-label enterprise licensing options. Contact us for pricing — it is based on seat count and territory exclusivity requirements.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'An MVP with well-defined scope is typically 8–16 weeks. A full production product with AI integrations and cloud infrastructure is 16–26 weeks. We are always honest in scope sessions if a timeline is unrealistic — we\'d rather lose a deal than over-promise.'
    }
  ]
};
