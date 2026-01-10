package main

import "fmt"

// Strategy interface
type PaymentStrategy interface {
	Pay(amount float64) string
}

// Concrete Strategies
type CreditCardPayment struct {
	cardNumber string
}

func (c *CreditCardPayment) Pay(amount float64) string {
	return fmt.Sprintf("Paid $%.2f using Credit Card ending in %s", amount, c.cardNumber[len(c.cardNumber)-4:])
}

type PayPalPayment struct {
	email string
}

func (p *PayPalPayment) Pay(amount float64) string {
	return fmt.Sprintf("Paid $%.2f using PayPal account %s", amount, p.email)
}

type BitcoinPayment struct {
	walletAddress string
}

func (b *BitcoinPayment) Pay(amount float64) string {
	return fmt.Sprintf("Paid $%.2f using Bitcoin wallet %s", amount, b.walletAddress[:8]+"...")
}

// Context
type ShoppingCart struct {
	amount          float64
	paymentStrategy PaymentStrategy
}

func (s *ShoppingCart) SetPaymentStrategy(strategy PaymentStrategy) {
	s.paymentStrategy = strategy
}

func (s *ShoppingCart) Checkout() string {
	return s.paymentStrategy.Pay(s.amount)
}

func main() {
	cart := &ShoppingCart{amount: 100.0}

	cart.SetPaymentStrategy(&CreditCardPayment{cardNumber: "1234567890123456"})
	fmt.Println(cart.Checkout())

	cart.SetPaymentStrategy(&PayPalPayment{email: "user@example.com"})
	fmt.Println(cart.Checkout())

	cart.SetPaymentStrategy(&BitcoinPayment{walletAddress: "1A2B3C4D5E6F7G8H"})
	fmt.Println(cart.Checkout())
}
