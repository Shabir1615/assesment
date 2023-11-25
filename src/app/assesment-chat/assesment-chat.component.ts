import { Component } from '@angular/core';

@Component({
  selector: 'app-assesment-chat',
  templateUrl: './assesment-chat.component.html',
  styleUrls: ['./assesment-chat.component.scss']
})
export class AssesmentChatComponent   {

  personAMessages:any[] = [];
  personBMessages:any[] = [];
  personASenderText: string = '';
  personBSenderText: string = '';
  messages:any=[]

  constructor() { }

  sendMessage(sender: string): void {
    if (sender === 'Person A' && this.personASenderText.trim() !== '') {
      const message:any = {
        sender: 'Person A',
        content: this.personASenderText.trim()
      };
      this.personAMessages.push(message);
      this.messages.push({ sender: 'Person A',
      content: this.personASenderText.trim()})
      this.personASenderText = '';
    } else if (sender === 'Person B' && this.personBSenderText.trim() !== '') {
      const message:any = {
        sender: 'Person B',
        content: this.personBSenderText.trim()
      };
      this.personBMessages.push(message);
      this.messages.push({ sender: 'Person B',
      content: this.personBSenderText.trim()})
      this.personBSenderText = '';
    }
    
  }


}
