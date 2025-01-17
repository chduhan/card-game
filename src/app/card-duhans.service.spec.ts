import { TestBed } from '@angular/core/testing';

import { CardDuhansService } from './card-duhans.service';

describe('CardDuhansService', () => {
  let service: CardDuhansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDuhansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
