import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-wide relative z-10 pt-20 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="tech" className="gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Hi, I'm{" "}
              <span className="gradient-text">Marwan Nofal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer & Software Engineer
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              I build robust, scalable web applications using modern stacks like 
              <span className="text-foreground font-medium"> PHP/Moodle</span>,
              <span className="text-foreground font-medium"> Django</span>,
              <span className="text-foreground font-medium"> .NET</span>, and
              <span className="text-foreground font-medium"> React</span>.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Amman, Jordan</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Let's Work Together
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
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delay-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-0 -m-16 border border-dashed border-accent/10 rounded-full animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-2xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-full gradient-border overflow-hidden bg-card">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text">MN</div>
                      <p className="text-sm text-muted-foreground mt-2">Full-Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 animate-float" style={{ animationDelay: "0s" }}>
                <Badge variant="skill" className="shadow-lg">React</Badge>
              </div>
              <div className="absolute top-1/4 -left-8 animate-float" style={{ animationDelay: "1s" }}>
                <Badge variant="skill" className="shadow-lg">Django</Badge>
              </div>
              <div className="absolute -bottom-4 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
                <Badge variant="skill" className="shadow-lg">.NET</Badge>
              </div>
              <div className="absolute bottom-1/4 -right-8 animate-float" style={{ animationDelay: "1.5s" }}>
                <Badge variant="skill" className="shadow-lg">PHP</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
