import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  procesando!: boolean;

  constructor(private router: Router) {

  }

  login() {
    this.procesando = true;
    setTimeout(() => {
      this.router.navigate(['/home/dashboard']);
      this.procesando = false;
    }, 3000);
  }
}
