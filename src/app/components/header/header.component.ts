import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  drawerVisible = false;

  toggleDrawer() {
    console.log(this.drawerVisible);
    this.drawerVisible = !this.drawerVisible;
  }
}
