// Abstract Product: Button
interface Button {
    String render();
}

// Abstract Product: Checkbox
interface Checkbox {
    String render();
}

// Concrete Product: Windows Button
class WindowsButton implements Button {
    @Override
    public String render() {
        return "Rendering Windows Button";
    }
}

// Concrete Product: Windows Checkbox
class WindowsCheckbox implements Checkbox {
    @Override
    public String render() {
        return "Rendering Windows Checkbox";
    }
}

// Concrete Product: Mac Button
class MacButton implements Button {
    @Override
    public String render() {
        return "Rendering Mac Button";
    }
}

// Concrete Product: Mac Checkbox
class MacCheckbox implements Checkbox {
    @Override
    public String render() {
        return "Rendering Mac Checkbox";
    }
}

// Abstract Factory
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// Concrete Factory: Windows Factory
class WindowsFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Concrete Factory: Mac Factory
class MacFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new MacButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new MacCheckbox();
    }
}

// Main class demonstrating Abstract Factory pattern
public class AbstractFactory {
    public static void main(String[] args) {
        // Using Windows Factory
        GUIFactory windowsFactory = new WindowsFactory();
        Button windowsButton = windowsFactory.createButton();
        Checkbox windowsCheckbox = windowsFactory.createCheckbox();
        System.out.println(windowsButton.render());
        System.out.println(windowsCheckbox.render());

        System.out.println();

        // Using Mac Factory
        GUIFactory macFactory = new MacFactory();
        Button macButton = macFactory.createButton();
        Checkbox macCheckbox = macFactory.createCheckbox();
        System.out.println(macButton.render());
        System.out.println(macCheckbox.render());
    }
}
