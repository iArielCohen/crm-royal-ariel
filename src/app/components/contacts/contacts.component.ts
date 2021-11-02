import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  nameTerm: string = '';

  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getAll();
  }

  ngOnInit(): void {}
}
