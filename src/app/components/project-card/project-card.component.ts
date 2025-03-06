import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() name!: string;
  @Input() brief!: string;
  @Input() description!: string;
  @Input() imagePath!: string;
  @Input() relevantLink!: string;

  isReadingMore: boolean = false;

  readMore(): void {
    this.isReadingMore = true;
  }

  readLess(): void {
    this.isReadingMore = false;
  }

}
