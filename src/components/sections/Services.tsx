import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Plug, 
  GraduationCap, 
  Gauge,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "End-to-end development of web applications tailored to your business needs. From architecture design to deployment, I build solutions that scale with your growth.",
    features: ["Full-Stack Development", "API Design & Integration", "Database Architecture", "Cloud Deployment"],
  },
  {
    icon: Plug,
    title: "API & Backend Development",
    description: "High-performance APIs and backend systems that power your applications. RESTful services, microservices architecture, and seamless third-party integrations.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Third-Party Integrations"],
  },
  {
    icon: GraduationCap,
    title: "Moodle & LMS Solutions",
    description: "Specialized expertise in Moodle customization and e-learning platform development. Custom plugins, themes, and enterprise-grade learning solutions.",
    features: ["Custom Plugin Development", "Theme Customization", "Migration Services", "Performance Optimization"],
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description: "Comprehensive audits and optimization services to enhance your application's speed, scalability, and user experience. Debugging and code refactoring.",
    features: ["Performance Audits", "Code Refactoring", "Database Optimization", "Security Hardening"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How I Can{" "}
            <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a startup looking to build your MVP or an enterprise 
            seeking to optimize existing systems, I offer tailored solutions to meet your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-6 md:p-8 space-y-5 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block gradient-border p-8 md:p-12 rounded-2xl bg-card">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss how I can help bring your vision to life. I'm always excited 
              to take on new challenges and collaborate with ambitious teams.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
