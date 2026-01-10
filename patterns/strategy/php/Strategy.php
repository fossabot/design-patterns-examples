<?php

// Strategy interface
interface PaymentStrategy {
    public function pay(float $amount): string;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    private $cardNumber;

    public function __construct(string $cardNumber) {
        $this->cardNumber = $cardNumber;
    }

    public function pay(float $amount): string {
        $lastFour = substr($this->cardNumber, -4);
        return sprintf("Paid $%.2f using Credit Card ending in %s", $amount, $lastFour);
    }
}

class PayPalPayment implements PaymentStrategy {
    private $email;

    public function __construct(string $email) {
        $this->email = $email;
    }

    public function pay(float $amount): string {
        return sprintf("Paid $%.2f using PayPal account %s", $amount, $this->email);
    }
}

class BitcoinPayment implements PaymentStrategy {
    private $walletAddress;

    public function __construct(string $walletAddress) {
        $this->walletAddress = $walletAddress;
    }

    public function pay(float $amount): string {
        $shortAddress = substr($this->walletAddress, 0, 8) . "...";
        return sprintf("Paid $%.2f using Bitcoin wallet %s", $amount, $shortAddress);
    }
}

// Context
class ShoppingCart {
    private $amount;
    private $paymentStrategy;

    public function __construct(float $amount) {
        $this->amount = $amount;
    }

    public function setPaymentStrategy(PaymentStrategy $strategy): void {
        $this->paymentStrategy = $strategy;
    }

    public function checkout(): string {
        return $this->paymentStrategy->pay($this->amount);
    }
}

// Usage
$cart = new ShoppingCart(100.0);

$cart->setPaymentStrategy(new CreditCardPayment("1234567890123456"));
echo $cart->checkout() . "\n";

$cart->setPaymentStrategy(new PayPalPayment("user@example.com"));
echo $cart->checkout() . "\n";

$cart->setPaymentStrategy(new BitcoinPayment("1A2B3C4D5E6F7G8H"));
echo $cart->checkout() . "\n";
