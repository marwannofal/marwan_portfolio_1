import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - window.innerHeight;

      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
      setIsVisible(scrollTop > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const angle = progress * 360;
  const percent = Math.round(progress * 100);

  return (
    <div
      className={`fixed z-50 bottom-5 right-4 sm:bottom-7 sm:right-7
                  transition-all duration-300
                  ${isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
        }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          group
          flex flex-col items-center gap-1
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-primary/60
          focus-visible:ring-offset-2 focus-visible:ring-offset-background
        "
      >
        <div className="relative w-12 h-12 sm:w-13 sm:h-13">
          {/* Progress ring */}
          <div
            className="absolute inset-0 rounded-full p-[2px]"
            style={{
              backgroundImage: `conic-gradient(var(--primary) ${angle}deg, transparent ${angle}deg)`,
            }}
          >
            {/* Inner circle (outline style) */}
            <div
              className="
                w-full h-full rounded-full
                bg-background/70
                border border-black/80 dark:border-white/80
                flex items-center justify-center
                shadow-md shadow-black/15
                backdrop-blur-md
                transition-transform duration-200
                group-hover:-translate-y-0.5
              "
            >
              <ArrowUp
                className="
                  w-4 h-4 sm:w-4 sm:h-4
                  text-black dark:text-white
                  transition-transform
                  group-hover:-translate-y-0.5
                "
              />
            </div>
          </div>

          {/* Percent (small, bottom-center, minimal) */}
          <span
            className="
              absolute -bottom-4 left-1/2 -translate-x-1/2
              text-[10px] font-medium
              text-muted-foreground
            "
          >
            {percent}%
          </span>
        </div>
      </button>
    </div>
  );
}
