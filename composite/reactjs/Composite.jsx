import React from 'react';

// Leaf component
class Developer {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  showDetails() {
    return `${this.name} - ${this.position}`;
  }
}

// Composite component
class Manager {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.subordinates = [];
  }

  add(employee) {
    this.subordinates.push(employee);
  }

  remove(employee) {
    const index = this.subordinates.indexOf(employee);
    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }

  showDetails() {
    return {
      manager: `${this.name} - ${this.position}`,
      team: this.subordinates.map((emp) => emp.showDetails()),
    };
  }
}

// Component
const CompositeExample = () => {
  const dev1 = new Developer('John', 'Frontend Developer');
  const dev2 = new Developer('Jane', 'Backend Developer');

  const manager = new Manager('Bob', 'Engineering Manager');
  manager.add(dev1);
  manager.add(dev2);

  const details = manager.showDetails();

  return (
    <div className="composite-example">
      <h2>Composite Pattern</h2>
      <h3>{details.manager}</h3>
      <ul>
        {details.team.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompositeExample;
