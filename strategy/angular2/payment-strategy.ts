// Strategy interface
export interface PaymentStrategy {
  pay(amount: number): string;
}

// Concrete Strategies
export class CreditCardStrategy implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): string {
    return `Paid $${amount} with Credit Card ending in ${this.cardNumber.slice(-4)}`;
  }
}

export class PayPalStrategy implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): string {
    return `Paid $${amount} with PayPal account ${this.email}`;
  }
}

export class BitcoinStrategy implements PaymentStrategy {
  constructor(private walletAddress: string) {}

  pay(amount: number): string {
    return `Paid $${amount} with Bitcoin wallet ${this.walletAddress.slice(0, 10)}...`;
  }
}

// Context
export class ShoppingCart {
  private paymentStrategy?: PaymentStrategy;

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): string {
    if (!this.paymentStrategy) {
      return 'Please select a payment method';
    }
    return this.paymentStrategy.pay(amount);
  }
}
