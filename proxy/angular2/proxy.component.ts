import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyImage } from './image-proxy';

@Component({
  selector: 'app-proxy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent {
  images: { name: string; proxy: ProxyImage }[] = [
    { name: 'photo1.jpg', proxy: new ProxyImage('photo1.jpg') },
    { name: 'photo2.jpg', proxy: new ProxyImage('photo2.jpg') },
    { name: 'photo3.jpg', proxy: new ProxyImage('photo3.jpg') }
  ];
  displayResults: string[] = [];

  displayImage(index: number): void {
    const result = this.images[index].proxy.display();
    this.displayResults.push(result);
  }
}
