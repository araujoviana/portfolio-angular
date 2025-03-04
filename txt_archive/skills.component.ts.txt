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
  private skills = inject(SkillsService);

}
