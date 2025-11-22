import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const portfolioData = {
  name: 'Muhamad Hamdali',
  title: 'Full-Stack Developer',
  bio: "I'm a passionate full-stack developer with a knack for building modern, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life, from concept to deployment. My goal is to create meaningful products that solve real-world problems and provide an exceptional user experience.",
  contact: {
    email: 'hamdali.dev@example.com',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com/in',
    },
  },
  skills: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Firebase', level: 75 },
    { name: 'Prisma', level: 70 },
    { name: 'GenAI', level: 65 },
  ],
  projects: [
    {
      title: 'TaskFlow - Project Management Tool',
      description: 'A comprehensive project management application designed to help teams organize tasks, track progress, and collaborate effectively. Features include drag-and-drop task boards, real-time updates, and user authentication.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'React Query'],
      image: PlaceHolderImages.find(img => img.id === 'project-1') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
    {
      title: 'Artisan Prints - E-commerce Store',
      description: 'An online marketplace for artists to sell custom prints. The platform includes product catalogs, a secure checkout process with Stripe integration, and a dedicated artist dashboard for managing inventory and sales.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API'],
      image: PlaceHolderImages.find(img => img.id === 'project-2') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
    {
      title: 'Creator Hub - Social Dashboard',
      description: 'A social media analytics dashboard for content creators. It aggregates data from multiple platforms, providing insights into audience growth, engagement rates, and content performance through interactive charts and reports.',
      tags: ['Next.js', 'Prisma', 'NextAuth.js', 'Recharts'],
      image: PlaceHolderImages.find(img => img.id === 'project-3') as ImagePlaceholder,
      links: {
        github: 'https://github.com',
        live: '#',
      },
    },
  ],
};

export type PortfolioData = typeof portfolioData;
