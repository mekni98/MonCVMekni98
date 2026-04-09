import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(formData: any) {
    return emailjs.send(
      environment.emailjs.serviceID,
      environment.emailjs.templateID,
      formData,
      environment.emailjs.publicKey
    );
  }
}