import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      className="
        relative min-h-screen overflow-hidden bg-hero-pattern
        flex items-center justify-center
        pb-64 sm:pb-72 md:pb-80 lg:pb-40 xl:pb-32
      "
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-wide relative z-10 pt-24 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 md:mt-32 sm:mt-44">
              <Badge variant="tech" className="gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to backend roles & freelance
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Hi, I&apos;m <span className="gradient-text">Marwan Nofal</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Backend Engineer &amp; Software Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              I focus on building reliable backends, APIs, and integrations using{" "}
              <span className="text-foreground font-medium">
                Python (Django &amp; FastAPI)
              </span>
              ,{" "}
              <span className="text-foreground font-medium">.NET/C#</span>,{" "}
              <span className="text-foreground font-medium">PHP/Moodle</span>, and{" "}
              <span className="text-foreground font-medium">React</span> on top of{" "}
              <span className="text-foreground font-medium">
                Linux, Docker, and SQL/NoSQL databases
              </span>
              .
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Amman, Jordan (GMT+3)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Let&apos;s Work Together
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#projects">
                  <Download className="w-5 h-5" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delay-2 mt-10 lg:mt-0">
            <div className="relative">
              <div
                className="absolute inset-0 -m-8 border-2 border-dashed border-primary/20 rounded-full animate-spin"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-0 -m-16 border border-dashed border-accent/10 rounded-full animate-spin"
                style={{ animationDuration: "40s", animationDirection: "reverse" }}
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-2xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-full gradient-border overflow-hidden bg-card">
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dcfyjmi9x/image/upload/v1764401956/IMG_4954_bisvap.jpg"
                      alt="Marwan Nofal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <Badge variant="skill" className="shadow-lg">
                  Python/Django
                </Badge>
              </div>
              <div
                className="absolute top-1/4 -left-8 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Badge variant="skill" className="shadow-lg">
                  .NET/C#
                </Badge>
              </div>
              <div
                className="absolute bottom-1/4 -right-8 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Badge variant="skill" className="shadow-lg">
                  PHP/Moodle
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-6 md:bottom-8 flex justify-center animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
