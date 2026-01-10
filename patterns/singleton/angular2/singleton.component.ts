import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-singleton',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  queryResults: string[] = [];
  queryText = '';
  instanceInfo: string;
  instanceCount: number;

  constructor(private db: DatabaseService) {
    // Get singleton instance info
    this.instanceInfo = this.db.getConnection();
    
    // In Angular, services with providedIn: 'root' are singletons by default
    // The instance count demonstrates this - it will always be 1
    this.instanceCount = DatabaseService.getInstanceCount();
  }

  executeQuery(): void {
    if (this.queryText) {
      const result = this.db.query(this.queryText);
      this.queryResults.push(result);
      this.queryText = '';
    }
  }
}
