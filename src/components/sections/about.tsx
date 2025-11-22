import { portfolioData } from "@/lib/data";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              <User className="inline-block h-4 w-4 mr-1" />
              Tentang Saya
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Spesialis Jaringan yang Bersemangat
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {portfolioData.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
