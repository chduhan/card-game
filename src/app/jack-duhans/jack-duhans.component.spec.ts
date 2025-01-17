import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackDuhansComponent } from './jack-duhans.component';

describe('JackDuhansComponent', () => {
  let component: JackDuhansComponent;
  let fixture: ComponentFixture<JackDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JackDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
