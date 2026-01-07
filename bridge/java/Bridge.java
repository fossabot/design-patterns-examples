// Implementor interface
interface Color {
    String fill();
}

// Concrete Implementor: Red
class Red implements Color {
    @Override
    public String fill() {
        return "Red";
    }
}

// Concrete Implementor: Blue
class Blue implements Color {
    @Override
    public String fill() {
        return "Blue";
    }
}

// Abstraction
abstract class Shape {
    protected Color color;

    protected Shape(Color color) {
        this.color = color;
    }

    abstract String draw();
}

// Refined Abstraction: Circle
class Circle extends Shape {
    public Circle(Color color) {
        super(color);
    }

    @Override
    String draw() {
        return "Drawing Circle with color: " + color.fill();
    }
}

// Refined Abstraction: Square
class Square extends Shape {
    public Square(Color color) {
        super(color);
    }

    @Override
    String draw() {
        return "Drawing Square with color: " + color.fill();
    }
}

// Main class demonstrating Bridge pattern
public class Bridge {
    public static void main(String[] args) {
        // Red Circle
        Shape redCircle = new Circle(new Red());
        System.out.println(redCircle.draw());

        // Blue Circle
        Shape blueCircle = new Circle(new Blue());
        System.out.println(blueCircle.draw());

        // Red Square
        Shape redSquare = new Square(new Red());
        System.out.println(redSquare.draw());

        // Blue Square
        Shape blueSquare = new Square(new Blue());
        System.out.println(blueSquare.draw());
    }
}
