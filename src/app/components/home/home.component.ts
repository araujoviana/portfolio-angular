import { Component } from '@angular/core';
import { ComputerComponent } from '../3d/computer/computer.component';

@Component({
  selector: 'app-home',
  imports: [ComputerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
