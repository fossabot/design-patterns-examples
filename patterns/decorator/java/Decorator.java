// Component interface
interface Coffee {
    String getDescription();
    double getCost();
}

// Concrete Component: Simple Coffee
class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Simple Coffee";
    }

    @Override
    public double getCost() {
        return 2.0;
    }
}

// Decorator abstract class
abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;

    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    @Override
    public String getDescription() {
        return coffee.getDescription();
    }

    @Override
    public double getCost() {
        return coffee.getCost();
    }
}

// Concrete Decorator: Milk
class Milk extends CoffeeDecorator {
    public Milk(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return coffee.getCost() + 0.5;
    }
}

// Concrete Decorator: Sugar
class Sugar extends CoffeeDecorator {
    public Sugar(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return coffee.getCost() + 0.2;
    }
}

// Main class demonstrating Decorator pattern
public class Decorator {
    public static void main(String[] args) {
        // Simple coffee
        Coffee coffee1 = new SimpleCoffee();
        System.out.println(coffee1.getDescription() + " - $" + coffee1.getCost());

        // Coffee with milk
        Coffee coffee2 = new Milk(new SimpleCoffee());
        System.out.println(coffee2.getDescription() + " - $" + coffee2.getCost());

        // Coffee with milk and sugar
        Coffee coffee3 = new Sugar(new Milk(new SimpleCoffee()));
        System.out.println(coffee3.getDescription() + " - $" + coffee3.getCost());

        // Coffee with double milk and sugar
        Coffee coffee4 = new Sugar(new Milk(new Milk(new SimpleCoffee())));
        System.out.println(coffee4.getDescription() + " - $" + coffee4.getCost());
    }
}
