// ✏️ EDIT ONLY THIS FILE to customise your portfolio.
const DATA = {
  name: "Akshat Jakar",
  taglines: [
    "I build RAG pipelines and multimodal AI.",
    "I ship AI agents with no human in the loop.",
    "I engineer systems that work outside demos.",
    
  ],
  bio: "AI Engineer building end-to-end LLM applications — a Hybrid RAG system combining semantic search, BM25, and reranking for accurate retrieval, a LangGraph multi-agent travel automation system with MCP tools and human-in-the-loop approvals, and AI-powered full-stack applications designed to solve real-world problems..",
  avatar: "./assets/profile.jpg", // path or URL to your photo, e.g. "assets/me.jpg". Leave empty for a placeholder.
  location: "City, Country",
  resume: "./assets/resume.pdf", // put your PDF next to index.html. Typing "resume" anywhere opens it.

  // Floating pill nav (icons: home, work, code, trophy, list, user)
  nav: [
    { icon: "home",   href: "#home",       label: "Home" },
    { icon: "work",   href: "#experience", label: "Experience" },
    { icon: "code",   href: "#projects",   label: "Projects" },
    { icon: "trophy", href: "#wins",       label: "Achievements" },
    { icon: "list",   href: "#skills",     label: "Skills" }
  ],
  // Icons: github, x, linkedin, mail
  socials: [
    { icon: "github",   href: "https://github.com/akshatjakar",      label: "GitHub" },
    { icon: "x",        href: "https://x.com/yourname",           label: "X" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/akshatjakar13/?isSelfProfile=true", label: "LinkedIn" },
    { icon: "mail",     href: "mailto:akshatjakar2@gmail.com",           label: "Email" }
  ],

  stats: [
    { value: "2",   label: "hackathon wins" },
    { value: "$150+", label: "in prizes" },
    { value: "2",   label: "live products" },
    { value: "30+", label: "dentists on a client build" }
  ],

  experience: [
    {
      role: "AI Engineer ", org: "AIGetAI Pvt.", orgLink: "https://ai-medical-agent.onrender.com/", orgLabel: "example.com",
      period: "Jan 2026 – Present", place: "Remote",
      bullets: [
        "Built and delivered a client-ready AI Medical Assistant website in 13 days using Next.js, integrating the frontend with real-time AI voice interactions.",
        "Engineered a production-oriented RAG pipeline using LangChain, LangGraph, ChromaDB, BM25, and all-MiniLM-L6-v2 to retrieve relevant information from 32K+ documentation chunks with Cross-Encoder reranking.",
        "Integrated Gemini 2.5 Pro, Vapi, AssemblyAI, and WebSockets for real-time speech-to-text and text-to-speech, connecting conversation context to RAG for context-aware responses while reducing voice-processing latency by 30 ms and supporting 200+ concurrent sessions",
        "Developed a 5-node agentic RAG workflow with a self-checking judge and deterministic source fallbacks, achieving 87.1% faithfulness, 94.2% grounding accuracy, and 91.4% context recall, with average latency below 1.5 seconds."
      ],
      tags: ["Python", "RAG", "LangGraph", "Pinecone", "Supabase", "Next.js", "TypeScript"]
    },
    {
      role: "B.Tech in Information Technology", org: "JSS Academy of Technical Education, Noida",
      period: "2023 – 2027", place: "Final year · expected"
    }
  ],

  projects: [
    { name: "Agentic RAG Systems",   shortDesc: "Self-correcting RAG pipeline with hybrid retrieval and evaluation.", desc: "Built an Agentic RAG System using LangGraph, LangChain, and Ollama (Llama 3.2), featuring a 5-node workflow with a self-checking judge node. Engineered hybrid retrieval using ChromaDB, BM25, and all-MiniLM-L6-v2 across 32K+ documentation chunks, with Cross-Encoder reranking to improve retrieval relevance. Reduced hallucinations through grounding validation and deterministic source fallbacks. Evaluated performance using faithfulness, grounding accuracy, and context recall, achieving 87.1% faithfulness, 94.2% grounding accuracy, 91.4% context recall, and under 1.5-second average latency.", tags: ["Python", "LangGraph","Cross-Encoder Reranking","Hybrid Search","RAG Evalution" ,"Hallucination Mitigation","ChromaDB"],  live:"hhhhh", link: "https://github.com/yourname/project-one" },
    { name: "Supervisor-Based Multi-Agent Travel Planner",  shortDesc:"Supervisor-driven travel planning with MCP tools, guardrails, and human approval.", desc: "Built a multi-agent travel planner using LangGraph and MCP with supervisor-based routing and tool orchestration. Integrated weather and web search tools for context-aware travel planning. Implemented Guardrails and Human-in-the-Loop (HITL) approval for safer AI-generated recommendations. Achieved 90%+ task accuracy while reducing redundant LLM/tool calls by approximately 30%.",          tags: ["LangGraph", "MCP","Guardrails","Tool Calling", "Human-in-the-Loop","Python"],  live:"rrrr",  link: "https://github.com/yourname/project-two" },
    { name: "SpendWise AI — Smart Expense Tracker", shortDesc:"AI-powered expense tracking with receipt scanning and spending analytics",desc: "Built a full-stack expense management application with CRUD operations and interactive weekly/monthly spending visualizations. Optimized database queries and indexing to reduce API response time by 35%. Integrated AI-powered receipt scanning to automatically extract expense details, reducing manual data entry by 80%. Developed a responsive UI using Next.js and Tailwind CSS with Cloudinary image storage.",tags: ["Next.js","React","PostgreSQL","Prisma","Clerk","Tailwind CSS","Gemini AI","Cloudinary"], live:"rrrr", link: "https://github.com/yourname/project-three" }
  ],

  achievements: [
  {
     award: "🏆Winner",
    title: "Codex Hackathon 2025",
    desc: `Won $100 among 100+ teams with Krishi Mitra, an AI-powered agricultural assistance platform that helps farmers retrieve relevant information from images and documents.`,
  },
  {award: "Runner-Up",
    title: "Smart India Hackathon –2025",
    desc:`Secured the runner-up position in SIH 2025 by developing an innovative payment gateway solution.Designed a secure and reliable system for seamless digital transactions.Focused on improving payment processing efficiency and user experience.`
  },
  {award: "🏆Winner",
    title: "Coding Hackathon-2025",
    desc:`Won a college-level coding hackathon by applying Data Structures and Algorithms (DSA) to solve real-world problems efficiently. Demonstrated strong problem-solving, algorithmic thinking, and coding skills .`
  },
  
  
],

  
skills: [
  {
    category: "AI Agents & RAG",
    items: ["LangChain", "LangGraph", "RAG pipelines", "Tool-calling agents","MCP connectors","LLM-as-judge evals","LLM-Gateways","Human-In-the-loop"]
  },
  {
    category: "Models & APIS",
    items: ["LLaMA 3.1 (Groq)", "Gemini 2.5 Flash", "Mistral Large", "OpenAI embeddings", "Hugging Face Hub"]
  },
  {
    category: "Backend & DATA",
    items: ["Python", "Express.js", "FastAPI","Pinecone","Redis","MongoDB","PostgreSQL (Supabase)"]
  },
  {
    category: "Frontend & Deployment",
    items: ["TypeScript", "Vercel", "React", "Next.js","Git",""]
  },
  {
    category: "Secruity",
    items: [, "Guardrails ", "LLM Evaluation","DeepEval", "LangSmith","LangFuse"]
  },
  
],


  contact: {
    heading: "Let's work together",
    text: "Open to AI engineering roles and internships, freelance builds, and hackathon collabs. Best reached via X DM or email.",
    buttons: [
      { label: "DM on X",       icon: "x",    href: "https://x.com/Akshatjakar13" },
      { label: "Send an Email", icon: "mail", href: "mailto:akshatjakar2@gmail.com", primary: true }
    ]
  }
};
