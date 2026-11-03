// ============================================================
// PROJECT DATA — Central data store for all projects
// ============================================================

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Challenge {
  problem: string;
  solution: string;
  result: string;
}

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface DevelopmentStep {
  title: string;
  description: string;
}

export interface Project {
  // Core
  title: string;
  slug: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;

  // Meta
  year: string;
  role: string;
  duration: string;
  team: string;
  status: string;
  platform: string;
  categories: string[];

  // Links
  github?: string;
  liveDemo?: string;
  publication?: string;

  // Images
  thumbnail: string;
  gallery: GalleryItem[];
  architectureImage?: string;
  workflowImage?: string;

  // Case Study Content
  problemStatement: {
    problem: string;
    why: string;
    targetUsers: string;
    impact: string;
  };
  solutionOverview: {
    solution: string;
    whyChosen: string;
    howItWorks: string;
  };
  developmentProcess: DevelopmentStep[];
  features: Feature[];
  techStack: TechStackGroup[];
  challenges: Challenge[];
  metrics: Metric[];
  achievements: Achievement[];
  lessonsLearned: string[];

  // Technologies (flat array for hero badges)
  technologies: string[];
}

// ============================================================
// PROJECT DATA
// ============================================================

export const projects: Project[] = [
  // --- 0. Income Statement (PT LPP Agro Nusantara) ---
  {
    title: "Income Statement",
    slug: "income-statement",
    subtitle:
      "AI-Powered Financial Report Automation & Business Intelligence Platform at PT LPP Agro Nusantara",
    shortDescription:
      "An enterprise Business Intelligence and financial report automation web platform that extracts management report (Laporan Manajemen) tables from PDFs using Gemini Vision AI, syncs with Google Drive/Sheets & Supabase, and visualizes multi-year financial KPIs.",
    fullDescription:
      "Income Statement (Income Management System) is an end-to-end Business Intelligence and financial workflow automation web application developed for PT LPP Agro Nusantara. The platform streamlines the entire lifecycle of monthly Management Reports (Laporan Manajemen / LM)—from syncing master documents on Google Drive and Google Sheets, automatically detecting attachment pages and extracting structured financial tables (Pendapatan/PDPT, Laba Rugi/LR, Neraca/Balance Sheet, and Arus Kas/Cash Flow) via Google Gemini Vision API, to validating accounting figures, mapping them into standardized Excel templates, and persisting records into Supabase. Beyond automation, it features an interactive Executive BI Cockpit ('Ikhtisar Kinerja Keuangan'), hierarchical YTD/Annual/Quarterly/Monthly financial tables, multi-account trend comparisons, and a 4-stage collaborative review and approval workflow with cell-level commenting.",
    year: "2026",
    role: "Web BI & Full-Stack Developer",
    duration: "4 Months",
    team: "Internal BI Team",
    status: "Completed",
    platform: "Web Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/income-management-system",
    thumbnail: "/income statement/thumbnail.png",
    gallery: [
      {
        image: "/income statement/thumbnail.png",
        title: "Income Statement BI Platform Overview",
        description:
          "Business Intelligence and AI-assisted financial report management platform for PT LPP Agro Nusantara.",
      },
      {
        image: "/income statement/Screenshot 2026-11-03 103653.png",
        title: "Ikhtisar Kinerja Keuangan (Executive Summary)",
        description:
          "Executive financial summary with automated narrative insights, Revenue vs. RKAP & Net Profit trend chart, and 8 core financial KPI cards (Revenue, Operational EBITDA, Net Income, NOCF, Assets, Liabilities, Equity, and Capex).",
      },
      {
        image: "/income statement/Screenshot 2026-11-03 103751.png",
        title: "Profit & Loss BI Cockpit & KPI Strip",
        description:
          "Interactive Profit & Loss dashboard supporting Annual, Quarterly, YTD, and Monthly views, complete with margin badges (GPM, COGS, SG&A, NPM), Realisasi vs. RKAP trend lines, multi-year performance breakdown (2022–2026), and hierarchical table views.",
      },
      {
        image: "/income statement/Screenshot 2026-11-03 103854.png",
        title: "Multi-Account Trend Comparison & Hierarchical Table",
        description:
          "Dynamic sub-account selection allowing side-by-side realization trend comparisons and multi-year breakdowns across selected financial line items with depth-based hierarchical rows.",
      },
      {
        image: "/income statement/Screenshot 2026-11-03 103628.png",
        title: "Document Hub & Automated PDF Table Detection",
        description:
          "Centralized Laporan Manajemen (LM) document repository that automatically locates target financial tables (Pendapatan, Laba Rugi, Neraca, Arus Kas) by page number with inline PDF preview and one-click Excel/Tabular extraction.",
      },
      {
        image: "/income statement/Screenshot 2026-11-03 103527.png",
        title: "Multi-Stage Review, Revision & Approval Hub",
        description:
          "4-step financial governance workflow (Review → Revisi → Approval Admin → Terkirim) featuring side-by-side Realisasi vs. RKAP editing and cell-linked review comments.",
      },
    ],
    problemStatement: {
      problem:
        "Processing monthly Management Reports (Laporan Manajemen / LM) at PT LPP Agro Nusantara required manually locating financial tables inside multi-page PDF reports, re-typing figures into standardized Excel templates, reconciling RKAP vs. Realisasi across years, and compiling executive visualizations.",
      why: "Manual extraction and spreadsheet consolidation across four core financial statements (Pendapatan, Laba Rugi, Neraca, and Arus Kas) are time-consuming, prone to transcription errors, and delay executive decision-making.",
      targetUsers:
        "Executive Board, Finance & Accounting Division, and Business Intelligence / Planning Teams at PT LPP Agro Nusantara.",
      impact:
        "Automating PDF table extraction, validation, and BI visualization eliminates repetitive manual data entry, enforces accounting consistency via automated cross-checks, and delivers real-time financial insights.",
    },
    solutionOverview: {
      solution:
        "An integrated full-stack web platform combining an AI-powered PDF-to-Excel extraction pipeline (Gemini Vision API + automated accounting validation) with an interactive Executive BI Cockpit and a 4-stage collaborative review workflow.",
      whyChosen:
        "React 19, Vite, Tailwind CSS v4, TanStack Query, and Recharts deliver a responsive, high-density analytics cockpit. On the backend, Node.js/Express orchestrates Google Drive/Sheets APIs, pdf-lib/pdfjs-dist, Gemini Vision API for schema-guided table extraction, ExcelJS for template mapping, and Supabase for scalable relational storage and authentication.",
      howItWorks:
        "Master documents sync from Google Drive/Sheets or direct PDF/Excel uploads via a persistent, minimizable progress modal. The backend detects attachment pages and uses Gemini Vision with strict JSON schemas (PDPT, LR, NERACA, ARUS KAS) to extract figures. Validation services verify subtotals and account hierarchies before mapping data to Excel templates and Supabase, where reviewers audit, comment on specific cells, and approve reports to publish directly to the Executive BI Dashboard.",
    },
    developmentProcess: [
      {
        title: "Domain Analysis & Financial Template Modeling",
        description:
          "Analyzed PT LPP Agro Nusantara's monthly Laporan Manajemen (LM) PDF structures, 2022–2026 RKAP/Realisasi schemas, and canonical account hierarchies across Revenue, Profit & Loss, Balance Sheet, and Cash Flow.",
      },
      {
        title: "AI Extraction & Validation Pipeline",
        description:
          "Built pdf-lib/pdfjs-dist attachment detectors, engineered schema-constrained Gemini Vision extractors (geminiVisionExtractor.js), and implemented automated accounting validation rules (validationService.js) and Excel template mappers (templateMapper.js).",
      },
      {
        title: "Google Workspace to Supabase Migration",
        description:
          "Integrated Google Drive & Sheets OAuth2 services for master data synchronization and built automated migration pipelines (migrateGoogleSheetsToSupabase.js) to transition historical tabular data into Supabase.",
      },
      {
        title: "Executive BI Cockpit & Hierarchical Engine",
        description:
          "Developed the BI calculation engine (buildTypeKpis, buildMonthlyData, buildHierarchicalTableRowsYTD) powering Ikhtisar Kinerja Keuangan, KPI strips, and interactive Recharts visualizations.",
      },
      {
        title: "Collaborative Review Hub & Persistent Upload UX",
        description:
          "Implemented the 4-stage review/approval workflow (ReviewHub.jsx) with cell-linked comments and a cross-page minimizable PDF processing modal (PdfUploadProgressModal).",
      },
      {
        title: "Automated Testing & Deployment",
        description:
          "Wrote unit and component test suites using Vitest for financial calculations, LM row matching, and modal state persistence, and configured production deployment on Vercel.",
      },
    ],
    features: [
      {
        icon: "dashboard",
        title: "Executive Financial Summary (Ikhtisar)",
        description:
          "Automated executive narrative and 8-card KPI overview (Revenue, EBITDA, Net Income, NOCF, Assets, Liabilities, Equity, Capex) with RKAP & YoY badges.",
      },
      {
        icon: "classification",
        title: "Gemini Vision PDF Table Extraction",
        description:
          "Automatically detects target pages in PDF reports and extracts structured PDPT, Laba Rugi, Neraca, and Arus Kas tables using schema-guided Gemini Vision AI.",
      },
      {
        icon: "chart",
        title: "Multi-Mode BI Cockpit & Trend Comparison",
        description:
          "Analyze Revenue, Profit Loss, Cash Flow, and Balance Sheet across Annual, Quarterly, YTD, and Monthly modes with multi-account trend comparison charts.",
      },
      {
        icon: "workflow",
        title: "4-Stage Review & Cell-Level Comments",
        description:
          "Structured governance workflow (Review → Revisi → Approval Admin → Terkirim) with inline table editing and comments linked directly to specific cells/sheets.",
      },
      {
        icon: "report",
        title: "Automated Excel Mapping & Batch ZIP",
        description:
          "Maps extracted financial rows into standardized multi-sheet Excel templates with canonical account matching (lmRows.js) and batch ZIP export.",
      },
      {
        icon: "upload",
        title: "Drive/Sheets Sync & Persistent Modal",
        description:
          "Synchronizes master reports with Google Drive/Sheets and processes PDF uploads in the background via a minimizable cross-page floating widget.",
      },
    ],
    techStack: [
      {
        category: "Frontend & BI Visualization",
        items: [
          "React 19",
          "Vite",
          "Tailwind CSS v4",
          "TanStack Query",
          "Recharts",
          "Headless UI",
          "Framer Motion",
        ],
      },
      {
        category: "Backend & API",
        items: ["Node.js", "Express.js", "REST API"],
      },
      {
        category: "AI & Document Processing",
        items: [
          "Google Gemini Vision API",
          "pdf-lib & pdfjs-dist",
          "ExcelJS & SheetJS (xlsx)",
          "PapaParse",
        ],
      },
      {
        category: "Database & Cloud Integration",
        items: [
          "Supabase (PostgreSQL & Auth)",
          "Google Drive API",
          "Google Sheets API (OAuth2)",
        ],
      },
      {
        category: "Testing & Deployment",
        items: ["Vitest", "Vercel", "Git"],
      },
    ],
    challenges: [
      {
        problem:
          "Inconsistent account naming and layout variations across multi-year (2022–2026) monthly PDF Management Reports (Laporan Manajemen).",
        solution:
          "Engineered a multi-tier canonical row matcher (matchExact, matchCanonical, matchKeyword in lmRows.js & templateMapper.js) combined with schema-guided Gemini Vision prompts and post-extraction accounting validation (validationService.js).",
        result:
          "Achieved reliable automated mapping across all 4 core financial statements (Pendapatan, Laba Rugi, Neraca, Arus Kas) with automated discrepancy flagging.",
      },
      {
        problem:
          "Computing accurate YTD, Quarterly, Annual, and Monthly aggregations when combining stock metrics (Balance Sheet/Ending Cash) with flow metrics (Revenue/Profit Loss) and RKAP targets.",
        solution:
          "Architected a dedicated BI calculation layer (aggregation.js, calculations.js, typeKpi.js, ikhtisarModel.js) that distinguishes flow vs. point-in-time accounts, computes effective YTD cutoffs, and generates dynamic depth-colored hierarchical table rows.",
        result:
          "Delivered instant, consistent financial calculations and YoY/RKAP achievement indicators across all BI cockpit views.",
      },
      {
        problem:
          "Long-running PDF extraction pipelines interrupted user navigation when switching between the Document Hub, Review Queue, and BI Dashboards.",
        solution:
          "Built a persistent, minimizable floating progress modal (PdfUploadProgressModal) mounted at the application shell level with real-time step polling and safe close-confirmation guardrails.",
        result:
          "Users can freely browse dashboards and review queues while batch PDF extractions run seamlessly in the background.",
      },
    ],
    metrics: [
      {
        value: "4",
        label: "Core Statements",
        description: "Pendapatan, Laba Rugi, Neraca & Arus Kas",
      },
      {
        value: "55+",
        label: "LM Reports Managed",
        description: "Multi-year monthly management reports (2022–2026)",
      },
      {
        value: "8+",
        label: "Executive KPIs",
        description: "Real-time RKAP achievement & YoY growth indicators",
      },
      {
        value: "4-Stage",
        label: "Approval Workflow",
        description: "Review, Revision, Admin Approval & Published",
      },
      {
        value: "134",
        label: "Project Modules",
        description: "Full-stack React, Express, AI & BI architecture",
      },
      {
        value: "~90%",
        label: "Faster Processing",
        description: "Reduction in manual PDF-to-Excel report preparation",
      },
    ],
    achievements: [],
    lessonsLearned: [
      "Combining LLM vision extraction (Gemini Vision API) with deterministic post-processing rules and accounting checksum validations is essential when dealing with enterprise financial data where precision is non-negotiable.",
      "Separating raw tabular storage from a dedicated BI view-model layer (aggregation, KPI builders, and canonical row matchers) keeps complex financial dashboards fast, testable, and easy to maintain.",
      "Human-in-the-loop governance—such as a structured Review/Revision queue and cell-linked commenting—builds executive trust when transitioning from manual spreadsheets to AI-assisted automation.",
      "Migrating from Google Sheets as a primary datastore to Supabase PostgreSQL significantly improved query performance, multi-user concurrency, and role-based access control.",
    ],
    technologies: [
      "React",
      "Gemini AI",
      "Supabase",
      "Node.js",
      "Tailwind CSS",
      "Recharts",
    ],
  },
  // --- 1. EduDetect ---
  {
    title: "EduDetect",
    slug: "edudetect",
    subtitle: "Image Detection and Classification for Students Activity",
    shortDescription:
      "An application system that can detect and classify students activities during class using YOLOv11 and Gemini model.",
    fullDescription:
      "EduDetect is an intelligent monitoring system designed to detect and classify student activities during classroom sessions in real-time. Leveraging the power of YOLOv11 for object detection and Google's Gemini model for advanced classification, the system can identify various student behaviors such as studying, sleeping, using phones, or engaging in discussions. This project was developed as a thesis/final project, aiming to provide educators with actionable insights into classroom engagement without requiring manual observation.",
    year: "2025",
    role: "Machine Learning Engineer & Full-Stack Developer",
    duration: "6 Months",
    team: "4 People",
    status: "Completed",
    platform: "Web Application (Streamlit)",
    categories: ["ml"],
    github: "https://github.com/rahalsaabiumara/sistem-klasifikasi-deteksi",
    liveDemo:
      "https://sistem-klasifikasi-deteksi-hhaknatcdz5yuztfx8graa.streamlit.app/",
    thumbnail: "/proyek1.png",
    gallery: [
      {
        image: "/edudetect1.png",
        title: "Main Dashboard",
        description:
          "The main detection dashboard showing real-time student activity monitoring.",
      },
      {
        image: "/edudetect2.png",
        title: "Detection Results",
        description:
          "YOLOv11 detection output with bounding boxes and activity labels.",
      },
      {
        image: "/edudetect3.png",
        title: "Classification Report",
        description:
          "Gemini-powered classification report with detailed activity analysis.",
      },
    ],
    problemStatement: {
      problem:
        "Monitoring student engagement and activities during classroom sessions is a challenging and time-consuming task for educators, especially in large classes.",
      why: "Traditional observation methods are subjective, inconsistent, and cannot scale. There is a need for an automated system that can provide objective, real-time insights into student behavior patterns.",
      targetUsers:
        "Educators, lecturers, and academic institutions seeking to improve classroom engagement monitoring and teaching effectiveness.",
      impact:
        "Without proper monitoring, disengaged students may fall behind academically. An automated detection system can help educators identify at-risk students early and adjust teaching strategies accordingly.",
    },
    solutionOverview: {
      solution:
        "A web-based application that uses YOLOv11 for real-time object detection to identify students and their postures, combined with Google Gemini for intelligent classification of detected activities.",
      whyChosen:
        "YOLOv11 was chosen for its state-of-the-art detection speed and accuracy, while Gemini provides superior contextual understanding for activity classification. Streamlit enables rapid deployment as a web application.",
      howItWorks:
        "The system captures classroom images/video, processes them through the YOLOv11 model for student detection, then uses Gemini to classify detected activities. Results are displayed in real-time on a Streamlit dashboard with analytics and reports.",
    },
    developmentProcess: [
      {
        title: "Research & Literature Review",
        description:
          "Studied existing approaches to student activity recognition, compared YOLO versions, and explored multimodal AI models.",
      },
      {
        title: "Dataset Collection & Preparation",
        description:
          "Collected and annotated classroom images, performed data augmentation, and split datasets for training and validation.",
      },
      {
        title: "Model Training",
        description:
          "Trained YOLOv11 on custom dataset, fine-tuned hyperparameters, and integrated Gemini API for classification enhancement.",
      },
      {
        title: "Application Development",
        description:
          "Built the Streamlit web interface with real-time detection, dashboard analytics, and report generation features.",
      },
      {
        title: "Testing & Evaluation",
        description:
          "Conducted extensive testing with various classroom scenarios, measured accuracy metrics, and performed user acceptance testing.",
      },
      {
        title: "Deployment",
        description:
          "Deployed the application on Streamlit Cloud for public access and demonstration.",
      },
    ],
    features: [
      {
        icon: "detection",
        title: "Real-time Detection",
        description:
          "Detect and track student activities in real-time using YOLOv11.",
      },
      {
        icon: "classification",
        title: "AI Classification",
        description:
          "Intelligent activity classification powered by Google Gemini model.",
      },
      {
        icon: "dashboard",
        title: "Analytics Dashboard",
        description:
          "Comprehensive dashboard with engagement metrics and activity statistics.",
      },
      {
        icon: "report",
        title: "Report Generation",
        description:
          "Generate detailed reports on classroom activity patterns and trends.",
      },
      {
        icon: "upload",
        title: "Image/Video Upload",
        description:
          "Support for both image and video input for flexible monitoring.",
      },
      {
        icon: "chart",
        title: "Data Visualization",
        description:
          "Visual charts and graphs for easy interpretation of detection results.",
      },
    ],
    techStack: [
      { category: "Machine Learning", items: ["YOLOv11", "Google Gemini", "Ultralytics"] },
      { category: "Backend", items: ["Python", "Streamlit"] },
      { category: "Data Processing", items: ["OpenCV", "NumPy", "Pandas"] },
      { category: "Visualization", items: ["Matplotlib", "Plotly"] },
      { category: "Deployment", items: ["Streamlit Cloud"] },
      { category: "Tools", items: ["Jupyter Notebook", "Google Colab", "Git"] },
    ],
    challenges: [
      {
        problem:
          "Low accuracy in detecting students with similar postures in crowded classroom environments.",
        solution:
          "Implemented data augmentation techniques and fine-tuned YOLOv11 with custom anchor boxes optimized for classroom layouts.",
        result:
          "Improved detection accuracy by 15% in dense classroom scenarios.",
      },
      {
        problem:
          "High latency when processing video streams through both YOLO and Gemini models sequentially.",
        solution:
          "Implemented asynchronous processing pipeline and batch inference for Gemini classification.",
        result:
          "Reduced processing time by 40%, achieving near real-time performance.",
      },
      {
        problem:
          "Limited training data for specific student activities like note-taking vs. phone usage.",
        solution:
          "Combined synthetic data generation with transfer learning from pre-trained models.",
        result:
          "Achieved robust classification across 6+ activity categories with limited training samples.",
      },
    ],
    metrics: [
      { value: "92%", label: "Detection Accuracy", description: "Overall mAP score on test dataset" },
      { value: "0.89", label: "mAP@50", description: "Mean Average Precision at IoU 0.50" },
      { value: "1500+", label: "Training Images", description: "Custom annotated classroom images" },
      { value: "6", label: "Activity Classes", description: "Distinct student activities detected" },
      { value: "<2s", label: "Processing Time", description: "Per-frame detection and classification" },
      { value: "95%", label: "User Satisfaction", description: "Based on user acceptance testing" },
    ],
    achievements: [
      {
        title: "Finalist Samsung Innovation Campus Batch 6",
        description:
          "Successfully developed and defended as a AI and IoT innocvation.",
        year: "2025",
      },
      {
        title: "2nd Place Software Development Unity Competition",
        description:
          "Successfully developed and defended as a Web-based application for Software Development Competition.",
        year: "2026",
      },
      {
        title: "Thesis Project — Undergraduate Final Project",
        description:
          "Successfully developed and defended as undergraduate thesis at Universitas Negeri Yogyakarta.",
        year: "2026",
      },
    ],
    lessonsLearned: [
      "Real-time AI systems require careful optimization of the inference pipeline to balance accuracy and speed.",
      "Data quality is more important than data quantity — well-annotated, diverse training data significantly outperforms large but noisy datasets.",
      "Combining multiple AI models (YOLO + Gemini) provides better results than relying on a single model, but requires thoughtful integration.",
      "User feedback during development is crucial — educators provided insights that significantly improved the system's practical usefulness.",
    ],
    technologies: ["Python", "YOLOv11", "Gemini", "Streamlit", "OpenCV"],
  },

  // --- 2. NutriDetect ---
  {
    title: "NutriDetect",
    slug: "nutridetect",
    subtitle: "Mobile Nutrition Tracking Application",
    shortDescription:
      "A mobile application that helps users track their daily nutrition intake and maintain a healthy lifestyle with AI-powered food recognition and personalized recommendations.",
    fullDescription:
      "NutriDetect is a comprehensive mobile nutrition tracking application that leverages AI-powered food recognition technology to help users monitor their daily nutrition intake effortlessly. The app provides personalized dietary recommendations, nutritional analysis, and progress tracking to support users in maintaining a healthy lifestyle. Built with modern web technologies, NutriDetect offers an intuitive user experience with real-time food detection capabilities.",
    year: "2025",
    role: "Machine Learning Engineering",
    duration: "4 Months",
    team: "4 People",
    status: "Completed",
    platform: "Mobile Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/nutridetect-nutritiontrack",
    thumbnail: "/NutriDetect-2 1.png",
    gallery: [
    ],
    problemStatement: {
      problem:
        "Many people struggle to track their daily nutrition intake accurately, leading to poor dietary habits and health issues.",
      why: "Manual food logging is tedious and often inaccurate. Users need a smarter, automated way to track what they eat and understand its nutritional value.",
      targetUsers:
        "Health-conscious individuals, fitness enthusiasts, and anyone looking to improve their dietary habits through technology.",
      impact:
        "Poor nutrition awareness contributes to obesity, malnutrition, and chronic diseases. An accessible tracking tool can empower users to make informed dietary choices.",
    },
    solutionOverview: {
      solution:
        "A mobile app with AI-powered food recognition that automatically identifies food items and provides detailed nutritional information, tracking, and personalized recommendations.",
      whyChosen:
        "Next.js and React were chosen for cross-platform compatibility and a smooth user experience. AI food recognition eliminates the friction of manual logging.",
      howItWorks:
        "Users simply take a photo of their food, the AI model identifies the items and retrieves nutritional data. The app tracks daily intake, visualizes progress, and provides personalized dietary suggestions.",
    },
    developmentProcess: [
      { title: "Requirement Analysis", description: "Gathered user requirements and defined core features through surveys and competitor analysis." },
      { title: "UI/UX Design", description: "Designed intuitive mobile-first interfaces with focus on ease of use and accessibility." },
      { title: "Frontend Development", description: "Built responsive UI components using Next.js and React with smooth animations." },
      { title: "Backend & API Integration", description: "Developed backend services and integrated nutrition database APIs." },
      { title: "Testing & QA", description: "Performed comprehensive testing including unit tests, integration tests, and user acceptance testing." },
      { title: "Deployment", description: "Deployed the application and configured CI/CD pipeline for continuous updates." },
    ],
    features: [
      { icon: "camera", title: "Food Recognition", description: "AI-powered camera for automatic food identification." },
      { icon: "chart", title: "Nutrition Tracking", description: "Track daily calories, macros, and micronutrients." },
      { icon: "target", title: "Personalized Goals", description: "Set and track personalized nutrition goals." },
      { icon: "report", title: "Progress Reports", description: "Weekly and monthly nutrition progress reports." },
      { icon: "search", title: "Food Database", description: "Comprehensive food database with nutritional information." },
      { icon: "notification", title: "Reminders", description: "Meal and hydration reminders throughout the day." },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "CSS Modules"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Tools", items: ["Git", "VS Code", "Figma"] },
    ],
    challenges: [
      {
        problem: "Accurately recognizing diverse food items from different angles and lighting conditions.",
        solution: "Used transfer learning with a pre-trained image classification model and augmented training data with varied conditions.",
        result: "Achieved 85% accuracy in food recognition across 50+ food categories.",
      },
      {
        problem: "Maintaining app performance with real-time camera processing on mobile devices.",
        solution: "Optimized model inference with quantization and implemented progressive loading for UI elements.",
        result: "Reduced inference time to under 1 second on most mobile devices.",
      },
    ],
    metrics: [
      { value: "85%", label: "Recognition Accuracy", description: "Food identification accuracy" },
      { value: "50+", label: "Food Categories", description: "Supported food types" },
      { value: "<1s", label: "Detection Speed", description: "Average inference time" },
      { value: "3", label: "Team Members", description: "Collaborative development" },
    ],
    achievements: [
      {
        title: "2nd Place IDTC Software Competition",
        description:
          "Successfully developed and defended as an AI-based Mobile Application.",
        year: "2025",
      },
    ],
    lessonsLearned: [
      "Mobile-first design requires different optimization strategies compared to desktop web applications.",
      "Team collaboration and clear task division are essential for meeting deadlines in group projects.",
      "User testing revealed that simplicity in food logging is the key feature — users want minimal steps to log a meal.",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB"],
  },

  // --- 3. SisManProBis ---
  {
    title: "SisManProBis",
    slug: "sismanprobis",
    subtitle: "Business Process Management System at PT Dirgantara Indonesia",
    shortDescription:
      "A web-based system for managing business processes, improving operational efficiency, and providing real-time insights into business performance at PT Dirgantara Indonesia.",
    fullDescription:
      "SisManProBis (Sistem Manajemen Proses Bisnis) is a comprehensive web-based business process management system developed for PT Dirgantara Indonesia (Indonesian Aerospace). The system streamlines business process documentation, monitoring, and optimization across departments. Built with Laravel and PostgreSQL, it provides real-time dashboards, process flow visualization, and automated reporting to enhance operational efficiency and decision-making at one of Indonesia's leading aerospace companies.",
    year: "2025",
    role: "Full-Stack Web Developer",
    duration: "3 Months",
    team: "2 People",
    status: "Completed",
    platform: "Web Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/sismanprobis-ptdi",
    thumbnail: "/Group 1.png",
    gallery: [
      {
        image: "/Group 1.png",
        title: "Dashboard Overview",
        description: "Main dashboard showing business process metrics and KPIs.",
      },
      {
        image: "/dirgantara1.png",
        title: "",
        description: "",
      },
      {
        image: "/dirgantara2.png",
        title: "",
        description: "",
      },
    ],
    problemStatement: {
      problem: "PT Dirgantara Indonesia lacked a centralized digital system for managing and monitoring business processes across departments.",
      why: "Manual process management using spreadsheets and documents led to inefficiencies, data inconsistencies, and difficulty in tracking process performance.",
      targetUsers: "Management and staff at PT Dirgantara Indonesia responsible for business process oversight and optimization.",
      impact: "Inefficient process management in an aerospace company can lead to production delays, quality issues, and increased operational costs.",
    },
    solutionOverview: {
      solution: "A centralized web application for documenting, monitoring, and analyzing business processes with role-based access control and real-time reporting.",
      whyChosen: "Laravel was chosen for its robust MVC architecture and built-in authentication. PostgreSQL provides reliable data management for complex business data. Docker ensures consistent deployment.",
      howItWorks: "The system allows managers to define business processes, assign responsibilities, track progress, and generate reports. Real-time dashboards provide KPI monitoring and process performance analytics.",
    },
    developmentProcess: [
      { title: "Business Analysis", description: "Conducted interviews and workshops with PT DI stakeholders to understand existing processes and pain points." },
      { title: "System Design", description: "Designed database schema, system architecture, and UI/UX mockups based on requirements." },
      { title: "Development", description: "Implemented the system using Laravel, PostgreSQL, and containerized with Docker." },
      { title: "Integration Testing", description: "Tested all modules and integrations with existing PT DI systems." },
      { title: "User Training", description: "Conducted training sessions for end-users and created documentation." },
      { title: "Deployment", description: "Deployed the system on PT DI's internal infrastructure." },
    ],
    features: [
      { icon: "workflow", title: "Process Management", description: "Create, edit, and manage business process workflows." },
      { icon: "dashboard", title: "Real-time Dashboard", description: "Live KPI monitoring and process performance metrics." },
      { icon: "auth", title: "Role-Based Access", description: "Secure access control with department-level permissions." },
      { icon: "report", title: "Automated Reports", description: "Generate and export process reports in multiple formats." },
      { icon: "search", title: "Process Search", description: "Quick search and filter across all business processes." },
      { icon: "notification", title: "Notifications", description: "Automated alerts for process deadlines and updates." },
    ],
    techStack: [
      { category: "Backend", items: ["Laravel", "PHP"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Frontend", items: ["Blade", "Bootstrap", "JavaScript"] },
      { category: "Deployment", items: ["Docker", "Nginx"] },
      { category: "Tools", items: ["Git", "Postman", "Figma"] },
    ],
    challenges: [
      {
        problem: "Complex business process hierarchies with multiple dependencies and approval workflows.",
        solution: "Designed a flexible database schema supporting nested processes and implemented a state machine for workflow management.",
        result: "Successfully modeled 20+ unique business processes with multi-level approval chains.",
      },
      {
        problem: "Integration with existing legacy systems at PT Dirgantara Indonesia.",
        solution: "Created API adapters and data transformation layers to bridge the new system with legacy data sources.",
        result: "Achieved seamless data synchronization without disrupting existing operations.",
      },
    ],
    metrics: [
      { value: "20+", label: "Business Processes", description: "Processes digitized" },
      { value: "4", label: "Departments", description: "Departments served" },
      { value: "50+", label: "Active Users", description: "Daily active users" },
      { value: "30%", label: "Efficiency Gain", description: "Improvement in process tracking time" },
    ],
    achievements: [],
    lessonsLearned: [
      "Working with enterprise clients requires thorough requirement gathering and constant communication to align expectations.",
      "Docker containerization greatly simplifies deployment and ensures consistency across development and production environments.",
      "Understanding the domain (aerospace business processes) is as important as technical skills for building effective solutions.",
    ],
    technologies: ["Laravel", "PostgreSQL", "Docker", "PHP"],
  },

  // --- 4. Sales Analytics Dashboard ---
  {
    title: "Sales Analytics Dashboard",
    slug: "sales-analytics",
    subtitle: "Interactive Data Analysis and Visualization Platform",
    shortDescription:
      "A dashboard that displays total sales by product, region, and month, using available transaction data to provide data-driven insights into sales.",
    fullDescription:
      "The Sales Analytics Dashboard is an interactive data analysis platform built with Python and Streamlit that transforms raw transaction data into actionable business insights. The dashboard provides comprehensive visualizations of sales performance across multiple dimensions including products, regions, time periods, and customer segments. With features like dynamic filtering, trend analysis, and predictive insights, it empowers business stakeholders to make data-driven decisions.",
    year: "2026",
    role: "Data Analyst & Developer",
    duration: "1 Month",
    team: "1 Person (Solo Project)",
    status: "Completed",
    platform: "Web Application (Streamlit)",
    categories: ["ml"],
    github: "https://github.com/rahalsaabiumara/dashboard-analisis-penjualan",
    liveDemo: "https://z5petewb56fkupiwszs9di.streamlit.app/",
    thumbnail: "/project-ml.png",
    gallery: [
      {
        image: "/dataan1.png",
        title: "Sales Overview",
        description: "Main dashboard showing total sales metrics and trends.",
      },
      {
        image: "/dataan2.png",
        title: "Regional Analysis",
        description: "Geographic breakdown of sales performance by region.",
      },
      {
        image: "/dataan3.png",
        title: "Data Cleaning Insight",
        description: "Data cleaning process and insights.",
      },
    ],
    problemStatement: {
      problem: "Businesses often struggle to gain clear insights from raw transaction data, making it difficult to identify sales trends and optimize strategies.",
      why: "Manual analysis using spreadsheets is slow, error-prone, and cannot handle large datasets effectively. Interactive dashboards provide instant, visual insights.",
      targetUsers: "Business managers, sales teams, and data analysts who need quick access to sales performance metrics and trends.",
      impact: "Without proper analytics, businesses miss opportunities for growth, fail to identify underperforming products, and make suboptimal strategic decisions.",
    },
    solutionOverview: {
      solution: "An interactive web dashboard that automatically processes transaction data and generates comprehensive visualizations with filtering and drill-down capabilities.",
      whyChosen: "Python offers powerful data processing libraries (Pandas, NumPy), while Streamlit enables rapid development of interactive web dashboards without frontend complexity.",
      howItWorks: "The dashboard ingests CSV/Excel transaction data, processes it using Pandas, and generates interactive Plotly visualizations. Users can filter by date range, product category, region, and more.",
    },
    developmentProcess: [
      { title: "Data Collection", description: "Gathered and cleaned transaction datasets for analysis." },
      { title: "Exploratory Analysis", description: "Performed EDA using Jupyter Notebook to identify key metrics and patterns." },
      { title: "Dashboard Design", description: "Designed dashboard layout and selected appropriate visualization types." },
      { title: "Development", description: "Built interactive dashboard using Streamlit with Plotly visualizations." },
      { title: "Testing", description: "Validated calculations and tested with various data scenarios." },
      { title: "Deployment", description: "Deployed to Streamlit Cloud for public access." },
    ],
    features: [
      { icon: "chart", title: "Interactive Charts", description: "Dynamic charts with hover details and zoom capabilities." },
      { icon: "filter", title: "Dynamic Filtering", description: "Filter data by date, product, region, and customer segment." },
      { icon: "trend", title: "Trend Analysis", description: "Identify sales trends and seasonal patterns over time." },
      { icon: "export", title: "Data Export", description: "Export filtered data and reports in CSV format." },
      { icon: "metric", title: "KPI Cards", description: "At-a-glance KPI cards showing key metrics." },
      { icon: "compare", title: "Comparison View", description: "Compare performance across different dimensions." },
    ],
    techStack: [
      { category: "Backend", items: ["Python", "Streamlit"] },
      { category: "Data Processing", items: ["Pandas", "NumPy"] },
      { category: "Visualization", items: ["Plotly", "Matplotlib"] },
      { category: "Deployment", items: ["Streamlit Cloud"] },
      { category: "Tools", items: ["Jupyter Notebook", "Git"] },
    ],
    challenges: [
      {
        problem: "Handling large datasets without causing performance issues in the Streamlit dashboard.",
        solution: "Implemented data caching using Streamlit's @st.cache_data decorator and optimized DataFrame operations.",
        result: "Dashboard loads in under 3 seconds even with datasets containing 100K+ rows.",
      },
    ],
    metrics: [
      { value: "100K+", label: "Data Points", description: "Transaction records analyzed" },
      { value: "8+", label: "Chart Types", description: "Different visualization types" },
      { value: "<3s", label: "Load Time", description: "Dashboard loading speed" },
      { value: "5", label: "Filter Dimensions", description: "Interactive filter categories" },
    ],
    achievements: [],
    lessonsLearned: [
      "Data cleaning and preprocessing often takes more time than building the actual dashboard — invest in data quality upfront.",
      "Choosing the right visualization type for each metric is crucial for effective communication of insights.",
      "Streamlit's caching mechanisms are essential for maintaining dashboard performance with large datasets.",
    ],
    technologies: ["Python", "Jupyter Notebook", "Streamlit", "Plotly"],
  },

  // --- 5. NUNA ---
  {
    title: "NUNA",
    slug: "nuna",
    subtitle: "Mental Health Monitoring Mobile Application",
    shortDescription:
      "A mobile application designed to support mental health monitoring and self-care by providing emotional tracking, AI-powered chatbot support, and personalized coping strategies.",
    fullDescription:
      "NUNA is a comprehensive mental health monitoring mobile application designed to support users in their emotional well-being journey. The app provides daily mood tracking, an AI-powered chatbot for emotional support, personalized coping strategies, and community features. Built with React and Firebase, NUNA offers a safe, private space for users to monitor their mental health patterns, access professional resources, and connect with supportive communities.",
    year: "2025",
    role: "QA & Machine Learning Engineer",
    duration: "3 Months",
    team: "4 People",
    status: "Completed",
    platform: "Mobile Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/nuna-mentalhealthapp",
    thumbnail: "/NUNA-2 1.png",
    gallery: [
    ],
    problemStatement: {
      problem: "Mental health issues among young adults are increasing, but access to mental health support and self-monitoring tools remains limited and stigmatized.",
      why: "Many people hesitate to seek professional help due to stigma, cost, or accessibility barriers. A digital self-care tool can serve as a first step toward better mental health awareness.",
      targetUsers: "Young adults and students who want to monitor their emotional well-being and access mental health resources in a private, judgment-free environment.",
      impact: "Unaddressed mental health issues can lead to academic decline, relationship problems, and in severe cases, self-harm. Early awareness and coping tools can prevent escalation.",
    },
    solutionOverview: {
      solution: "A mobile app featuring mood tracking, AI chatbot support, guided coping exercises, and community features — creating a holistic mental health support ecosystem.",
      whyChosen: "React enables cross-platform development. Firebase provides real-time data sync and secure authentication. The AI chatbot uses NLP for empathetic, context-aware responses.",
      howItWorks: "Users log their daily mood, the app tracks patterns and provides insights. The AI chatbot offers 24/7 emotional support. Guided exercises and community forums provide additional coping resources.",
    },
    developmentProcess: [
      { title: "User Research", description: "Conducted surveys and interviews with target users to understand mental health app needs." },
      { title: "UI/UX Design", description: "Designed calming, accessible interfaces with focus on emotional safety and ease of use." },
      { title: "Frontend Development", description: "Built mobile-optimized React components with smooth transitions and animations." },
      { title: "Backend Integration", description: "Integrated Firebase for authentication, real-time database, and cloud functions." },
      { title: "AI Chatbot Development", description: "Developed and trained the AI chatbot for empathetic conversational support." },
      { title: "Testing & Launch", description: "Performed usability testing with focus groups and iterated based on feedback." },
    ],
    features: [
      { icon: "mood", title: "Mood Tracking", description: "Daily emotional logging with visual analytics and pattern recognition." },
      { icon: "chat", title: "AI Chatbot", description: "24/7 AI-powered chatbot for emotional support and coping guidance." },
      { icon: "meditation", title: "Guided Exercises", description: "Breathing exercises, meditation, and mindfulness activities." },
      { icon: "community", title: "Community Support", description: "Anonymous community forums for sharing and support." },
      { icon: "insight", title: "Mood Insights", description: "Weekly and monthly mood pattern analysis and insights." },
      { icon: "resource", title: "Professional Resources", description: "Directory of mental health professionals and hotlines." },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Firebase", "Cloud Functions"] },
      { category: "Database", items: ["Firestore"] },
      { category: "AI/ML", items: ["Natural Language Processing", "Chatbot API"] },
      { category: "Tools", items: ["Git", "Figma", "VS Code"] },
    ],
    challenges: [
      {
        problem: "Creating an AI chatbot that responds with empathy and avoids harmful suggestions for sensitive mental health topics.",
        solution: "Implemented content safety filters, escalation protocols for crisis detection, and partnered with mental health professionals for response validation.",
        result: "Achieved a safe, supportive chatbot experience with 0 harmful response incidents during testing.",
      },
      {
        problem: "Ensuring user privacy and data security for sensitive mental health data.",
        solution: "Implemented end-to-end encryption, anonymous accounts, and GDPR-compliant data handling with Firebase security rules.",
        result: "All user mental health data is encrypted and users can choose fully anonymous participation.",
      },
    ],
    metrics: [
      { value: "5", label: "Team Members", description: "Collaborative agile team" },
      { value: "100+", label: "Test Users", description: "User acceptance testing participants" },
      { value: "4.5/5", label: "User Rating", description: "Average satisfaction score" },
      { value: "85%", label: "Daily Retention", description: "Users who log mood daily" },
    ],
    achievements: [
      {
        title: "1st Place Software Development Unity #13",
        description:
          "Successfully developed NUNA as a complete mental health monitoring mobile application with innovative features and high-quality user experience.",
        year: "2025",
      },
    ],
    lessonsLearned: [
      "Designing for mental health requires deep empathy — every UI decision impacts the user's emotional experience.",
      "AI in sensitive domains needs robust safety mechanisms and professional oversight.",
      "Team collaboration across disciplines (design, development, psychology) produces more thoughtful solutions.",
      "Privacy-first architecture should be designed from day one, not added as an afterthought.",
    ],
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },

  // --- 6. Website Kemahasiswaan ---
  {
    title: "Website Kemahasiswaan",
    slug: "website-kemahasiswaan",
    subtitle: "Student Affairs Management System",
    shortDescription:
      "A web-based system for managing student organizations, providing event management, membership tracking, and communication tools to enhance student engagement and activities.",
    fullDescription:
      "Website Kemahasiswaan is a comprehensive student affairs management system designed for university environments. The platform centralizes the management of student organizations, events, memberships, and communications. Built with Laravel and MySQL, the system provides administrators with tools to oversee student activities, while giving students easy access to organization information, event registration, and community engagement features.",
    year: "2023",
    role: "Full-Stack Web Developer",
    duration: "4 Months",
    team: "2 People",
    status: "Completed",
    platform: "Web Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/Website-Kemahasiswaan",
    thumbnail: "/Group 2.png",
    gallery: [
      {
        image: "/Group 2.png",
        title: "Homepage",
        description: "Main landing page with organization listings and upcoming events.",
      },
      {
        image: "/Group 2.png",
        title: "Dashboard",
        description: "Admin dashboard for managing organizations and student data.",
      },
    ],
    problemStatement: {
      problem: "University student affairs management relies on scattered systems and manual processes, making it difficult to coordinate organizations and events effectively.",
      why: "Without a centralized platform, information about student organizations is fragmented, event coordination is inefficient, and student participation tracking is nearly impossible.",
      targetUsers: "University administrators managing student affairs, student organization leaders, and students seeking to participate in campus activities.",
      impact: "Poor organization management leads to low student engagement, missed events, and administrative overhead that could be eliminated with proper digital tools.",
    },
    solutionOverview: {
      solution: "A centralized web platform for managing all aspects of student affairs — from organization registration to event management and membership tracking.",
      whyChosen: "Laravel provides a robust PHP framework with built-in authentication, eloquent ORM, and blade templating. MySQL offers reliable relational data management for complex organizational relationships.",
      howItWorks: "Administrators manage organizations and events through the dashboard. Students browse organizations, register for events, and track their participation. The system generates reports and analytics for student affairs departments.",
    },
    developmentProcess: [
      { title: "Requirement Gathering", description: "Met with university staff to understand current processes and pain points." },
      { title: "Database Design", description: "Designed relational database schema for organizations, events, members, and roles." },
      { title: "Development", description: "Built the system using Laravel with Blade templates and MySQL database." },
      { title: "Testing", description: "Performed functionality testing and user acceptance testing with university staff." },
      { title: "Deployment", description: "Deployed on university hosting infrastructure." },
    ],
    features: [
      { icon: "org", title: "Organization Management", description: "Create and manage student organization profiles and hierarchies." },
      { icon: "event", title: "Event Management", description: "Create, promote, and manage campus events with registration." },
      { icon: "members", title: "Membership Tracking", description: "Track student memberships across organizations." },
      { icon: "auth", title: "Role-Based Access", description: "Admin, organization leader, and student role permissions." },
      { icon: "search", title: "Organization Directory", description: "Searchable directory of all student organizations." },
      { icon: "report", title: "Activity Reports", description: "Generate reports on student participation and organization activity." },
    ],
    techStack: [
      { category: "Backend", items: ["Laravel", "PHP"] },
      { category: "Database", items: ["MySQL"] },
      { category: "Frontend", items: ["Blade", "Bootstrap", "jQuery"] },
      { category: "Tools", items: ["Git", "XAMPP", "VS Code"] },
    ],
    challenges: [
      {
        problem: "Complex role-based access control with multiple user types and permission levels.",
        solution: "Implemented Laravel's built-in authorization with custom policies and middleware for fine-grained access control.",
        result: "Clean separation of admin, organization leader, and student permissions with no security issues.",
      },
    ],
    metrics: [
      { value: "10+", label: "Organizations", description: "Student organizations managed" },
      { value: "100+", label: "Active Users", description: "Students and administrators" },
      { value: "3", label: "User Roles", description: "Distinct access levels" },
      { value: "50+", label: "Events", description: "Events managed through the platform" },
    ],
    achievements: [],
    lessonsLearned: [
      "Working with real institutional clients provides invaluable experience in requirement gathering and stakeholder communication.",
      "Laravel's ecosystem of packages significantly accelerates development for common features like authentication and authorization.",
      "Understanding the organizational structure of the client (university hierarchy) is essential for designing effective role-based systems.",
    ],
    technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
  },

  // --- 7. SI Pendaftaran UKM ---
  {
    title: "SI Pendaftaran Organisasi & UKM",
    slug: "si-pendaftaran-ukm",
    subtitle: "Student Organization & Club Registration System",
    shortDescription:
      "A web-based application for SME and organization registration with role-based access control (RBAC) for Master Admins, Admins, and Students.",
    fullDescription:
      "SI Pendaftaran Organisasi & UKM is a web-based registration management system designed for university student organizations (UKM - Unit Kegiatan Mahasiswa). The system streamlines the registration process for new members, providing a digital alternative to paper-based registration. With a robust role-based access control system supporting Master Admins, Organization Admins, and Students, the platform ensures secure and efficient management of the entire registration workflow. *Disclaimer : This project is just dummy data for portfolio purposes and not used in real life.",
    year: "2026",
    role: "Full-Stack Web Developer",
    duration: "2 Months",
    team: "1 Person (Solo Project)",
    status: "Completed",
    platform: "Web Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/web-pendaftaran-ukm-organisasi",
    thumbnail: "/project-ukm.png",
    gallery: [
      {
        image: "/ukm (3).png",
        title: "Landing Page",
        description: "Landing page for the organization registration system.",
      },
      {
        image: "/ukm (2).png",
        title: "Admin Dashboard",
        description: "Showing statistics and latest registrations of the organization.",
      },
      {
        image: "/listukm.png",
        title: "Organization List",
        description: "List of organizations that students can join.",
      },
      {
        image: "/ukm (1).png",
        title: "Registration Form",
        description: "Student registration form for joining organizations.",
      },
      {
        image: "/daftarukm.png",
        title: "Organization Information",
        description: "Information about the organization.",
      },
      {
        image: "/chatbotukm.png",
        title: "Chatbot",
        description: "Chatbot for answering questions and guiding students to the right organization.",
      },
    ],
    problemStatement: {
      problem: "Student organization registration at universities is typically done manually using paper forms, leading to data loss, slow processing, and poor record-keeping.",
      why: "Manual registration processes are time-consuming for both students and administrators, and physical records are difficult to search, analyze, and maintain over time.",
      targetUsers: "University students registering for organizations, organization administrators managing memberships, and master admins overseeing all organizations.",
      impact: "Inefficient registration processes discourage student participation and create administrative bottlenecks during peak registration periods.",
    },
    solutionOverview: {
      solution: "A digital registration platform with multi-level RBAC that automates the entire registration workflow from application to approval.",
      whyChosen: "Laravel provides excellent RBAC capabilities and form handling. MySQL reliably stores relational registration data. The combination enables rapid development of secure registration workflows.",
      howItWorks: "Students browse available organizations and submit registration applications. Organization admins review and approve/reject applications. Master admins oversee all organizations and manage admin accounts.",
    },
    developmentProcess: [
      { title: "Analysis", description: "Analyzed existing manual registration processes and identified digitalization opportunities." },
      { title: "Design", description: "Designed database schema and user interface wireframes." },
      { title: "Development", description: "Implemented the system using Laravel with focus on RBAC and workflow management." },
      { title: "Testing", description: "Tested all registration workflows and role permissions." },
      { title: "Deployment", description: "Deployed and documented the system for end-users." },
    ],
    features: [
      { icon: "form", title: "Online Registration", description: "Digital registration forms with validation and file upload." },
      { icon: "auth", title: "Multi-level RBAC", description: "Master Admin, Admin, and Student role permissions." },
      { icon: "workflow", title: "Approval Workflow", description: "Structured approval process for registration applications." },
      { icon: "dashboard", title: "Admin Dashboard", description: "Overview of registrations, statistics, and pending approvals." },
      { icon: "search", title: "Search & Filter", description: "Search registrations by name, organization, or status." },
      { icon: "export", title: "Data Export", description: "Export registration data in Excel format." },
    ],
    techStack: [
      { category: "Backend", items: ["Laravel", "PHP"] },
      { category: "Database", items: ["MySQL"] },
      { category: "Frontend", items: ["Blade", "Bootstrap", "jQuery"] },
      { category: "Tools", items: ["Git", "XAMPP"] },
    ],
    challenges: [
      {
        problem: "Implementing a flexible RBAC system that supports three distinct user roles with different permission sets.",
        solution: "Used Laravel's Gate and Policy features combined with middleware to create a clean, maintainable authorization system.",
        result: "Clean role separation with no permission leaks — each role sees exactly what they're authorized to access.",
      },
    ],
    metrics: [
      { value: "3", label: "User Roles", description: "Master Admin, Admin, Student" },
      { value: "15+", label: "Organizations", description: "UKMs registered in the system" },
      { value: "200+", label: "Registrations", description: "Student registrations processed" },
      { value: "100%", label: "Digital", description: "Paperless registration process" },
    ],
    achievements: [],
    lessonsLearned: [
      "Role-based access control is a fundamental requirement for any multi-user system and should be planned from the beginning.",
      "Even 'simple' CRUD applications benefit from proper architecture and design patterns.",
      "User experience for form-heavy applications requires careful attention to validation, error messages, and feedback.",
    ],
    technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
  },

  // --- 8. MallHub Jogja ---
  {
    title: "MallHub Jogja",
    slug: "mallhub-jogja",
    subtitle: "Mall Directory Platform for Yogyakarta Area",
    shortDescription:
      "A comprehensive directory platform for malls and shopping centers in the Yogyakarta area, designed to help users explore malls, discover tenants, and view facilities.",
    fullDescription:
      "MallHub Jogja is a comprehensive web-based directory platform that serves as a one-stop information hub for malls and shopping centers in the Yogyakarta area. The platform enables users to explore various malls, discover tenants (stores, restaurants, entertainment venues), view available facilities, and access practical information like operating hours and location maps. Built with Laravel and MySQL, MallHub Jogja provides both a user-facing directory and an administrative backend for mall operators to manage their listings.",
    year: "2026",
    role: "Full-Stack Web Developer",
    duration: "3 Months",
    team: "1 Person (Solo Project)",
    status: "Developing",
    platform: "Web Application",
    categories: ["web"],
    github: "https://github.com/rahalsaabiumara/MallHub-Jogja",
    thumbnail: "/mallhub.png",
    gallery: [
      {
        image: "/mallhub1.png",
        title: "Mall Directory",
        description: "Browse and search malls in the Yogyakarta area.",
      },
      {
        image: "/mallhub4.png",
        title: "Mall Listing",
        description: "Discover all malls in the Yogyakarta area, from big names to hidden gems, all in one place.",
      },
      {
        image: "/mallhub5.png",
        title: "Mall Detail",
        description: "Detailed mall page with tenant listings and facility information.",
      },
      {
        image: "/mallhub2.png",
        title: "Tenants List",
        description: "Explore all tenants in the selected mall, from big names to hidden gems, all in one place.",
      },
    ],
    problemStatement: {
      problem: "Finding comprehensive, up-to-date information about malls, their tenants, and facilities in Yogyakarta requires visiting multiple sources and websites.",
      why: "Each mall maintains its own website (if any) with varying levels of information quality. A unified platform would save users time and improve the shopping experience.",
      targetUsers: "Yogyakarta residents, tourists, and shoppers looking for mall information, tenant directories, and facility details in one convenient place.",
      impact: "Without a centralized directory, users waste time searching for basic information, and smaller malls miss opportunities to reach potential visitors.",
    },
    solutionOverview: {
      solution: "A centralized web directory that aggregates information about all major malls in Yogyakarta, including tenant directories, facility listings, and practical visitor information.",
      whyChosen: "Laravel provides rapid development of content management features. MySQL handles relational data between malls, tenants, and facilities efficiently. The MVC architecture ensures clean code organization.",
      howItWorks: "Mall operators register and manage their listings through an admin panel. Users browse the directory, search for specific tenants or facilities, and access detailed mall information with maps and operating hours.",
    },
    developmentProcess: [
      { title: "Research", description: "Researched malls in Yogyakarta area and gathered tenant/facility data." },
      { title: "Design", description: "Designed user-friendly directory interface and admin management panel." },
      { title: "Development", description: "Built the platform using Laravel with comprehensive CRUD operations." },
      { title: "Content Population", description: "Populated the database with real mall data from the Yogyakarta area." },
      { title: "Testing & Deployment", description: "Tested all features and deployed the application." },
    ],
    features: [
      { icon: "search", title: "Mall Search", description: "Search malls by name, location, or available facilities." },
      { icon: "store", title: "Tenant Directory", description: "Browse stores, restaurants, and entertainment venues." },
      { icon: "facility", title: "Facility Listing", description: "View available facilities like parking, prayer rooms, ATMs." },
      { icon: "map", title: "Location Maps", description: "Interactive maps showing mall locations." },
      { icon: "clock", title: "Operating Hours", description: "Up-to-date operating hours and special schedules." },
      { icon: "admin", title: "Admin Management", description: "Backend panel for mall operators to manage listings." },
    ],
    techStack: [
      { category: "Backend", items: ["Laravel", "PHP"] },
      { category: "Database", items: ["MySQL"] },
      { category: "Frontend", items: ["Blade", "Bootstrap", "jQuery"] },
      { category: "Tools", items: ["Git", "XAMPP", "VS Code"] },
    ],
    challenges: [
      {
        problem: "Gathering and maintaining accurate, up-to-date information for multiple malls and hundreds of tenants.",
        solution: "Designed a content management system that allows mall operators to self-manage their listings, reducing the burden of manual data maintenance.",
        result: "Created a sustainable content management workflow that keeps information current with minimal manual intervention.",
      },
    ],
    metrics: [
      { value: "5+", label: "Malls Listed", description: "Shopping centers in directory" },
      { value: "100+", label: "Tenants", description: "Stores and restaurants listed" },
      { value: "20+", label: "Facilities", description: "Facility types tracked" },
      { value: "100%", label: "Responsive", description: "Mobile-friendly design" },
    ],
    achievements: [],
    lessonsLearned: [
      "Content-driven platforms require a sustainable content management strategy from day one.",
      "Understanding local context and user behavior is essential when building location-based services.",
      "Laravel's Eloquent ORM simplifies complex relational queries between malls, tenants, and facilities.",
    ],
    technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getRelatedProjects(currentSlug: string, count: number = 3): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projects.slice(0, count);

  // Prioritize same category, then other projects
  const sameCategory = projects.filter(
    (p) =>
      p.slug !== currentSlug &&
      p.categories.some((c) => current.categories.includes(c))
  );
  const otherProjects = projects.filter(
    (p) =>
      p.slug !== currentSlug &&
      !p.categories.some((c) => current.categories.includes(c))
  );

  return [...sameCategory, ...otherProjects].slice(0, count);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return { prev, next };
}
