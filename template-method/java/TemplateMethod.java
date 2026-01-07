import java.util.ArrayList;
import java.util.List;

// Abstract class (template)
abstract class Beverage {
    public final List<String> prepareRecipe() {
        List<String> results = new ArrayList<>();
        results.add("Boiling water");
        results.add(brew());
        results.add("Pouring into cup");
        results.add(addCondiments());
        return results;
    }

    protected abstract String brew();
    protected abstract String addCondiments();
}

// Concrete implementations
class Tea extends Beverage {
    @Override
    protected String brew() {
        return "Steeping the tea";
    }

    @Override
    protected String addCondiments() {
        return "Adding lemon";
    }
}

class Coffee extends Beverage {
    @Override
    protected String brew() {
        return "Dripping coffee through filter";
    }

    @Override
    protected String addCondiments() {
        return "Adding sugar and milk";
    }
}

// Main class demonstrating Template Method pattern
public class TemplateMethod {
    public static void main(String[] args) {
        System.out.println("Making tea:");
        Beverage tea = new Tea();
        for (String step : tea.prepareRecipe()) {
            System.out.println("- " + step);
        }

        System.out.println("\nMaking coffee:");
        Beverage coffee = new Coffee();
        for (String step : coffee.prepareRecipe()) {
            System.out.println("- " + step);
        }
    }
}
