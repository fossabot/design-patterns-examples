import React, { useState } from 'react';

// Real Subject
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading image from disk: ${this.filename}`);
    return `Loading image from disk: ${this.filename}`;
  }

  display() {
    return `Displaying image: ${this.filename}`;
  }
}

// Proxy
class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
    this.loadLog = [];
  }

  display() {
    if (!this.realImage) {
      this.loadLog.push(`Loading image from disk: ${this.filename}`);
      this.realImage = new RealImage(this.filename);
    }
    return `Displaying image: ${this.filename}`;
  }

  getLoadLog() {
    return this.loadLog;
  }
}

// Component
const ProxyExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const results = [];
    const image1 = new ProxyImage('photo1.jpg');
    const image2 = new ProxyImage('photo2.jpg');

    results.push('First display call:');
    results.push(...image1.getLoadLog());
    results.push(image1.display());
    
    results.push('');
    results.push('Second display call (cached):');
    results.push(image1.display());
    
    results.push('');
    results.push('Display another image:');
    results.push(...image2.getLoadLog());
    results.push(image2.display());

    setOutput(results.filter(r => r !== ''));
  };

  return (
    <div className="proxy-example">
      <h2>Proxy Pattern</h2>
      <p>Image proxy that lazy-loads images</p>
      <button onClick={runExample}>Run Example</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ProxyExample;
