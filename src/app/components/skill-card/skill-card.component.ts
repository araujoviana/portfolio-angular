import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [NgOptimizedImage],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() usageMedia!: string; 
}
