import React from 'react';

// Abstract Product Components
const WindowsButton = () => (
  <button className="windows-button">Windows Button</button>
);

const WindowsCheckbox = () => (
  <input type="checkbox" className="windows-checkbox" />
);

const MacButton = () => (
  <button className="mac-button">Mac Button</button>
);

const MacCheckbox = () => (
  <input type="checkbox" className="mac-checkbox" />
);

// Abstract Factory
class GUIFactory {
  createButton() {
    throw new Error('createButton must be implemented');
  }

  createCheckbox() {
    throw new Error('createCheckbox must be implemented');
  }
}

// Concrete Factories
class WindowsFactory extends GUIFactory {
  createButton() {
    return <WindowsButton />;
  }

  createCheckbox() {
    return <WindowsCheckbox />;
  }
}

class MacFactory extends GUIFactory {
  createButton() {
    return <MacButton />;
  }

  createCheckbox() {
    return <MacCheckbox />;
  }
}

// Main Component
const AbstractFactoryExample = ({ os }) => {
  const factory = os === 'windows' ? new WindowsFactory() : new MacFactory();

  return (
    <div className="abstract-factory-example">
      <h2>Abstract Factory Pattern - {os}</h2>
      <div className="ui-elements">
        {factory.createButton()}
        {factory.createCheckbox()}
      </div>
    </div>
  );
};

export default AbstractFactoryExample;
