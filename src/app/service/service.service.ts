import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private favorites: Set<string> = new Set<string>();

  generateData(): any[] {
    const data = [];
    for (let i = 1; i <= 4000; i++) {
      const id = `${i}`;
      const photo = `https://picsum.photos/id/0/500/500.jpg`;
      const author = `Author ${i}`;
      const text = this.generateRandomLoremIpsum();

      data.push({ id, photo, author, text });
    }
    return data;
  }

  private generateRandomLoremIpsum(): string {
    // Implement your logic to generate random lorem ipsum text here.
    // For example, you can use a lorem ipsum generator library.
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }
  constructor() { }


  toggleFavorite(id: string): void {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
    localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites)));
  }

  getFavorites(): string[] {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = new Set<string>(JSON.parse(favorites));
    }
    return Array.from(this.favorites);
  }
}
