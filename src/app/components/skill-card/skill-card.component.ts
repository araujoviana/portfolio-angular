import { NgOptimizedImage } from '@angular/common';
import { Component, Input, HostListener, ElementRef } from '@angular/core';

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

  x: number = 0;
  y: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.x = event.clientX - rect.left;
    this.y = event.clientY - rect.top;

    this.el.nativeElement.style.setProperty('--x', `${this.x}px`);
    this.el.nativeElement.style.setProperty('--y', `${this.y}px`);
    console.log(this.x,this.y);
  }
}
