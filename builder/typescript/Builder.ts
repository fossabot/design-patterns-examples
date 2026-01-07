// Product
class House {
  foundation: string = '';
  structure: string = '';
  roof: string = '';
  interior: string = '';

  display(): void {
    console.log('House with:');
    console.log(`  Foundation: ${this.foundation}`);
    console.log(`  Structure: ${this.structure}`);
    console.log(`  Roof: ${this.roof}`);
    console.log(`  Interior: ${this.interior}`);
  }
}

// Builder interface
interface IHouseBuilder {
  buildFoundation(): void;
  buildStructure(): void;
  buildRoof(): void;
  buildInterior(): void;
  getHouse(): House;
}

// Concrete Builder
class ConcreteHouseBuilder implements IHouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildFoundation(): void {
    this.house.foundation = 'Concrete foundation';
  }

  buildStructure(): void {
    this.house.structure = 'Wood and brick structure';
  }

  buildRoof(): void {
    this.house.roof = 'Concrete roof';
  }

  buildInterior(): void {
    this.house.interior = 'Modern interior';
  }

  getHouse(): House {
    return this.house;
  }
}

// Director
class Director {
  private builder: IHouseBuilder;

  constructor(builder: IHouseBuilder) {
    this.builder = builder;
  }

  construct(): void {
    this.builder.buildFoundation();
    this.builder.buildStructure();
    this.builder.buildRoof();
    this.builder.buildInterior();
  }
}

// Usage
const builder = new ConcreteHouseBuilder();
const director = new Director(builder);
director.construct();
const house = builder.getHouse();
house.display();
