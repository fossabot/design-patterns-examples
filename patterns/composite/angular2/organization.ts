// Component interface
export interface Employee {
  getName(): string;
  getRole(): string;
  getSubordinates(): Employee[];
  describe(): string;
}

// Leaf
export class Developer implements Employee {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return 'Developer';
  }

  getSubordinates(): Employee[] {
    return [];
  }

  describe(): string {
    return `${this.name} - Developer`;
  }
}

// Composite
export class Manager implements Employee {
  private subordinates: Employee[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return 'Manager';
  }

  add(employee: Employee): void {
    this.subordinates.push(employee);
  }

  remove(employee: Employee): void {
    const index = this.subordinates.indexOf(employee);
    if (index >= 0) {
      this.subordinates.splice(index, 1);
    }
  }

  getSubordinates(): Employee[] {
    return this.subordinates;
  }

  describe(): string {
    return `${this.name} - Manager (${this.subordinates.length} subordinates)`;
  }
}
