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
    name: "E-Commerce Platform",
    type: "live",
    img: "",
    description: "A full-featured e-commerce platform with payment integration.",
    techs: ["tech-js", "tech-ts", "tech-react", "tech-node", "tech-mongodb"],
    links: [
      { label: "Live Demo", url: "https://example.com" },
      { label: "GitHub", url: "https://github.com/example" },
    ],
    features: [
      {
        name: "Shopping Cart",
        img: "",
        description: "Real-time cart management with local storage persistence",
        techs: ["tech-js", "tech-react"],
      },
      {
        name: "Payment Integration",
        img: "",
        description: "Stripe payment processing with webhook handling",
        techs: ["tech-ts", "tech-node"],
      },
    ],
  },
  {
    id: "project-2",
    name: "Task Management App",
    type: "personal",
    img: "",
    description: "A productivity app for managing tasks and projects.",
    techs: ["tech-ts", "tech-react", "tech-postgres"],
    links: [
      { label: "GitHub", url: "https://github.com/example/tasks" },
    ],
    features: [
      {
        name: "Drag & Drop",
        img: "",
        description: "Kanban-style board with drag and drop functionality",
        techs: ["tech-ts", "tech-react"],
      },
    ],
  },
  {
    id: "project-3",
    name: "API Gateway",
    type: "live",
    img: "",
    description: "A microservices API gateway with rate limiting and caching.",
    techs: ["tech-python", "tech-docker", "tech-postgres", "tech-kubernetes"],
    links: [
      { label: "Live API", url: "https://api.example.com" },
      { label: "GitHub", url: "https://github.com/example/gateway" },
    ],
    features: [
      {
        name: "Rate Limiting",
        img: "",
        description: "Token bucket algorithm for API rate limiting",
        techs: ["tech-python", "tech-docker"],
      },
    ],
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
