import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level1Support, Level2Support, Level3Support } from './support-handler';

@Component({
  selector: 'app-chain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent {
  supportChain: Level1Support;
  results: string[] = [];

  constructor() {
    this.supportChain = new Level1Support();
    const level2 = new Level2Support();
    const level3 = new Level3Support();
    
    this.supportChain.setNext(level2).setNext(level3);
  }

  submitIssue(level: number, issue: string): void {
    const result = this.supportChain.handle(level, issue);
    this.results.push(result);
  }
}
