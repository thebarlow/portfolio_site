export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
  slug?: string; // if set, card links to /projects/[slug] instead of github
  thumbnail?: string;
  livePreview?: boolean; // renders a live scaled iframe of the site as the thumbnail
}

export const projects: Project[] = [
  {
    title: "Tavernboard",
    description: "Personal Android productivity app combining calendar, to-do lists, and project management with recurring event support and deadline tracking.",
    tech: ["Flutter", "Dart", "SQLite"],
  },
  {
    title: "Nodesmith",
    description: "Visual node-based editor for building and orchestrating AI pipelines — prompt chains, tool calls, and branching logic in the browser.",
    tech: ["TypeScript", "React", "Vite"],
  },
  {
    title: "Voice-Claude",
    description: "Voice assistant with wake word detection, Whisper speech-to-text, fuzzy command matching, and dual LLM backends (Claude API + Ollama).",
    tech: ["Python", "Whisper", "Claude API"],
  },
  {
    title: "Claude Studio",
    description: "Personal web-based Claude chat interface with tabbed sessions, inline rich output rendering, a Python execution kernel, and screenshot capture.",
    tech: ["Python", "FastAPI", "TypeScript"],
  },
  {
    title: "Chess",
    description: "Two-player local chess game with auto-generated piece assets rendered from Unicode glyphs. No external asset dependencies.",
    tech: ["Python", "pygame", "python-chess"],
  },
  {
    title: "This Site",
    description: "Personal portfolio built with Astro, Tailwind CSS v4, and vanilla JS. Features dark mode, live preview card, and animated project grid.",
    tech: ["Astro", "Tailwind", "TypeScript"],
    slug: "portfolio-site",
    livePreview: true,
  },
];
