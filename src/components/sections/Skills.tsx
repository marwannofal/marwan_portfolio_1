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
    description: "Building robust server-side applications and APIs that power modern web solutions.",
    skills: ["PHP", "Moodle", "Django", "FastAPI", ".NET", "Python", "C#"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces that delight users.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Designing efficient data models and optimizing database performance for scalability.",
    skills: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Settings,
    title: "DevOps & Tools",
    description: "Streamlining development workflows with modern tooling and deployment practices.",
    skills: ["Docker", "Nginx", "Git", "Linux", "CI/CD", "AWS"],
  },
];

const additionalSkills = [
  { icon: Code, label: "RESTful APIs" },
  { icon: Globe, label: "Web Security" },
  { icon: Server, label: "Microservices" },
  { icon: Layout, label: "Responsive Design" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit built over years of hands-on experience, 
            enabling me to tackle projects of any scale and complexity.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
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
