import momentum from "../../public/assets/images/project-images/momentum.png";
import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    liveLink?: string;
    githubLink?: string;
}

export const projects: Project[] = [
    {
        title: "Momentum",
        description:
            `Momentum is a full-stack project management platform engineered to streamline team productivity through a modern, 
            responsive Kanban interface. Built as a high-performance TypeScript monorepo using Next.js 16, React 19, and an 
            Express.js/MongoDB backend, it features intuitive drag-and-drop workflows and an integrated AI assistant for intelligent 
            task support. The application delivers a premium, polished user experience and includes 
            enterprise-ready features like secure role-based authentication and granular priority filtering. Fully 
            containerized with Docker for consistent deployment, Momentum demonstrates engineering excellence through a robust 
            CI/CD-ready architecture and extensive test coverage with Cypress and Jest.`,
        image: momentum,
        liveLink: "https://momentum-zikp.onrender.com",
        githubLink: "https://github.com/SahilDoshi03/Momentum",
    },
];
