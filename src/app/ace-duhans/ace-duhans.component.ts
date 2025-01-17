import { Component } from '@angular/core';
import { CardDuhansService } from '../card-duhans.service';
@Component({
  selector: 'app-ace-duhans',
  templateUrl: './ace-duhans.component.html',
  styleUrl: './ace-duhans.component.css'
})
export class AceDuhansComponent {
  duhansTitle: string = "Ace of Spades";
  duhansSuit: string = "spades";
  duhansImage: string = "ace.png";
  duhansDegree: number = 60;
  duhansZero: number = 0;

  constructor(private cardDuhans: CardDuhansService){

  }
  duhansChanges(cardId: any, degrees: number): void {
    this.cardDuhans.duhansChanges(cardId, degrees);
  }
  duhansRotate(imageId: any, degrees: number): void {
    this.cardDuhans.duhansChanges(imageId, degrees);  
  }
}
