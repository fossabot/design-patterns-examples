import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Circle, Square, AreaCalculator, DrawVisitor, Shape } from './shape-visitor';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  shapes: Shape[] = [
    new Circle(5),
    new Square(4),
    new Circle(3)
  ];
  results: string[] = [];

  calculateAreas(): void {
    const calculator = new AreaCalculator();
    this.shapes.forEach(shape => {
      this.results.push(shape.accept(calculator));
    });
  }

  drawShapes(): void {
    const drawer = new DrawVisitor();
    this.shapes.forEach(shape => {
      this.results.push(shape.accept(drawer));
    });
  }
}
