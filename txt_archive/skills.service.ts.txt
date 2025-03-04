import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: [{
    id: string;
    name: string;
    description: string;
    icon: string; // File Path
    usageMedia: string; // Video/GIF showcasing the skill
    connections: string[];
  }] = [{
    id: "python",
    name: "Python",
    description: "Dynamic Programming Language",
    icon: "",
    usageMedia: "",
    connections: []
  }];

  constructor() { }
}
