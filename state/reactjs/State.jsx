import React, { useState } from 'react';

// Concrete States
class DraftState {
  publish(doc) {
    return 'Cannot publish from Draft. Please review first.';
  }

  review(doc) {
    doc.setState(new ReviewState());
    return 'Document moved to Review state';
  }
}

class ReviewState {
  publish(doc) {
    doc.setState(new PublishedState());
    return 'Document published successfully';
  }

  review(doc) {
    return 'Document is already in Review state';
  }
}

class PublishedState {
  publish(doc) {
    return 'Document is already published';
  }

  review(doc) {
    return 'Cannot review a published document';
  }
}

// Context
class Document {
  constructor(name) {
    this.name = name;
    this.state = new DraftState();
  }

  setState(state) {
    this.state = state;
  }

  publish() {
    return this.state.publish(this);
  }

  review() {
    return this.state.review(this);
  }
}

// Component
const StateExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const doc = new Document('Design Patterns Guide');
    const results = [];

    results.push('Initial state: Draft');
    results.push(doc.publish());
    results.push(doc.review());
    results.push(doc.publish());

    setOutput(results);
  };

  return (
    <div className="state-example">
      <h2>State Pattern</h2>
      <p>Document workflow with draft, review, and published states</p>
      <button onClick={runExample}>Test Workflow</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default StateExample;
