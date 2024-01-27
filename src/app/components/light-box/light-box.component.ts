import { Component, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';
import { CommonModule } from '@angular/common';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-light-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.css',
  animations: [
    trigger('imageTransition', [
      state('index', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
      transition(':increment', [
        group([
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateX(300px) scale(0.5)' }),
              animate(
                '1s ease-in-out',
                style({ opacity: 1, transform: 'translateX(0) scale(1)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                style({ opacity: 0, transform: 'translateX(-300px) scale(0.5)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition(':decrement', [
        group([
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateX(-300px) scale(0.5)' }),
              animate(
                '1s ease-in-out',
                style({ opacity: 1, transform: 'translateX(0) scale(1)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                style({ opacity: 0, transform: 'translateX(300px) scale(0.5)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ])
  ]
})
export class LightBoxComponent {
  globalService = inject(GlobalServiceService);
  index: number;

  constructor() {
    this.index = 0;
  }

  closeLightBox(): void {
    this.globalService.openLightBox = false;
  }

  thumbnailClick(value: number): void {
    this.index = value;
  }

  next(): void {
    if (this.index === this.globalService.images.length - 1){
      this.index = 0;
      return;
    }
    this.index += 1;
  }

  previous(): void {
    if (this.index === 0) {
      this.index = this.globalService.images.length - 1;
      return;
    }
    this.index -= 1;
  }
}
