import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, well-documented code that scales.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodologies ensure timely project completion.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "I work seamlessly with teams and stakeholders.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized solutions that deliver exceptional speed.",
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
                Crafting Digital Experiences That{" "}
                <span className="gradient-text">Make an Impact</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate Full-Stack Developer based in Amman, Jordan, with a deep love 
                for building web applications that solve real-world problems. With expertise 
                spanning from backend systems to polished user interfaces, I bring ideas to 
                life through code.
              </p>
              <p>
                My journey in software development has led me through diverse projects—from 
                enterprise learning platforms built on Moodle to high-performance APIs with 
                Django and FastAPI. I thrive on challenges that push me to learn new 
                technologies and deliver solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, contributing 
                to open-source projects, or mentoring aspiring developers. I believe in the 
                power of technology to transform businesses and improve lives.
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
