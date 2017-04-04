import { Component } from '@angular/core';
import {Contact} from "./contact/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: [Contact];
  helloText: string;
  selectedContact: Contact;

  constructor(){
  this.contacts = [
    new Contact(0, 'Vesa', 'Heimo'),
    new Contact(1, 'Mörkö', 'Pötkö'),
    new Contact(2, 'Aatu', 'Beetu')
    ]
  }

  doSomething(){
    console.log('Hello Button');
    this.helloText = 'Hi!';
  }

  contactSelected(contact: Contact){
    this.selectedContact = contact;

  }

}
