// Component interface
interface Employee {
  showDetails(): string;
}

// Leaf
class Developer implements Employee {
  constructor(private name: string, private position: string) {}

  showDetails(): string {
    return `${this.name} - ${this.position}`;
  }
}

// Composite
class Manager implements Employee {
  private subordinates: Employee[] = [];

  constructor(private name: string, private position: string) {}

  add(employee: Employee): void {
    this.subordinates.push(employee);
  }

  remove(employee: Employee): void {
    const index = this.subordinates.indexOf(employee);
    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }

  showDetails(): string {
    let result = `${this.name} - ${this.position}\n`;
    for (const employee of this.subordinates) {
      result += `  ${employee.showDetails()}\n`;
    }
    return result;
  }
}

// Usage
const dev1 = new Developer('John', 'Frontend Developer');
const dev2 = new Developer('Jane', 'Backend Developer');

const manager = new Manager('Bob', 'Engineering Manager');
manager.add(dev1);
manager.add(dev2);

console.log(manager.showDetails());
