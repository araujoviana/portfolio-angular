import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  imagePathPrefix = "images/" ;

  projects = [{
    id: "file-manager",
    name: "File Manager",
    brief: "Functional simple file manager",
    description: "A lightweight, cross-platform file manager built with Python and DearPyGUI for a responsive UI. It enables file navigation, displays key metadata (size, MIME type, modification date), and opens files using system defaults, providing essential file management.",
    imagePath: this.imagePathPrefix + "file-manager.png",
    relevantLink: "https://github.com/araujoviana/file-manager",
  },
    {
      id: "notas-estudos-2025",
      name: "Study Notes for 2025",
      brief: "Personal notes in Markdown using Hugo",
      description: "Static website generated with Hugo, designed to host university notes for the year 2025. It employs the PaperMod theme for a clean and organized presentation of content, structured by subject matter. Includes a BASH script, enhanced with Gum, to automate commit processes.",
      imagePath: this.imagePathPrefix + "notas-estudos.png",
      relevantLink: "https://github.com/araujoviana/notas-estudos-2025",
    },
    {
      id: "binary-float-to-decimal",
      name: "Binary Float to Decimal",
      brief: "Converts IEEE 754 binary floats to decimal",
      description: "C program for IEEE 754 32-bit binary to decimal float conversion. Built with CMake for cross-platform compatibility and optional Doxygen documentation. Accepts a binary string input and outputs the decimal float equivalent.",
      imagePath: this.imagePathPrefix + "binary-float.png",
      relevantLink: "https://github.com/araujoviana/binary-float-to-decimal",
    }, {
      id: "copperknight",
      name: "Copperknight",
      brief: "Capstone project for CS50W",
      description: "Django-based web drawing app with customizable canvas and tools. Features Base64 image storage for sharing and persistence. Includes an artwork showcase and user-friendly environment for artistic expression. User accounts, following, favorites, and privacy settings for art uploads are supported.",
      imagePath: this.imagePathPrefix + "copperknight.png",
      relevantLink: "https://github.com/araujoviana/copperknight",
    }, {
      id: "rename-book",
      name: "Rename Book",
      brief: "CLI tool for renaming documents to kebab-case",
      description: "Command-line tool in Rust for file organization: renames PDF/EPUB files to kebab-case. Verifies file path input. Built with colored terminal output and heck case conversion.",
      imagePath: this.imagePathPrefix + "rename-book.png",
      relevantLink: "https://github.com/araujoviana/rename-book",
    }, {
      id: "arduino-music-maker",
      name: "Arduino Music Maker",
      brief: "Serial-based F# music for Arduino",
      description: "Interactive F# application for composing and playing music on Arduino via a text-based UI. Requires Arduino with buzzer (PWM pin). Enables real-time melody creation and playback over serial. Arduino code upload and serial port setup required. (Demo in repo).",
      imagePath: this.imagePathPrefix + "arduino-music-maker.png",
      relevantLink: "https://github.com/araujoviana/arduino-music-maker",
    }, {
      id: "json-validator",
      name: "JSON Validator",
      brief: "Simple JSON syntax validator",
      description: "A lightweight web application designed for JSON validation, built using Svelte, TypeScript, and Vite. Employs Bulma CSS for styling and is optimized for GitHub Pages deployment. Provides a user-friendly interface for checking JSON syntax and structure.",
      imagePath: this.imagePathPrefix + "json-validator.png",
      relevantLink: "https://github.com/araujoviana/json-validator",
    }, {
      id: "tictactoe-minimax",
      name: "Tic-Tac-Toe Minimax",
      brief: "Tic-Tac-Toe implementation using Minimax",
      description: "A command-line Tic-Tac-Toe game implemented in Haskell. Integrates a Minimax algorithm, enabling the bot to make optimal decisions. Uses Cabal, the Haskell build tool, for building and execution.",
      imagePath: this.imagePathPrefix + "minimax.png",
      relevantLink: "https://github.com/araujoviana/tictactoe-minimax",
    }, {
      id: "sort-color",
      name: "Sort Color",
      brief: "CLI tool to rank and rename BMP files by color intensity",
      description: "Command-line tool in Haskell for sorting BMP images by color intensity. Calculates channel intensity (R/G/B), sorts (ascending/descending), and renames images in a given folder. (Sorting demo limited in image).",
      imagePath: this.imagePathPrefix + "sort-color.png",
      relevantLink: "https://github.com/araujoviana/sort-color",
    }, {
      id: "mips-codigos",
      name: "MIPS Codigos",
      brief: "Collection of various MIPS Assembly programs",
      description: "A curated collection of MIPS assembly language programs. Features include a dynamic-sized bubble sort implementation, a basic arithmetic calculator, decimal-to-binary conversion, a password unlocker, Fibonacci sequence generation, and an interactive menu employing a singly linked list for inventory management.",
      imagePath: this.imagePathPrefix + "mips-codigos.png",
      relevantLink: "https://github.com/araujoviana/mips-codigos",
    }, {
      id: "proj-assembly-estrutura-dados",
      name: "Assembly-like REPL",
      brief: "Simplified Assembly REPL in Java",
      description: "A Java-based REPL (Read-Eval-Print Loop) for a simplified assembly-like language. Allows users to input and execute assembly instructions. Features commands for inserting, deleting, listing, running, saving, and loading code. Supports instructions such as mov, inc, dec, add, sub, mul, div, jnz, and out.",
      imagePath: this.imagePathPrefix + "assembly.png",
      relevantLink: "https://github.com/araujoviana/proj-assembly-estrutura-dados",
    }, {
      id: "notas-latex-2024",
      name: "LaTeX Notes for 2024",
      brief: "Personal notes in LaTeX with a website",
      description: "A website containing personal lecture notes in LaTeX format from 2024, with PDF versions available. Includes scripts designed to expedite file maintenance and general repository upkeep.",
      imagePath: this.imagePathPrefix + "notas-latex-2024.png",
      relevantLink: "https://github.com/araujoviana/notas-latex-2024",
    }, {
      id: "proj-avaliador-estrutura-dados",
      name: "RPN Expression Evaluator",
      brief: "Mathematical expression evaluator in Java (REPL)",
      description: "A Java-based REPL designed to evaluate mathematical expressions in Reverse Polish Notation (RPN). Employs a stack data structure for operation management. Includes variable manipulation features, along with commands for recording and replaying operations.",
      imagePath: this.imagePathPrefix + "avaliador.png",
      relevantLink: "https://github.com/araujoviana/proj-avaliador-estrutura-dados",
    }, {
      id: "paa-word-sort",
      name: "Word Sorting with Insertion and Merge Sort",
      brief: "Sorting algorithm assignment",
      description: "A C program that sorts a wordlist from a text file using both Insertion Sort and Merge Sort algorithms. The program outputs the number of steps each algorithm takes to complete the sorting process.",
      imagePath: this.imagePathPrefix + "word-sort.png",
      relevantLink: "https://github.com/araujoviana/paa-word-sort",
    }, {
      id: "odin-tictactoe",
      name: "Odin Tic-Tac-Toe",
      brief: "Tic-Tac-Toe Webpage",
      description: "A Tic-Tac-Toe game project created as part of the Odin project assignments.",
      imagePath: this.imagePathPrefix + "odin-tictactoe.png",
      relevantLink: "https://github.com/araujoviana/odin-tictactoe",
    }, {
      id: "odin-admin-dashboard",
      name: "Odin Admin Dashboard",
      brief: "Admin Dashboard Webpage",
      description: "An admin dashboard built as part of the Odin project assignments.",
      imagePath: this.imagePathPrefix + "odin-admin-dashboard.png",
      relevantLink: "https://github.com/araujoviana/odin-admin-dashboard",
    }, {
      id: "odin-signup-form",
      name: "Odin Signup Form",
      brief: "Sign-up Form Webpage",
      description: "A sign-up form built as part of the Odin project assignments.",
      imagePath: this.imagePathPrefix + "odin-signup-form.png",
      relevantLink: "https://github.com/araujoviana/odin-signup-form",
    }, {
      id: "odin-calculator",
      name: "Odin Calculator",
      brief: "Calculator Webpage",
      description: "A calculator built as part of the Odin project assignments.",
      imagePath: this.imagePathPrefix + "odin-calculator.png",
      relevantLink: "https://github.com/araujoviana/odin-calculator",
    }, {
      id: "odin-etch-a-sketch",
      name: "Odin Etch-A-Sketch",
      brief: "Etch-a-Sketch Webpage",
      description: "An Etch-a-Sketch drawing app built as part of the Odin project.",
      imagePath: this.imagePathPrefix + "odin-etch-a-sketch.png",
      relevantLink: "https://github.com/araujoviana/odin-etch-a-sketch",
    },// TODO Adicionar projetos do Mackenzie e o TCC
  ]

  constructor() { }
}
