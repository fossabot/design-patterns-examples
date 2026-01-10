import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { House, HouseBuilder, HouseDirector } from './house-builder';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  houses: House[] = [];

  buildSimpleHouse(): void {
    const builder = new HouseBuilder();
    const director = new HouseDirector(builder);
    const house = director.constructSimpleHouse();
    this.houses.push(house);
  }

  buildLuxuryHouse(): void {
    const builder = new HouseBuilder();
    const director = new HouseDirector(builder);
    const house = director.constructLuxuryHouse();
    this.houses.push(house);
  }

  buildCustomHouse(): void {
    const builder = new HouseBuilder();
    const house = builder
      .buildFoundation('Stone Foundation')
      .buildStructure('Brick Structure')
      .buildRoof('Metal Roof')
      .buildInterior('Modern Interior')
      .getHouse();
    this.houses.push(house);
  }
}
