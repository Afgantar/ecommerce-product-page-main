import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { CartComponent } from './components/cart/cart.component';
import { GlobalServiceService } from './services/global-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { LightBoxComponent } from './components/light-box/light-box.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainAppComponent, CartComponent, LightBoxComponent, MobileNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('cartAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)'}),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100px)'}))
      ])
    ]),
    trigger('summon', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  globalService = inject(GlobalServiceService);
  title = 'ecommerce-product-page-main';
}
