import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  globalService = inject(GlobalServiceService);
  @Input() images: ImagesData[];
  @Input() thumbnails: ThumbnailsData[];
  index: number;
  interval: any;
  windowWidth: number;
  clientWidth: number;

  constructor() {
    this.images = [];
    this.thumbnails = [];
    this.index = 0;
    this.windowWidth = window.innerWidth;
    this.clientWidth = document.documentElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    this.clientWidth = document.documentElement.clientWidth;
  }

  ngOnInit(): void {
    this.startSlideTransition();
  }

  thumbnailClick(value: number): void {
    this.index = value;
    this.resetSlideTransition();
  }

  startSlideTransition(): void {
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
    }, 3000);
  }

  stopSlideTransition(): void {
    clearInterval(this.interval);
  }

  resetSlideTransition(): void {
    this.stopSlideTransition();
    this.startSlideTransition();
  }

  imageClick(): void {
    if (this.windowWidth < 451) return;
    this.globalService.addImages(this.images, this.thumbnails);
    this.globalService.openLightBox = true;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (this.windowWidth < 451) return;
    if (event.key === 'Enter') {
      this.globalService.addImages(this.images, this.thumbnails);
      this.globalService.openLightBox = true;
    }
  }

  next(): void {
    if (this.index === this.images.length - 1){
      this.index = 0;
      this.resetSlideTransition();
      return;
    }
    this.index += 1;
    this.resetSlideTransition();
  }

  previous(): void {
    if (this.index === 0) {
      this.index = this.images.length - 1;
      this.resetSlideTransition();
      return;
    }
    this.index -= 1;
    this.resetSlideTransition();
  }
}

interface ImagesData {
  image: string;
  name: string;
}

interface ThumbnailsData {
  image: string;
  name: string;
  id: number;
}
