import React, { useState } from 'react';

// Memento
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Originator
class TextEditor {
  constructor() {
    this.content = '';
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  save() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getContent();
  }
}

// Caretaker
class History {
  constructor() {
    this.mementos = [];
  }

  push(memento) {
    this.mementos.push(memento);
  }

  pop() {
    return this.mementos.pop();
  }
}

// Component
const MementoExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const editor = new TextEditor();
    const history = new History();
    const results = [];

    editor.setContent('Version 1');
    history.push(editor.save());
    results.push(`Current: ${editor.getContent()}`);

    editor.setContent('Version 2');
    history.push(editor.save());
    results.push(`Current: ${editor.getContent()}`);

    editor.setContent('Version 3');
    results.push(`Current: ${editor.getContent()}`);

    editor.restore(history.pop());
    results.push(`After undo: ${editor.getContent()}`);

    editor.restore(history.pop());
    results.push(`After undo: ${editor.getContent()}`);

    setOutput(results);
  };

  return (
    <div className="memento-example">
      <h2>Memento Pattern</h2>
      <p>Text editor with undo/redo functionality</p>
      <button onClick={runExample}>Test Undo</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default MementoExample;
