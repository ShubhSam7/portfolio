export const contactEmail = "shubhsamaiya7@gmail.com";

// Replace this demo illustration with a portrait, GIF, or short video when ready.
export const heroMedia = {
  src: "/hero-image.png",
  type: "image" as "image" | "video",
  alt: "A playful illustration, used as a temporary portrait demo",
  isDemo: true,
};

export const projects = [
  {
    id: "cipher",
    title: "Cipher",
    subtitle: "Campus conversations, without the follower counts.",
    href: "https://cipher.shubh.works",
    destination: "Open website",
    video: "/demo/cipher.mp4",
    poster: "/demo/cipher.jpg",
    tags: ["Next.js", "WebSockets", "PostgreSQL"],
  },
  {
    id: "second-brain",
    title: "Second Brain",
    subtitle: "For all those “I know I saved this somewhere” moments.",
    href: "https://second-brain.shubh.works/",
    destination: "Open website",
    video: "/demo/second-brain.mp4",
    poster: "/demo/second-brain.jpg",
    tags: ["AI", "Embeddings", "Knowledge graph"],
  },
  {
    id: "visitor-management",
    title: "Visitor Management",
    subtitle: "A simpler hello at the campus gate.",
    href: "https://github.com/omPatil3690/DBMS_Project-VMS",
    destination: "View repository",
    video: "/demo/visitor-management.mp4",
    poster: "/demo/visitor-management.jpg",
    tags: ["React", "QR passes", "Campus tools"],
  },
];

export type Project = (typeof projects)[number];

export const skills = [
  { label: "Languages", note: "The everyday essentials.", tools: [{ name: "TypeScript", mark: "TS", color: "typescript" }, { name: "JavaScript", mark: "JS", color: "javascript" }] },
  { label: "Interfaces", note: "From browser tabs to phone screens.", tools: [{ name: "React", mark: "⚛", color: "react" }, { name: "Next.js", mark: "N", color: "next" }, { name: "React Native", mark: "⚛", color: "react" }] },
  { label: "Behind the scenes", note: "The bits that keep things moving.", tools: [{ name: "Node.js", mark: "N", color: "node" }, { name: "PostgreSQL", mark: "P", color: "postgres" }, { name: "Firebase", mark: "ϟ", color: "firebase" }] },
];

export const reading = [
  { initials: "jv.", name: "Julia Evans", domain: "jvns.ca", url: "https://jvns.ca/", description: "Linux, networking, Git, and clear explanations of how computers work.", category: "SYSTEMS & FUNDAMENTALS", color: "violet" },
  { initials: "dl.", name: "Dan Luu", domain: "danluu.com", url: "https://danluu.com/", description: "Performance, engineering tradeoffs, and a closer look at the evidence.", category: "PERFORMANCE & ENGINEERING", color: "amber" },
  { initials: "mk.", name: "Martin Kleppmann", domain: "martin.kleppmann.com", url: "https://martin.kleppmann.com/", description: "Distributed systems, databases, and the ideas behind reliable software.", category: "DATABASES & DISTRIBUTED SYSTEMS", color: "green" },
];

export function composeContactDraft(name: string, email: string, message: string) {
  const sender = name.trim() || "a visitor to your portfolio";
  const body = `Hey Shubh,\n\n${message.trim()}\n\n— ${sender}${email.trim() ? `\nReply to: ${email.trim()}` : ""}`;
  return `mailto:${contactEmail}?subject=${encodeURIComponent(`A hello from ${sender}`)}&body=${encodeURIComponent(body)}`;
}
