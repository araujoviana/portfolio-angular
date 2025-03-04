import { Component } from '@angular/core';
import { ContactOptionComponent } from '../contact-option/contact-option.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactOptionComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
