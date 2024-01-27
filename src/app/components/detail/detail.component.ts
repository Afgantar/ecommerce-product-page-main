import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  globalService = inject(GlobalServiceService);
  @Input() detail: Detail;
  @Input() images: ImagesData[];
  quantity: number;

  constructor() {
    this.detail = {
      company: '',
      title: '',
      description: '',
      price: '',
      previousPrice: '',
      discount: ''
    }
    this.quantity = 0;
    this.images = [];
  }

  increment(): void {
    this.quantity += 1;
  }

  decrement(): void {
    if (this.quantity === 0) return;
    this.quantity -= 1;
  }

  add(): void {
    const item: AddedItems = {
      image: this.images[0].image,
      title: this.detail.title,
      price: this.detail.price,
      quantity: this.quantity
    }
    this.globalService.addItem(item);
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

interface AddedItems {
  image: string;
  title: string;
  price: string;
  quantity: number;
}