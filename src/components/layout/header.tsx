import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-semibold">Muhamad Hamdali</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#skills"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex">
            <Link href="#contact" prefetch={false}>
                Get in Touch
            </Link>
        </Button>
      </div>
    </header>
  );
}
