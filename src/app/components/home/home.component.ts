import { Component } from '@angular/core';
import { ComputerComponent } from '../3d/computer/computer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ComputerComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
