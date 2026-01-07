import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Collection } from './collection-iterator';

@Component({
  selector: 'app-iterator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent {
  collection: Collection<string>;
  iteratedItems: string[] = [];

  constructor() {
    this.collection = new Collection(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  }

  iterateCollection(): void {
    this.iteratedItems = [];
    const iterator = this.collection.createIterator();
    while (iterator.hasNext()) {
      const item = iterator.next();
      if (item) {
        this.iteratedItems.push(item);
      }
    }
  }
}
