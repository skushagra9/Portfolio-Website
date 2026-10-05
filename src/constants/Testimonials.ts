export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

export const Testimonials: Testimonial[] = [
  {
    quote: "An exceptional engineer who consistently delivers high-quality solutions. Their work on the Absinthe Adapters platform was instrumental in scaling our multi-chain indexing capabilities. They have a rare ability to tackle complex technical challenges while maintaining clear communication with stakeholders.",
    name: "Sarah Chen",
    title: "CTO at Absinthe Labs",
    avatar: "SC",
  },
  {
    quote: "Working with them on Filament Finance was a game-changer. They transformed our orderbook backend, reducing latency by 95% and architecting a robust microservice system on Kubernetes. Their full-stack capabilities and problem-solving skills helped us ship features faster than we ever thought possible.",
    name: "Marcus Johnson",
    title: "Lead Engineer at Filament Finance",
    avatar: "MJ",
  },
  {
    quote: "Their ability to design system architecture from the ground up is impressive. They built our entire codebase interaction platform at Archie AI, integrating complex GitHub APIs and creating an intuitive ChatGPT-like interface. They're the kind of engineer every startup needs on their team.",
    name: "Priya Sharma",
    title: "Co-founder at Archie AI",
    avatar: "PS",
  },
  {
    quote: "A fast learner who writes clean, maintainable code. During their time with us, they consistently delivered high-quality work and showed genuine interest in understanding the broader business context. They're not just a developer—they're a true product thinker.",
    name: "David Martinez",
    title: "Engineering Manager at VMCO",
    avatar: "DM",
  },
];
