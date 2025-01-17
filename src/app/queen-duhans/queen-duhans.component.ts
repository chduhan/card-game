import { Component } from '@angular/core';
import { CardDuhansService } from '../card-duhans.service';

@Component({
  selector: 'app-queen-duhans',
  templateUrl: './queen-duhans.component.html',
  styleUrl: './queen-duhans.component.css'
})
export class QueenDuhansComponent {
  duhansTitle: string = "Queen of Hearts";
  duhansSuit: string = "hearts";
  duhansImage: string = "queen.png";
  duhansDegree: number = 240;
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
