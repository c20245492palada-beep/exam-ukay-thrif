gsap.registerPlugin(ScrollTrigger);

// ---- B1: DARK MODE TOGGLE ----
const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");

    darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    darkModeToggle.setAttribute("aria-pressed", String(isDark));

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // back.out gives the theme button a brief, playful tap.
        gsap.fromTo(
            darkModeToggle,
            { scale: 0.92 },
            { scale: 1, duration: 0.35, ease: "back.out(1.7)", overwrite: true }
        );
    }
});

// ---- D1 + D2: PAGE-LOAD INTRO TIMELINE ----
const motionSettings = gsap.matchMedia();

motionSettings.add(
    {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        normalMotion: "(prefers-reduced-motion: no-preference)"
    },
    (context) => {
        const { reduceMotion, normalMotion } = context.conditions;

        // Reduced-motion visitors see all content without entrance animations.
        if (reduceMotion) {
            gsap.set("#hero .hero-item", {
                clearProps: "all"
            });

            gsap.set(".reveal", {
                clearProps: "all"
            });

            gsap.set("#progressBar", {
                scaleX: 0
            });

            return;
        }

        if (!normalMotion) return;

        // One timeline with shared defaults and multiple animation steps.
        const introTimeline = gsap.timeline({
            defaults: {
                duration: 0.65,
                ease: "power2.out"
            }
        });

        // power2.out gives the hero a smooth, gentle landing.
        introTimeline.from("#hero .hero-item", {
            y: 35,
            opacity: 0,
            stagger: 0.18
        });

        // back.out adds a small bounce to the main heading.
        introTimeline.from(
            "#hero h1",
            {
                scale: 0.94,
                ease: "back.out(1.5)",
                duration: 0.5
            },
            "-=0.35"
        );

        // power1.out keeps the button entrance smooth and readable.
        introTimeline.from(
            "#hero .primary-button",
            {
                y: 15,
                opacity: 0,
                ease: "power1.out",
                duration: 0.4
            },
            "-=0.3"
        );

        // ---- E1: INDIVIDUAL SCROLL REVEALS ----
        gsap.utils.toArray(".reveal").forEach((section) => {
            gsap.fromTo(
                section,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        // ---- E2: SCROLL-LINKED PROGRESS BAR ----
        gsap.to("#progressBar", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });
    }
);

// ---- CONTACT FORM DEMO ----
const contactForm = document.querySelector("#contactForm");
const formNotice = document.querySelector("#formNotice");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formNotice.textContent =
        "Thank you for contacting Ukay-Ukay Thrift! This demo form does not send messages yet.";

    contactForm.reset();
});
