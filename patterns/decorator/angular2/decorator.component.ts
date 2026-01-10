import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee, SimpleCoffee, MilkDecorator, SugarDecorator, WhippedCreamDecorator } from './coffee-decorator';

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent {
  currentCoffee: Coffee = new SimpleCoffee();
  coffeeOrders: { description: string; cost: number }[] = [];

  addMilk(): void {
    this.currentCoffee = new MilkDecorator(this.currentCoffee);
  }

  addSugar(): void {
    this.currentCoffee = new SugarDecorator(this.currentCoffee);
  }

  addWhippedCream(): void {
    this.currentCoffee = new WhippedCreamDecorator(this.currentCoffee);
  }

  orderCoffee(): void {
    this.coffeeOrders.push({
      description: this.currentCoffee.getDescription(),
      cost: this.currentCoffee.getCost()
    });
    this.currentCoffee = new SimpleCoffee();
  }

  resetCoffee(): void {
    this.currentCoffee = new SimpleCoffee();
  }
}
