// Portfolio data — Eissa Islam
window.PortfolioData = {
  identity: {
    name: 'Eissa Islam',
    role: 'AI Engineer',
    location: 'Giza, Egypt',
    email: 'eissaislam.buss@gmail.com',
    phone: '+20 112 990 7116',
    github: 'https://github.com/eissa2002',
    linkedin: 'https://www.linkedin.com/in/eissa-islam-775291200/',
    cv: 'assets/Eissa_Islam_CV.pdf',
    summary: 'AI Engineer with 2+ years building production-grade systems across LLMs, RAG pipelines, computer vision, and MLOps. Specialize in end-to-end delivery — from architecture design to cloud deployment — on real projects at a university, fintech, and government initiatives. Published IEEE author (ITC-Egypt 2024). Proven track record in agentic AI workflows, autonomous agents, conversational AI, and data-intensive applications that solve tangible problems.',
    headline: 'Production AI systems. End-to-end delivery.',
  },

  kpis: [
    { label: 'Years XP',        value: '2+',  sub: 'production AI shipping' },
    { label: 'Systems live',    value: '3',   sub: 'in active university use' },
    { label: 'Tailored CVs',    value: '80+', sub: 'via JobPilot AI agent' },
    { label: 'IEEE pubs',       value: '1',   sub: 'ITC-Egypt 2024' },
  ],

  // Featured projects (top 3)
  featured: [
    {
      id: 'PRJ-001',
      slug: 'jobpilot',
      name: 'JobPilot AI',
      tagline: 'Autonomous 7-layer job application agent',
      status: 'in-use',
      statusLabel: 'Live · 24/7',
      desc: 'Async stealth scraping across 4 boards, hybrid rule + LLM scoring (Gemini + Groq fallback), ATS-tailored DOCX/PDF generation, Telegram human-in-the-loop, hosted on Oracle Cloud ARM via systemd + GitHub Actions.',
      stack: ['Python 3.11', 'Scrapling', 'Playwright', 'Gemini', 'Groq/Llama 3', 'SQLite', 'Streamlit', 'Oracle Cloud'],
      tags: ['Agents', 'LLM', 'MLOps'],
      viz: 'pipeline',
    },
    {
      id: 'PRJ-002',
      slug: 'enterprise-brain',
      name: 'Enterprise Brain',
      tagline: 'Multi-agent enterprise knowledge & operations',
      status: 'in-use',
      statusLabel: 'Live · Served',
      desc: 'LangGraph orchestration with Router/Retrieval/Action agents over Drive, Slack, Notion, Jira. BGE-m3 + Qdrant retrieval with re-ranking; Celery webhook ingestion; RBAC at vector level; React + SSE frontend.',
      stack: ['LangGraph', 'FastAPI', 'BGE-m3', 'Qdrant', 'Celery', 'Redis', 'Ollama', 'Next.js'],
      tags: ['RAG', 'Agents', 'LLM'],
      viz: 'graph',
    },
    {
      id: 'PRJ-003',
      slug: 'robomust',
      name: 'RoboMUST',
      tagline: 'Voice-enabled AI learning platform',
      status: 'in-use',
      statusLabel: 'Live · MUST',
      desc: 'End-to-end educational AI for students and professors. Local LLM RAG over course PDFs with Whisper voice in / TTS voice out, quiz generation and smart summarization. Solo full-stack delivery in production.',
      stack: ['FastAPI', 'MongoDB', 'ChromaDB', 'LangChain', 'Ollama', 'Whisper', 'TTS', 'Docling'],
      tags: ['RAG', 'LLM', 'Voice'],
      viz: 'wave',
    },
  ],

  // Full project log
  projects: [
    { id: 'PRJ-001', name: 'JobPilot AI',          year: 2025, role: 'Solo build', tags: ['Agents','LLM','MLOps'],   stack: 'Gemini · Groq · Playwright · Oracle Cloud', status: 'in-use' },
    { id: 'PRJ-002', name: 'Enterprise Brain',     year: 2025, role: 'Architect',   tags: ['RAG','Agents','LLM'],     stack: 'LangGraph · BGE-m3 · Qdrant · Next.js',     status: 'in-use' },
    { id: 'PRJ-003', name: 'RoboMUST',             year: 2025, role: 'Solo build', tags: ['RAG','LLM','Voice'],      stack: 'FastAPI · ChromaDB · Ollama · Whisper',      status: 'in-use' },
    { id: 'PRJ-004', name: 'ShopIntel',            year: 2025, role: 'Lead',       tags: ['LLM','NLP','Scraping'],   stack: 'FastAPI · Selenium · MongoDB · LLMs',       status: 'in-use' },
    { id: 'PRJ-005', name: 'Smart Face Attendance',year: 2025, role: 'Contributor',tags: ['CV','Production'],        stack: 'dlib · face_recognition · FastAPI',         status: 'in-use' },
    { id: 'PRJ-006', name: 'Garbage Classifier',   year: 2025, role: 'Solo build', tags: ['CV','Edge'],              stack: 'YOLOv8 · OpenCV · Edge deploy',             status: 'in-use' },
    { id: 'PRJ-007', name: 'Quranic RAG Chatbot',  year: 2024, role: 'Solo build', tags: ['RAG','LLM'],              stack: 'ChromaDB · MongoDB · LangChain · HF',       status: 'online' },
    { id: 'PRJ-008', name: 'AiTech Chat System',   year: 2024, role: 'Engineer',   tags: ['RAG','LLM','Scraping'],   stack: 'MongoDB · ChromaDB · RAG',                  status: 'online' },
    { id: 'PRJ-009', name: 'ScrapeMaster',         year: 2024, role: 'Solo build', tags: ['Scraping','Tools'],       stack: 'Tkinter · Selenium · BS4',                  status: 'online' },
    { id: 'PRJ-010', name: 'Fraud + Credit Models',year: 2024, role: 'Trainee',    tags: ['ML','Finance'],           stack: 'SMOTE · Ensemble · Scikit-learn',           status: 'idle' },
    { id: 'PRJ-011', name: 'MLOps Pipelines (×4)', year: 2024, role: 'Intern',     tags: ['MLOps','ML'],             stack: 'MLflow · HuggingFace · Azure AI',           status: 'idle' },
    { id: 'PRJ-012', name: 'Parkinsonian Gait',    year: 2024, role: 'Lead',       tags: ['CV','Research','IEEE'],   stack: 'Mediapipe · Keras · Scikit-learn',          status: 'online' },
    { id: 'PRJ-013', name: 'Prostate Cancer DL',   year: 2023, role: 'Solo build', tags: ['CV','Medical'],           stack: 'TensorFlow · Keras · DICOM',                status: 'idle' },
  ],

  experience: [
    {
      from: '2025-02', to: 'Present', current: true,
      role: 'AI Engineer',
      org: 'Misr University for Science & Technology',
      loc: 'Giza, Egypt',
      bullets: [
        'Spearheading university-wide smart infrastructure — 3 production AI systems in active campus use.',
        'Built RoboMUST, a voice-enabled AI learning platform: RAG, local LLMs, quiz generation, smart summarization.',
        'Developed ShopIntel — LLM shopping assistant with multi-platform scraping and personalized planning.',
        'Deployed campus-wide facial recognition attendance covering multiple departments.',
        'Built YOLOv8 garbage classification system deployed at physical sorting stations.',
      ],
    },
    {
      from: '2024-10', to: '2024-12',
      role: 'AI Engineer',
      org: 'AiTech',
      loc: 'Egypt',
      bullets: [
        'Architected an intelligent chat system using web scraping + MongoDB + ChromaDB + RAG.',
        'Built a Quranic RAG chatbot grounded in classical tafsir with a dual-vector pipeline.',
        'Developed ScrapeMaster — a Tkinter desktop tool for YouTube/web image dataset collection.',
      ],
    },
    {
      from: '2024-04', to: '2024-10',
      role: 'ML Engineer Intern',
      org: 'Digital Egypt Initiative (MCIT)',
      loc: 'Egypt',
      bullets: [
        'Hands-on MLOps with MLflow, Hugging Face, and Azure AI across 4 applied projects.',
        'Built end-to-end data pipelines and deployment workflows shipping evaluated ML models.',
      ],
    },
    {
      from: '2024-06', to: '2024-08',
      role: 'Data Scientist Trainee',
      org: 'Banque Misr — Rowad Internship',
      loc: 'Egypt',
      bullets: [
        'Designed fraud detection and credit scoring models on imbalanced data using SMOTE + ensembles.',
        'Delivered feature engineering reports in an Agile environment with analysts and data engineers.',
      ],
    },
    {
      from: '2023-05', to: '2024-08',
      role: 'Data Science Trainee',
      org: 'ALX Africa & ExploreAI',
      loc: 'Remote',
      bullets: [
        'Capstone projects in model training, evaluation, and dashboards on real-world datasets.',
        'Applied supervised + unsupervised methods across structured and unstructured data.',
      ],
    },
    {
      from: '2023-01', to: '2023-07',
      role: 'ML Intern',
      org: 'MUST AI Tech R&D Center',
      loc: 'Giza, Egypt',
      bullets: [
        'Built a deep learning prostate cancer detection model in TensorFlow/Keras.',
        'Led DICOM preprocessing through final performance validation end-to-end.',
      ],
    },
  ],

  education: {
    degree: 'B.Sc. Information Technology — Major: AI',
    org: 'Misr University for Science and Technology',
    loc: 'Giza, Egypt',
    span: 'Sept 2019 — Jun 2024',
    gpa: '3.41 / 4.0',
  },

  stack: [
    { group: 'LLM & RAG',         items: ['LangChain', 'LangGraph', 'Ollama', 'Gemini API', 'Groq / Llama 3', 'BGE-m3', 'Semantic Search', 'Re-ranking', 'Prompt Eng'] },
    { group: 'ML / DL',           items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'HF Transformers'] },
    { group: 'Computer Vision',   items: ['YOLOv8', 'OpenCV', 'Mediapipe', 'Object Detection', 'Pose Estimation'] },
    { group: 'MLOps & Cloud',     items: ['MLflow', 'Azure AI', 'AWS', 'Oracle Cloud (ARM)', 'GitHub Actions', 'Sentry', 'systemd'] },
    { group: 'Web & APIs',        items: ['FastAPI', 'Flask', 'Streamlit', 'REST', 'SSE', 'Uvicorn'] },
    { group: 'Vector DBs',        items: ['ChromaDB', 'Qdrant', 'Milvus', 'PGVector'] },
    { group: 'Scraping & Auto',   items: ['Scrapling', 'Selenium', 'Playwright', 'BeautifulSoup', 'httpx', 'n8n', 'APScheduler', 'Celery', 'Redis', 'Docling'] },
    { group: 'Languages & DBs',   items: ['Python', 'SQL', 'MongoDB', 'PostgreSQL', 'SQLite'] },
    { group: 'Data & Viz',        items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Power BI', 'Excel'] },
  ],

  publication: {
    year: '2024',
    venue: 'IEEE ITC-Egypt 2024',
    title: 'Parkinsonian Gait Severity in Older Adults with Dementia Using Natural Gait Video Analysis',
    desc: 'Vision-based gait analysis system for dementia patients reaching 92% validation accuracy via 2D/3D video data and a multi-model ML ensemble.',
    url: 'https://ieeexplore.ieee.org/document/10620575',
  },
};
