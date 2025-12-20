import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  // 📚 ClassVera
  {
    title: "Classvera E-Learning Platform",
    summary: "A modern K-12 LMS with courses, live classes, consultations, and financial reports.",
    description:
      "Moodle-based e-learning platform tailored for schools: custom plugins for live classes, consultations, coupons, device guard, financial reports, and role-based dashboards for students, parents, teachers, and admins.",
    tech: ["PHP", "Moodle", "MariaDB", "Linux", "Docker", "Nginx"],
    outcomes: [
      "Unified courses, live classes, consultations, and community in one platform",
      "Custom admin and teacher dashboards with financial and activity insights",
      "Secure flows for bookings, payments, and access control",
      "Seeder tools to generate realistic demo and testing data",
    ],
    featured: true,
    category: "Learning",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1766213447/classvera_rxgiad.png", // مؤقتًا نفس ستايل التكتيكات، عدّلها لاحقًا لصورة ClassVera
    liveUrl: "https://classvera.com",
    githubUrl: undefined,
  },

  // ⚽ Taktikat
  {
    title: "Taktikat",
    summary: "Production backend for a football-focused content management system.",
    description:
      "Backend-focused work on a CMS powering Taktikat: content management, authentication, and performance tuning on a live environment.",
    tech: ["PHP", "Backend", "Linux", "Nginx"],
    outcomes: [
      "Supported a real, externally-facing CMS instance",
      "Improved performance and reliability under real usage",
      "Worked with production deployment and troubleshooting",
      "Strengthened understanding of PHP backend patterns",
    ],
    featured: false,
    category: "Backend development",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1751014305/Screenshot_20250627_115106_fjdqbc.png",
    liveUrl: "https://cms.taktikat.net/",
    githubUrl: undefined,
  },

  {
    title: "Barbarita",
    summary: "An evolution of Matador with more production-oriented patterns.",
    description:
      "Barbarita is the next step after Matador. I used it to refine the ideas from Matador and push them closer to production standards — adding better configuration patterns, logging, and room for background jobs or scheduled tasks. It’s where I experiment with backend improvements before applying them to real products.",
    tech: ["Backend", "APIs", "Logging", "Configuration"],
    outcomes: [
      "Improved the way environments and configuration (dev/stage/prod) are handled.",
      "Introduced structured logging patterns for easier debugging and monitoring.",
      "Refined folder structure and separation of business logic from infrastructure.",
      "Used as a sandbox to try ideas before bringing them into larger platforms like my LMS work.",
    ],
    featured: false,
    category: "Backend development",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1766214197/barberita_lrlyxp.png",
    liveUrl: "https://api.barberita.com/swagger/",
    githubUrl: undefined,
  },

  // 🏥 KHCC Portal (SharePoint)
  {
  title: "KHCC Portal Intranet Site",
    summary: "SharePoint Online intranet for internal communication, collaboration, and knowledge sharing.",
    description:
      "I worked as a Full-Stack Developer on the King Hussein Cancer Center (KHCC) intranet, building a modern internal portal on top of SharePoint Online and SPFx. My focus was on creating custom web parts with React and TypeScript, improving navigation, and making it easier for staff to find the content and tools they use every day. I implemented reusable components for news, announcements, quick links, and department sections, while keeping performance and usability in mind.",
    tech: ["SharePoint Online", "SPFx", "React", "TypeScript", "Microsoft 365"],
    outcomes: [
      "Delivered custom SPFx web parts that matched KHCC branding and design guidelines.",
      "Improved discoverability of internal pages, documents, and resources through clearer navigation.",
      "Reduced manual content updates by building configurable components that non-technical staff can manage.",
      "Collaborated closely with stakeholders to refine UX, layouts, and information structure across the portal.",
    ],
    featured: false,
    category: "SharePoint",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1766214374/khcc_j0btwj.png",
    liveUrl: "https://khccjordan.sharepoint.com/sites/KHCC_Portal",
    githubUrl: undefined,
  },
  // 🐂 Matador
  {
    title: "Matador",
    summary: "Backend starter template for building clean, modular APIs.",
    description:
      "Matador started as a personal backend boilerplate to standardize how I build APIs. It focuses on clear separation between routing, business logic, and data access, with consistent error handling and response patterns. I use it as a starting point when I want to spin up a new REST API quickly without rewriting the same setup every time.",
    tech: ["Backend", "REST APIs", "Clean Architecture"],
    outcomes: [
      "Created a reusable structure for new backend/API projects.",
      "Standardized controllers/services/repositories and response formats.",
      "Made it easier to add new features without breaking core logic.",
      "Became my personal reference for clean backend organization.",
    ],
    featured: false,
    category: "Backend development",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1751021295/Screenshot_from_2025-06-27_13-47-08_anmcw3.png",
    liveUrl: undefined,
    githubUrl: undefined,
  },


  // 👨‍💼 Employee Management System
  {
    title: "Employee Management System",
    summary: "Internal system for managing employees, roles, and workflows.",
    description:
      "Web app that manages employees, departments, and basic HR operations. Focused on CRUD flows, form validation, and a clean dashboard-style UI.",
    tech: ["React", "TypeScript", ".NET (planned)", "REST"],
    outcomes: [
      "Centralized view of employees and basic HR data",
      "Clean layout ready to connect to a real backend",
      "Good playground for full-stack patterns",
      "Helps demonstrate admin/dashboard UI design skills",
    ],
    featured: false,
    category: "Web development",
    image:
      "https://res.cloudinary.com/dcfyjmi9x/image/upload/v1732566050/6_tnc5dg.png",
    liveUrl: undefined,
    githubUrl: undefined,
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real projects across e-learning, intranets, backend services, and
            learning experiments—showing how I think about structure, reliability,
            and developer experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-elevated overflow-hidden group"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary" />
                )}

                {project.featured && (
                  <Badge variant="accent" className="absolute top-4 left-4">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-1">
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
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
