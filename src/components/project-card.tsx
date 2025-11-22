import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioData } from "@/lib/data";

type Project = PortfolioData['projects'][0];

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          {project.image && (
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={project.image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-start gap-4">
        <Button asChild variant="outline">
          <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </Link>
        </Button>
        {project.links.live !== '#' && (
          <Button asChild>
            <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
