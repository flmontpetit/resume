import { ResumeData } from "../models/resume-data";
import englishData from "./data.en";

const resumeData: ResumeData = {
  ...englishData,
  header: {
    ...englishData.header,
    personalInfo: {
      ...englishData.header.personalInfo,
      jobTitle: "Développeur logiciel",
    },
  },
  positions: [
    {
      index: 0,
      company: "Nexus Innovations",
      title: "Développeur sénior",
      startDate: new Date(2023, 3),
      location: "Montréal, Québec, Canada",
      summary: [
        "Contribuer à moderniser la pratique notariale dans la province, en tant que consultant travaillant avec la Chambres de Notaires du Québec",
        "Conseiller l'équipe du client dans leurs choix architecturaux et dans leurs stratégies de gestion de charge et de stockage de données à long terme",
        "Implémenter diverses fonctionalités en fonction des spécifications du client, en utilisant ASP.NET Core, Angular ainsi qu'une panoplie de services Azure",
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
        "Agir en tant qu'architecte principal du produit InPilot, un puissant moteur de modélisation de processus construit pour l'apprentissage et l'automatisation",
        "Bâtir une variété d'APIs REST avec ASP.NET Core",
        "Mise en place de pratiques standard pour la mise à l'échelle horizontale et la haute disponibilité, telles que l'architecture orientée services et l'orchestration de conteneurs",
        "Maintenance des environnements de développement et de production, bâtis avec Kubernetes sur Amazon EKS",
        "Développement de composantes web avec React, TypeScript et Material UI",
        "Prise en charge des améliorations aux pratiques de l'entreprise, comme par exemple l'introduction du contrôle de version et de l'intégration continue",
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
        'Maintenance de systèmes "legacy" bâtis avec .NET et C++, en ciblant les améliorations et en réglant des problèmes majeurs de stabilité et de performance',
        "Gestion de la production pour un produit web utilisé par 10,000 usagers payants",
        "Contribution à la modernisation de la compagnie et à l'enseignement aux développeurs des nouvelles pratiques",
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
        "Développement et maintenance d'outils de productivité voué à usage interne, avec C# et BASIC",
        "Bâtir et maintenir une variété de systèmes Linux, avec CentOS et Red Hat Enterprise Linux",
        "Support technique niveau 3, pour des usagers à la grandeur du Canada en Français et en Anglais",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Langages de programmation",
      entries: ["C#", "TypeScript", "Rust", "C++"],
    },
    {
      category: "Technologies web",
      entries: ["React", "VueJS", "Material UI", "ASP.NET Core", "Angular"],
    },
    {
      category: "Bases de données",
      entries: ["PostgreSQL", "MariaDB/MySQL", "MS SQL", "Couchbase", "Redis"],
    },
    {
      category: "Messagerie",
      entries: ["RabbitMQ", "Azure Service Bus", "MassTransit"],
    },
    {
      category: "Technologies Cloud",
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
      program: "Baccalauréat en informatique et génie logiciel",
      note: "30 crédits obtenus. Mis à terme à fin de poursuivre mes ambitions de carrière",
      startYear: 2019,
      endYear: 2021,
    },
    {
      establishment:
        "École des métiers de l'informatique, du commerce et de l'administration",
      program: "DEP en soutien technique",
      startYear: 2013,
      endYear: 2014,
    },
  ],
};

export default resumeData;
