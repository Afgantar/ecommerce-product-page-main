import { Component, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css'
})
export class MobileNavbarComponent {
  globalService = inject(GlobalServiceService);
  navigationLinks: string[];

  constructor() {
    this.navigationLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  }
}
