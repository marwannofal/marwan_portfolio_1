import { Quote, Star } from "lucide-react";

const testimonials = [
    {
    quote: "Marwan is a fast-learning, brilliant, and highly dedicated developer. His combination of curiosity, smart thinking, and motivation makes him an exceptional asset. I fully recommend him for any development role and I’m confident he’ll continue to advance and excel.",
    author: "Ahmed Dukhan",
    role: "CTO",
    company: "Mashrooan company",
    rating: 5,
  },
  {
    quote: "Marwan delivered our learning platform ahead of schedule and exceeded all our expectations. His expertise in Moodle customization transformed how we train our global workforce.",
    author: "Abdulrahman rawashdeh",
    role: "Head of Learning & Development",
    company: "Classvera Inc.",
    rating: 5,
  },
  {
    quote: "Marwan's attention to detail and problem-solving skills are remarkable. He not only fixed our performance issues but also implemented best practices that improved our entire development workflow.",
    author: "Suzan Al-shobaki",
    role: "quality control Engineer",
    company: "King Hussein Cancer Center",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Clients{" "}
            <span className="gradient-text">Say About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it—here's what some of my clients
            have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="card-elevated p-6 md:p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
