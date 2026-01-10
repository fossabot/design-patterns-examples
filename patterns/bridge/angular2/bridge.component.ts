import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shape, Circle, Square, Triangle, RedColor, BlueColor, GreenColor } from './shape-bridge';

@Component({
  selector: 'app-bridge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent {
  shapes: { shape: Shape; description: string }[] = [];

  createShape(shapeType: string, colorType: string): void {
    let color;
    switch (colorType) {
      case 'red':
        color = new RedColor();
        break;
      case 'blue':
        color = new BlueColor();
        break;
      case 'green':
        color = new GreenColor();
        break;
      default:
        return;
    }

    let shape: Shape;
    switch (shapeType) {
      case 'circle':
        shape = new Circle(color);
        break;
      case 'square':
        shape = new Square(color);
        break;
      case 'triangle':
        shape = new Triangle(color);
        break;
      default:
        return;
    }

    this.shapes.push({ shape, description: shape.draw() });
  }
}
