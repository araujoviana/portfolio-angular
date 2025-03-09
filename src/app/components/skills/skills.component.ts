import { Component, inject } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsService = inject(SkillsService);
  skills = this.skillsService.skills;

  showLearned = false;

  get learnedText() {
    return this.showLearned ? "Show Learned" : "Show Learning";
  }

  get learningMessage() {
    return this.showLearned ? "Here's what i'm currently learning" : "Here's what i've learned";
  }

  displayLearned() {
    this.showLearned = !this.showLearned;
  }
}
