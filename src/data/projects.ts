export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
  slug?: string; // if set, card links to /projects/[slug] instead of github
  thumbnail?: string;
  thumbnailBg?: string; // CSS background for emoji thumbnails
}

export const projects: Project[] = [
  {
    title: "Tavernboard",
    description: "Personal Android & Web productivity app combining calendar, to-do lists, and project management with recurring event support and deadline tracking.",
    tech: ["Flutter", "Dart", "SQLite", "Riverpod"],
    url: "https://tavernboard.matthewbarlow.me",
    thumbnail: "/tavernboard-icon.svg",
  },
];
