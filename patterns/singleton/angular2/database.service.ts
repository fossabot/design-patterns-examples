import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private static instance: DatabaseService;
  private static instanceCount = 0;
  private connection: string;

  constructor() {
    // Singleton pattern: ensure only one instance is created
    if (DatabaseService.instance) {
      return DatabaseService.instance;
    }
    
    this.connection = 'Database connection established';
    DatabaseService.instanceCount++;
    DatabaseService.instance = this;
  }

  getConnection(): string {
    return this.connection;
  }

  query(queryText: string): string {
    return `Executing query: "${queryText}" on ${this.connection}`;
  }

  static getInstanceCount(): number {
    return DatabaseService.instanceCount;
  }
}
