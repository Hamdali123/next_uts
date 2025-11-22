import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-center gap-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {portfolioData.name}
            </h1>
            <p className="text-primary text-xl md:text-2xl font-semibold">
              {portfolioData.title}
            </p>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              {portfolioData.bio}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
