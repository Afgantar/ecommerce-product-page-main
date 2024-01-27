import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  addedItems: Total[];
  openCart: boolean;
  totalItems: number;
  images: ImagesData[];
  thumbnails: ThumbnailsData[];
  openLightBox: boolean;
  openNavbar: boolean;

  constructor() {
    this.addedItems = [];
    this.openCart = false;
    this.totalItems = 0;
    this.images = [];
    this.thumbnails = [];
    this.openLightBox = false;
    this.openNavbar = true;
  }

  addItem(item: AddedItems): void {
    if (item.quantity === 0) {
      this.removeItem(item);
      return;
    }
    const temp: Total = {
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      totalPrice: (parseFloat(item.price) * item.quantity)
        .toFixed(2)
        .toLocaleString(),
    };
    const find: Total | undefined = this.addedItems.find(
      (addedItem) => addedItem.title === item.title
    );
    if (find !== undefined) {
      this.addedItems = this.addedItems.map((addedItem) => {
        if (addedItem.title === find.title) {
          return temp;
        } else {
          return addedItem;
        }
      });
    } else {
      this.addedItems = [...this.addedItems, temp];
    }
    this.updateTotalItem();
  }

  removeItem(item: AddedItems): void {
    this.addedItems = this.addedItems.filter((addedItem) => addedItem.title !== item.title);
    this.updateTotalItem();
  }

  toggleCart(): void {
    this.openCart = !this.openCart;
  }

  updateTotalItem(): void {
    this.totalItems = this.addedItems.reduce((total, item) => total + item.quantity, 0);
  }

  addImages(images: ImagesData[], thumbnails: ThumbnailsData[]): void {
    this.images = images;
    this.thumbnails = thumbnails;
  }

  removeImages(): void {
    this.images = [];
    this.thumbnails = [];
  }

  openNavigation(): void {
    this.openNavbar = true;
  }

  closeNavigation(): void {
    this.openNavbar = false;
  }
}

interface AddedItems {
  image: string;
  title: string;
  price: string;
  quantity: number;
}

interface Total extends AddedItems {
  totalPrice: string;
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