import { ResumeData } from "../models/resume-data";

const resumeData: ResumeData = {
  header: {
    personalInfo: {
      fullName: "Frédéric Laurier-Montpetit",
      jobTitle: "Software Developer",
    },
    contactInfo: {
      phoneNumber: "(514) 799-0126",
      emailAddress: "flmontpetit@gmail.com",
      linkedInProfileName: "flmontpetit",
      linkedInProfileUrl: "https://www.linkedin.com/in/flmontpetit/",
      githubProfileName: "flmontpetit",
      githubProfileUrl: "https://github.com/flmontpetit",
    },
  },
  positions: [
    {
      index: 0,
      company: "Nexus Innovations",
      title: "Senior Software Developer",
      startDate: new Date(2023, 3),
      location: "Montréal, Québec, Canada",
      summary: [
        "Contributed in modernizing the notarial practice for the province of Québec, as a consultant working with the Chambre des Notaires du Québec",
        "Advised the client on architecture design choises, load mitigation and long-term storage strategies",
        "Implemented user-facing features in accordance with client specifications, using ASP.NET Core and Angular and leveraging a variety of Azure services",
      ],
    },
    {
      index: 1,
      company: "Mango Software Inc.",
      title: "Back-end Developer and DevOps Specialist",
      startDate: new Date(2020, 4),
      endDate: new Date(2023, 2),
      location: "Montréal, Québec, Canada",
      summary: [
        "Lead architect and primary backend developer for InPilot, a powerful process modeling system built for learning and automation",
        "Built a variety of RESTful APIs using ASP.NET Core",
        "Deployed standard industry practices for horizontal scalability and high-availability, such as SOA and container orchestration",
        "Maintained operations for development and production, built on Kubernetes and Amazon EKS",
        "Implemented user-facing web components with React, TypeScript and Material UI",
        "Lead improvements in the company's operations by introducing version control and CI/CD among other practices",
      ],
    },
    {
      index: 2,
      company: "Posera Software Inc. (Now PayFacto)",
      title: "Full-stack Software Developer",
      startDate: new Date(2019, 6),
      endDate: new Date(2020, 2),
      location: "Montréal, Québec, Canada",
      summary: [
        "Maintained legacy .NET and C++ software, targeting improvements and solving major performance and stability issues",
        "Handled production systems for a web application with over 10,000 paying customers",
        "Contributed in modernizing company culture and training developers with new tooling and practices",
      ],
    },
    {
      index: 3,
      company: "Prosol Distribution Inc.",
      title: "Software Developer and Support Technician",
      startDate: new Date(2014, 10),
      endDate: new Date(2018, 11),
      location: "Montréal, Québec, Canada",
      summary: [
        "Developed and maintained custom productivity tools meant for internal use, using C# and legacy BASIC",
        "Built and maintained a variety of Linux systems, running CentOS and Red Hat Enterprise Linux",
        "Provided level-3 technical support for users across Canada, in French and English",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming languages",
      entries: ["C#", "TypeScript", "Rust", "C++"],
    },
    {
      category: "Web technologies",
      entries: ["React", "VueJS", "Material UI", "ASP.NET Core", "Angular"],
    },
    {
      category: "Databases",
      entries: ["PostgreSQL", "MariaDB/MySQL", "MS SQL", "Couchbase", "Redis"],
    },
    {
      category: "Messaging",
      entries: ["RabbitMQ", "Azure Service Bus", "MassTransit"],
    },
    {
      category: "Cloud technologies",
      entries: ["AWS", "Azure", "Kubernetes"],
    },
    {
      category: "DevOps",
      entries: ["Azure DevOps, Gitlab, BitBucket"],
    },
  ],
  education: [
    {
      establishment: "UQÀM",
      program: "Bachelor's degree in software engineering",
      note: "30 credits obtained. Left to pursue career goals.",
      startYear: 2019,
      endYear: 2021,
    },
    {
      establishment:
        "École des métiers de l'informatique, du commerce et de l'administration",
      program: "Vocational diploma in tech support",
      startYear: 2013,
      endYear: 2014,
    },
  ],
};

export default resumeData;
