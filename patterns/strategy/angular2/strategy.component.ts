import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCart, CreditCardStrategy, PayPalStrategy, BitcoinStrategy } from './payment-strategy';

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  cart: ShoppingCart;
  amount = 100;
  paymentResults: string[] = [];

  constructor() {
    this.cart = new ShoppingCart();
  }

  payWithCreditCard(): void {
    this.cart.setPaymentStrategy(new CreditCardStrategy('1234567890123456'));
    const result = this.cart.checkout(this.amount);
    this.paymentResults.push(result);
  }

  payWithPayPal(): void {
    this.cart.setPaymentStrategy(new PayPalStrategy('user@example.com'));
    const result = this.cart.checkout(this.amount);
    this.paymentResults.push(result);
  }

  payWithBitcoin(): void {
    this.cart.setPaymentStrategy(new BitcoinStrategy('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'));
    const result = this.cart.checkout(this.amount);
    this.paymentResults.push(result);
  }
}
