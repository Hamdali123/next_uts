"use client";

import { useState } from "react";
import { suggestNewProjects, type SuggestNewProjectsOutput } from "@/ai/flows/suggest-new-projects";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Loader2, ListChecks } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export function AiSuggestions() {
  const [suggestions, setSuggestions] = useState<SuggestNewProjectsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestProjects = async () => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const projectDescriptions = portfolioData.projects.map(p => p.description);
      const userSkills = portfolioData.skills.map(s => s.name);
      const result = await suggestNewProjects({ projectDescriptions, userSkills });
      setSuggestions(result);
    } catch (error) {
      console.error("AI suggestion failed:", error);
      toast({
        title: "AI Suggestion Failed",
        description: "Could not generate project suggestions. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-suggestions" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Need Project Ideas?</h2>
          <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leverage AI to get personalized project suggestions based on my current skills and portfolio. Find the next great idea to build.
          </p>
          <Button onClick={handleSuggestProjects} disabled={isLoading} size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Suggest New Projects"
            )}
          </Button>

          <div className="mt-12 text-left">
            {isLoading && (
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
            {suggestions && suggestions.suggestedProjects.length > 0 && (
              <Card className="animate-in fade-in duration-500">
                <CardHeader>
                  <CardTitle>AI-Generated Project Ideas</CardTitle>
                  <CardDescription>Here are a few ideas to expand my portfolio:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {suggestions.suggestedProjects.map((idea, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ListChecks className="h-5 w-5" />
                        </span>
                        <p className="flex-1 pt-1.5 text-foreground">{idea}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
