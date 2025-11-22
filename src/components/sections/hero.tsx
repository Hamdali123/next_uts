import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex items-center justify-center lg:order-last">
            {portfolioData.profileImage && (
              <Image
                src={portfolioData.profileImage.imageUrl}
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full object-cover aspect-square border-4 border-primary/20 shadow-lg"
                data-ai-hint={portfolioData.profileImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              {portfolioData.title}
            </p>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              Selamat datang di ruang digital saya! Saya membangun dan mengamankan jaringan untuk masa depan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
