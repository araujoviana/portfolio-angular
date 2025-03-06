import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [NgOptimizedImage],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  linkedinLink: string = "https://www.linkedin.com/in/matheus-gabriel-viana-592685281/";
  githubLink: string = "https://github.com/araujoviana";
  emailLink: string = "vianamatheusgabriel1@gmail.com";

  emailText: string = "Copy Email";

  copyEmail() {
    navigator.clipboard.writeText(this.emailLink).then(r => console.log(r));
    this.emailText = "Email copied!";
  }
}
