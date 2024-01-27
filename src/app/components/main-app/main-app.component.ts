import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [CommonModule, CarouselComponent, DetailComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {
  detail: Detail;
  images: ImagesData[];
  thumbnails: ThumbnailsData[];

  constructor() {
    this.detail = {
      company: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
      price: '125.00',
      previousPrice: '250.00',
      discount: '50'
    };
    this.images = [
      {
        image: './assets/images/image-product-1.jpg',
        name: 'Shoes pair'
      },
      {
        image: './assets/images/image-product-2.jpg',
        name: 'Shoes pair with stones and wood branch'
      },
      {
        image: './assets/images/image-product-3.jpg',
        name: 'A shoe on top of stones'
      },
      {
        image: './assets/images/image-product-4.jpg',
        name: 'A shoe on the edge of a stack of stones'
      }
    ];
    this.thumbnails = [
      {
        image: './assets/images/image-product-1-thumbnail.jpg',
        name: 'Thumbnail of shoes pair',
        id: 0
      },
      {
        image: './assets/images/image-product-2-thumbnail.jpg',
        name: 'Thumbnail of shoes pair with stones and wood branch',
        id: 1
      },
      {
        image: './assets/images/image-product-3-thumbnail.jpg',
        name: 'Thumbnail of a shoe on top of stones',
        id: 2
      },
      {
        image: './assets/images/image-product-4-thumbnail.jpg',
        name: 'Thumbnail of a shoe on the edge of a stack of stones',
        id: 3
      }
    ];
  }
}

interface Detail {
  company: string;
  title: string;
  description: string;
  price: string;
  previousPrice: string;
  discount: string;
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