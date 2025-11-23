"use client";

import { Menu, MountainIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#contact", label: "Kontak" },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
           <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="font-semibold">Muhamad Hamdali</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navLinks.map(link => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-primary"
                      prefetch={false}
                  >
                      {link.label}
                  </Link>
              ))}
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="#contact" prefetch={false}>
              Hubungi Saya
            </Link>
          </Button>
          <div className="md:hidden">
            <Button variant="outline" size="icon" disabled>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Buka menu navigasi</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={() => setIsOpen(false)}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-semibold">Muhamad Hamdali</span>
        </Link>
        
        {isMobile ? (
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu navigasi</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={() => setIsOpen(false)}>
                    <MountainIcon className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Muhamad Hamdali</span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild>
                    <Link href="#contact" prefetch={false} onClick={() => setIsOpen(false)}>
                        Hubungi Saya
                    </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-primary"
                        prefetch={false}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <Button asChild>
              <Link href="#contact" prefetch={false}>
                Hubungi Saya
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
