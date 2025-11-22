"use client";

import Link from "next/link";
import { Github, Linkedin, MountainIcon } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-secondary py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          {year && <p className="text-center text-sm text-muted-foreground sm:text-left">
            &copy; {year} Muhamad Hamdali. Hak cipta dilindungi.
          </p>}
        </div>
        <div className="flex items-center gap-4">
          <Link href={portfolioData.contact.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={portfolioData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
