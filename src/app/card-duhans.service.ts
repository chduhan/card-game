import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDuhansService {

  constructor() { }
  duhansChanges(cardId: any, degrees: number): void {
    const card = document.getElementById(cardId);
    if (card) {
      card.style.transform = `rotate(${degrees}deg)`;
      card.style.transitionDuration = '3s';
    } else {
      console.error(`Card with ID '${cardId}' not found.`);
    }
  }
}
