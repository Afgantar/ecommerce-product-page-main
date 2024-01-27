import { Component, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CartComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  globalService = inject(GlobalServiceService);
  navigationLinks: string[];
  pictures: string;

  constructor() {
    this.navigationLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];
    this.pictures = './assets/images/image-avatar.png';
  }

  toggleCart(): void {
    this.globalService.toggleCart();
  }
}