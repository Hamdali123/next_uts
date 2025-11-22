'use server';

/**
 * @fileOverview Suggests new portfolio projects based on existing ones.
 *
 * - suggestNewProjects - A function that suggests new projects.
 * - SuggestNewProjectsInput - The input type for the suggestNewProjects function.
 * - SuggestNewProjectsOutput - The return type for the suggestNewProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNewProjectsInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('A list of descriptions for existing portfolio projects.'),
  userSkills: z
    .array(z.string())
    .describe('A list of the user skills relevant to the projects.'),
});
export type SuggestNewProjectsInput = z.infer<typeof SuggestNewProjectsInputSchema>;

const SuggestNewProjectsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe('A list of suggested project ideas to enhance the portfolio.'),
});
export type SuggestNewProjectsOutput = z.infer<typeof SuggestNewProjectsOutputSchema>;

export async function suggestNewProjects(input: SuggestNewProjectsInput): Promise<SuggestNewProjectsOutput> {
  return suggestNewProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestNewProjectsPrompt',
  input: {schema: SuggestNewProjectsInputSchema},
  output: {schema: SuggestNewProjectsOutputSchema},
  prompt: `You are an AI portfolio assistant.  You will analyze the user's existing projects and suggest new projects that align with their skills and interests, helping them to expand their portfolio with innovative and relevant content.

  Here are the descriptions of the user's existing projects:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}

  Here are the user's skills:
  {{#each userSkills}}
  - {{{this}}}
  {{/each}}

  Suggest three new projects that would be a good addition to their portfolio.

  Respond in the following format:
  {
    "suggestedProjects": ["Project 1 description", "Project 2 description", "Project 3 description"]
  }`,
});

const suggestNewProjectsFlow = ai.defineFlow(
  {
    name: 'suggestNewProjectsFlow',
    inputSchema: SuggestNewProjectsInputSchema,
    outputSchema: SuggestNewProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
