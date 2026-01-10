// Abstract class (template)
abstract class Beverage {
  prepareRecipe(): string[] {
    const results: string[] = [];
    results.push('Boiling water');
    results.push(this.brew());
    results.push('Pouring into cup');
    results.push(this.addCondiments());
    return results;
  }

  abstract brew(): string;
  abstract addCondiments(): string;
}

// Concrete implementations
class Tea extends Beverage {
  brew(): string {
    return 'Steeping the tea';
  }

  addCondiments(): string {
    return 'Adding lemon';
  }
}

class Coffee extends Beverage {
  brew(): string {
    return 'Dripping coffee through filter';
  }

  addCondiments(): string {
    return 'Adding sugar and milk';
  }
}

// Usage
console.log('Making tea:');
const tea = new Tea();
tea.prepareRecipe().forEach(step => console.log(`- ${step}`));

console.log('\nMaking coffee:');
const coffee = new Coffee();
coffee.prepareRecipe().forEach(step => console.log(`- ${step}`));
