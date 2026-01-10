// Strategy interface
interface PaymentStrategy {
  pay(amount: number): string;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): string {
    const lastFour = this.cardNumber.slice(-4);
    return `Paid $${amount.toFixed(2)} using Credit Card ending in ${lastFour}`;
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): string {
    return `Paid $${amount.toFixed(2)} using PayPal account ${this.email}`;
  }
}

class BitcoinPayment implements PaymentStrategy {
  constructor(private walletAddress: string) {}

  pay(amount: number): string {
    const shortAddress = this.walletAddress.substring(0, 8) + '...';
    return `Paid $${amount.toFixed(2)} using Bitcoin wallet ${shortAddress}`;
  }
}

// Context
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(private amount: number) {}

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(): string {
    return this.paymentStrategy.pay(this.amount);
  }
}

// Usage
const cart = new ShoppingCart(100.0);

cart.setPaymentStrategy(new CreditCardPayment('1234567890123456'));
console.log(cart.checkout());

cart.setPaymentStrategy(new PayPalPayment('user@example.com'));
console.log(cart.checkout());

cart.setPaymentStrategy(new BitcoinPayment('1A2B3C4D5E6F7G8H'));
console.log(cart.checkout());
