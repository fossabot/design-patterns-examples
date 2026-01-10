import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee, Manager, Developer } from './organization';

interface EmployeeNode {
  employee: Employee;
  level: number;
}

@Component({
  selector: 'app-composite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent {
  organization: EmployeeNode[] = [];

  constructor() {
    this.buildOrganization();
  }

  buildOrganization(): void {
    // Create CEO
    const ceo = new Manager('John CEO');
    
    // Create managers
    const devManager = new Manager('Sarah Dev Manager');
    const salesManager = new Manager('Mike Sales Manager');
    
    // Create developers
    const dev1 = new Developer('Alice');
    const dev2 = new Developer('Bob');
    const dev3 = new Developer('Charlie');
    
    // Create sales people
    const sales1 = new Developer('David');
    const sales2 = new Developer('Eve');
    
    // Build hierarchy
    devManager.add(dev1);
    devManager.add(dev2);
    devManager.add(dev3);
    
    salesManager.add(sales1);
    salesManager.add(sales2);
    
    ceo.add(devManager);
    ceo.add(salesManager);
    
    // Flatten for display
    this.flattenOrganization(ceo, 0);
  }

  flattenOrganization(employee: Employee, level: number): void {
    this.organization.push({ employee, level });
    employee.getSubordinates().forEach(sub => {
      this.flattenOrganization(sub, level + 1);
    });
  }

  getIndentation(level: number): string {
    return '—'.repeat(level * 2);
  }
}
