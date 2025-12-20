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
    title: "Backend & API Development",
    description:
      "Designing and implementing solid backend systems that your product can rely on every day. From authentication and business logic to clean, well-documented REST APIs.",
    features: [
      "RESTful API design & implementation",
      "Authentication & authorization",
      "Business logic & domain modelling",
      "Integration-ready backend architecture",
    ],
  },
  {
    icon: Plug,
    title: "Systems Integration & Automation",
    description:
      "Connecting your systems so they actually talk to each other. I work with XML/JSON APIs, payment gateways, and internal tools to automate the boring stuff.",
    features: [
      "Third-party API integrations",
      "XML ↔ JSON backend services",
      "Payment gateway integration",
      "Sync between internal systems",
    ],
  },
  {
    icon: GraduationCap,
    title: "Moodle & LMS Platforms",
    description:
      "Hands-on experience building real learning platforms: plugins, reports, themes, and custom flows for students, teachers, and admins on top of Moodle.",
    features: [
      "Custom Moodle plugin development",
      "Financial & reporting dashboards",
      "Role-based flows (student/parent/teacher/admin)",
      "Performance tuning for large course catalogs",
    ],
  },
  {
    icon: Gauge,
    title: "Intranets, Portals & Optimization",
    description:
      "Improving existing systems—whether it’s a SharePoint intranet or a custom web app. I focus on performance, structure, and maintainability so teams can move faster.",
    features: [
      "SharePoint & internal portal development",
      "Performance & query optimization",
      "Code review & refactoring",
      "Debugging and production issue analysis",
    ],
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
            I focus on backends, integrations, and learning platforms. Whether you
            need a reliable API, a custom LMS, or a faster internal system, I can
            help you ship something stable, understandable, and maintainable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
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
              Have a backend or platform in mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Tell me about your system, your users, and your constraints. We can
              work together to design a backend, LMS, or internal portal that
              actually fits how your team works.
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
