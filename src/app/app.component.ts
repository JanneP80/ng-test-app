import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  helloText: string;
  hello2Text: string;
  selectedContact: Contact;

  constructor(contactService: ContactService){
    this.contacts = contactService.findContacts();

  }

  doSomething(){
    console.log('Hello Button');
    this.helloText = 'Hi!';
  }

  contactSelected(contact: Contact){
    this.selectedContact = contact;

  }

}
