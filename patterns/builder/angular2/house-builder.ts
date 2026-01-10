export class House {
  foundation?: string;
  structure?: string;
  roof?: string;
  interior?: string;

  describe(): string {
    return `House with ${this.foundation}, ${this.structure}, ${this.roof}, and ${this.interior}`;
  }
}

export class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation: string): HouseBuilder {
    this.house.foundation = foundation;
    return this;
  }

  buildStructure(structure: string): HouseBuilder {
    this.house.structure = structure;
    return this;
  }

  buildRoof(roof: string): HouseBuilder {
    this.house.roof = roof;
    return this;
  }

  buildInterior(interior: string): HouseBuilder {
    this.house.interior = interior;
    return this;
  }

  getHouse(): House {
    const result = this.house;
    this.house = new House();
    return result;
  }
}

export class HouseDirector {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  constructSimpleHouse(): House {
    return this.builder
      .buildFoundation('Concrete Foundation')
      .buildStructure('Wood Structure')
      .buildRoof('Shingle Roof')
      .buildInterior('Basic Interior')
      .getHouse();
  }

  constructLuxuryHouse(): House {
    return this.builder
      .buildFoundation('Reinforced Concrete Foundation')
      .buildStructure('Steel Structure')
      .buildRoof('Tile Roof')
      .buildInterior('Luxury Interior')
      .getHouse();
  }
}
