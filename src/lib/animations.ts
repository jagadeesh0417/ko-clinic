import { useEffect, useRef } from "react";

export function useGsapReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    const initGsap = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (ref.current) {
        ctx = gsap.context(() => {
          const elements = ref.current?.querySelectorAll("[data-reveal]");
          if (elements) {
            elements.forEach((el) => {
              gsap.fromTo(
                el,
                { opacity: 0, y: 60 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: el as HTMLElement,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });
          }
        }, ref);
      }
    };
    initGsap();
    return () => {
      ctx?.revert();
    };
  }, []);

  return ref;
}
