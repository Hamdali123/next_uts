import { portfolioData } from "@/lib/data";
import { User } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                <User className="inline-block h-4 w-4 mr-1" />
                Tentang Saya
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Tertarik dengan Dunia Jaringan
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {portfolioData.bio}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {portfolioData.profileImage && (
              <Image
                src={portfolioData.profileImage.imageUrl}
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square"
                data-ai-hint={portfolioData.profileImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
