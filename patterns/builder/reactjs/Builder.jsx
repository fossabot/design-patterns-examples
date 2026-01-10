import React from 'react';

// Product
class House {
  constructor() {
    this.foundation = '';
    this.structure = '';
    this.roof = '';
    this.interior = '';
  }
}

// Builder
class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation) {
    this.house.foundation = foundation;
    return this;
  }

  buildStructure(structure) {
    this.house.structure = structure;
    return this;
  }

  buildRoof(roof) {
    this.house.roof = roof;
    return this;
  }

  buildInterior(interior) {
    this.house.interior = interior;
    return this;
  }

  build() {
    return this.house;
  }
}

// Component
const BuilderExample = () => {
  const house = new HouseBuilder()
    .buildFoundation('Concrete foundation')
    .buildStructure('Wood and brick structure')
    .buildRoof('Concrete roof')
    .buildInterior('Modern interior')
    .build();

  return (
    <div className="builder-example">
      <h2>Builder Pattern</h2>
      <div className="house-details">
        <p><strong>Foundation:</strong> {house.foundation}</p>
        <p><strong>Structure:</strong> {house.structure}</p>
        <p><strong>Roof:</strong> {house.roof}</p>
        <p><strong>Interior:</strong> {house.interior}</p>
      </div>
    </div>
  );
};

export default BuilderExample;
