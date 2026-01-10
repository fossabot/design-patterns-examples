// Strategy interface
interface PaymentStrategy {
    String pay(double amount);
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public String pay(double amount) {
        String lastFour = cardNumber.substring(cardNumber.length() - 4);
        return String.format("Paid $%.2f using Credit Card ending in %s", amount, lastFour);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public String pay(double amount) {
        return String.format("Paid $%.2f using PayPal account %s", amount, email);
    }
}

class BitcoinPayment implements PaymentStrategy {
    private String walletAddress;

    public BitcoinPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    @Override
    public String pay(double amount) {
        String shortAddress = walletAddress.substring(0, 8) + "...";
        return String.format("Paid $%.2f using Bitcoin wallet %s", amount, shortAddress);
    }
}

// Context
class ShoppingCart {
    private double amount;
    private PaymentStrategy paymentStrategy;

    public ShoppingCart(double amount) {
        this.amount = amount;
    }

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public String checkout() {
        return paymentStrategy.pay(amount);
    }
}

// Main class demonstrating Strategy pattern
public class Strategy {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart(100.0);

        cart.setPaymentStrategy(new CreditCardPayment("1234567890123456"));
        System.out.println(cart.checkout());

        cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
        System.out.println(cart.checkout());

        cart.setPaymentStrategy(new BitcoinPayment("1A2B3C4D5E6F7G8H"));
        System.out.println(cart.checkout());
    }
}
