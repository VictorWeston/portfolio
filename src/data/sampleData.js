// Sample Portfolio Data - Replace with your actual data

export const personalInfo = {
  name: "Victor Yee",
  title: "Software Engineer",
  bio: "Full-stack developer turned platform engineer. Built and shipped 10+ production services at scale, then migrated the entire ecosystem to Kubernetes and automated the onboarding of new projects to the cluster.",
  location: "Mumbai, India",
  email: "victoryeestudio@gmail.com",
  phone: "+91 9004809760",
  avatar: "",
};

export const quote = {
  text: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
  author: "Bjarne Stroustrup",
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
  
  // Backend
  { id: "tech-node", name: "Node.js", type: "backend", icon: "/icons/nodejs.png" },
  { id: "tech-express", name: "Express", type: "backend", icon: "/icons/express.png" },
  { id: "tech-fastapi", name: "FastAPI", type: "backend", icon: "/icons/FastAPI.png" },
  
  // Database
  { id: "tech-mongodb", name: "MongoDB", type: "database", icon: "/icons/mongodb.png" },
  { id: "tech-postgres", name: "PostgreSQL", type: "database", icon: "/icons/postgresql.png" },
  { id: "tech-redis", name: "Redis", type: "database", icon: "/icons/redis.png" },
  
  // Deployment
  { id: "tech-docker", name: "Docker", type: "deployment", icon: "/icons/docker.png" },
  { id: "tech-kubernetes", name: "Kubernetes", type: "deployment", icon: "/icons/kubernetes.png" },
  { id: "tech-argocd", name: "ArgoCD", type: "deployment", icon: "/icons/argocd.png" },
  { id: "tech-gitops", name: "GitOps", type: "deployment", icon: "/icons/github.png" },
  { id: "tech-ghcr", name: "GHCR", type: "deployment", icon: "/icons/gitactions.png" },
  { id: "tech-portainer", name: "Portainer", type: "deployment", icon: "/icons/portainer.png" },
  { id: "tech-helm", name: "Helm", type: "deployment", icon: "/icons/Helm.png" },
  
  // Tools
  { id: "tech-grafana", name: "Grafana", type: "tools", icon: "/icons/grafana.png" },
  { id: "tech-prometheus", name: "Prometheus", type: "tools", icon: "/icons/prometheus.png" },
  { id: "tech-loki", name: "Loki", type: "tools", icon: "/icons/loki.png" },
  { id: "tech-nginx", name: "Nginx", type: "tools", icon: "/icons/nginx.png" },
  { id: "tech-blender", name: "Blender API", type: "tools", icon: "/icons/blender.png" },
  { id: "tech-git-api", name: "Git API", type: "tools", icon: "/icons/github.png" },
  
  // Integrations
  { id: "tech-telecrm", name: "TeleCRM", type: "integrations", icon: "/icons/telecrm.png" },
  { id: "tech-shopify", name: "Shopify", type: "integrations", icon: "/icons/shopify.png" },
  { id: "tech-calendly", name: "Calendly", type: "integrations", icon: "/icons/calendly.png" },
  { id: "tech-google", name: "Google", type: "integrations", icon: "/icons/Google Cloud.png" },
  { id: "tech-genai", name: "GenAI", type: "integrations", icon: "/icons/gemini.png" },
  { id: "tech-tally", name: "Tally", type: "integrations", icon: "/icons/tally.png" },
  { id: "tech-wordpress", name: "WordPress", type: "integrations", icon: "/icons/wordpress.png" },
  { id: "tech-razorpay", name: "Razorpay", type: "integrations", icon: "/icons/razor.png" },
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
    name: "Multi-Whatsapp -Admark",
    type: "live",
    img: "/icons/whatsapp.png",
    description: "Multi-number WhatsApp Web Automation platform with chatbot automation, GenAI-powered content variance for bulk campaigns, Chrome extension, and payment integration.",
    techs: ["tech-js", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-plasmo", "tech-genai", "tech-razorpay", "tech-ts"],
    links: [{label: "Live Site", url: "https://multiwhatsapp.admarksolution.com"}],
    features: [
      {
        name: "Simple Chatbot + Chatbot Flow Creator",
        img: "",
        description: "Visual flow builder for creating automated chatbot logic trees with drag-and-drop interface with nodes and edges, created using react-flow",
        techs: ["tech-react", "tech-react-flow", "tech-node", "tech-mongodb"],
      },
      {
        name: "GenAI Content Variance (anti bot detection)",
        img: "",
        description: "Integrated GenAI to generate content variations for bulk WhatsApp campaigns to reduce spam detection without changing the core message",
        techs: ["tech-genai", "tech-node", "tech-js"],
      },
      {
        name: "Chrome Extension",
        img: "",
        description: "Browser extension built for users with flagged WhatsApp Web sessions to bypass restrictions and continue using the platform seamlessly, user can use the extension to run the automation and api from their own browser session without any restrictions",
        techs: ["tech-plasmo", "tech-ts", "tech-react"],
      },
      {
        name: "Integration: Razorpay",
        img: "",
        description: "Razorpay web payment gateway integration for premium feature purchases and subscription management within the platform, it uses our @[Admark Payment Processor GO](project-6) as the backend payment processing service",
        techs: ["tech-node", "tech-razorpay"],
      },
    ],
  },
  {
    id: "project-2",
    name: "Verified Whatsapp -Admark",
    type: "live",
    img: "/icons/verified.png",
    description: "Enterprise-grade Verified WhatsApp(Blue tick) management platform with high-throughput campaigning, advanced chatbot flow builder, template management, Live Chat, multiple integrations, full observability stack.",
    techs: ["tech-js", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-postgres", "tech-redis", "tech-grafana", "tech-prometheus", "tech-loki", "tech-telecrm", "tech-shopify", "tech-calendly", "tech-google", "tech-tally", "tech-wordpress"],
    links: [{label: "Live Site", url: "https://verifiedwhatsapp.admarksolution.com"}],
    features: [
      {
        name: "High Threshold Campaigning & Webhook Handling",
        img: "",
        description: "High-throughput WhatsApp campaign engine handling 80 msg/s per campaign (META limit) and 10k+ webhooks/s for delivery and response tracking. Built with parallel processing and Redis caching on containerized Kubernetes infrastructure.",
        techs: ["tech-node", "tech-redis", "tech-mongodb"],
      },
      {
        name: "Feature Rich Chatbot Flow Builder",
        img: "/images/imagecb1.png",
        description: "Advanced visual chatbot flow builder with branching, conditions, rich media support and all supported WhatsApp message types, built using React Flow for intuitive drag-and-drop interface. An old election bot feature was removed due to Meta policy changes which had @[voters data](project-5) in a PostgreSQL database.",
        techs: ["tech-react", "tech-react-flow", "tech-js", "tech-postgres"],
      },
      {
        name: "Chatbot Logic",
        img: "",
        description: "Server-side chatbot logic engine for processing conversation flows and triggering actions. Flows are stored in MongoDB and Flow states are handled in memory for each conversation",
        techs: ["tech-node", "tech-express", "tech-mongodb"],
      },
      {
        name: "Live Chat",
        img: "",
        description: "Real-time live chat interface for customer support and manual intervention in conversations, built with React and WebSocket communication",
        techs: ["tech-react", "tech-node"],
      },
      {
        name: "Integrations",
        img: "",
        description: "Third-party service integrations including CRMs, payment gateways, and external APIs",
        techs: ["tech-node", "tech-razorpay", "tech-telecrm", "tech-shopify", "tech-calendly", "tech-google", "tech-tally", "tech-wordpress"],
      },
      {
        name: "Observability Stack",
        img: "",
        description: "Full observability with Grafana dashboards, Prometheus metrics, and Loki log aggregation. Configured Prometheus to collect live app metrics (webhooks rate, api calls rate, errors) and Loki for general and webhook logs. Built custom Grafana dashboards with transformed webhook log data displayed as queryable tables.",
        techs: ["tech-grafana", "tech-prometheus", "tech-loki", "tech-node"],
      },
    ],
  },
  {
    id: "project-3",
    name: "Admark CRM",
    type: "live",
    img: "/icons/crm.png",
    description: "Customer relationship management system with quotation generation, Google Maps integration, call tracking, lead management, organization management and user monitoring.",
    techs: ["tech-js", "tech-react", "tech-node", "tech-express", "tech-mongodb", "tech-google", "tech-portainer"],
    links: [{label: "Live Site", url: "https://crm.admarksolution.com"}],
    features: [
      {
        name: "Quotation Generator",
        img: "",
        description: "Quotation builder with customizable templates, preset products, pricing tables, and terms & conditions for rapid quote generation. Supports dynamic pricing rules and reusable presets stored in MongoDB.",
        techs: ["tech-react", "tech-node", "tech-js", "tech-mongodb"],
      },
      {
        name: "Google Maps API",
        img: "",
        description: "Location-based features powered by Google Maps API for client and lead management. Features live agent location tracking, agent route history, visit markers and login location tracking.",
        techs: ["tech-google", "tech-js", "tech-react", "tech-node"],
      },
      {
        name: "Call History Tracking",
        img: "",
        description: "Call history tracking service that receives call logs via API from @[Admark CRM Mobile App](project-4), stores them in MongoDB, and provides a dashboard for monitoring call activity and performance metrics.",
        techs: ["tech-node", "tech-mongodb"],
      },
    ],
  },
  {
    id: "project-4",
    name: "Admark CRM Mobile App",
    type: "live",
    img: "/images/ic_launcher.png",
    description: "Mobile CRM application with quotation generation, automated lead assignment, and comprehensive tracking for call, location, and screen time.",
    techs: ["tech-js", "tech-react-native", "tech-node", "tech-express", "tech-mongodb", "tech-genai"],
    links: [],
    features: [
      {
        name: "Quotation Generator",
        img: "",
        description: "Mobile-optimized version of quotation builder from @[Admark CRM](project-3) for on-the-go quote creation and sharing",
        techs: ["tech-react-native", "tech-node"],
      },
      {
        name: "Voice based Automated Lead Assign",
        img: "",
        description: "Integrated GenAI. Uses voice to text, translates to English and uses GenAI to extract lead details (lead number, client name, agent name, product, priority) and assigns to agents accordingly.",
        techs: ["tech-node", "tech-mongodb", "tech-genai"],
      },
      {
        name: "Call, Location & Screentime Tracking",
        img: "",
        description: "Real-time tracking of call activity, GPS location, and app screen time for org device monitoring.",
        techs: ["tech-react-native", "tech-node", "tech-mongodb"],
      },
    ],
  },
  {
    id: "project-5",
    name: "NAS Database Panel – Election Voters Database",
    type: "live",
    img: "/icons/postgresql.png",
    description: "Data management panel for election voter databases with automated import and advanced multi-filter querying. Originally NAS was being used to store the voters data in excel files and there was no database, I built a bulk data import system with folder-based file selection and automated parsing to streamline the process. The panel also features an advanced query interface supporting multiple simultaneous filters for voter data analysis. currently has 20M+ records.",
    techs: ["tech-js", "tech-react", "tech-node", "tech-express", "tech-postgres"],
    links: [],
    features: [
      {
        name: "Folder Select Automated Import",
        img: "",
        description: "Bulk data import system with folder-based file selection and automated parsing. it imports all the excel files with proper fields mapping and store the data in PostgreSQL, it also has error handling and duplicate detection to ensure data integrity",
        techs: ["tech-node", "tech-postgres"],
      },
      {
        name: "Multi Filter Querying",
        img: "",
        description: "Advanced query interface supporting multiple simultaneous filters for voter data analysis, most common filters are indexed beforehand to ensure fast query performance even with large datasets",
        techs: ["tech-react", "tech-node", "tech-postgres"],
      },
    ],
  },
  {
    id: "project-6",
    name: "Admark Payment Processor GO",
    type: "live",
    img: "/icons/razor.png",
    description: "High-performance payment processing service built in Go with Razorpay integration. Had implementations in in @[Multi-Whatsapp](project-1) and @[Verified WhatsApp](project-2) for handling all payment processing tasks including premium feature purchases and subscription management.",
    techs: ["tech-go", "tech-razorpay"],
    links: [],
    features: [
      {
        name: "Razorpay Integration",
        img: "",
        description: "Complete Razorpay payment gateway integration for processing payments, refunds, and webhooks",
        techs: ["tech-go", "tech-razorpay"],
      },
    ],
  },
  {
    id: "project-7",
    name: "GO Cloud Storage",
    type: "live",
    img: "/icons/go.png",
    description: "Cloud storage platform built in Go with RESTful API, dual authentication (JWT + API keys), hierarchical folder management with recursive path traversal, full-text search, virtual views (recent, starred), and comprehensive trash management with soft delete and restore. PostgreSQL-backed with optimized indexing and full user isolation. After the @[Kubernetes ecosystem migration](project-9), this is the main source of truth for file storage across all apps and projects in the cluster.",
    techs: ["tech-go", "tech-postgres"],
    links: [{label: "Public Repo", url: "https://github.com/VictorWeston/GO-Cloud-Storage-Service-Public.git"}],
    features: [
      {
        name: "File & Folder Management",
        img: "",
        description: "Full CRUD for files and folders with unlimited nesting depth, file upload/download with physical disk storage, move files between folders, star/unstar favorites, and recursive CTE-based folder path traversal for breadcrumb navigation. All queries user-isolated.",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "Dual Auth: JWT & Service Accounts",
        img: "",
        description: "JWT authentication for regular users with 15-min expiry and token refresh, plus non-expiring API key authentication (sk_ prefix) for service accounts. Service accounts are created by regular users and use X-API-Key header for programmatic access.",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "Full-Text Search & Virtual Views",
        img: "",
        description: "PostgreSQL tsvector-powered full-text file search with English tokenization and case-insensitive matching. Virtual views for recent files (last 50 by updated_at) and starred/favorited files without duplicating data.",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "Trash Management",
        img: "",
        description: "Soft delete with restore capability for both files and folders. Permanent deletion uses recursive CTEs to cascade through entire subfolder trees, removing all nested files and folders from the database.",
        techs: ["tech-go", "tech-postgres"],
      },
      {
        name: "PostgreSQL Indexing",
        img: "",
        description: "Optimized query performance with targeted indexes on user_id, folder_id, deleted, and starred columns across files and folders tables. Recursive CTEs for folder hierarchy traversal and path resolution.",
        techs: ["tech-postgres", "tech-go"],
      },
    ],
  },
  {
    id: "project-8",
    name: "Neta & Business Design – Admark",
    type: "live",
    img: "/icons/adda.png",
    description: "Mobile app for quick political banner creation with ready-to-use designs and frames, plus URL-based digital business cards and product catalogs for easy sharing. Backend powered by Node.js and Python for background removal.",
    techs: ["tech-python", "tech-js", "tech-react", "tech-node", "tech-express", "tech-ts", "tech-mongodb"],
    links: [],
    features: [
      {
        name: "Political Banner Creator",
        img: "",
        description: "One-click political banner generation using pre-built designs and customizable frames. Users select a template, apply their profile photo with auto background removal, and get a ready-to-share banner instantly.",
        techs: ["tech-react", "tech-node", "tech-ts", "tech-mongodb"],
      },
      {
        name: "Background Removal Service (REMBG)",
        img: "",
        description: "Python-based background removal service using REMBG library, integrated into the banner creator for automatic profile photo processing",
        techs: ["tech-python"],
      },
      {
        name: "Digital Business Card & Product Catalog",
        img: "",
        description: "URL-based digital business cards and product catalogs hosted over HTTPS. Users create and share their business profile and products through a simple shareable link for easy promotion.",
        techs: ["tech-node", "tech-ts", "tech-react"],
      },
      {
        name: "Backend For Editors",
        img: "",
        description: "Dedicated backend service managing designs, frames, templates, and user assets for the banner editor and catalog generator",
        techs: ["tech-node", "tech-express", "tech-js"],
      },
    ],
  },
  {
    id: "project-9",
    name: "Kubernetes Ecosystem Migration (bare metal VPS Cluster)",
    type: "live",
    img: "/icons/kubernetes.png",
    description: "Full infrastructure migration to Kubernetes with containerized services, CI/CD pipelines, and a complete observability stack. Used Org's existing dedicated VPSs(bare metal) to form a Kubernetes cluster, migrated multiple services with zero downtime, and implemented automated CI/CD with ArgoCD and GitOps. current ecosytem(02/2026) has 7 VPSs(Hetzner), 4 in cluster as worker nodes and 3 for external services like database and storage. The cluster runs 10+ production services including all the projects mentioned here and more, with a full monitoring stack using Grafana, Prometheus, and Loki.",
    techs: ["tech-docker", "tech-kubernetes", "tech-argocd", "tech-gitops", "tech-ghcr", "tech-portainer", "tech-grafana", "tech-prometheus", "tech-loki", "tech-nginx"],
    links: [],
    features: [
      {
        name: "Migrated Projects",
        img: "",
        description: "Containerized and migrated @[Verified WhatsApp](project-2), @[Admark CRM](project-3), Admark Website, and Bulk-SMS Panel to Kubernetes with zero-downtime deployments via ArgoCD and GitOps CI/CD pipelines.",
        techs: ["tech-docker", "tech-kubernetes", "tech-argocd", "tech-gitops", "tech-ghcr", "tech-nginx"],
      },
      {
        name: "Cloud Storage Migration",
        img: "",
        description: "Migrated backend file storage from Multer disk storage to centralized @[GO Cloud Storage](project-7) service, ensuring a single source of truth for files regardless of which Kubernetes node or pod the service is deployed on.",
        techs: ["tech-go", "tech-kubernetes", "tech-docker"],
      },
      {
        name: "ArgoCD + GitOps CI/CD Pipeline",
        img: "",
        description: "Configured organization's GHCR (GitHub Container Registry) with ArgoCD and GitOps for automated CI/CD pipelines. Push to GitHub triggers image build and push to GHCR, ArgoCD detects the new image and auto-deploys to Kubernetes.",
        techs: ["tech-argocd", "tech-gitops", "tech-ghcr", "tech-kubernetes", "tech-docker"],
      },
      {
        name: "Grafana",
        img: "",
        description: "Centralized Grafana dashboards for monitoring all migrated services and infrastructure. Also Monitor resource usage of all the VPSs in the cluster and set up custom dashboards for each service with relevant metrics and logs.",
        techs: ["tech-grafana"],
      },
      {
        name: "Prometheus",
        img: "",
        description: "Prometheus metrics collection and alerting across the Kubernetes cluster. Project @[Verified WhatsApp](project-2) has custom metrics for webhook rates, api call rates, and error rates.",
        techs: ["tech-prometheus"],
      },
      {
        name: "Loki",
        img: "",
        description: "Log aggregation with Loki for centralized logging across all services. Project @[Verified WhatsApp](project-2) has custom log streams for webhook events and API calls.",
        techs: ["tech-loki"],
      },
      {
        name: "Namespace Isolation & RBAC",
        img: "",
        description: "Configured namespace-level isolation per service with Kubernetes RBAC policies for access control. Service accounts scoped per namespace to enforce least-privilege across the cluster.",
        techs: ["tech-kubernetes"],
      },
    ],
  },

  {
    id: "project-11",
    name: "Auto SMS Responder",
    type: "live",
    img: "/images/auto.png",
    description: "Automated SMS response service for handling inbound messages with configurable reply logic.",
    techs: ["tech-ts", "tech-node", "tech-express", "tech-mongodb", "tech-react-native"],
    links: [],
    features: [
      {
        name: "Whitelabel App Generator",
        img: "",
        description: "Panel for whitelabel distribution — takes custom app name, icon, and background as input, builds a branded APK in ~10 minutes, and provides a download link. Includes a distributor backend panel for tracking users under each whitelabel app distribution.",
        techs: ["tech-node", "tech-react-native"],
      },
    ],
  },
  {
    id: "project-12",
    name: "Automated Migration Platform",
    type: "live",
    img: "/icons/kubernetes.png",
    description: "After manually migrating multiple projects to the @[Kubernetes ecosystem](project-9), built an internal developer platform that provides a golden path for onboarding services to the cluster. A FastAPI backend and React frontend \u2014 developers input project details through a self-service UI, the platform generates a universal Helm chart values file, ArgoCD Application manifests, and GitHub Actions workflows with timestamp-based versioning, then clones the target repo, commits all generated files, and pushes \u2014 triggering the full CI/CD pipeline automatically. Eliminated manual migration entirely, reducing project onboarding from days of infrastructure work to minutes with zero dependency on platform team availability.",
    techs: ["tech-python", "tech-fastapi", "tech-js", "tech-react", "tech-docker", "tech-kubernetes", "tech-helm", "tech-argocd", "tech-gitops", "tech-ghcr", "tech-nginx"],
    links: [],
    features: [
      {
        name: "Universal Helm Chart",
        img: "",
        description: "Flexible Helm chart supporting single and multi-deployment projects with automatic namespace creation, nginx ingress with TLS via cert-manager, image pull secrets, configurable resource limits, liveness/readiness probes, horizontal pod autoscaling (HPA), ConfigMaps and Secrets management. Designed as a one-chart-fits-all solution so every service in the cluster uses the same deployment pattern.",
        techs: ["tech-helm", "tech-kubernetes", "tech-nginx"],
      },
      {
        name: "Automated Domain Pointing & TLS",
        img: "",
        description: "Automates subdomain pointing using Cloudflare API token and SSL certificate generation via cert-manager with Let's Encrypt. When developers input their hostname, the platform configures the ingress to route to the correct service and automatically provisions and renews TLS certificates for HTTPS access.",
        techs: ["tech-nginx", "tech-kubernetes"],
      },
      {
        name: "FastAPI Config Generator",
        img: "",
        description: "Python FastAPI backend with endpoints for generating Helm values.yaml, ArgoCD Application manifests, and GitHub Actions workflow files. Supports single and multi-deployment projects with per-deployment image repositories, contexts, and container ports. Includes repo validation and deployment templates API. Generates workflows with timestamp-based versioning (YYYYMMDDHHMMSS-gitsha7) and automatic Helm values image tag updates for GitOps integration.",
        techs: ["tech-python", "tech-fastapi"],
      },
      {
        name: "Self-Service UI",
        img: "",
        description: "React frontend where developers configure their project through a guided form — project name, namespace, repo URL, image registry, hostname, container port, deployment type (single/multi), and environment variables. Includes setup tab for chart repo configuration, live preview of generated files before committing, and deployment template selection.",
        techs: ["tech-react", "tech-js"],
      },
      {
        name: "Automated Repo Deploy",
        img: "",
        description: "Deploy-to-repo endpoint that clones the target repository using authenticated HTTPS, generates all configuration files (values.yaml, ArgoCD app, GitHub workflow), commits them to the repo, and pushes — triggering the existing @[ArgoCD + GitOps CI/CD pipeline](project-9). Git tokens are never stored and cloned repos use temporary directories that are cleaned up after use.",
        techs: ["tech-gitops", "tech-ghcr", "tech-argocd", "tech-python"],
      },
    ],
  },
  {
    id: "project-13",
    name: "Commit History Visualizer",
    type: "personal",
    img: "/images/commits.gif",
    description: "Fetches your GitHub contribution data via the GraphQL API and renders it as an animated 3D tower visualization using Blender. Each day maps to a cube whose height represents commit count, with a camera orbit animation exported as a GIF. Automatically updates daily via GitHub Actions and commits the GIF back to the repo for use in the GitHub profile README.",
    techs: ["tech-python", "tech-git-api", "tech-blender", "tech-docker"],
    links: [{label: "GitHub Repository", url: "https://github.com/VictorWeston/commit-history-visualizer.git"}],
    features: [
      {
        name: "GitHub GraphQL Data Fetcher",
        img: "",
        description: "Fetches 365 days of contribution calendar data from GitHub's GraphQL API using a personal access token. Supports mock data generation for local testing and development without needing API access.",
        techs: ["tech-python", "tech-git-api"],
      },
      {
        name: "Blender 3D Render Pipeline",
        img: "",
        description: "Programmatically generates a 3D grid of cubes in Blender where height equals commit count, with an orbiting camera animation. Configurable render samples, frame count, and resolution. Frames are compiled into an animated GIF via ffmpeg.",
        techs: ["tech-python", "tech-blender"],
      },
      {
        name: "Dockerized Pipeline",
        img: "",
        description: "Full pipeline containerized with Docker \u2014 supports fetch, render, GIF export, and a complete end-to-end run via CLI commands. Dev and production Dockerfiles with volume-mounted output for local development.",
        techs: ["tech-python", "tech-docker"],
      },
    ],
  },
];

export const experience = [
  {
    id: "exp-1",
    company: "Admark Multiventures",
    role: "Lead / Senior Developer",
    duration: { start: "2024", end: "2026" },
    description: "Promoted to Lead Developer after successful delivery of first project. Hired and led a team of 2 additional developers. Set up GitHub organization, repositories, domain system, and Multi-VPS infrastructure for backend, database, and deployment. Rebuilt previously outsourced services (@[Verified WhatsApp](project-2), SMS Panel) from scratch and delivered multiple new projects. Migrated the entire ecosystem to @[Kubernetes](project-9) using existing VPSs to form the cluster — reduced deployments from manual SSH to automated CI/CD under 2 minutes. Implemented ArgoCD + GitOps pipelines, transitioned containerized apps to centralized @[cloud storage](project-7), and set up app-specific Grafana dashboards with Prometheus metrics and Loki logs. Built the @[Automated Migration Platform](project-12) establishing a golden path for onboarding new services. Created migration documentation and ecosystem flowcharts. Completed full handover process.",
    techs: ["tech-js", "tech-ts", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-redis", "tech-go", "tech-postgres", "tech-docker", "tech-kubernetes", "tech-argocd", "tech-gitops", "tech-ghcr", "tech-grafana", "tech-prometheus", "tech-loki", "tech-nginx"],
  },
  {
    id: "exp-2",
    company: "Admark Multiventures",
    role: "Full Stack Developer",
    duration: { start: "2024", end: "2024" },
    description: "Hired as the company's first in-house developer. Built the @[Multi-WhatsApp](project-1) automation platform from scratch, replacing a previously outsourced service with a fully featured in-house solution including chatbot flow builder, GenAI content variance, Chrome extension, and Razorpay integration.",
    techs: ["tech-js", "tech-react", "tech-react-flow", "tech-node", "tech-express", "tech-mongodb", "tech-plasmo", "tech-ts", "tech-genai", "tech-razorpay"],
  },
];

export const hobbies = [
  { id: "hobby-1", name: "3D Modeling and Character Design", icon: "/icons/3d-modeling.svg", description: "Creating 3D models for characters and environments" },
  { id: "hobby-2", name: "Gaming", icon: "/icons/gaming.svg", description: "Strategy and puzzle games and a lot of theorycrafting. Favorite titles: Satisfactory, Risk of Rain 2, Portal 2 and Silksong." },
  { id: "hobby-3", name: "World Building", icon: "/icons/character-design.svg", description: "Designing and creating immersive worlds and narratives for game development projects" },
];

export const passion = [
  { id: "passion-1", name: "Game Dev", description: "Creating and developing games, crafting unique gameplay mechanics.", icon: "/icons/game-dev.svg" },
  { id: "passion-2", name: "Procedural Generation", description: "Exploring algorithms and techniques for generating content dynamically.", icon: "/icons/automation.svg" },
];

export const links = [
  { id: "link-1", name: "Resume/CV", url: "#", icon: "/icons/resume.svg" },
  { id: "link-2", name: "Blog", url: "#", icon: "/icons/blog.svg" },
];

export const socials = [
  { id: "social-1", platform: "GitHub", url: "https://github.com/VictorWeston ", icon: "/icons/github.svg" },
  { id: "social-2", platform: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
  { id: "social-3", platform: "WhatsApp", url: "https://wa.me/919004809760", icon: "/icons/whatsapp.svg" },
];
