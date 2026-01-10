// Abstract Products
interface Button {
  render(): string;
}

interface Checkbox {
  render(): string;
}

// Concrete Products - Windows
class WindowsButton implements Button {
  render(): string {
    return "Rendering Windows Button";
  }
}

class WindowsCheckbox implements Checkbox {
  render(): string {
    return "Rendering Windows Checkbox";
  }
}

// Concrete Products - Mac
class MacButton implements Button {
  render(): string {
    return "Rendering Mac Button";
  }
}

class MacCheckbox implements Checkbox {
  render(): string {
    return "Rendering Mac Checkbox";
  }
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory - Windows
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Concrete Factory - Mac
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Usage
let factory: GUIFactory = new WindowsFactory();
let button = factory.createButton();
let checkbox = factory.createCheckbox();
console.log(button.render());
console.log(checkbox.render());

factory = new MacFactory();
button = factory.createButton();
checkbox = factory.createCheckbox();
console.log(button.render());
console.log(checkbox.render());
