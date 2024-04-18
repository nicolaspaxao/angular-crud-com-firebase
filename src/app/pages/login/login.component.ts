import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ButtonComponent]
})
export class LoginComponent {
  constructor() {
    document.title = 'Login'
  }
}
