import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private router: Router) {

  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
