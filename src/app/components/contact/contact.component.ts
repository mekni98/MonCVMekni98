import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent {

  sending = false;
  successMessage = '';
  errorMessage = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sending = true;
      this.successMessage = '';
      this.errorMessage = '';

      emailjs.send(
        environment.emailjs.serviceID,
        environment.emailjs.templateID,
        form.value,
        environment.emailjs.publicKey
      ).then(
        () => {
          this.sending = false;
          this.successMessage = "✅ Merci ! Votre message a été envoyé avec succès.";
          form.reset();
        },
        (error) => {
          this.sending = false;
          this.errorMessage = "⚠️ Une erreur est survenue. Réessayez plus tard.";
          console.error("Erreur EmailJS :", error);
        }
      );
    } else {
      alert("⚠️ Veuillez remplir tous les champs obligatoires.");
    }
  }
}