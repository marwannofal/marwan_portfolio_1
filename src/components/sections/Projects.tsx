import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Learning Platform",
    summary: "A comprehensive Moodle-based LMS for a multinational corporation.",
    description: "Designed and developed a fully customized learning management system that handles thousands of concurrent users. Implemented custom plugins, automated enrollment workflows, and advanced reporting dashboards.",
    tech: ["PHP", "Moodle", "MySQL", "JavaScript", "Docker"],
    outcomes: [
      "Reduced course creation time by 60%",
      "Supported 10,000+ active learners",
      "99.9% uptime over 12 months",
      "Integrated with enterprise SSO systems",
    ],
    featured: true,
  },
  {
    title: "Real-Time Analytics Dashboard",
    summary: "A high-performance API with interactive data visualization.",
    description: "Built a FastAPI backend that processes millions of events daily, paired with a React frontend featuring real-time charts and customizable widgets. Implemented efficient caching strategies and WebSocket connections.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
    outcomes: [
      "Processes 1M+ events per day",
      "Sub-100ms API response times",
      "Interactive drag-and-drop interface",
      "Reduced reporting time by 75%",
    ],
    featured: true,
  },
  {
    title: "Healthcare Management System",
    summary: "A secure .NET application for clinic operations.",
    description: "Developed a full-featured healthcare management solution including patient records, appointment scheduling, billing, and inventory management. Ensured HIPAA compliance throughout the architecture.",
    tech: [".NET", "C#", "SQL Server", "Azure", "React"],
    outcomes: [
      "Manages 50,000+ patient records",
      "Automated billing processes",
      "HIPAA-compliant architecture",
      "Reduced admin workload by 40%",
    ],
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    summary: "A scalable Django-powered online marketplace.",
    description: "Created a multi-vendor e-commerce platform with advanced product search, recommendation engine, and seamless payment integration. Implemented a microservices architecture for independent scaling.",
    tech: ["Django", "Python", "React", "MongoDB", "Stripe"],
    outcomes: [
      "Handled $2M+ in transactions",
      "AI-powered recommendations",
      "99.95% payment success rate",
      "Supports 500+ vendors",
    ],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my expertise in building 
            scalable, user-centered applications across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`card-elevated overflow-hidden group ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text opacity-30">
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                {project.featured && (
                  <Badge variant="accent" className="absolute top-4 left-4">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {project.summary}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Outcomes */}
                <ul className="space-y-1.5 pt-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
