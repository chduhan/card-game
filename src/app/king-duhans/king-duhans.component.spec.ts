import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDuhansComponent } from './king-duhans.component';

describe('KingDuhansComponent', () => {
  let component: KingDuhansComponent;
  let fixture: ComponentFixture<KingDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
