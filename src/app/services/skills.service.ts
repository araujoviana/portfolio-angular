import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  imagePathPrefix = "images/";

  skills = [
    {
      id: "javascript",
      name: "JavaScript",
      description: "Versatile scripting language for web development, enabling interactive and dynamic web content.",
      icon: this.imagePathPrefix + "js-logo.png",
      usageMedia: this.imagePathPrefix + "js-usage.png",
      learning: false,
    },
    {
      id: "python",
      name: "Python",
      description: "Dynamic Programming Language, versatile for scripting, automation, data analysis, machine learning, and web development.",
      icon: this.imagePathPrefix + "python-logo.svg",
      usageMedia: this.imagePathPrefix + "python-usage.png",
      learning: false,
    },
    {
      id: "java",
      name: "Java",
      description: "Versatile, object-oriented programming language used for developing a wide range of applications.",
      icon: this.imagePathPrefix + "java-logo.svg",
      usageMedia: this.imagePathPrefix + "java-usage.png",
      learning: false,
    },
    {
      id: "html",
      name: "HTML",
      description: "Standard markup language for creating web pages and web applications.",
      icon: this.imagePathPrefix + "html-logo.svg",
      usageMedia: this.imagePathPrefix + "html-usage.png",
      learning: false,
    },
    {
      id: "css",
      name: "CSS",
      description: "Style sheet language used for describing the presentation of a document written in HTML or XML.",
      icon: this.imagePathPrefix + "css-logo.png",
      usageMedia: this.imagePathPrefix + "css-usage.png",
      learning: false,
    },
    {
      id: "sql",
      name: "SQL",
      description: "Domain-specific language used in programming and designed for managing data in a relational database.",
      icon: this.imagePathPrefix + "sql-logo.svg",
      usageMedia: this.imagePathPrefix + "sql-usage.png",
      learning: false,
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "Superset of JavaScript that adds static typing, enhancing code quality and maintainability.",
      icon: this.imagePathPrefix + "ts-logo.svg",
      usageMedia: this.imagePathPrefix + "ts-usage.png",
      learning: true,
    },
    {
      id: "git",
      name: "Git",
      description: "Distributed version control system for tracking changes in source code during software development.",
      icon: this.imagePathPrefix + "git-logo.svg",
      usageMedia: this.imagePathPrefix + "git-usage.png",
      learning: false,
    },
    {
      id: "github",
      name: "GitHub",
      description: "Web-based platform for version control using Git, facilitating collaboration and code management.",
      icon: this.imagePathPrefix + "gh-logo.svg",
      usageMedia: this.imagePathPrefix + "gh-usage.png",
      learning: false,
    },
    {
      id: "docker",
      name: "Docker",
      description: "Platform for developing, shipping, and running applications in containers.",
      icon: this.imagePathPrefix + "docker-logo.svg",
      usageMedia: this.imagePathPrefix + "docker-usage.png",
      learning: true,
    },
    {
      id: "linux",
      name: "Linux",
      description: "A family of open-source Unix-like operating systems based on the Linux kernel, and the OS that I'm currently using.",
      icon: this.imagePathPrefix + "tux.svg",
      usageMedia: this.imagePathPrefix + "linux-usage.png",
      learning: false,
    },
    {
      id: "csharp",
      name: "C#",
      description: "Multi-paradigm language developed by Microsoft, commonly used with the .NET framework.",
      icon: this.imagePathPrefix + "cs-logo.svg",
      usageMedia: this.imagePathPrefix + "cs-usage.png",
      learning: false,
    },

    {
      id: "angular",
      name: "Angular",
      description: "A platform and framework for building single-page client applications using HTML and TypeScript, used to make this website.",
      icon: this.imagePathPrefix + "angular_gradient.png",
      usageMedia: this.imagePathPrefix + "angular-usage.png",
      learning: false,
    },
    {
      id: "django",
      name: "Django",
      description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
      icon: this.imagePathPrefix + "django-logo.svg",
      usageMedia: this.imagePathPrefix + "django-usage.png",
      learning: true,
    },

    {
      id: "bash",
      name: "Bash",
      description: "Unix shell and command language, widely used for scripting and system administration.",
      icon: this.imagePathPrefix + "bash-logo.svg",
      usageMedia: this.imagePathPrefix + "bash-usage.png",
      learning: true,
    },

    {
      id: "cpp",
      name: "C++",
      description: "Extension of C, adding object-oriented features, widely used in game development and systems programming (also used in Arduino development).",
      icon: this.imagePathPrefix + "cpp-logo.svg",
      usageMedia: this.imagePathPrefix + "cpp-usage.png",
      learning: true,
    },
    {
      id: "c",
      name: "C",
      description: "General-purpose, procedural programming language known for its efficiency and low-level access.",
      icon: this.imagePathPrefix + "c-logo.svg",
      usageMedia: this.imagePathPrefix + "c-usage.png",
      learning: false,
    },
    {
      id: "rust",
      name: "Rust",
      description: "Systems programming language focused on safety, concurrency, and performance, with strict memory management and zero-cost abstractions.",
      icon: this.imagePathPrefix + "ferris.svg",
      usageMedia: this.imagePathPrefix + "rust-usage.png",
      learning: true,
    },

    {
      id: "svelte",
      name: "Svelte",
      description: "Component framework, compiles to small, framework-less vanilla JS.",
      icon: this.imagePathPrefix + "svelte-logo.svg",
      usageMedia: this.imagePathPrefix + "svelte-usage.png",
      learning: true,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom user interfaces. (What I used to build this website!)",
      icon: this.imagePathPrefix + "tailwind-logo.svg",
      usageMedia: this.imagePathPrefix + "tailwind-usage.png",
      learning: true,
    },

    {
      id: "excel",
      name: "Excel",
      description: "Spreadsheet tool with cells, formulas, functions, and support for data analysis and automation via VBA.",
      icon: this.imagePathPrefix + "excel-logo.svg",
      usageMedia: this.imagePathPrefix + "excel-usage.png",
      learning: false,
    },
    {
      id: "access",
      name: "Access",
      description: "Database management system that lets you create, query, and manage relational databases with tables, forms, and SQL support.",
      icon: this.imagePathPrefix + "access-logo.svg",
      usageMedia: this.imagePathPrefix + "access-usage.png",
      learning: true,
    },

    {
      id: "haskell",
      name: "Haskell",
      description: "Purely functional programming language, emphasizing immutability and strong static typing.",
      icon: this.imagePathPrefix + "hs-logo.png",
      usageMedia: this.imagePathPrefix + "hs-usage.png",
      learning: false,
    },
  ];

  constructor() { }
}
