import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  imagePathPrefix = "images/" ; // Make sure this path is correct

  skills = [
    {
      id: "python",
      name: "Python",
      description: "Dynamic Programming Language, versatile for scripting, automation, data analysis, machine learning, and web development.",
      icon: this.imagePathPrefix + "python-logo.svg",  // Placeholder.  You'll add "python-logo.svg"
      usageMedia: this.imagePathPrefix + "python-usage.png", // Placeholder.  You'll add "python-usage.png" or similar.
    },
    {
      id: "angular",
      name: "Angular",
      description: "A platform and framework for building single-page client applications using HTML and TypeScript.",
      icon: this.imagePathPrefix + "angular_gradient.png",  // Placeholder
      usageMedia: this.imagePathPrefix + "angular-usage.png", // Placeholder
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "Superset of JavaScript that adds static typing, enhancing code quality and maintainability.",
      icon: this.imagePathPrefix + "ts-logo.svg",  // Placeholder
      usageMedia: this.imagePathPrefix + "ts-usage.png", // Placeholder
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Versatile scripting language for web development, enabling interactive and dynamic web content.",
      icon: this.imagePathPrefix + "js-logo.png", // Placeholder
      usageMedia: this.imagePathPrefix + "js-usage.png",  // Placeholder
    },
    {
      id: "html",
      name: "HTML",
      description: "Standard markup language for creating web pages and web applications.",
      icon: this.imagePathPrefix + "html-logo.svg",  // Placeholder
      usageMedia: this.imagePathPrefix + "html-usage.png",  // Placeholder
    },
    {
      id: "css",
      name: "CSS",
      description: "Style sheet language used for describing the presentation of a document written in HTML or XML.",
      icon: this.imagePathPrefix + "css-logo.png",  // Placeholder
      usageMedia: this.imagePathPrefix + "css-usage.png",  // Placeholder
    },
      {
      id: "java",
      name: "Java",
      description: "Versatile, object-oriented programming language used for developing a wide range of applications.",
      icon: this.imagePathPrefix + "java-logo.svg",
      usageMedia: this.imagePathPrefix + "java-usage.png",
    },
     {
      id: "c",
      name: "C",
      description: "General-purpose, procedural programming language known for its efficiency and low-level access.",
      icon: this.imagePathPrefix + "c-logo.svg",
      usageMedia: this.imagePathPrefix + "c-usage.png",
    },
    {
      id: "cpp",
      name: "C++",
      description: "Extension of C, adding object-oriented features, widely used in game development and system programming.",
      icon: this.imagePathPrefix + "cpp-logo.svg",
      usageMedia: this.imagePathPrefix + "cpp-usage.png",
    },
     {
      id: "csharp",
      name: "C#",
      description: "Multi-paradigm language developed by Microsoft, commonly used with the .NET framework.",
      icon: this.imagePathPrefix + "cs-logo.svg",
      usageMedia: this.imagePathPrefix + "cs-usage.png",
    },
    {
       id: "haskell",
       name: "Haskell",
       description: "Purely functional programming language, emphasizing immutability and strong static typing.",
       icon: this.imagePathPrefix + "hs-logo.png",
       usageMedia: this.imagePathPrefix + "hs-usage.png",
    },
      {
      id: "sql",
      name: "SQL",
      description: "Domain-specific language used in programming and designed for managing data in a relational database.",
      icon: this.imagePathPrefix + "sql-logo.svg",
      usageMedia: this.imagePathPrefix + "sql-usage.png",
    },
     {
      id: "bash",
      name: "Bash",
      description: "Unix shell and command language, widely used for scripting and system administration.",
      icon: this.imagePathPrefix + "bash-logo.svg",
      usageMedia: this.imagePathPrefix + "bash-usage.png",
    },
     {
      id: "git",
      name: "Git",
      description: "Distributed version control system for tracking changes in source code during software development.",
      icon: this.imagePathPrefix + "git-logo.svg",
      usageMedia: this.imagePathPrefix + "git-usage.png",
    },
     {
      id: "github",
      name: "GitHub",
      description: "Web-based platform for version control using Git, facilitating collaboration and code management.",
      icon: this.imagePathPrefix + "gh-logo.svg",
      usageMedia: this.imagePathPrefix + "gh-usage.png",
    },
      {
      id: "svelte",
      name: "Svelte",
      description: "Component framework (similar to React/Angular/Vue), compiles to small, framework-less vanilla JS",
      icon: this.imagePathPrefix + "svelte-logo.svg",
      usageMedia: this.imagePathPrefix + "svelte-usage.png",
    },
      {
       id: "linux",
       name: "Linux",
       description: "A family of open-source Unix-like operating systems based on the Linux kernel.",
       icon: this.imagePathPrefix + "tux.svg",
       usageMedia: this.imagePathPrefix + "linux-usage.png",
    },
    {
       id: "docker",
       name: "Docker",
       description: "Platform for developing, shipping, and running applications in containers.",
       icon: this.imagePathPrefix + "docker-logo.svg",
       usageMedia: this.imagePathPrefix + "docker-usage.png",
    },
      {
      id: "django",
      name: "Django",
      description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
      icon: this.imagePathPrefix + "django-logo.svg",
      usageMedia: this.imagePathPrefix + "django-usage.png",
    },
      {
      id: "tailwind",
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom user interfaces.",
      icon: this.imagePathPrefix + "tailwind-logo.svg",
      usageMedia: this.imagePathPrefix + "tailwind-usage.png",
    },
  ];

  constructor() { }
}
