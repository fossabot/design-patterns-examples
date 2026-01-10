import React, { useState } from 'react';

// Concrete Strategies
class CreditCardPayment {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    const lastFour = this.cardNumber.slice(-4);
    return `Paid $${amount.toFixed(2)} using Credit Card ending in ${lastFour}`;
  }
}

class PayPalPayment {
  constructor(email) {
    this.email = email;
  }

  pay(amount) {
    return `Paid $${amount.toFixed(2)} using PayPal account ${this.email}`;
  }
}

class BitcoinPayment {
  constructor(walletAddress) {
    this.walletAddress = walletAddress;
  }

  pay(amount) {
    const shortAddress = this.walletAddress.substring(0, 8) + '...';
    return `Paid $${amount.toFixed(2)} using Bitcoin wallet ${shortAddress}`;
  }
}

// Context
class ShoppingCart {
  constructor(amount) {
    this.amount = amount;
    this.paymentStrategy = null;
  }

  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }

  checkout() {
    return this.paymentStrategy.pay(this.amount);
  }
}

// Component
const StrategyExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const cart = new ShoppingCart(100.0);
    const results = [];

    cart.setPaymentStrategy(new CreditCardPayment('1234567890123456'));
    results.push(cart.checkout());

    cart.setPaymentStrategy(new PayPalPayment('user@example.com'));
    results.push(cart.checkout());

    cart.setPaymentStrategy(new BitcoinPayment('1A2B3C4D5E6F7G8H'));
    results.push(cart.checkout());

    setOutput(results);
  };

  return (
    <div className="strategy-example">
      <h2>Strategy Pattern</h2>
      <p>Payment system with different payment strategies</p>
      <button onClick={runExample}>Test Payments</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default StrategyExample;
