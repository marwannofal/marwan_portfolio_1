import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend First Mindset",
    description:
      "I design reliable APIs, database schemas, and background jobs that keep products stable in production.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Systems",
    description:
      "From Dockerized services to Nginx on Linux, I ship code that is ready to run on real servers, not just localhost.",
  },
  {
    icon: Users,
    title: "Business-Focused Solutions",
    description:
      "I work closely with stakeholders to translate real requirements into maintainable backend features and integrations.",
  },
  {
    icon: Zap,
    title: "Performance & Observability",
    description:
      "I care about query performance, caching, and clear logs so issues are easy to detect, debug, and fix.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Backend Engineer Focused on{" "}
                <span className="gradient-text">Real-World Systems</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a backend engineer based in Amman, Jordan, with hands-on
                experience building real products — not just tutorials.
                I work mainly with Python (Django &amp; FastAPI), .NET/C#, and
                PHP/Moodle, and I’m comfortable owning everything from the
                database layer to the API and integrations that sit on top of it.
              </p>

              <p>
                My work spans custom e-learning platforms, HR and internal
                tools, financial and reporting modules, and integrations with
                third-party services. I enjoy taking vague or complex
                requirements and turning them into clear database schemas, clean
                backend logic, and well-documented REST APIs that other teams
                can rely on.
              </p>

              <p>
                My toolbox includes Linux, Docker, Git, Postman, Azure,
                MongoDB, MS SQL, MySQL, PostgreSQL, and Redis. I care about
                clean code, traceable logs, and systems that are easy to
                maintain and extend. Whether it’s designing a new API,
                debugging a production issue, or improving performance, I’m
                happiest when I’m deep in the backend making things work
                smoothly.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 space-y-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
