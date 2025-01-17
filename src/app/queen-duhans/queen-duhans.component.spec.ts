import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenDuhansComponent } from './queen-duhans.component';

describe('QueenDuhansComponent', () => {
  let component: QueenDuhansComponent;
  let fixture: ComponentFixture<QueenDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueenDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueenDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
