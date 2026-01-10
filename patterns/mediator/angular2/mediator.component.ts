import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatRoom, User } from './chat-mediator';

@Component({
  selector: 'app-mediator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent {
  chatRoom: ChatRoom;
  users: User[];
  messages: string[] = [];
  messageText = '';

  constructor() {
    this.chatRoom = new ChatRoom();
    const user1 = new User('Alice', this.chatRoom);
    const user2 = new User('Bob', this.chatRoom);
    const user3 = new User('Charlie', this.chatRoom);
    
    this.chatRoom.addUser(user1);
    this.chatRoom.addUser(user2);
    this.chatRoom.addUser(user3);
    
    this.users = [user1, user2, user3];
  }

  sendMessage(userIndex: number): void {
    if (this.messageText) {
      const results = this.chatRoom.sendMessage(this.messageText, this.users[userIndex]);
      this.messages.push(...results);
      this.messageText = '';
    }
  }
}
