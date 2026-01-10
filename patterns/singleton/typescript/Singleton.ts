// Singleton class
class Database {
  private static instance: Database | null = null;
  private connection: string;

  private constructor() {
    this.connection = 'Database connection established';
    console.log('Creating database instance');
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(query: string): string {
    return `Executing query: ${query} on ${this.connection}`;
  }
}

// Usage
const db1 = Database.getInstance();
console.log(db1.query('SELECT * FROM users'));

const db2 = Database.getInstance();
console.log(db2.query('SELECT * FROM products'));

// Verify both are the same instance
console.log('db1 and db2 are the same instance:', db1 === db2);
