import type { WorkExperience } from "../types/cv";

export const workExperiences: WorkExperience[] = [
  {
    id: "inology",
    company: "Inology",
    role: "Software developer & integrator",
    location: "Terrassa, Barcelona, Spain",
    period: "January 2025 - Present",
    description: [
      "Implementation, development, and maintenance of REST APIs in VB.NET and C# (.NET Core).",
      "Rewriting, refactoring, and modernizing APIs, migrating WCF services to .NET Core.",
      "Advanced SQL Server management: creation and optimization of SPs, complex queries, and performance analysis.",
    ],
  },
  {
    id: "insolite",
    company: "Insolite Solutions",
    role: "Software developer",
    location: "Sabadell, Barcelona, Spain",
    period: "Junio 2023 - Mayo 2024",
    description: [
      "I developed components using React, TypeScript, Tanstack Table, Yup, Storybook, and other JavaScript libraries...",
      "Data querying and management using GraphQL and MongoDB.",
    ],
  },
];
