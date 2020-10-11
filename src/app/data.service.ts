import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Medecin 001", description: "Medecin 001 des", email: "medecin001@email.com"},
    {id: 2, name: "Medecin 002", description: "Medecin 002 des", email: "medecin002@email.com"},
    {id: 3, name: "Medecin 003", description: "Medecin 003 des", email: "medecin003@email.com"},
    {id: 4, name: "Medecin 004", description: "Medecin 004 des", email: "medecin004@email.com"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}
