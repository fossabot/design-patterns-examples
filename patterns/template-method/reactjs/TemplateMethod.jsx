import React, { useState } from 'react';

// Abstract class (template)
class Beverage {
  prepareRecipe() {
    const results = [];
    results.push('Boiling water');
    results.push(this.brew());
    results.push('Pouring into cup');
    results.push(this.addCondiments());
    return results;
  }

  brew() {
    throw new Error('Must be implemented by subclass');
  }

  addCondiments() {
    throw new Error('Must be implemented by subclass');
  }
}

// Concrete implementations
class Tea extends Beverage {
  brew() {
    return 'Steeping the tea';
  }

  addCondiments() {
    return 'Adding lemon';
  }
}

class Coffee extends Beverage {
  brew() {
    return 'Dripping coffee through filter';
  }

  addCondiments() {
    return 'Adding sugar and milk';
  }
}

// Component
const TemplateMethodExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const results = [];
    
    results.push('Making tea:');
    const tea = new Tea();
    tea.prepareRecipe().forEach(step => results.push(`- ${step}`));
    
    results.push('');
    results.push('Making coffee:');
    const coffee = new Coffee();
    coffee.prepareRecipe().forEach(step => results.push(`- ${step}`));

    setOutput(results.filter(r => r !== ''));
  };

  return (
    <div className="template-method-example">
      <h2>Template Method Pattern</h2>
      <p>Beverage preparation (Tea, Coffee) with common steps</p>
      <button onClick={runExample}>Prepare Beverages</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default TemplateMethodExample;
