import { Badge } from "@/components/ui/badge";
import {
  Server,
  Layout,
  Database,
  Settings,
  Code,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing and implementing backend systems, APIs, and business logic that are reliable, secure, and easy to extend.",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      ".NET",
      "C#",
      "PHP",
      "Moodle",
    ],
  },
  {
    icon: Layout,
    title: "Frontend & UI",
    description:
      "Building clean, responsive interfaces for dashboards, portals, and admin tools that stay out of the way and let users focus.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    icon: Database,
    title: "Databases & Caching",
    description:
      "Modelling data, writing efficient queries, and keeping things fast and predictable as systems grow.",
    skills: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "MS SQL Server",
      "Redis",
    ],
  },
  {
    icon: Settings,
    title: "DevOps & Tooling",
    description:
      "Working close to the metal on Linux servers, containers, deployments, and the tooling that keeps projects shippable.",
    skills: [
      "Linux",
      "Docker",
      "Nginx",
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Azure",
      "Postman",
    ],
  },
];

const additionalSkills = [
  { icon: Code,  label: "Moodle Plugin Development" },
  { icon: Globe, label: "API & System Integrations" },
  { icon: Server, label: "Performance & Optimization" },
  { icon: Layout, label: "SharePoint & Intranet Solutions" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Skills &amp; Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A backend-focused toolkit shaped by real projects—e-learning platforms,
            internal tools, reporting dashboards, and production-ready APIs running in
            Linux and Docker environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-elevated p-6 md:p-8 space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-xl">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="skill">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
          <h3 className="font-semibold text-foreground text-lg mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
