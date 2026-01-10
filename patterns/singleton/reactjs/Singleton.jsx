import React from 'react';

// Singleton class
class Database {
  static instance = null;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = 'Database connection established';
    Database.instance = this;
  }

  query(query) {
    return `Executing query: ${query} on ${this.connection}`;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Component
const SingletonExample = () => {
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();

  const result1 = db1.query('SELECT * FROM users');
  const result2 = db2.query('SELECT * FROM products');
  const isSameInstance = db1 === db2;

  return (
    <div className="singleton-example">
      <h2>Singleton Pattern</h2>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>
        <strong>Same instance:</strong> {isSameInstance ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default SingletonExample;
