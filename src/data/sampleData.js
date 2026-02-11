// Sample Portfolio Data - Replace with your actual data

export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  bio: "Passionate developer with 5+ years of experience building web applications.",
  location: "San Francisco, CA",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "",
};

export const quote = {
  text: "The only way to do great work is to love what you do.",
  author: "Steve Jobs",
};

// Tech types: languages, frontend, backend, database, deployment, tools, integrations
export const techs = [
  // Languages
  { id: "tech-js", name: "JavaScript", type: "languages", icon: "/icons/js.png" },
  { id: "tech-ts", name: "TypeScript", type: "languages", icon: "/icons/typescript.png" },
  { id: "tech-go", name: "GO", type: "languages", icon: "/icons/go.png" },
  { id: "tech-python", name: "Python", type: "languages", icon: "/icons/python.png" },
  { id: "tech-csharp", name: "C#", type: "languages", icon: "/icons/csharp.png" },
  
  // Frontend/UI
  { id: "tech-react", name: "React", type: "frontend", icon: "/icons/react.png" },
  { id: "tech-react-native", name: "React Native", type: "frontend", icon: "/icons/react.png" },
  { id: "tech-react-flow", name: "React Flow", type: "frontend", icon: "/icons/react.png" },
  { id: "tech-plasmo", name: "Plasmo", type: "frontend", icon: "/icons/plasmo.png" },
  { id: "tech-tkinter", name: "Tkinter", type: "frontend", icon: "/icons/python.png" },
  { id: "tech-html", name: "HTML", type: "frontend", icon: "/icons/html.png" },
  
  // Backend
  { id: "tech-node", name: "Node.js", type: "backend", icon: "/icons/nodejs.png" },
  { id: "tech-express", name: "Express", type: "backend", icon: "/icons/express.png" },
  
  // Database
  { id: "tech-mongodb", name: "MongoDB", type: "database", icon: "/icons/mongodb.png" },
  { id: "tech-mongodb-atlas", name: "MongoDB Atlas", type: "database", icon: "/icons/mongodb.png" },
  { id: "tech-postgres", name: "PostgreSQL", type: "database", icon: "/icons/postgresql.png" },
  { id: "tech-redis", name: "Redis", type: "database", icon: "/icons/redis.png" },
  { id: "tech-pgadmin", name: "PGAdmin", type: "database", icon: "/icons/postgresql.png" },
  { id: "tech-mongo-compass", name: "Mongo Compass", type: "database", icon: "/icons/mongodb.png" },
  
  // Deployment
  { id: "tech-docker", name: "Docker", type: "deployment", icon: "/icons/docker.png" },
  { id: "tech-kubernetes", name: "Kubernetes", type: "deployment", icon: "/icons/kubernetes.png" },
  { id: "tech-argocd", name: "ArgoCD", type: "deployment", icon: "/icons/argocd.png" },
  { id: "tech-gitops", name: "GitOps", type: "deployment", icon: "/icons/github.png" },
  { id: "tech-ghcr", name: "GHCR", type: "deployment", icon: "/icons/gitactions.png" },
  { id: "tech-portainer", name: "Portainer", type: "deployment", icon: "/icons/portainer.png" },
  
  // Tools
  { id: "tech-grafana", name: "Grafana", type: "tools", icon: "/icons/grafana.png" },
  { id: "tech-prometheus", name: "Prometheus", type: "tools", icon: "/icons/prometheus.png" },
  { id: "tech-loki", name: "Loki", type: "tools", icon: "/icons/loki.png" },
  { id: "tech-nginx", name: "Nginx", type: "tools", icon: "/icons/nginx.png" },
  
  // Integrations
  { id: "tech-telecrm", name: "TeleCRM", type: "integrations", icon: "/icons/telecrm.png" },
  { id: "tech-shopify", name: "Shopify", type: "integrations", icon: "/icons/shopify.png" },
  { id: "tech-calendly", name: "Calendly", type: "integrations", icon: "/icons/calendly.png" },
  { id: "tech-google", name: "Google", type: "integrations", icon: "/icons/google.png" },
  { id: "tech-genai", name: "GenAI", type: "integrations", icon: "/icons/genai.png" },
  { id: "tech-tally", name: "Tally", type: "integrations", icon: "/icons/tally.png" },
  { id: "tech-wordpress", name: "WordPress", type: "integrations", icon: "/icons/wordpress.png" },
  { id: "tech-rest", name: "REST", type: "integrations", icon: "/icons/rest.png" },
];

// Tech type labels for display
export const techTypes = {
  languages: "Languages",
  frontend: "Frontend / UI",
  backend: "Backend",
  database: "Database", 
  deployment: "Deployment",
  tools: "Tools",
  integrations: "Integrations",
};

export const projects = [
  {
    id: "project-1",
    name: "Multi-Whatsapp",
    type: "live",
    img: "",
    description: "Multi-number WhatsApp platform with chatbot automation, GenAI-powered content, Chrome extension, and payment integration.",
    techs: ["tech-js", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-plasmo", "tech-genai", "tech-rest"],
    links: [],
    features: [
      {
        name: "Simple Chatbot + Chatbot Flow Creator",
        img: "",
        description: "Visual flow builder for creating automated chatbot conversation trees with drag-and-drop interface",
        techs: ["tech-react", "tech-react-flow", "tech-node", "tech-mongodb"],
      },
      {
        name: "GenAI Content Variance",
        img: "",
        description: "AI-powered content generation with variance for dynamic and personalized messaging",
        techs: ["tech-genai", "tech-node", "tech-js"],
      },
      {
        name: "Chrome Extension",
        img: "",
        description: "Browser extension built with Plasmo for seamless WhatsApp integration and management",
        techs: ["tech-plasmo", "tech-js", "tech-react"],
      },
      {
        name: "Integration: Razorpay",
        img: "",
        description: "Razorpay payment gateway integration for processing transactions within WhatsApp flows",
        techs: ["tech-node", "tech-rest"],
      },
    ],
  },
  {
    id: "project-2",
    name: "Verified Whatsapp",
    type: "live",
    img: "",
    description: "Enterprise-grade verified WhatsApp platform with high-throughput campaigning, advanced chatbot flow builder, and full observability stack.",
    techs: ["tech-js", "tech-ts", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-redis", "tech-grafana", "tech-prometheus", "tech-loki", "tech-rest"],
    links: [],
    features: [
      {
        name: "High Threshold Campaigning & Webhook Handling",
        img: "",
        description: "Scalable campaign engine for high-volume message delivery with robust webhook processing",
        techs: ["tech-node", "tech-redis", "tech-mongodb", "tech-rest"],
      },
      {
        name: "Feature Rich Chatbot Flow Builder",
        img: "",
        description: "Advanced visual chatbot flow builder with branching, conditions, and rich media support",
        techs: ["tech-react", "tech-react-flow", "tech-ts"],
      },
      {
        name: "Chatbot Logic",
        img: "",
        description: "Server-side chatbot logic engine for processing conversation flows and triggering actions",
        techs: ["tech-node", "tech-express", "tech-mongodb"],
      },
      {
        name: "Integrations",
        img: "",
        description: "Third-party service integrations including CRMs, payment gateways, and external APIs",
        techs: ["tech-node", "tech-rest"],
      },
      {
        name: "Observability Stack",
        img: "",
        description: "Full observability with Grafana dashboards, Prometheus metrics, and Loki log aggregation",
        techs: ["tech-grafana", "tech-prometheus", "tech-loki"],
      },
    ],
  },
  {
    id: "project-3",
    name: "Admark CRM",
    type: "live",
    img: "",
    description: "Customer relationship management system with quotation generation, Google Maps integration, and call tracking.",
    techs: ["tech-js", "tech-react", "tech-node", "tech-express", "tech-mongodb", "tech-google", "tech-rest"],
    links: [],
    features: [
      {
        name: "Quotation Generator",
        img: "",
        description: "Dynamic quotation builder for generating and managing client quotes",
        techs: ["tech-react", "tech-node", "tech-mongodb"],
      },
      {
        name: "Google Maps API",
        img: "",
        description: "Location-based features powered by Google Maps API for client and lead management",
        techs: ["tech-google", "tech-js", "tech-react"],
      },
      {
        name: "Call History Tracking",
        img: "",
        description: "Comprehensive call logging and history tracking for sales team activity monitoring",
        techs: ["tech-node", "tech-mongodb", "tech-rest"],
      },
    ],
  },
  {
    id: "project-4",
    name: "Admark CRM Mobile App",
    type: "live",
    img: "",
    description: "Mobile CRM application with quotation generation, automated lead assignment, and comprehensive tracking for call, location, and screen time.",
    techs: ["tech-js", "tech-react-native", "tech-node", "tech-express", "tech-mongodb", "tech-rest"],
    links: [],
    features: [
      {
        name: "Quotation Generator",
        img: "",
        description: "Mobile-optimized quotation builder for on-the-go quote creation and sharing",
        techs: ["tech-react-native", "tech-node"],
      },
      {
        name: "Automated Lead Assign",
        img: "",
        description: "Intelligent lead distribution system that automatically assigns leads to sales team members",
        techs: ["tech-node", "tech-mongodb", "tech-rest"],
      },
      {
        name: "Call, Location & Screentime Tracking",
        img: "",
        description: "Real-time tracking of call activity, GPS location, and screen time for field team management",
        techs: ["tech-react-native", "tech-node", "tech-mongodb"],
      },
    ],
  },
  {
    id: "project-5",
    name: "NAS Database Panel – Election Voters Database",
    type: "live",
    img: "",
    description: "Data management panel for election voter databases with automated import and advanced multi-filter querying.",
    techs: ["tech-js", "tech-react", "tech-node", "tech-express", "tech-mongodb", "tech-rest"],
    links: [],
    features: [
      {
        name: "Folder Select Automated Import",
        img: "",
        description: "Bulk data import system with folder-based file selection and automated parsing",
        techs: ["tech-node", "tech-mongodb"],
      },
      {
        name: "Multi Filter Querying",
        img: "",
        description: "Advanced query interface supporting multiple simultaneous filters for voter data analysis",
        techs: ["tech-react", "tech-node", "tech-mongodb"],
      },
    ],
  },
  {
    id: "project-6",
    name: "Admark Payment Processor GO",
    type: "live",
    img: "",
    description: "High-performance payment processing service built in Go with Razorpay integration.",
    techs: ["tech-go", "tech-rest"],
    links: [],
    features: [
      {
        name: "Razorpay Integration",
        img: "",
        description: "Complete Razorpay payment gateway integration for processing payments, refunds, and webhooks",
        techs: ["tech-go", "tech-rest"],
      },
    ],
  },
  {
    id: "project-7",
    name: "GO Cloud Storage",
    type: "live",
    img: "",
    description: "Cloud storage service built in Go with trigram-based search, multiple user roles, and optimized PostgreSQL indexing.",
    techs: ["tech-go", "tech-postgres", "tech-rest"],
    links: [],
    features: [
      {
        name: "Trigram Search",
        img: "",
        description: "Fast fuzzy search powered by PostgreSQL trigram indexing for file and content lookup",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "Multiple User Types",
        img: "",
        description: "Role-based access control with distinct user types and permission levels",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "PostgreSQL Indexing",
        img: "",
        description: "Optimized database performance with custom PostgreSQL index strategies",
        techs: ["tech-postgres", "tech-go"],
      },
    ],
  },
  {
    id: "project-8",
    name: "Neta & Business Design – Admark",
    type: "live",
    img: "",
    description: "Design platform with AI-powered background removal, automated carousel generation with HTTPS hosting, and a backend for editors.",
    techs: ["tech-python", "tech-js", "tech-react", "tech-node", "tech-express", "tech-rest"],
    links: [],
    features: [
      {
        name: "Background Removal Service (REMBG)",
        img: "",
        description: "AI-powered background removal using REMBG for automated image processing",
        techs: ["tech-python"],
      },
      {
        name: "Carousel Generator with HTTPS Hosting",
        img: "",
        description: "Automated carousel image generation with secure HTTPS-hosted output delivery",
        techs: ["tech-node", "tech-js", "tech-react"],
      },
      {
        name: "Backend For Editors",
        img: "",
        description: "Dedicated backend service powering the editor tools and asset management",
        techs: ["tech-node", "tech-express", "tech-rest"],
      },
    ],
  },
  {
    id: "project-9",
    name: "Kubernetes Ecosystem Migration",
    type: "live",
    img: "",
    description: "Full infrastructure migration to Kubernetes with containerized services, CI/CD pipelines, and a complete observability stack.",
    techs: ["tech-docker", "tech-kubernetes", "tech-argocd", "tech-gitops", "tech-ghcr", "tech-portainer", "tech-grafana", "tech-prometheus", "tech-loki", "tech-nginx"],
    links: [],
    features: [
      {
        name: "Migrated Projects",
        img: "",
        description: "Containerized and migrated multiple services to Kubernetes with zero-downtime deployments",
        techs: ["tech-docker", "tech-kubernetes", "tech-argocd", "tech-nginx"],
      },
      {
        name: "Grafana",
        img: "",
        description: "Centralized Grafana dashboards for monitoring all migrated services and infrastructure",
        techs: ["tech-grafana"],
      },
      {
        name: "Prometheus",
        img: "",
        description: "Prometheus metrics collection and alerting across the Kubernetes cluster",
        techs: ["tech-prometheus"],
      },
      {
        name: "Loki",
        img: "",
        description: "Log aggregation with Loki for centralized logging across all services",
        techs: ["tech-loki"],
      },
    ],
  },
  {
    id: "project-10",
    name: "SMS Panel Admark",
    type: "live",
    img: "",
    description: "SMS management panel for bulk messaging and campaign guidance.",
    techs: ["tech-js", "tech-react", "tech-node", "tech-express", "tech-rest"],
    links: [],
    features: [
      {
        name: "Guidance",
        img: "",
        description: "Step-by-step guidance system for creating and managing SMS campaigns",
        techs: ["tech-react", "tech-node"],
      },
    ],
  },
  {
    id: "project-11",
    name: "Auto SMS Responder",
    type: "live",
    img: "",
    description: "Automated SMS response service for handling inbound messages with configurable reply logic.",
    techs: ["tech-js", "tech-node", "tech-express", "tech-rest"],
    links: [],
    features: [],
  },
];

export const experience = [
  {
    id: "exp-1",
    company: "Tech Corp",
    role: "Senior Developer",
    duration: { start: "2022", end: "" },
    description: "Leading development of customer-facing web applications.",
    techs: ["tech-js", "tech-ts", "tech-react", "tech-node"],
  },
  {
    id: "exp-2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    duration: { start: "2019", end: "2022" },
    description: "Built and maintained multiple microservices.",
    techs: ["tech-python", "tech-docker", "tech-postgres"],
  },
];

export const hobbies = [
  { id: "hobby-1", name: "Photography", icon: "/icons/photography.svg", description: "Capturing moments and landscapes" },
  { id: "hobby-2", name: "Gaming", icon: "/icons/gaming.svg", description: "Strategy and puzzle games" },
  { id: "hobby-3", name: "Reading", icon: "/icons/reading.svg", description: "Tech blogs and sci-fi novels" },
];

export const passion = [
  { id: "passion-1", name: "Open Source", description: "Contributing to open source projects", icon: "/icons/opensource.svg" },
  { id: "passion-2", name: "Teaching", description: "Mentoring junior developers", icon: "/icons/teaching.svg" },
];

export const links = [
  { id: "link-1", name: "Resume", url: "#", icon: "/icons/resume.svg" },
  { id: "link-2", name: "Blog", url: "#", icon: "/icons/blog.svg" },
];

export const socials = [
  { id: "social-1", platform: "GitHub", url: "https://github.com", icon: "/icons/github.svg" },
  { id: "social-2", platform: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
  { id: "social-3", platform: "Twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
];
