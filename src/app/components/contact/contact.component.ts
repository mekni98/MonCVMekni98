import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false   // ← Très important !
})
export class ContactComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("Nouveau message :", form.value);
      
      alert("✅ Merci ! Votre message a été envoyé avec succès.\n\nJe vous répondrai bientôt.");
      
      form.reset();
    } else {
      alert("⚠️ Veuillez remplir tous les champs obligatoires.");
    }
  }
}