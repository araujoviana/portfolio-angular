import {Component, inject} from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';
@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;


}
