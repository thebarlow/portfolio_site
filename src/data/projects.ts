export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
  slug?: string; // if set, card links to /projects/[slug] instead of github
  thumbnail?: string;
  thumbnailBg?: string; // CSS background for emoji thumbnails
  thumbnailFit?: "cover" | "contain"; // "cover" fills card (default), "contain" shows full image with padding
}

export const projects: Project[] = [
  {
    title: "Tavernboard",
    description: "Personal Android & Web productivity app combining calendar, to-do lists, and project management with recurring event support and deadline tracking.",
    tech: ["Flutter", "Dart", "SQLite", "Riverpod"],
    url: "https://tavernboard.matthewbarlow.me",
    thumbnail: "/tavernboard-icon.svg",
  },
  {
    title: "Auto Apply",
    description: "Semi-automated job scraping, tailored resume generation, and application management.",
    tech: ["Python", "FastAPI", "Playwright", "React", "SQLAlchemy"],
    slug: "autoapply",
    thumbnail: "/autoapply-icon.svg",
    thumbnailFit: "contain",
  },
];
