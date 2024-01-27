import { Component, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  animations: [
    trigger('summon', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)'}),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)'}),
        animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateX(100px)'}))
      ])
    ]),
  ]
})
export class CartComponent {
  globalService = inject(GlobalServiceService);
}
