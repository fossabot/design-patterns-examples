import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Document, DocumentRegistry } from './document-prototype';

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent {
  registry: DocumentRegistry;
  clonedDocuments: Document[] = [];
  customTitle = '';
  customContent = '';
  customAuthor = '';

  constructor() {
    this.registry = new DocumentRegistry();
    
    // Register prototype documents
    this.registry.registerDocument(
      'report',
      new Document('Report Template', 'Default report content', 'System')
    );
    this.registry.registerDocument(
      'letter',
      new Document('Letter Template', 'Dear Sir/Madam...', 'System')
    );
  }

  cloneReport(): void {
    const doc = this.registry.getDocument('report');
    if (doc) {
      this.clonedDocuments.push(doc);
    }
  }

  cloneLetter(): void {
    const doc = this.registry.getDocument('letter');
    if (doc) {
      this.clonedDocuments.push(doc);
    }
  }

  createCustomDocument(): void {
    if (this.customTitle && this.customContent && this.customAuthor) {
      const doc = new Document(this.customTitle, this.customContent, this.customAuthor);
      this.clonedDocuments.push(doc);
      this.customTitle = '';
      this.customContent = '';
      this.customAuthor = '';
    }
  }
}
