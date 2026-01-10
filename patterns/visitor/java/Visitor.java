// Visitor interface
interface ShapeVisitor {
    String visitCircle(Circle circle);
    String visitRectangle(Rectangle rectangle);
    String visitTriangle(Triangle triangle);
}

// Element interface
interface Shape {
    String accept(ShapeVisitor visitor);
}

// Concrete Elements
class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public String accept(ShapeVisitor visitor) {
        return visitor.visitCircle(this);
    }
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public String accept(ShapeVisitor visitor) {
        return visitor.visitRectangle(this);
    }
}

class Triangle implements Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    public double getBase() {
        return base;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public String accept(ShapeVisitor visitor) {
        return visitor.visitTriangle(this);
    }
}

// Concrete Visitors
class AreaCalculator implements ShapeVisitor {
    @Override
    public String visitCircle(Circle circle) {
        double area = Math.PI * circle.getRadius() * circle.getRadius();
        return String.format("Circle area: %.2f", area);
    }

    @Override
    public String visitRectangle(Rectangle rectangle) {
        double area = rectangle.getWidth() * rectangle.getHeight();
        return String.format("Rectangle area: %.2f", area);
    }

    @Override
    public String visitTriangle(Triangle triangle) {
        double area = 0.5 * triangle.getBase() * triangle.getHeight();
        return String.format("Triangle area: %.2f", area);
    }
}

class DrawVisitor implements ShapeVisitor {
    @Override
    public String visitCircle(Circle circle) {
        return String.format("Drawing Circle with radius %.2f", circle.getRadius());
    }

    @Override
    public String visitRectangle(Rectangle rectangle) {
        return String.format("Drawing Rectangle %.2f x %.2f", rectangle.getWidth(), rectangle.getHeight());
    }

    @Override
    public String visitTriangle(Triangle triangle) {
        return String.format("Drawing Triangle base %.2f, height %.2f", triangle.getBase(), triangle.getHeight());
    }
}

// Main class demonstrating Visitor pattern
public class Visitor {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6),
            new Triangle(3, 4)
        };

        ShapeVisitor areaCalc = new AreaCalculator();
        ShapeVisitor drawer = new DrawVisitor();

        System.out.println("Calculating areas:");
        for (Shape shape : shapes) {
            System.out.println(shape.accept(areaCalc));
        }

        System.out.println("\nDrawing shapes:");
        for (Shape shape : shapes) {
            System.out.println(shape.accept(drawer));
        }
    }
}
