import { Component } from '@angular/core';
import { CardDuhansService } from '../card-duhans.service';

@Component({
  selector: 'app-king-duhans',
  templateUrl: './king-duhans.component.html',
  styleUrl: './king-duhans.component.css'
})
export class KingDuhansComponent {
  duhansTitle: string = "King of Diamonds";
  duhansSuit: string = "diamonds";
  duhansImage: string = "king.png";
  duhansDegree: number = 120;
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
