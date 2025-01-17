import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceDuhansComponent } from './ace-duhans.component';

describe('AceDuhansComponent', () => {
  let component: AceDuhansComponent;
  let fixture: ComponentFixture<AceDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AceDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AceDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
