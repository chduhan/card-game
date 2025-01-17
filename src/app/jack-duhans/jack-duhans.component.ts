import { Component } from '@angular/core';
import { CardDuhansService } from '../card-duhans.service';

@Component({
  selector: 'app-jack-duhans',
  templateUrl: './jack-duhans.component.html',
  styleUrl: './jack-duhans.component.css'
})
export class JackDuhansComponent {
  duhansTitle: string = "Jack of Clubs";
  duhansSuit: string = "clubs";
  duhansImage: string = "jack.png";
  duhansDegree: number = 280;
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
